// sys-support-tickets.js
// Staff Support Ticket Management - List & Reply UI
// Loaded in dashboard, calls /api/support/tickets/* endpoints

(function () {
  'use strict';
  var _bp = (typeof __CMS_BASE_PATH !== 'undefined' ? __CMS_BASE_PATH : '');

  const STAFF_LIST = ['', 'Adnan', 'Juned', 'Imran', 'Parveen', 'Review', 'Salim', 'Usman', 'Zaid'];
  const CATEGORY_LIST = ['', 'Ads', 'Audios', 'Classifieds', 'Emails', 'Forms', 'Images', 'Links', 'Menus', 'Misc', 'Articles', 'Opinions', 'PDFs', 'Polls', 'Products', 'RSS', 'Videos'];
  const STATUS_LIST = ['', 'Closed', 'Pending', 'Working', 'ForStaff', 'Enhancement', 'Closed-Final'];

  let currentPage = 1;
  let filters = {};

  // Schedule popup
  window._stShowSchedule = function () {
    var existing = document.querySelector('.st-schedule-overlay');
    if (existing) { existing.remove(); return; }
    var overlay = document.createElement('div');
    overlay.className = 'st-rate-overlay st-schedule-overlay';
    overlay.onclick = function (ev) { if (ev.target === overlay) overlay.remove(); };
    overlay.innerHTML = '<div class="st-schedule-popup">' +
      '<div class="st-rate-header">Staff Schedule' +
      '<span class="st-schedule-upload" title="Upload staff_schedule.htm" onclick="window._stUploadSchedule(event)"><i class="fas fa-upload"></i></span>' +
      '<span class="st-rate-close" onclick="this.closest(\'.st-schedule-overlay\').remove();">&times;</span>' +
      '</div>' +
      '<div class="st-schedule-body">' +
      '<input type="file" id="st-schedule-file" accept=".htm,.html,text/html" style="display:none;" onchange="window._stHandleScheduleFile(this)">' +
      '<iframe id="st-schedule-iframe" src="/staff_schedule.htm" style="width:100%;height:340px;border:none;border-radius:8px;"></iframe>' +
      '</div>' +
      '</div>';
    document.body.appendChild(overlay);
  };

  window._stUploadSchedule = function (ev) {
    if (ev) ev.stopPropagation();
    var input = document.getElementById('st-schedule-file');
    if (input) input.click();
  };

  window._stHandleScheduleFile = function (input) {
    var file = input.files && input.files[0];
    if (!file) return;
    var btn = document.querySelector('.st-schedule-upload');
    if (btn) btn.classList.add('uploading');
    var fd = new FormData();
    // Force canonical filename so it overwrites /staff_schedule.htm regardless of picked name
    fd.append('file', file, 'staff_schedule.htm');
    fetch('/api/upload-to-bucket?bucket=main', { method: 'POST', body: fd, credentials: 'include' })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, json: j }; }); })
      .then(function (res) {
        if (btn) btn.classList.remove('uploading');
        if (!res.ok || res.json.error) {
          alert('Upload failed: ' + (res.json.details || res.json.error || 'unknown error'));
          return;
        }
        var iframe = document.getElementById('st-schedule-iframe');
        if (iframe) iframe.src = '/staff_schedule.htm?t=' + Date.now();
      })
      .catch(function (err) {
        if (btn) btn.classList.remove('uploading');
        alert('Upload error: ' + err.message);
      });
    input.value = '';
  };

  // ============================================
  // New ticket notification system
  // ============================================
  var _notifyActive = false;
  var _notifySpeechInterval = null;
  var _notifyCheckTimer = null;
  var _notifySeenTickets = {};
  var _notifyBellEl = null;
  var _notifyInitialized = false;

  // AudioContext for phone ring — unlocked by "Enable Sound" button or any click
  var _audioCtx = null;

  function _unlockAndCreateAudio() {
    if (_audioCtx && _audioCtx.state === 'running') return;
    try {
      if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (_audioCtx.state === 'suspended') _audioCtx.resume();
      // Play silent buffer to fully unlock
      var buf = _audioCtx.createBuffer(1, 1, 22050);
      var src = _audioCtx.createBufferSource();
      src.buffer = buf; src.connect(_audioCtx.destination); src.start(0);
      console.log('ST-NOTIFY: audio unlocked, state:', _audioCtx.state);
    } catch (e) { console.error('ST-NOTIFY: audio unlock failed', e); }
  }

  // Sound library — each function plays a different alert using AudioContext
  var _notifySounds = {
    // 1. Classic phone ring (440+480Hz with 20Hz tremolo)
    phone: function (ctx) {
      var now = ctx.currentTime;
      [440, 480].forEach(function (freq) {
        var osc = ctx.createOscillator(), rg = ctx.createGain();
        var mod = ctx.createOscillator(), mg = ctx.createGain();
        mod.frequency.value = 20; mod.type = 'sine'; mg.gain.value = 0.4;
        mod.connect(mg); mg.connect(rg.gain);
        osc.frequency.value = freq; osc.type = 'sine'; rg.gain.value = 0.4;
        osc.connect(rg); rg.connect(ctx.destination);
        osc.start(now); mod.start(now); osc.stop(now + 1.5); mod.stop(now + 1.5);
      });
    },
    // 2. Alarm siren (alternating high-low)
    siren: function (ctx) {
      var now = ctx.currentTime;
      var osc = ctx.createOscillator(), g = ctx.createGain();
      osc.type = 'sawtooth'; g.gain.value = 0.3;
      osc.connect(g); g.connect(ctx.destination);
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.linearRampToValueAtTime(1200, now + 0.5);
      osc.frequency.linearRampToValueAtTime(800, now + 1.0);
      osc.frequency.linearRampToValueAtTime(1200, now + 1.5);
      osc.frequency.linearRampToValueAtTime(800, now + 2.0);
      osc.start(now); osc.stop(now + 2.0);
    },
    // 3. Gentle chime (two-tone C6 + E6)
    chime: function (ctx) {
      var now = ctx.currentTime;
      [{ f: 1047, s: 0, d: 0.5 }, { f: 1319, s: 0.3, d: 0.7 }].forEach(function (n) {
        var osc = ctx.createOscillator(), g = ctx.createGain();
        osc.connect(g); g.connect(ctx.destination);
        osc.frequency.value = n.f; osc.type = 'sine';
        g.gain.setValueAtTime(0.5, now + n.s);
        g.gain.exponentialRampToValueAtTime(0.001, now + n.s + n.d);
        osc.start(now + n.s); osc.stop(now + n.s + n.d);
      });
    },
    // 4. Triple beep (ascending tones)
    beeps: function (ctx) {
      var now = ctx.currentTime;
      [660, 880, 1100].forEach(function (freq, i) {
        var osc = ctx.createOscillator(), g = ctx.createGain();
        osc.connect(g); g.connect(ctx.destination);
        osc.frequency.value = freq; osc.type = 'square'; g.gain.value = 0.3;
        osc.start(now + i * 0.2); osc.stop(now + i * 0.2 + 0.15);
      });
    },
    // 5. Doorbell (ding-dong)
    doorbell: function (ctx) {
      var now = ctx.currentTime;
      [{ f: 659, s: 0 }, { f: 523, s: 0.4 }].forEach(function (n) {
        var osc = ctx.createOscillator(), g = ctx.createGain();
        osc.connect(g); g.connect(ctx.destination);
        osc.frequency.value = n.f; osc.type = 'sine';
        g.gain.setValueAtTime(0.6, now + n.s);
        g.gain.exponentialRampToValueAtTime(0.001, now + n.s + 0.8);
        osc.start(now + n.s); osc.stop(now + n.s + 0.8);
      });
    },
    // 6. Urgent alarm (fast pulsing high tone)
    urgent: function (ctx) {
      var now = ctx.currentTime;
      for (var i = 0; i < 6; i++) {
        var osc = ctx.createOscillator(), g = ctx.createGain();
        osc.connect(g); g.connect(ctx.destination);
        osc.frequency.value = 1000; osc.type = 'square'; g.gain.value = 0.4;
        osc.start(now + i * 0.25); osc.stop(now + i * 0.25 + 0.12);
      }
    }
  };

  // Current selected sound (saved in localStorage)
  var _currentSound = localStorage.getItem('st_notify_sound') || 'phone';

  function _playPhoneRing() {
    if (!_audioCtx) return;
    if (_audioCtx.state === 'suspended') _audioCtx.resume();
    try {
      var fn = _notifySounds[_currentSound] || _notifySounds.phone;
      fn(_audioCtx);
      console.log('ST-NOTIFY: sound played:', _currentSound);
    } catch (e) { console.error('ST-NOTIFY: sound error', e); }
  }

  // Test a specific sound
  window._stTestSound = function (name) {
    _unlockAndCreateAudio();
    if (!_audioCtx) return;
    if (_audioCtx.state === 'suspended') _audioCtx.resume();
    try { (_notifySounds[name] || _notifySounds.phone)(_audioCtx); } catch (e) { }
  };

  // Set the active sound
  window._stSetSound = function (name) {
    _currentSound = name;
    localStorage.setItem('st_notify_sound', name);
    window._stTestSound(name);
  };

  // Unlock audio on ANY user interaction
  function _onUserGesture() {
    _unlockAndCreateAudio();
    document.removeEventListener('click', _onUserGesture);
    document.removeEventListener('touchstart', _onUserGesture);
    document.removeEventListener('keydown', _onUserGesture);
    // Remove the enable banner if present
    var b = document.getElementById('st-permission-banner');
    if (b) b.remove();
  }
  document.addEventListener('click', _onUserGesture);
  document.addEventListener('touchstart', _onUserGesture);
  document.addEventListener('keydown', _onUserGesture);

  function startNotifyPolling() {
    _notifyBellEl = document.getElementById('st-notify-bell');
    if (!_notifyBellEl) return;

    _renderSoundPicker();
    checkForNewTickets();
    _notifyCheckTimer = setInterval(checkForNewTickets, 15000);
  }

  // Render sound picker next to bell
  function _renderSoundPicker() {
    var bellParent = _notifyBellEl ? _notifyBellEl.parentElement : null;
    if (!bellParent || document.getElementById('st-sound-picker')) return;
    var picker = document.createElement('select');
    picker.id = 'st-sound-picker';
    picker.title = 'Alert sound';
    picker.style.cssText = 'background:#334155;color:#fff;border:1px solid #475569;border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;margin-left:8px;';
    var sounds = [
      { value: 'phone', label: 'Phone Ring' },
      { value: 'siren', label: 'Alarm Siren' },
      { value: 'chime', label: 'Gentle Chime' },
      { value: 'beeps', label: 'Triple Beep' },
      { value: 'doorbell', label: 'Doorbell' },
      { value: 'urgent', label: 'Urgent Alarm' }
    ];
    for (var i = 0; i < sounds.length; i++) {
      var opt = document.createElement('option');
      opt.value = sounds[i].value; opt.textContent = sounds[i].label;
      if (sounds[i].value === _currentSound) opt.selected = true;
      picker.appendChild(opt);
    }
    picker.onchange = function () { window._stSetSound(this.value); };
    _notifyBellEl.insertAdjacentElement('afterend', picker);
  }

  async function checkForNewTickets() {
    try {
      var data = await api('GET', '/list?status=Open&page=1');
      console.log('ST-NOTIFY: poll result, tickets:', data?.tickets?.length, 'initialized:', _notifyInitialized);

      if (!data.success || !data.tickets) return;

      if (!_notifyInitialized) {
        // First load: just record current tickets, don't alert
        for (var i = 0; i < data.tickets.length; i++) {
          //_notifySeenTickets[data.tickets[i].ticket_id] = true;
          _notifySeenTickets[data.tickets[i].ticket_id] = data.tickets[i].last_update_date_server;
        }
        _notifyInitialized = true;
        console.log('ST-NOTIFY: initialized with', Object.keys(_notifySeenTickets).length, 'tickets');
        return;
      }

      // Check for new tickets not seen before
      var newTickets = [];

      for (var j = 0; j < data.tickets.length; j++) {

        var t = data.tickets[j];
        var id = t.ticket_id;
        var lastUpdate = t.last_update_date_server;

        // first time
        if (!_notifySeenTickets[id]) {
          _notifySeenTickets[id] = lastUpdate;
          newTickets.push(t);
          continue;
        }

        // 🔥 detect reply/update
        if (_notifySeenTickets[id] !== lastUpdate) {
          _notifySeenTickets[id] = lastUpdate;
          newTickets.push(t);
        }
      }

      console.log('ST-NOTIFY: new tickets found:', newTickets.length);
      if (newTickets.length > 0) {

        // 🔥 always stop previous alert first
        if (_notifyActive && typeof window._stStopNotify === 'function') {
          window._stStopNotify();
        }

        var t = newTickets
          .map(x => ({ ...x, _ts: new Date(x.last_update_date_server).getTime() }))
          .sort((a, b) => a._ts - b._ts)
          .pop();

        var answered = (t.answered_by || '').trim();

        var type = 'New ticket';
        if (answered === '') {
          type = 'New ticket';
        } else if (answered.toLowerCase() === 'system') {
          type = 'System Ticket';
        } else {
          type = 'Running Ticket';
        }

        triggerNotification(
          t.ticket_number,
          t.subject,
          type
        );


        // reload UI (keep your existing)
        var container = getContainer();
        if (container && !container.getAttribute('data-current-ticket-id')) {
          renderTicketList(container);
        }
      }
    } catch (e) { console.error('ST-NOTIFY error:', e); }
  }

  function triggerNotification(ticketNumber, subject, type) {
    console.log('ST-NOTIFY:', ticketNumber, subject, type);

    _notifyActive = true;

    if (_notifyBellEl) {
      if (_notifyBellEl.style.display !== 'inline-flex') {
        _notifyBellEl.style.display = 'inline-flex';
      }
      _notifyBellEl.classList.add('ringing');

      _notifyBellEl.title = `${type}: ${ticketNumber} - ${subject}`;
    }
    if (_notifySpeechInterval) {
      clearInterval(_notifySpeechInterval);
    }
    _playPhoneRing();
    _notifySpeechInterval = setInterval(function () {
      _playPhoneRing();
    }, 5000);
  }

  window._stStopNotify = function () {
    _notifyActive = false;
    if (_notifyBellEl) {
      _notifyBellEl.classList.remove('ringing');
      _notifyBellEl.style.display = 'none';
    }
    if (_notifySpeechInterval) { clearInterval(_notifySpeechInterval); _notifySpeechInterval = null; }
  };

  // Start polling after page loads
  setTimeout(startNotifyPolling, 3000);

  // ============================================
  // API helpers
  // ============================================
  async function api(method, path, body) {
    const opts = {
      method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(_bp + '/api/support/tickets' + path, opts);
    return res.json();
  }

  // ============================================
  // Render ticket list page
  // ============================================
  async function renderTicketList(container) {
    container.innerHTML = '<div style="text-align:center;padding:40px;">Loading tickets...</div>';

    const params = new URLSearchParams();
    if (filters.ticket) params.set('ticket', filters.ticket);
    if (filters.subject) params.set('subject', filters.subject);
    if (filters.status) params.set('status', filters.status);
    if (filters.by) params.set('by', filters.by);
    if (filters.category) params.set('category', filters.category);
    params.set('page', currentPage);
    params.set('pageSize', 15);

    const data = await api('GET', '/list?' + params.toString());
    if (!data.success) {
      container.innerHTML = '<div style="color:red;padding:20px;">Error: ' + (data.error || 'Failed to load') + '</div>';
      return;
    }

    // Stats
    const statsData = await api('GET', '/stats');

    // Render stats in top bar
    var topbarStats = document.getElementById('st-topbar-stats');
    if (topbarStats && statsData.success) {
      var statsHtml = '';
      const statOrder = ['Open', 'Working', 'Pending', 'Closed', 'Enhancement'];
      for (const s of statOrder) {
        const count = statsData.stats[s] || 0;
        if (count > 0) {
          statsHtml += '<span class="topbar-stat ' + s.toLowerCase() + '"><b>' + count + '</b> ' + s + '</span>';
        }
      }
      statsHtml += '<span class="topbar-stat"><b>' + (statsData.total || 0) + '</b> Total</span>';
      topbarStats.innerHTML = statsHtml;
    }

    // Render online staff in top bar (exclude current user, deduplicate)
    var onlineStaffEl = document.getElementById('st-online-staff');
    if (onlineStaffEl) {
      try {
        var currentUserEl = document.querySelector('.staff-name');
        var currentUser = currentUserEl ? currentUserEl.textContent.trim() : '';
        var onlineRes = await fetch(_bp + '/api/support/staff/online', { credentials: 'include' });
        var onlineData = await onlineRes.json();
        if (onlineData.success && onlineData.staff && onlineData.staff.length > 0) {
          var seen = {};
          var others = [];
          for (var i = 0; i < onlineData.staff.length; i++) {
            var name = onlineData.staff[i].display_name;
            if (name === currentUser || seen[name]) continue;
            seen[name] = true;
            others.push(name);
          }
          if (others.length > 0) {
            var onlineHtml = '<span class="topbar-online-label">Online:</span>';
            for (var j = 0; j < others.length; j++) {
              onlineHtml += '<span class="topbar-online-user"><span class="online-dot-other"></span>' + others[j] + '</span>';
            }
            onlineStaffEl.innerHTML = onlineHtml;
          }
        }
      } catch (e) { /* silent */ }
    }

    const isMobile = window.innerWidth <= 768;
    let html = '';

    // Toolbar
    html += '<div class="tickets-toolbar">';
    // Desktop toolbar (hidden on mobile via CSS)
    html += '<label>Ticket:</label><input type="text" id="fTicket" value="' + (filters.ticket || '') + '" size="12">';
    html += '<label>Subject:</label><input type="text" id="fSubject" value="' + (filters.subject || '') + '" size="12">';
    html += '<label>Status:</label><select id="fStatus">';
    for (const s of ['', 'Open', 'Working', 'Pending', 'Closed', 'Enhancement', 'Closed-Final']) {
      html += '<option' + (filters.status === s ? ' selected' : '') + '>' + s + '</option>';
    }
    html += '</select>';
    html += '<label>By:</label><select id="fBy">';
    for (const s of STAFF_LIST) {
      html += '<option' + (filters.by === s ? ' selected' : '') + '>' + s + '</option>';
    }
    html += '</select>';
    html += ' <button class="btn-search" onclick="window._stSearch()">search</button>';
    html += ' <button class="btn-clear" onclick="window._stClear()">clear</button>';
    // Mobile collapsible toolbar
    var activeCount = [filters.ticket, filters.subject, filters.status, filters.by].filter(Boolean).length;
    html += '<div class="tickets-toolbar-toggle" onclick="window._stToggleFilters(this)">';
    html += '<span><i class="fas fa-filter"></i> Filters' + (activeCount ? ' <b>(' + activeCount + ')</b>' : '') + '</span>';
    html += '<span class="toggle-arrow"><i class="fas fa-chevron-down"></i></span></div>';
    html += '<div class="tickets-toolbar-filters">';
    html += '<div class="filter-row"><label>Ticket</label><input type="text" id="fTicketM" value="' + (filters.ticket || '') + '"></div>';
    html += '<div class="filter-row"><label>Subject</label><input type="text" id="fSubjectM" value="' + (filters.subject || '') + '"></div>';
    html += '<div class="filter-row"><label>Status</label><select id="fStatusM">';
    for (const s of ['', 'Open', 'Working', 'Pending', 'Closed', 'Enhancement', 'Closed-Final']) {
      html += '<option' + (filters.status === s ? ' selected' : '') + '>' + s + '</option>';
    }
    html += '</select></div>';
    html += '<div class="filter-row"><label>By</label><select id="fByM">';
    for (const s of STAFF_LIST) {
      html += '<option' + (filters.by === s ? ' selected' : '') + '>' + s + '</option>';
    }
    html += '</select></div>';
    html += '<div class="filter-actions">';
    html += '<button class="btn-search" onclick="window._stSearchMobile()">search</button>';
    html += '<button class="btn-clear" onclick="window._stClear()">clear</button>';
    html += '</div></div>';
    html += '</div>';

    // Table
    html += '<table class="tickets-table"><thead><tr>';
    html += '<th>Ticket</th><th></th><th></th><th class="hide-mobile">Subject</th><th class="th-center">Status</th>';
    html += '<th class="hide-mobile">By</th><th>For</th><th class="th-right hide-mobile">Created</th><th class="th-right">Waiting</th>';
    html += '<th class="hide-mobile"></th><th class="hide-mobile"></th><th class="hide-mobile"></th><th class="hide-mobile"></th><th class="hide-mobile"></th>';
    html += '<th></th><th></th>';
    html += '</tr></thead><tbody>';

    if (data.tickets.length === 0) {
      html += '<tr><td colspan="17" style="text-align:center;padding:20px;">No tickets found</td></tr>';
    }

    for (const t of data.tickets) {
      const statusClass = 'status-' + (t.status_staff || '').toLowerCase().replace('-', '');
      const since = t.since ? formatDate(t.since) : '';

      // Customer rating thumbs (column after ticket#)
      var custThumb = '';
      if (t.customer_rating_thumbs === 1) custThumb = '<i class="fa fa-thumbs-up" style="color:#22c55e;"></i>';
      else if (t.customer_rating_thumbs === 2) custThumb = '<i class="fa fa-thumbs-down" style="color:#ef4444;"></i>';

      // Rating comments (exclamation icon with popup)
      var ratingCmt = '';
      if (t.rating_comments) {
        var rc = t.rating_comments.replace(/"/g, '&quot;').replace(/\n/g, '<br>');
        ratingCmt = '<span class="st-info-icon" data-info="' + rc + '"><i class="fa fa-exclamation-circle" style="color:#f59e0b;"></i></span>';
      }

      // Staff up/down comments (thumbs with popup)
      var staffUp = '';
      if (t.staff_up_comments) {
        var su = t.staff_up_comments.replace(/"/g, '&quot;').replace(/\n/g, '<br>');
        staffUp = '<span class="st-info-icon" data-info="' + su + '"><i class="fa fa-thumbs-up" style="color:#22c55e;"></i></span>';
      }
      var staffDown = '';
      if (t.staff_down_comments) {
        var sd = t.staff_down_comments.replace(/"/g, '&quot;').replace(/\n/g, '<br>');
        staffDown = '<span class="st-info-icon" data-info="' + sd + '"><i class="fa fa-thumbs-down" style="color:#ef4444;"></i></span>';
      }

      // Rating completed star
      var ratingStar = '';
      if (t.rating_completed === 1) ratingStar = '<i class="fa fa-star" style="color:#f59e0b;font-size:11px;"></i>';

      // Delayed responses (exclamation with popup)
      var delayed = '';
      if (t.delayed_responses) {
        var dr = t.delayed_responses.replace(/"/g, '&quot;').replace(/\n/g, '<br>');
        delayed = '<span class="st-info-icon" data-info="' + dr + '"><i class="fa fa-exclamation-triangle" style="color:#94a3b8;"></i></span>';
      }

      // Management ratings percentage
      var mgtPct = '';
      if (t.management_ratings_percentage != null && t.management_ratings_percentage >= 0) {
        var pctColor = t.management_ratings_percentage >= 90 ? '#22c55e' : '#ef4444';
        var mgtCmt = (t.management_ratings_comments || '').replace(/"/g, '&quot;').replace(/\n/g, '<br>');
        var mgtIcon = '';
        if (t.management_ratings === 'Up') mgtIcon = '<i class="fa fa-smile-o" style="color:#22c55e;"></i> ';
        else if (t.management_ratings === 'Down') mgtIcon = '<i class="fa fa-frown-o" style="color:#ef4444;"></i> ';
        var pctDisplay = '<i class="fa fa-exclamation-circle" style="color:' + pctColor + ';"></i>';
        if (mgtCmt) {
          mgtPct = '<span class="st-info-icon" data-info="' + mgtCmt + '" style="color:' + pctColor + ';">' + mgtIcon + pctDisplay + '</span>';
        } else {
          mgtPct = '<span style="color:' + pctColor + ';">' + mgtIcon + pctDisplay + '</span>';
        }
      }

      html += '<tr>';
      html += '<td>' + sentimentBadge(t.sentiment_latest) + '<a href="' + (t.website ? 'http://' + t.website : '#') + '" target="_blank">' + esc(t.ticket_number) + '</a></td>';
      html += '<td>' + custThumb + '</td>';
      html += '<td>' + ratingCmt + '</td>';
      html += '<td class="hide-mobile" style="min-width:200px">' + esc((t.subject || '').substring(0, 50)) + '</td>';
      html += '<td class="' + statusClass + '" style="text-align:center">' + esc(t.status_staff || '') + '</td>';
      html += '<td class="hide-mobile">' + esc(t.answered_by || '') + '</td>';
      html += '<td>' + esc(t.assigned_to || '') + '</td>';
      html += '<td class="hide-mobile" style="text-align:right">' + (t.created_ago || '') + '</td>';
      html += '<td style="text-align:right">' + (t.waiting_ago || '') + '</td>';
      html += '<td class="hide-mobile">' + staffUp + '</td>';
      html += '<td class="hide-mobile">' + staffDown + '</td>';
      html += '<td class="hide-mobile">' + ratingStar + '</td>';
      html += '<td class="hide-mobile">' + delayed + '</td>';
      html += '<td class="hide-mobile" style="text-align:right">' + mgtPct + '</td>';
      html += '<td class="col-rate"><a href="#" onclick="window._stRate(\'' + esc(t.ticket_number) + '\');return false;">rate</a></td>';
      html += '<td class="col-reply"><a href="#" onclick="window._stReply(' + t.ticket_id + ',' + t.website_id + ');return false;">reply</a></td>';
      html += '</tr>';
    }
    html += '</tbody></table>';

    // Mobile card layout
    html += '<div class="tickets-cards">';
    if (data.tickets.length === 0) {
      html += '<div class="tickets-cards-empty">No tickets found</div>';
    }
    for (const t of data.tickets) {
      const statusKey = (t.status_staff || '').toLowerCase().replace('-', '');
      const statusRaw = (t.status_staff || '').toLowerCase().replace(' ', '-');

      // Build icons HTML for detail section
      var cardIcons = '';
      if (t.customer_rating_thumbs === 1) cardIcons += '<i class="fa fa-thumbs-up" style="color:#22c55e;"></i> ';
      else if (t.customer_rating_thumbs === 2) cardIcons += '<i class="fa fa-thumbs-down" style="color:#ef4444;"></i> ';
      if (t.rating_completed === 1) cardIcons += '<i class="fa fa-star" style="color:#f59e0b;font-size:11px;"></i> ';
      if (t.staff_up_comments) cardIcons += '<i class="fa fa-thumbs-up" style="color:#22c55e;font-size:11px;"></i> ';
      if (t.staff_down_comments) cardIcons += '<i class="fa fa-thumbs-down" style="color:#ef4444;font-size:11px;"></i> ';

      html += '<div class="ticket-card">';
      html += '<div class="ticket-card-main" onclick="window._stToggleCard(this)">';
      html += '<div class="ticket-card-top">';
      html += '<span class="ticket-card-number">' + sentimentBadge(t.sentiment_latest) + '<a href="' + (t.website ? 'http://' + t.website : '#') + '" target="_blank" onclick="event.stopPropagation();">' + esc(t.ticket_number) + '</a></span>';
      html += '<span class="ticket-card-status st-' + statusRaw + '">' + esc(t.status_staff || '') + '</span>';
      html += '</div>';
      if (cardIcons) html += '<div class="ticket-card-meta"><span>' + cardIcons + '</span></div>';
      html += '</div>';

      // Expandable details
      html += '<div class="ticket-card-details">';
      html += '<div class="ticket-card-detail-row"><span class="ticket-card-detail-label">By</span><span class="ticket-card-detail-value">' + esc(t.answered_by || '-') + '</span></div>';
      html += '<div class="ticket-card-detail-row"><span class="ticket-card-detail-label">For</span><span class="ticket-card-detail-value">' + esc(t.assigned_to || '-') + '</span></div>';
      html += '<div class="ticket-card-detail-row"><span class="ticket-card-detail-label">Created</span><span class="ticket-card-detail-value">' + (t.created_ago || '-') + '</span></div>';
      if (t.rating_comments) {
        html += '<div class="ticket-card-detail-row"><span class="ticket-card-detail-label">Rating Note</span><span class="ticket-card-detail-value">' + esc(t.rating_comments.substring(0, 80)) + '</span></div>';
      }
      html += '</div>';

      // Action bar — waiting time + reply on same line
      html += '<div class="ticket-card-actions">';
      html += '<span class="ticket-card-waiting"><i class="far fa-clock"></i> ' + (t.waiting_ago || '-') + '</span>';
      html += '<a href="#" onclick="window._stReply(' + t.ticket_id + ',' + t.website_id + ');return false;"><i class="fas fa-reply"></i> Reply</a>';
      html += '</div>';
      html += '</div>';
    }
    html += '</div>';

    // Pagination
    if (data.totalPages > 1) {
      html += '<div class="tickets-pagination">';
      if (currentPage > 1) {
        html += '<a href="#" onclick="window._stPage(1);return false;">First</a> ';
        html += '<a href="#" onclick="window._stPage(' + (currentPage - 1) + ');return false;">Previous</a> ';
      }
      const start = Math.max(1, currentPage - 4);
      const end = Math.min(data.totalPages, start + 9);
      for (let i = start; i <= end; i++) {
        if (i === currentPage) {
          html += '<span class="current-page">' + i + '</span> ';
        } else {
          html += '<a href="#" onclick="window._stPage(' + i + ');return false;">' + i + '</a> ';
        }
      }
      if (currentPage < data.totalPages) {
        html += '<a href="#" onclick="window._stPage(' + (currentPage + 1) + ');return false;">Next</a> ';
        html += '<a href="#" onclick="window._stPage(' + data.totalPages + ');return false;">Last</a>';
      }
      html += '</div>';
    }

    container.innerHTML = html;
  }

  // ============================================
  // Render ticket reply/edit page
  // ============================================
  async function renderTicketReply(container, ticketId, websiteId) {
    container.innerHTML = '<div style="text-align:center;padding:40px;">Loading ticket...</div>';
    container.setAttribute('data-current-ticket-id', ticketId);
    container.setAttribute('data-current-wid', websiteId);

    const data = await api('GET', '/edit/' + ticketId + '?wid=' + websiteId);
    if (!data.success) {
      container.innerHTML = '<div style="color:red;padding:20px;">Error: ' + (data.error || 'Ticket not found') + '</div>';
      return;
    }

    const t = data.ticket;
    let html = '';

    html += '<div id="stSummaryContainer" class="st-summary-wrap">';
    html += '<button type="button" class="st-summarize-btn" onclick="window._stSummarizeThread(' + t.ticket_id + ')">' +
      '<i class="fas fa-wand-magic-sparkles"></i> Summarize this thread' +
      '</button>';
    html += '</div>';

    html += '<table class="ticket-edit-table">';
    html += '<tr class="header-row"><td colspan="2"><b>Tickets</b></td></tr>';

    // Sentiment banner (only for angry/at_risk)
    const sentiment = (t.sentiment_latest || '').toLowerCase();
    if (sentiment === 'angry' || sentiment === 'at_risk') {
      const label = sentiment === 'at_risk' ? 'AT RISK' : 'ANGRY';
      const icon = sentiment === 'at_risk' ? '🚨' : '😠';
      const reason = t.sentiment_reason ? ' — ' + esc(t.sentiment_reason) : '';
      html += '<tr class="field-row"><td colspan="2">' +
        '<div class="st-sent-banner st-sent-banner-' + sentiment + '">' +
        icon + ' <b>' + label + '</b>: handle with care' + reason +
        '</div>' +
        '</td></tr>';
    }

    // Deflection history (customer reviewed KB entries before submitting)
    if (t.deflection_viewed_knowledge_ids) {
      const defIds = String(t.deflection_viewed_knowledge_ids)
        .split(',').map(s => s.trim()).filter(Boolean);
      if (defIds.length) {
        const links = defIds.map(id =>
          '<a href="/support_tickets_ai_knowledge/edit/' + encodeURIComponent(id) + '" target="_blank">#' + esc(id) + '</a>'
        ).join(', ');
        html += '<tr class="field-row"><td colspan="2">' +
          '<div class="st-deflect-note">' +
          '<i class="fas fa-info-circle"></i> Customer reviewed these KB entries before submitting: ' + links +
          '</div>' +
          '</td></tr>';
      }
    }

    // Ticket number
    html += '<tr class="field-row"><td class="field-label">Ticket</td>';
    html += '<td>' + esc(t.ticket_number) + '</td></tr>';

    // Subject
    html += '<tr class="field-row"><td class="field-label">Subject</td>';
    html += '<td><b>' + esc(t.subject) + '</b></td></tr>';

    // Message to Customer
    html += '<tr class="field-row"><td class="field-label">Message to Customer</td>';
    html += '<td><textarea id="stMessage" rows="8" cols="75"></textarea>';
    html += '<div id="aiCitedSources" style="display:none; margin-top:6px; font-size:12px; color:#666;"></div>';
    html += '<div class="ai-rewrite-section">';
    html += '<select id="stRewriteStyle"><option>Concise</option><option>Professional</option><option>Friendly</option></select>';
    html += '<button class="ai-rewrite-btn" onclick="window._stRewrite()"><i class="fas fa-pen-fancy"></i> Rewrite</button>';
    html += '<button type="button" id="aiSuggestDraftBtn" onclick="window._stSuggestDraft()"><i class="fas fa-magic"></i> Suggest Draft</button>';
    html += '</div></td></tr>';

    // Reminder
    html += '<tr class="field-row"><td class="field-label">Reminder</td>';
    html += '<td><input type="number" id="stReminder" value="' + (t.reminder || 5) + '" min="1" max="15"></td></tr>';

    // Ticket Status
    html += '<tr class="field-row"><td class="field-label">Ticket Status</td>';
    html += '<td><select id="stStatus" onchange="window._stStatusChange()">';
    for (const s of STATUS_LIST) {
      html += '<option>' + s + '</option>';
    }
    html += '</select></td></tr>';

    // Staff section (hidden by default, shown when status selected)
    html += '<tr class="field-row" id="stStaffRow" style="display:none;">';
    html += '<td class="field-label">Choose Staff<br><br><br>Message to Staff</td>';
    html += '<td><select id="stStaffLOV">';
    for (const s of STAFF_LIST) {
      html += '<option>' + s + '</option>';
    }
    html += '</select><br><br>';
    html += '<textarea id="stStaffResponse" rows="6" cols="70" style="background-color:white;"></textarea></td></tr>';

    // Previous Messages (show all responses)
    html += '<tr class="field-row"><td class="field-label">Previous Messages</td>';
    html += '<td class="staff-archive">' + formatArchiveAsBubbles(t.message_archive_staff) + '</td></tr>';

    html += '</table>';

    container.innerHTML = html;

    // Bottom action bar — appended to body so it's not trapped in any overflow container
    var existingBar = document.getElementById('st-action-bar');
    if (existingBar) existingBar.remove();
    var bar = document.createElement('div');
    bar.id = 'st-action-bar';
    bar.className = 'ticket-action-bar';
    bar.innerHTML = '<div class="ticket-action-bar-bg"></div>' +
      '<div class="ticket-action-bar-content">' +
      '<button class="ticket-btn" id="stSubmitBtn" onclick="window._stSubmitReply(' + ticketId + ',' + websiteId + ')">submit</button>' +
      '<button class="ticket-btn ticket-btn-cancel" onclick="window._stBackToList()">cancel</button>' +
      '</div>';
    document.body.appendChild(bar);
  }

  // ============================================
  // Submit reply
  // ============================================
  async function submitReply(ticketId, websiteId) {
    const status = document.getElementById('stStatus').value;
    const message = document.getElementById('stMessage').value;
    const staffResponse = document.getElementById('stStaffResponse')?.value || '';
    const staffLOV = document.getElementById('stStaffLOV')?.value || '';
    const reminder = document.getElementById('stReminder')?.value || '5';

    if (!status) {
      showMsg("'Status' is required", 'error');
      document.getElementById('stStatus').focus();
      return;
    }
    if ((status === 'Pending' || status === 'Working') && !message) {
      showMsg("'Customer Message' is required", 'error');
      document.getElementById('stMessage').focus();
      return;
    }
    if (status === 'ForStaff' && !staffResponse) {
      showMsg("'Staff Message' is required", 'error');
      document.getElementById('stStaffResponse').focus();
      return;
    }

    const btn = document.getElementById('stSubmitBtn');
    btn.disabled = true;
    btn.textContent = '   wait ....   ';

    const staffUser = window._staffUser || {};
    const data = await api('POST', '/post/' + ticketId, {
      wid: websiteId,
      status,
      message,
      staffResponse,
      staffLOV,
      reminder: parseInt(reminder),
      displayName: staffUser.display_name || ''
    });

    if (data.success) {
      window._stBackToList();
    } else {
      showMsg('Error: ' + (data.error || 'Failed to submit'), 'error');
      btn.disabled = false;
      btn.textContent = '   submit   ';
    }
  }

  // ============================================
  // AI Rewrite
  // ============================================
  async function rewriteMessage() {
    const textarea = document.getElementById('stMessage');
    const text = textarea.value;
    if (!text) {
      showMsg('Please enter a message first', 'error');
      textarea.focus();
      return;
    }

    const style = document.getElementById('stRewriteStyle').value;
    const btn = document.querySelector('.ai-rewrite-btn');
    const origText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Rewriting...';
    btn.disabled = true;

    const data = await api('POST', '/ai-rewrite', { text, style });

    if (data.success && data.rewritten) {
      textarea.value = data.rewritten;
    } else {
      showMsg('AI rewrite failed: ' + (data.error || 'Unknown error'), 'error');
    }

    btn.innerHTML = origText;
    btn.disabled = false;
  }

  // ============================================
  // Styled message popup (replaces alert())
  // ============================================
  function showMsg(msg, type) {
    var existing = document.querySelector('.st-msg-overlay');
    if (existing) existing.remove();
    var isError = type === 'error';
    var ov = document.createElement('div');
    ov.className = 'st-msg-overlay';
    ov.onclick = function (ev) { if (ev.target === ov) ov.remove(); };
    ov.innerHTML = '<div class="st-msg-box' + (isError ? ' st-msg-error' : '') + '">' +
      '<div class="st-msg-icon">' + (isError ? '<i class="fa-solid fa-circle-exclamation"></i>' : '<i class="fa-solid fa-circle-check"></i>') + '</div>' +
      '<div class="st-msg-text">' + msg + '</div>' +
      '<button class="st-msg-ok" onclick="this.closest(\'.st-msg-overlay\').remove();">OK</button>' +
      '</div>';
    document.body.appendChild(ov);
  }

  // ============================================
  // Status change handler
  // ============================================
  function statusChange() {
    const status = document.getElementById('stStatus').value;
    const staffRow = document.getElementById('stStaffRow');
    const messageEl = document.getElementById('stMessage');

    if (!status) {
      staffRow.style.display = 'none';
      messageEl.value = '';
      return;
    }

    staffRow.style.display = '';

    if (status === 'Enhancement') {
      messageEl.value = "Hi,\n\nThank you for your suggestions. We have submitted your suggestions to our development group for further review. We will do our best to accommodate your suggestions in the future upgrades. The development team would expedite the suggestions if that appeals to wider audience. Please note that we will not be able to provide you any time frame and commitment on suggestions. \n\nWe have flagged this ticket to Enhancement and there is no need to reply to it. \n\nThank you.";
      messageEl.disabled = false;
    } else if (status === 'ForStaff') {
      messageEl.value = '';
      messageEl.disabled = true;
    } else {
      messageEl.disabled = false;
    }
  }

  // ============================================
  // Helpers
  // ============================================
  // Split the staff archive into individual responses (newest-first).
  // Each entry in the returned array is "header<HR>body" — i.e. a single
  // internal HR between metadata and message content.
  function splitArchiveResponses(archiveHTML) {
    if (!archiveHTML) return [];
    var parts = archiveHTML.split(/<hr\s*\/?>/i);
    var responses = [];
    var current = '';
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].trim();
      if (!p) continue;
      if (p.match(/^(<!--StartRID|From:)/i) && current) {
        responses.push(current);
        current = '';
      }
      current += (current ? '<HR>' : '') + p;
    }
    if (current) responses.push(current);
    return responses;
  }

  // Render the staff archive as styled bubbles (matches the customer
  // my_tickets view). Splits each response on the first HR to separate
  // the metadata header from the message body. Shows every response.
  function formatArchiveAsBubbles(archiveHTML) {
    if (!archiveHTML) return '<i>No messages yet</i>';
    var responses = splitArchiveResponses(archiveHTML);
    if (responses.length === 0) return archiveHTML;
    return responses.map(function (resp) {
      var idx = resp.search(/<hr\s*\/?>/i);
      var header = idx >= 0 ? resp.substring(0, idx) : resp;
      var body = idx >= 0 ? resp.substring(idx).replace(/^<hr\s*\/?>/i, '') : '';
      var isCustomer = /From:\s*<b>\s*Customer/i.test(header);
      var cls = 'st-archive-bubble' + (isCustomer ? ' st-archive-bubble--customer' : '');
      return '<div class="' + cls + '">' +
        '<div class="st-archive-header">' + header + '</div>' +
        (body ? '<div class="st-archive-body">' + body + '</div>' : '') +
        '</div>';
    }).join('');
  }

  function truncateArchive(archiveHTML, maxEntries) {
    if (!archiveHTML) return '<i>No messages yet</i>';
    // Split by <HR> (case-insensitive) to get individual entries
    var parts = archiveHTML.split(/<hr\s*\/?>/i);
    if (parts.length <= 1) return archiveHTML;
    // Each response = 2 parts (header + content) separated by <HR>
    // Count "From:" occurrences to find response boundaries
    var responses = [];
    var current = '';
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].trim();
      if (!p) continue;
      if (p.match(/^(<!--StartRID|From:)/i) && current) {
        responses.push(current);
        current = '';
      }
      current += (current ? '<HR>' : '') + p;
    }
    if (current) responses.push(current);
    // Show only latest N (they're already newest-first)
    var shown = responses.slice(0, maxEntries);
    var result = '<HR>' + shown.join('<HR>');
    if (responses.length > maxEntries) {
      result += '<HR><div style="text-align:center;padding:8px;color:#94a3b8;font-size:12px;font-style:italic;">... ' + (responses.length - maxEntries) + ' older message(s) hidden ...</div>';
    }
    return result;
  }

  function esc(str) {
    if (!str) return '';
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function sentimentBadge(s) {
    switch ((s || '').toLowerCase()) {
      case 'at_risk': return '<span class="st-sent st-sent-atrisk" title="At risk">🚨</span>';
      case 'angry': return '<span class="st-sent st-sent-angry" title="Angry">😠</span>';
      case 'frustrated': return '<span class="st-sent st-sent-frust" title="Frustrated">😕</span>';
      default: return '';
    }
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      return String(d.getDate()).padStart(2, '0') + '.' + months[d.getMonth()] + '.' + String(d.getFullYear()).slice(2);
    } catch (e) { return ''; }
  }

  // ============================================
  // Click handlers for rating stars and delete buttons
  // ============================================
  document.addEventListener('click', function (e) {
    // Star rating click
    var star = e.target.closest('.st-rating-star');
    if (star) {
      e.preventDefault();
      e.stopPropagation();
      var rid = star.getAttribute('data-rid');
      var tnum = star.getAttribute('data-tnum');
      openStaffRatingPopup(rid, tnum);
      return;
    }

    // Rating delete click
    var del = e.target.closest('.st-rating-delete');
    if (del) {
      e.preventDefault();
      e.stopPropagation();
      var rid2 = del.getAttribute('data-rid');
      var tnum2 = del.getAttribute('data-tnum');
      showDeleteRatingConfirm(rid2, tnum2);
      return;
    }
  });

  async function openStaffRatingPopup(reportId, ticketNumber) {
    var overlay = document.createElement('div');
    overlay.className = 'st-rate-overlay';
    overlay.onclick = function (ev) { if (ev.target === overlay) overlay.remove(); };

    overlay.innerHTML = '<div class="st-rate-popup">' +
      '<div class="st-rate-header">Rate Staff Response<span class="st-rate-close" onclick="this.closest(\'.st-rate-overlay\').remove();">&times;</span></div>' +
      '<div class="st-rate-body">' +
      '<div class="st-rate-field"><label>Rating</label><select id="stStaffRateValue"><option></option><option value="ThumbsUp">ThumbsUp</option><option value="ThumbsDown">ThumbsDown</option><option value="NoRating">NoRating</option></select></div>' +
      '<div class="st-rate-field"><label>Comments</label><textarea id="stStaffRateComments" rows="3"></textarea></div>' +
      '</div>' +
      '<div class="st-rate-footer"><button class="st-rate-submit" id="stStaffRateSubmit">submit</button><button class="st-rate-cancel" onclick="this.closest(\'.st-rate-overlay\').remove();">cancel</button></div>' +
      '</div>';

    document.body.appendChild(overlay);

    document.getElementById('stStaffRateSubmit').onclick = async function () {
      var btn = this;
      var ratingVal = document.getElementById('stStaffRateValue').value;
      if (!ratingVal) { showMsg("'Rating' is required", 'error'); return; }
      btn.disabled = true; btn.textContent = 'wait...';
      var result = await api('POST', '/staff-rating', {
        reportId: reportId,
        ticketNumber: ticketNumber,
        rating: ratingVal,
        comments: document.getElementById('stStaffRateComments').value
      });
      if (result.success) {
        overlay.remove();
        // Reload the reply page to show updated icons
        var container = getContainer();
        var currentTicketId = container.getAttribute('data-current-ticket-id');
        var currentWid = container.getAttribute('data-current-wid');
        if (currentTicketId && currentWid) {
          renderTicketReply(container, parseInt(currentTicketId), parseInt(currentWid));
        }
      } else {
        showMsg(result.error || 'Failed', 'error');
        btn.disabled = false; btn.textContent = 'submit';
      }
    };
  }

  function showDeleteRatingConfirm(reportId, ticketNumber) {
    var overlay = document.createElement('div');
    overlay.className = 'st-rate-overlay';
    overlay.onclick = function (ev) { if (ev.target === overlay) overlay.remove(); };

    overlay.innerHTML = '<div class="st-rate-popup">' +
      '<div class="st-rate-header">Delete Rating<span class="st-rate-close" onclick="this.closest(\'.st-rate-overlay\').remove();">&times;</span></div>' +
      '<div class="st-rate-body" style="text-align:center;padding:20px;"><p>Delete this rating?</p></div>' +
      '<div class="st-rate-footer"><button class="st-rate-submit" id="stDeleteRatingYes">delete</button><button class="st-rate-cancel" onclick="this.closest(\'.st-rate-overlay\').remove();">cancel</button></div>' +
      '</div>';

    document.body.appendChild(overlay);

    document.getElementById('stDeleteRatingYes').onclick = function () {
      overlay.remove();
      deleteStaffRating(reportId, ticketNumber);
    };
  }

  async function deleteStaffRating(reportId, ticketNumber) {
    var result = await api('POST', '/staff-rating-delete', {
      reportId: reportId,
      ticketNumber: ticketNumber
    });
    if (result.success) {
      var container = getContainer();
      var currentTicketId = container.getAttribute('data-current-ticket-id');
      var currentWid = container.getAttribute('data-current-wid');
      if (currentTicketId && currentWid) {
        renderTicketReply(container, parseInt(currentTicketId), parseInt(currentWid));
      }
    } else {
      showMsg(result.error || 'Failed', 'error');
    }
  }

  // ============================================
  // Click popup for browser/IP info (replaces tooltip)
  // ============================================
  document.addEventListener('click', function (e) {
    // Close any open popups when clicking elsewhere
    var existing = document.querySelectorAll('.st-info-popup');
    for (var i = 0; i < existing.length; i++) existing[i].remove();

    // Check if clicked on an info icon (globe or wifi)
    var target = e.target.closest('.st-info-icon');
    if (!target) return;
    e.preventDefault();
    e.stopPropagation();

    var info = target.getAttribute('data-info') || '';
    if (!info) return;

    var popup = document.createElement('div');
    popup.className = 'st-info-popup';
    popup.innerHTML = info + '<div class="st-info-close" onclick="this.parentNode.remove();">&times;</div>';

    // Position near the icon
    var rect = target.getBoundingClientRect();
    popup.style.position = 'fixed';
    popup.style.left = Math.min(rect.left, window.innerWidth - 420) + 'px';
    popup.style.top = (rect.bottom + 6) + 'px';
    popup.style.zIndex = '10000';
    document.body.appendChild(popup);
  });

  // ============================================
  // Rate popup window
  // ============================================
  async function openRatePopup(ticketNumber) {
    // Load existing rating
    var data = await api('GET', '/rating/' + encodeURIComponent(ticketNumber));
    var rating = (data.success && data.rating) || '';
    var comments = (data.success && data.comments) || '';

    // Create popup overlay
    var overlay = document.createElement('div');
    overlay.className = 'st-rate-overlay';
    overlay.onclick = function (e) { if (e.target === overlay) overlay.remove(); };

    var selUp = rating === 'Up' ? ' selected' : '';
    var selDown = rating === 'Down' ? ' selected' : '';

    overlay.innerHTML = '<div class="st-rate-popup">' +
      '<div class="st-rate-header">Rate Ticket: ' + ticketNumber + '<span class="st-rate-close" onclick="this.closest(\'.st-rate-overlay\').remove();">&times;</span></div>' +
      '<div class="st-rate-body">' +
      '<div class="st-rate-field"><label>Rating</label><select id="stRateValue"><option value="Up"' + selUp + '>Up</option><option value="Down"' + selDown + '>Down</option></select></div>' +
      '<div class="st-rate-field"><label>Comments</label><textarea id="stRateComments" rows="5">' + (comments || '') + '</textarea></div>' +
      '</div>' +
      '<div class="st-rate-footer"><button class="st-rate-submit" id="stRateSubmit">submit</button><button class="st-rate-cancel" onclick="this.closest(\'.st-rate-overlay\').remove();">cancel</button></div>' +
      '</div>';

    document.body.appendChild(overlay);

    document.getElementById('stRateSubmit').onclick = async function () {
      var btn = this;
      btn.disabled = true; btn.textContent = 'wait...';
      var result = await api('POST', '/rating/' + encodeURIComponent(ticketNumber), {
        rating: document.getElementById('stRateValue').value,
        comments: document.getElementById('stRateComments').value
      });
      if (result.success) {
        overlay.remove();
      } else {
        showMsg(result.error || 'Failed', 'error');
        btn.disabled = false; btn.textContent = 'submit';
      }
    };
  }

  // ============================================
  // Public API (attached to window)
  // ============================================
  function getContainer() {
    return document.getElementById('support-tickets-app');
  }

  window._stSearch = function () {
    filters.ticket = document.getElementById('fTicket')?.value || '';
    filters.subject = document.getElementById('fSubject')?.value || '';
    filters.status = document.getElementById('fStatus')?.value || '';
    filters.by = document.getElementById('fBy')?.value || '';
    currentPage = 1;
    renderTicketList(getContainer());
  };

  window._stSearchMobile = function () {
    filters.ticket = document.getElementById('fTicketM')?.value || '';
    filters.subject = document.getElementById('fSubjectM')?.value || '';
    filters.status = document.getElementById('fStatusM')?.value || '';
    filters.by = document.getElementById('fByM')?.value || '';
    currentPage = 1;
    renderTicketList(getContainer());
  };

  window._stToggleFilters = function (el) {
    el.classList.toggle('open');
    var panel = el.nextElementSibling;
    if (panel) panel.classList.toggle('open');
  };

  window._stToggleCard = function (el) {
    var details = el.parentElement.querySelector('.ticket-card-details');
    if (details) details.classList.toggle('open');
  };

  window._stClear = function () {
    filters = {};
    currentPage = 1;
    renderTicketList(getContainer());
  };

  window._stPage = function (page) {
    currentPage = page;
    renderTicketList(getContainer());
  };

  window._stReply = function (ticketId, websiteId) {
    renderTicketReply(getContainer(), ticketId, websiteId);
  };

  window._stBackToList = function () {
    var bar = document.getElementById('st-action-bar');
    if (bar) bar.remove();
    renderTicketList(getContainer());
  };

  window._stSubmitReply = function (ticketId, websiteId) {
    submitReply(ticketId, websiteId);
  };

  window._stRewrite = function () {
    rewriteMessage();
  };

  // AI Suggest Draft — calls LLM with ticket + KB context, fills textarea.
  window._stSuggestDraft = async function () {
    const btn = document.getElementById('aiSuggestDraftBtn');
    const textarea = document.getElementById('stMessage');
    const citedDiv = document.getElementById('aiCitedSources');
    const container = getContainer();
    const ticketId = Number(container?.getAttribute('data-current-ticket-id'));
    if (!textarea || !ticketId) {
      showMsg('Reply form not ready (missing textarea or ticket id).', 'error');
      return;
    }

    const originalLabel = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Drafting...';

    try {
      const resp = await fetch('/api/support/tickets/suggest-draft', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({ ticket_id: ticketId })
      });
      const data = await resp.json();

      if (!data.ok) {
        showMsg('Suggest Draft failed: ' + (data.error || 'unknown error'), 'error');
        return;
      }

      textarea.value = data.draft_html;
      textarea.dispatchEvent(new Event('input', { bubbles: true }));

      if (data.no_kb_match) {
        citedDiv.innerHTML = '⚠ No strong KB match. Draft generated from ticket context only. Consider promoting this resolution to the Knowledge Base after closing.';
      } else if (Array.isArray(data.cited_knowledge_ids) && data.cited_knowledge_ids.length) {
        const links = data.cited_knowledge_ids
          .map(id => '<a href="/support_tickets_ai_knowledge/edit/' + id + '" target="_blank">#' + id + '</a>')
          .join(', ');
        citedDiv.innerHTML = '📎 Based on KB entries: ' + links;
      } else {
        citedDiv.innerHTML = '';
      }
      citedDiv.style.display = citedDiv.innerHTML ? 'block' : 'none';
    } catch (err) {
      showMsg('Suggest Draft error: ' + err.message, 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = originalLabel;
    }
  };

  window._stSummarizeThread = async function (ticketId) {
    const container = document.getElementById('stSummaryContainer');
    if (!container) return;
    const btn = container.querySelector('.st-summarize-btn');
    const originalLabel = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Summarizing&hellip;'; }
    try {
      const resp = await fetch('/api/support/tickets/summarize/' + ticketId, {
        method: 'POST',
        credentials: 'include',
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      });
      const data = await resp.json();
      if (!data.ok) {
        showMsg('Summary failed: ' + (data.error || 'unknown error'), 'error');
        return;
      }
      container.innerHTML =
        '<div class="st-summary-banner">' +
        '<div class="st-summary-header"><i class="fas fa-wand-magic-sparkles"></i> AI Summary</div>' +
        '<div class="st-summary-body">' + esc(data.summary) + '</div>' +
        '<button type="button" class="st-summary-regen" onclick="window._stSummarizeThread(' + ticketId + ')">Regenerate</button>' +
        '</div>';
    } catch (err) {
      showMsg('Summary error: ' + err.message, 'error');
    } finally {
      if (btn && btn.isConnected) { btn.disabled = false; btn.innerHTML = originalLabel; }
    }
  };

  window._stRate = function (ticketNumber) {
    openRatePopup(ticketNumber);
  };

  window._stStatusChange = function () {
    statusChange();
  };

  // ============================================
  // Initialize: render ticket list on load
  // ============================================
  window.initSupportTickets = function (containerId) {
    const el = document.getElementById(containerId || 'support-tickets-app');
    if (el) renderTicketList(el);
  };

  // Auto-init if container exists
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      const el = document.getElementById('support-tickets-app');
      if (el) renderTicketList(el);
    });
  } else {
    const el = document.getElementById('support-tickets-app');
    if (el) renderTicketList(el);
  }

})();
