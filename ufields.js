// BEGIN: Live Builder(hpeditor)
$(document).ready(function() { // Editor Button
    var xlngl = 'sp'
    var xpext = '.a' + xlngl;
    var wurl_stringx = location.href;
    var wurlx = new URL(wurl_stringx);
    var wbsite = wurlx.searchParams.get("site");
    if (window.location.href.indexOf("/responsibility" + xpext) != -1) {
        $('.lb-button').html('<a class="sm-hp ld-tt" title="Manage content and styles directly on homepage." href="/hpeditor' + xpext + '?site=' + wbsite + '">Live Builder</a>');
        if (typeof Tipped !== "undefined") {
            Tipped.create('.ld-tt', {
                ajax: false,
                closeButton: false,
                showOn: 'mouseover',
                skin: 'cloud',
                fixed: true,
                target: 'mouse',
                maxWidth: 500
            });
        }
    }
    // Go back to LB form Detail page - Article
    if (window.location.href.indexOf("?hp_editor$$") != -1) {
        var lb_m_url = window.location.href.split('?hp_editor').shift().split('/').pop();
        var lb_s_url = window.location.href.split('?hp_editor$$').pop();
        var lb_b_url = 'https://' + lb_s_url + '/hpeditor' + xpext + '?lb=' + lb_m_url + '&site=' + wbsite;
        window.location.href = lb_b_url;
    }
    // Go back to LB form Detail page - Event 
    if (window.location.href.indexOf("?hp_editor__") != -1) {
        var lb_m_url = window.location.href.split('?hp_editor').shift().split('/').pop();
        var lb_s_url = window.location.href.split('?hp_editor__').pop();
        var lb_b_url = 'https://' + lb_s_url + '/hpeditor' + xpext + '?lb=' + lb_m_url + '&hp_editor_eventx_detail=' + '&site=' + wbsite;
        window.location.href = lb_b_url;
    }
});

function setIntervalLimited(callback, interval, x) {
    for (var i = 0; i < x; i++) {
        setTimeout(callback, i * interval);
    }
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function OpenBLPopup(pageUrl, window_type, fwidth, fheight) {
    $.magnificPopup.open({
        items: [{
            src: pageUrl,
            type: window_type
        }],
        gallery: { enabled: true },
        modal: true,
        iframe: { markup: '<div class="hp-x-popup">' + '<div class="mfp-iframe-scaler" ><div class="hpe-loader"></div>' + '<div class="mfp-close"></div>' + '<iframe style="visibility:hidden;opacity:0;" class="mfp-iframe hpe-iframe" frameborder="0" allowfullscreen></iframe>' + '</div></div>' }
    });
}

function confirmdelete(msg, url) { // Confirm Popup
    var lhrx = location.href;
    var lhurlx = new URL(lhrx);
    var wsite = lhurlx.searchParams.get("site");
    var wd = '_' + wsite.split('.').shift();
    jConfirm2(msg, 'Delete', function(r) {
        if (r) {
            OpenBLPopup('' + url + '', 'iframe');
            createCookie('hpe_delete2' + wd, 'Yes');
            createCookie('hpe_blank' + wd, 'Yes');
        }
    });
    return false;
}

function confirmdetail(msg, url, index) { // Confirm Popup - Detail
    var lhrx = location.href;
    var lhurlx = new URL(lhrx);
    var wsite = lhurlx.searchParams.get("site");
    var wd = '_' + wsite.split('.').shift();
    jConfirm2(msg, 'Delete', function(r) {
        if (r) {
            OpenBLPopup('' + url + '', 'iframe');
            createCookie('hpe_detail_delete2' + wd, index);
            createCookie('hpe_blank' + wd, 'Yes');
        }
    });
    return false;
}

function confirmhide(msg, url) { // Confirm Popup
    jConfirm3(msg, 'Hide', function(r) { if (r) OpenBLPopup('' + url + '', 'iframe') });
    return false;
}
$(document).ready(function() {
    $.urlParam = function(name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        return decodeURI(results[1]) || 0;
    }
    if ($(document).width() > 1024) {
        // vars
        var lx = 'list';
        var lngn = '2.a'
        var lngl = 'sp'
        var plist = lx + lngn + lngl + '?';
        var pext = '.a' + lngl;
        var fx = 'form';
        var dx = 'delete';
        var dl1 = '<center>Do you want to delete this';
        var dl2 = '?<br><br>This operation cannot be undone.</center>';
        var pfist = fx + lngn + lngl + '?';
        var pdist = dx + lngn + lngl + '?';
        if (window.location.href.indexOf("/hpeditor.") != -1) { // Live Builder Start from here
            var lhrx = location.href;
            var lhurlx = new URL(lhrx);
            var wsite = lhurlx.searchParams.get("site");
            var wd = '_' + wsite.split('.').shift();
            // push state
            if (readCookie('hpe_session_error' + wd) == 'Yes' && window.location.href.indexOf("/login") != -1) { // session error
                eraseCookie('hpe_session_error' + wd);
                alert('<p style="color:red;">Your session has expired.</p>');
            }
            // Remove unwanted cookies
            eraseCookie('hpe_poll_close' + wd);
            // Get domain      
            var dlb = 'https://' + location.href.match(/:\/\/(.[^/]+)/)[1] + '/hpeditor' + pext + '?lb=';
            var hlb = 'https://' + location.href.match(/:\/\/(.[^/]+)/)[1] + '/hpeditor' + pext + '?site=' + wsite;
            // New Tab Links
            var hpx = setInterval(function() {
                if ($('.hpx-manage-link').length) {
                    $('.hpx-manage-link, .hpx-homepage > a, .hpx-tickets > a').attr('onclick', 'return ! window.open(this.href);');
                    clearInterval(hpx);
                }
            }, 1000);
            // Home Link 
            $('.hp-homemenu-child .hp-menulink').attr('href', '/hpeditor' + pext + '?site=' + wsite);
            // Get Theme
            if (typeof SMThemeColor == 'function') {
                if (SMThemeColor() == 'Black') { $('.hpx-main').attr('data-theme', 'Black'); }
                if (SMThemeColor() == 'Blue') { $('.hpx-main').attr('data-theme', 'Blue'); }
                if (SMThemeColor() == 'Brown') { $('.hpx-main').attr('data-theme', 'Brown'); }
                if (SMThemeColor() == 'Purple') { $('.hpx-main').attr('data-theme', 'Purple'); }
                if (SMThemeColor() == 'Orange') { $('.hpx-main').attr('data-theme', 'Orange'); }
                if (SMThemeColor() == 'Olive') { $('.hpx-main').attr('data-theme', 'Olive'); }
                if (SMThemeColor() == 'Magenta') { $('.hpx-main').attr('data-theme', 'Magenta'); }
                if (SMThemeColor() == 'Green') { $('.hpx-main').attr('data-theme', 'Green'); }
                if (SMThemeColor() == 'Red') { $('.hpx-main').attr('data-theme', 'Red'); }
                if (SMThemeColor() == 'Yellow') { $('.hpx-main').attr('data-theme', 'Yellow'); }
            }
            // Get Ticket
            if (typeof MyTickets == 'function') {
                var mt = MyTickets();
                if (typeof mt !== 'undefined') {
                    $('.hpx-24x7').html('<div class=\'hpx-24x7\' data-ticket=\'' + MyTickets() + '\'><i class=\'fa fa-question-circle\' aria-hidden=\'true\'></i> 24x7 Support<bell><a title=\'View My Recent Tickets\' href=\'/' + plist + 'lid=SupportTickets&lid2=&level=0&pkeyname=&pkey=&sortflag=&wpage=&hpath=&smid=&x=&site=' + wsite + '#hpe_support\' onclick=\'return ! window.open(this.href);\'><i class=\'fa fa-bell\' aria-hidden=\'true\'></i></a></bell></div>');
                }
            }
            // LB loader
            setTimeout(function() {
                $('.hpx-loader').animate({ opacity: 1 }, 400, function() { $('.hpx-loader').css('display', 'none'); });
                $('.hpx-wrapper').css('visibility', 'visible');
                $('.hpx-wrapper').animate({ opacity: 1 }, 700);
            }, 2000);

            if (readCookie('hpe_success_delete' + wd)) { // If Deactivated Something
                var sdt = readCookie('hpe_success_delete' + wd);
                eraseCookie('hpe_success_delete' + wd);
                //alert(sdt);
            }
            if (readCookie('hpe_delete2' + wd)) { // If Deleted Something
                var sdt = 'Deleted Sucessfully';
                eraseCookie('hpe_delete2' + wd);
                //alert(sdt);
            }
            if (readCookie('hpe_detail_delete2' + wd)) { // If Deleted Something from Detail Page
                var sdt = 'Deleted Sucessfully';
                eraseCookie('hpe_detail_delete2' + wd);
                //alert(sdt);
            }
            if (typeof MParameters == 'function') { // Home menu ID
                var mp = MParameters();
            }
            if (typeof SParameters == 'function') { // Home submenu ID
                var spf = SParameters();
                var sp = 'index' + spf + '.htm?hp_editor';
            }
            document.oncontextmenu = function() { // Disable Right Click
                alert('Right Click is not allowed in Live Builder')
                return false;
            };
            window.addEventListener("auxclick", (event) => { // Disable mouse center button
                if (event.button === 1) event.preventDefault();
            });
            $('a').each(function() { // Change link into editor link
                if ($(this).attr('href')) {
                    if ($(this).attr('href').indexOf('hp_editor') == -1) {
                        $(this).removeAttr('target');
                    }
                }
            });
            setIntervalLimited(function() { // Change link into editor link (5 Times)
                $('a').each(function() {
                    if ($(this).attr('href')) {
                        if ($(this).attr('href').indexOf('hp_editor') == -1) {
                            $(this).removeAttr('target');
                        }
                    }
                });
            }, 2000, 5);
            var pl; // Poll - Add Classes
            for (pl = 1; pl <= 100; pl++) {
                $('.polls1body[id="poll' + pl + '"]').addClass('hpe-poll' + pl);
            }
            setTimeout(function() { // AdGroup Class for Verticle Ads
                $('.hpe-i-ad').each(function() {
                    if (!$(this).siblings('.hp-x').length) {
                        $(this).parent('tr').addClass('had-tr');
                    }
                });
                $('.had-tr').each(function() {
                    if ($(this).siblings('.had-tr').length) {
                        $(this).children('.hpe-i-ad').addClass('hp-show-delete');
                    }
                });
            }, 2000);
            if ($('.hpe-i-ad').length) { // Weather Ad
                $('.hpe-i-ad').each(function() {
                    if ($(this).attr('data-adnum') == '7') {
                        $(this).addClass('hpe-i-weather');
                        $(this).removeClass('hpe-i-ad');
                    }
                });
            }
            if ($('.PhotoGallery1').children('script:first-child').text().indexOf('GetPhoto') != -1 && $('.PhotoGallery1').length) { // Old PhotoGallery1 - Add Classes
                $('.PhotoGallery1').addClass('hpe-old-photog');
            }
            if ($('.PhotoGallery2').children('script:first-child').text().indexOf('GetPhoto') != -1 && $('.PhotoGallery2').length) { // Old PhotoGallery2 - Add Classes
                $('.PhotoGallery2').addClass('hpe-old-photog');
            }
            if ($('.PhotoGallery3').children('script:first-child').text().indexOf('GetPhoto') != -1 && $('.PhotoGallery3').length) { // Old PhotoGallery3 - Add Classes
                $('.PhotoGallery3').addClass('hpe-old-photog');
            }
            if ($('.PhotoGallery4').children('script:first-child').text().indexOf('GetPhoto') != -1 && $('.PhotoGallery4').length) { // Old PhotoGallery4 - Add Classes
                $('.PhotoGallery4').addClass('hpe-old-photog');
            }
            $('#MainContent').attr('data-block', 'd-block');
            $('#MainContent').css('width', '100%');
            $('.formbody, .custom-form').addClass('hpe-formbody'); // Add Form Class
            $('#frame1[src*="pform"]').parent('#MainContent').addClass('hpe-formbody'); // Add Form Class 2
            $('#frame1[src*="target_service_package' + pext + '"]').parent('#MainContent').addClass('hpe-sp'); // Add Service Package Class
            $('.hpe-sp').css('width', '100%');
            $('#frame1[src*="target_yellowpage' + pext + '"]').parent('#MainContent').addClass('hpe-old-directory'); // Add Old Directory Class
            $('#frame1[src*="target_classifieds' + pext + '"]').parent('#MainContent').addClass('hpe-old-classified'); // Add Old Classified View Class
            if (window.location.href.indexOf("hp_editor_eventx_detail") != -1) { //New Event Class
                $('.hpe-article-detail').addClass('hpe-event-detail');
                $('.hpe-event-detail').removeClass('hpe-article-detail');
            }
            $('.eventbody').addClass('hpe-old-event'); // Add Old Event Class
            $('.hpe-old-event').css('width', '100%');
            $('[class*="hpe-"]').addClass('hp-x');
            //$('#blbodymain').animate({opacity: 1}, 500);
            $('[class*="hpe-"]').each(function() {
                if ($(this).children('.hp-y').length == 0) {
                    $(this).prepend('<div class="hp-y"></div>');
                }
            });
            // Box width and Height (1st time)
            $('.hp-x').each(function() {
                //$(this).addClass('hp-ppp'); // Add Class for box hover effect
                $(this).mouseover(function() {
                    $(this).stop(true, true).removeClass('hp-ppp');
                }).mouseout(function() {
                    $(this).stop(true, true).addClass('hp-ppp');
                });
                if ($(this).css('float') != 'left') {
                    $(this).addClass('hpe-left');
                }
                $(this).children('.hp-y').css('width', $(this).outerWidth());
                $(this).children('.hp-y').css('height', $(this).outerHeight());
                $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                $(this).removeClass('hp-show-lable hp-hide-delete');
                if ($(this).height() < 40) {
                    $(this).children('.hp-y').addClass('hp-smallh');
                } else if ($(this).height() > 999) {
                    $(this).children('.hp-y').addClass('hp-longh');
                }
                if ($(this).width() < 32) {
                    $(this).children('.hp-y').addClass('hp-smallw');
                }
                if ($(this).width() > 300 && $(this).height() > 60) {
                    $(this).addClass('hp-show-lable');
                }
                if ($(this).width() < 65) {
                    $(this).addClass('hp-hide-help');
                } else {
                    $(this).removeClass('hp-hide-help');
                }
                if ($(this).width() >= 140) { // Box Header
                    if ($(this).height() <= 55) {
                        $(this).addClass('hp-show-hheader-3');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                    } else if ($(this).height() <= 75) {
                        $(this).addClass('hp-show-hheader-2');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                    } else if ($(this).height() > 75) {
                        $(this).addClass('hp-show-hheader-1');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                    }
                } else if ($(this).height() <= 54) {
                    $(this).addClass('hp-hide-hheader');
                    $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');
                }
                if (!$(this).siblings('.hp-x').length) {
                    $(this).addClass('hp-hide-delete');
                }
                if ($(this).parent('.had-tr').length) {
                    $(this).addClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div3').parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                $('.hpe-in-menu').removeClass('hp-hide-delete');
                $(this).removeClass('hpe-left');
            });
            // If Parent are not in same order
            $('.hp-parent').each(function() {
                if ($(this).children('.hp-parent-div1').length > 1) {
                    $(this).children('.hp-parent-div1').addClass('hp-parent-hide-delete');
                    $(this).children('.hp-parent-div1').removeClass('hp-hide-delete');
                }
            });
            var e = setInterval(function() {
                if (readCookie('hpe_page2' + wd) == 'Yes') {
                    eraseCookie('hpe_page2' + wd);
                    $('.mfp-close').click();
                    clearTimeout(e);
                    $('#blbodymain').css('opactiy', 0);
                    window.location.reload();
                }
            }, 100);
            var l = setInterval(function() { // Popup Loader
                if ($('.mfp-wrap').length) {
                    $('.mfp-wrap').css('z-index', '99999');
                }
                if ($('.hpe-loader').length) {
                    setTimeout(function() {
                        $('.hpe-loader').addClass('hpe-loader-start');
                    }, 1000);
                    setTimeout(function() {
                        if (readCookie('hpe_delete2' + wd) == 'Yes' || readCookie('hpe_detail_delete2' + wd) == 'Yes' || readCookie('hpe_delete_close' + wd == 'Yes')) {} else {
                            $('.hpe-loader').animate({ opacity: 0 }, 400, function() {
                                $('.hpe-loader').css('visibility', 'hidden');
                            });
                        }
                        $('.hpe-iframe').css('visibility', 'visible');
                        $('.hpe-iframe').animate({ opacity: 1 }, 400);
                    }, 5000);
                }
                if ($('.hpe-iframe').length) { // If any error, show login page
                    if ($('.hpe-iframe').contents().get(0).location.href.indexOf('/error' + pext + '?npage=/login') != -1) {
                        clearInterval(l);
                        createCookie('hpe_session_error' + wd, 'Yes');
                        $('#blbodymain').css('opactiy', 0);
                        top.window.location.reload(true);
                    }
                    if ($('.hpe-iframe').contents().get(0).location.href.indexOf('/acknowledge' + pext) != -1) {
                        $(".hpe-iframe").contents().find("#form2").css('display', 'none');
                    }
                }
            }, 100);
            // Theme
            if (typeof SMThemeColor == 'function') {
                if (SMThemeColor() == 'Yellow') { $('.hp-x, #blbodymain').attr('data-theme', 'Yellow'); }
                if (SMThemeColor() == 'Blue') { $('.hp-x, #blbodymain').attr('data-theme', 'Blue'); }
                if (SMThemeColor() == 'Brown') { $('.hp-x, #blbodymain').attr('data-theme', 'Brown'); }
                if (SMThemeColor() == 'Purple') { $('.hp-x, #blbodymain').attr('data-theme', 'Purple'); }
                if (SMThemeColor() == 'Orange') { $('.hp-x, #blbodymain').attr('data-theme', 'Orange'); }
                if (SMThemeColor() == 'Olive') { $('.hp-x, #blbodymain').attr('data-theme', 'Olive'); }
                if (SMThemeColor() == 'Magenta') { $('.hp-x, #blbodymain').attr('data-theme', 'Magenta'); }
                if (SMThemeColor() == 'Green') { $('.hp-x, #blbodymain').attr('data-theme', 'Green'); }
                if (SMThemeColor() == 'Red') { $('.hp-x, #blbodymain').attr('data-theme', 'Red'); }
                if (SMThemeColor() == 'Black') { $('.hp-x, #blbodymain').attr('data-theme', 'Black'); }
            }
            // LOGO - #logo
            if ($('.hpe-logo').length) {
                $('.hpe-logo').each(function() {
                    $(this).addClass('hp-ppp');
                    var rw = $(this).attr('data-logo-width');
                    if (typeof rw !== "undefined") {
                        var rwt = 'Recommended: ' + rw + 'px';
                    } else {
                        var rwt = '';
                    }
                    if ($(this).children('#logo').children('img').length) {
                        var hlp = 'Upload logo image with recommended width showing on bottom right side.<br><b>NOTE:</b> There is no limit for the height.';
                        if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                            $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit Logo" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'pform=options_systems&pkeyname=sys_option_system_id&pkey=1&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_logo_img\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a title="View Homepage" href="' + hlb + '"><i class="fa fa-external-link" aria-hidden="true"></i><b class="hp-llable">View</b></a><a class="hp-help hp-tt" href="javascript:void(0);" title="' + hlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a></div><header class="hp-hheader">Logo</header><cpanel></cpanel><rpanel>' + rwt + '</rpanel></div>');
                        }
                    } else {
                        var hlp = 'Upload logo image with recommended width showing on bottom right side.<br><b>NOTE:</b> There is no limit for the height.';
                        if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                            $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit Logo" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'pform=options_systems&pkeyname=sys_option_system_id&pkey=1&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_logo_img\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a title="View Homepage" href="' + hlb + '"><i class="fa fa-external-link" aria-hidden="true"></i><b class="hp-llable">View</b></a><a class="hp-help hp-tt" href="javascript:void(0);" title="' + hlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a></div><header class="hp-hheader">Logo</header><cpanel></cpanel><rpanel>' + rwt + '</rpanel></div>');
                        }
                    }
                });
            }
            // Menu
            if ($('.hp-submenu').length) { // If there is no submenu, then add "ADD" button
                $('.hp-submenu').each(function() {
                    mk = $(this).attr('data-menu');
                    if ($(this).children('.hpe-in-submenu').length) {
                        $('.hp-submenu').children('.hpe-in-submenu').each(function() {
                            if ($(this).css('display') == 'none') {
                                $(this).removeClass('hpe-in-submenu');
                            }
                        });
                    }
                    if ($(this).children('.hpe-in-submenu').length == 0) {
                        $(this).addClass('hp-submenux-zero');
                        $(this).prepend('<submenu><div class="hpe-on-submenu hp-x"><sub>Add Submenu</sub><div class="hp-y"><div class="hp-z"><div class="hp-span"><a title="Add New Submenu" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Menu&lid2=&level=1&pform=Sub-Menu&pkeyname=sys_menu_sub_id&pkey=&fkeyname=sys_menu_id&fkey=' + mk + '&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=100#hpe_in_new_submenu\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i></a></div></div></div></div></submenu>');

                    }
                });
            }
            if ($('.hp-menu').length) { // Menu Delete Button when there is no submenu
                $('.hp-menu').each(function() {
                    if ($(this).children('.hp-submenux-zero').length) {
                        $(this).children('.hpe-in-menu').addClass('hp-menux-delete');
                    }
                    if ($(this).attr('data-menu') == mp) {
                        $(this).addClass('hp-homemenu');
                        $(this).children('.hpe-in-menu').addClass('hp-homemenu-child');
                        $(this).children('.hpe-in-menu').attr('data-homeurl', sp);
                    }
                });
            }
            if ($('.hpe-menu').length) {
                $('.hpe-menu.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit Menu & SubMenu" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Menu&x=&site=' + wsite + '&smx=Y#hpe_menu\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div><div class="hp-span" title="Close Menu Editor to view Menu/Submenu Pages" class="hp-close"></div></div>');
            }
            $('.hp-close').click(function() { // Close Menu Editor
                $(this).parent('.hp-z').parent('.hp-y').remove();
            });
            if ($('.hpe-in-menu').length) { // Editor for specific Menu
                var m = $('.hpe-in-menu').length; // Menu ORDERING BEGIN
                for (i = 0; i < m; i++) {
                    $('.hpe-in-menu').eq(i).attr('data-count', i + 1);
                    if (i + 1 == m) {
                        $('.hpe-in-menu').eq(0).attr('data-order-prev', 'firstmenu');
                    }
                }
                $('.hpe-in-menu').each(function() {
                    if ($(this).attr('data-order-prev') == 'firstmenu') { // first Menu
                        var a = parseFloat($(this).attr('data-order'));
                        var d = a - 0.0001;
                        $(this).attr('data-order-new', d.toFixed(4));
                    } else {
                        v = parseInt($(this).attr('data-count')) - 1;
                        n = $('.hpe-in-menu[data-count="' + v + '"]').attr('data-order');
                        $(this).attr('data-order-prev', n);
                        var a = parseFloat($(this).attr('data-order'));
                        var b = parseFloat($(this).attr('data-order-prev'));
                        var c = (a + b);
                        var d = c / 2;
                        $(this).attr('data-order-new', d.toFixed(4));
                    }
                }); // Menu ORDERING END
                $('.hpe-in-menu').each(function() {
                    var mk = $(this).attr('data-menu');
                    var dl = $(this).attr('data-link');
                    var mon = $(this).attr('data-order-new');
                    var dv = $(this).attr('data-view');
                    if (dl == '#' || dl.indexOf('javascript:void') != -1) {
                        if ($(this).children('a').length == 2) {
                            $(this).addClass('hp-show-menulink');
                            $(this).children('a').each(function() {
                                if ($(this).attr('href') != '#' || $(this).attr('href').indexOf('javascript:void') == -1) {
                                    dl = $(this).attr('href');
                                }
                            });
                            $(this).attr('data-link', dl);
                        }
                    }
                    if ($(this).attr('data-link').indexOf('?twindow=') != -1) { // Replace ? with &
                        $(this).attr('data-link', $(this).attr('data-link').replace("?twindow=", "&twindow="));
                    }
                    if ($(this).attr('data-link').indexOf('&site=') != -1) { // No need to add "site" paramenter in form links
                        if ($(this).attr('data-link').indexOf('/template-') != -1) { // if Tempalte
                            var dk = dlb + $(this).attr('data-link').replace(/(?:.*?\/){4}/, '');
                        } else {
                            var dk = dlb + $(this).attr('data-link').replace(/.*\//, "");
                        }
                    } else {
                        var dk = dlb + $(this).attr('data-link').replace(/.*\//, "") + '&site=' + wsite;
                    }
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit Menu" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Menu&lid2=&level=1&pform=Menu&pkeyname=sys_menu_id&pkey=' + mk + '&fkeyname=&fkey=&wpage=&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_in_menu_x\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i></a><a title="Add New Menu" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Menu&lid2=&level=1&pform=Menu&pkeyname=sys_menu_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&vpx=' + dv + '&fpx=' + mon + '#hpe_in_new_menu\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i></a><a class="hp-menudelete" title="Delete Menu" href="javascript:void(0);" onclick="return confirmdelete(\'' + dl1 + ' Menu and<br>all associated Submenus and Articles' + dl2 + '\', \'/' + pdist + 'lid=Menu&lid2=&level=0&pform=Menu&dname=Menu&pkeyname=sys_menu_id&pkey=' + mk + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i></a><a class="hp-menulink" title="View Menu" href="' + dk + '"><i class="fa fa-external-link" aria-hidden="true"></i></a></div></div>');
                    }
                    if ($(this).attr('data-link') == '#' || $(this).attr('data-link').indexOf('javascript:void') != -1) { // If there is no link, then disable Menu Link button
                        $('.hp-menulink').css('display', 'none');
                    } else {
                        $(this).addClass('hp-show-menulink');
                    }
                    if ($(this).parent('div').length) {
                        if (!$(this).parent('div').siblings('div').length) {
                            $(this).addClass('hp-hide-delete');
                        }
                    }
                    if ($(this).parent('li').length) {
                        if (!$(this).parent('li').siblings('li').length) {
                            $(this).addClass('hp-hide-delete');
                        }
                    }
                });
                $('.hpe-in-menu').hover(function() {
                    $('.hpe-in-submenu').each(function() {
                        if ($(this).children('.hp-y').length) {
                            if ($(this).css('float') != 'left') {
                                $(this).addClass('hpe-left');
                            }
                            $(this).children('.hp-y').css('width', $(this).outerWidth());
                            $(this).children('.hp-y').css('height', $(this).outerHeight());
                            $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                            $(this).removeClass('hp-show-lable hp-hide-delete');
                            if ($(this).height() < 40) {
                                $(this).children('.hp-y').addClass('hp-smallh');
                            } else if ($(this).height() > 999) {
                                $(this).children('.hp-y').addClass('hp-longh');
                            }
                            if ($(this).width() < 32) {
                                $(this).children('.hp-y').addClass('hp-smallw');
                            }
                            if ($(this).width() > 300 && $(this).height() > 60) {
                                $(this).addClass('hp-show-lable');
                            }
                            if ($(this).width() < 65) {
                                $(this).addClass('hp-hide-help');
                            } else {
                                $(this).removeClass('hp-hide-help');
                            }
                            if ($(this).width() >= 140) { // Box Header
                                if ($(this).height() <= 55) {
                                    $(this).addClass('hp-show-hheader-3');
                                    $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                                } else if ($(this).height() <= 75) {
                                    $(this).addClass('hp-show-hheader-2');
                                    $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                                } else if ($(this).height() > 75) {
                                    $(this).addClass('hp-show-hheader-1');
                                    $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                                }
                            } else if ($(this).height() <= 54) {
                                $(this).addClass('hp-hide-hheader');
                                $(this).removeClass('hp-show-hheader-3 hp-show-hheader-3 hp-show-hheader-1');
                            }
                            if (!$(this).siblings('.hp-x').length) {
                                $(this).addClass('hp-hide-delete');
                            }
                            $(this).removeClass('hpe-left');
                        }
                    });
                });
            }
            if ($('.hp-homemenu-child').length) { // If home menu, then change home URL
                $('.hp-homemenu-child .hp-y .hp-z .hp-span .hp-menulink').attr('href', '/hpeditor' + pext + '?site=' + wsite);

            }
            if ($('.hpe-in-menu-only').length) { // Editor for specific Menu(Only Name Change)
                $('.hpe-in-menu-only').each(function() {
                    var mk = $(this).attr('data-menu');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit Menu" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Menu&lid2=&level=1&pform=Menu&pkeyname=sys_menu_id&pkey=' + mk + '&fkeyname=&fkey=&wpage=&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_in_menu_only\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i></a></div></div>');
                    }
                });
            }
            if ($('.hpe-in-submenu').length) { // Editor for specific SubMenu
                $('.hpe-in-submenu').each(function() { // SubMenu ORDERING BEGIN
                    if ($(this).prev('.hpe-in-submenu').length) {
                        $(this).attr('data-order-prev', $(this).prev('.hpe-in-submenu').attr('data-order'));
                    } else {
                        $(this).attr('data-order-prev', 'firstsubmenu');
                    }
                    if ($(this).attr('data-order-prev') == 'firstsubmenu') { // First Submenu
                        var a = parseFloat($(this).attr('data-order'));
                        var d = a - 0.0001;
                        $(this).attr('data-order-new', d.toFixed(4));
                    } else {
                        var a = parseFloat($(this).attr('data-order'));
                        var b = parseFloat($(this).attr('data-order-prev'));
                        var c = (a + b);
                        var d = c / 2;
                        $(this).attr('data-order-new', d.toFixed(4));
                    }
                }); // SubMenu ORDERING END
                $('.hpe-in-submenu').each(function() {
                    var mk = $(this).attr('data-menu');
                    var sk = $(this).attr('data-submenu');
                    if ($(this).attr('onclick')) {
                        if ($(this).attr('onclick').indexOf('OpenPopup4(') != -1 && $(this).attr('onclick').indexOf('/target_form') != -1) { // Check for Popup Links - Form
                            $(this).attr("data-link", "https://" + wsite + "/index0.htm?twindow=Form&sname=target_form2" + pext + "&" + $(this).attr("onclick").split("OpenPopup4('").pop().split("?").pop().split("',").shift());
                        }
                        if ($(this).attr('onclick').indexOf('OpenPopup4(') != -1 && $(this).attr('onclick').indexOf('/target_service_package') != -1) { // // Check for Popup Links - Service Package
                            $(this).attr("data-link", "https://" + wsite + "/index0.htm?twindow=ServicePackage&sname=target_service_package" + pext + "&" + $(this).attr("onclick").split("OpenPopup4('").pop().split("?").pop().split("',").shift());
                        }
                        if ($(this).attr('onclick').indexOf('OpenPopup4(') != -1 && $(this).attr('onclick').indexOf('/target_classifieds') != -1) { // // Check for Popup Links - Classifieds
                            $(this).attr("data-link", "https://" + wsite + "/index0.htm?twindow=Classifieds&sname=target_classifieds" + pext + "&" + $(this).attr("onclick").split("OpenPopup4('").pop().split("?").pop().split("',").shift());
                        }
                        if ($(this).attr('onclick').indexOf('OpenPopup4(') != -1 && $(this).attr('onclick').indexOf('/target_yellowpage') != -1) { // // Check for Popup Links - YellowPages
                            $(this).attr("data-link", "https://" + wsite + "/index0.htm?twindow=YellowPages&sname=target_yellowpage" + pext + "&" + $(this).attr("onclick").split("OpenPopup4('").pop().split("?").pop().split("',").shift());
                        }
                        $(this).removeAttr('onclick');
                    }
                    if ($(this).attr('data-link').indexOf('?twindow=') != -1) { // Replace ? with &
                        $(this).attr('data-link', $(this).attr('data-link').replace("?twindow=", "&twindow="));
                    }
                    if ($(this).attr('data-link').indexOf('&site=') != -1) { // No need to add "site" paramenter in form links
                        if ($(this).attr('data-link').indexOf('/template-') != -1) { // if Tempalte
                            var dk = dlb + $(this).attr('data-link').replace(/(?:.*?\/){4}/, '');
                        } else {
                            var dk = dlb + $(this).attr('data-link').replace(/.*\//, "");
                        }
                    } else {
                        var dk = dlb + $(this).attr('data-link').replace(/.*\//, "") + '&site=' + wsite;
                    }
                    var smon = $(this).attr('data-order-new');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit Submenu" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Menu&lid2=&level=1&pform=Sub-Menu&pkeyname=sys_menu_sub_id&pkey=' + sk + '&fkeyname=sys_menu_id&fkey=' + mk + '&wpage=&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_in_submenu_x\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i></a><a title="Add New Submenu" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Menu&lid2=&level=1&pform=Sub-Menu&pkeyname=sys_menu_sub_id&pkey=&fkeyname=sys_menu_id&fkey=' + mk + '&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=' + smon + '#hpe_in_new_submenu\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i></a><a class="hp-submenudelete" title="Delete Submenu" href="javascript:void(0);" onclick="return confirmdelete(\'' + dl1 + ' Submenu and<br>all associated articles' + dl2 + '\', \'/' + pdist + 'lid=Menu&lid2=&level=1&pform=Sub-Menu&dname=Menu&pkeyname=sys_menu_sub_id&pkey=' + sk + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i></a><a title="View Submenu" href="' + dk + '"><i class="fa fa-external-link" aria-hidden="true"></i></a></div></div>');
                    }

                });
            }
            if ($('.hpe-in-submenu-only').length) { // Editor for specific SubMenu(Only Name Change)
                $('.hpe-in-submenu-only').each(function() {
                    var mk = $(this).attr('data-menu');
                    var sk = $(this).attr('data-submenu');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit SubMenu" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Menu&lid2=&level=1&pform=Sub-Menu&pkeyname=sys_menu_sub_id&pkey=' + sk + '&fkeyname=sys_menu_id&fkey=' + mk + '&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_in_submenu_only\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i></a></div></div>');
                    }
                });
            }
            // AdGroups
            var ag; // Whole AdGroup area
            for (ag = 1; ag <= 100; ag++) {
                if ($('.hpe-ag' + ag).length) {
                    $('[class*="hpe-ag' + ag + ' hp-x"] .hp-y').each(function() {
                        $(this).append('<div class="hp-z"><div class="hp-span"><a title="Edit AdGroup ' + ag + '" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=CustomersAdsGroups&lid2=&level=1&pkeyname=group_id&pkey=' + ag + '&wpage=1&hpath=AdGroup' + ag + '&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_ag\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div></div>');
                    });
                }
            }
            if ($('.hpe-i-ad').length) { // Specific Ad
                $('.hpe-i-ad').each(function() {
                    var adnum = $(this).attr('data-adnum');
                    var adid = $(this).attr('data-adid');
                    $(this).addClass('hp-ppp');
                    var rw = $('[data-adgroup="' + adnum + '"]').attr('data-ad-width');
                    if (typeof rw !== "undefined") {
                        var rwt = 'Recommended: ' + rw + 'px';
                    } else {
                        var rwt = '';
                    }
                    var hlp = 'Upload ad with recommended width showing on bottom right side.<br><b>NOTE:</b> There is no limit for the height';
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Ad" onclick="OpenBLPopup(\'/' + pfist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&pkeyname=ar_customers_ads_id&pkey=' + adid + '&fkeyname=group_id&fkey=' + adnum + '&wpage=1&hpath=AdGroup' + adnum + '&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Ad" onclick="OpenBLPopup(\'/' + pfist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&pkeyname=ar_customers_ads_id&pkey=&fkeyname=group_id&fkey=' + adnum + '&eflag=Yes&wpage=1&hpath=AdGroup' + adnum + '&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_newadx\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Ad" onclick="return confirmdelete(\'' + dl1 + ' Ad' + dl2 + '\', \'/' + pdist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&dname=CustomersAds&pkeyname=ar_customers_ads_id&pkey=' + adid + '&wpage=1&hpath=AdGroup' + adnum + '&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a><a class="hp-help hp-tt" href="javascript:void(0);" title="' + hlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a></div><header class="hp-hheader">AdGroup - ' + adnum + '</header><cpanel></cpanel><rpanel>' + rwt + '</rpanel></div>');
                    }
                });
            }
            setIntervalLimited(function() { // For ad Box issue
                $('.hpe-i-ad').each(function() {
                    if ($(this).css('float') != 'left') {
                        $(this).addClass('hpe-left');
                    }
                    $(this).children('.hp-y').css('width', $(this).outerWidth());
                    $(this).children('.hp-y').css('height', $(this).outerHeight());
                    $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                    $(this).removeClass('hp-show-lable hp-hide-delete');
                    if ($(this).height() < 40) {
                        $(this).children('.hp-y').addClass('hp-smallh');
                    } else if ($(this).height() > 999) {
                        $(this).children('.hp-y').addClass('hp-longh');
                    }
                    if ($(this).width() < 32) {
                        $(this).children('.hp-y').addClass('hp-smallw');
                    }
                    if ($(this).width() > 300 && $(this).height() > 60) {
                        $(this).addClass('hp-show-lable');
                    }
                    if ($(this).width() < 65) {
                        $(this).addClass('hp-hide-help');
                    } else {
                        $(this).removeClass('hp-hide-help');
                    }
                    if ($(this).width() >= 140) { // Box Header
                        if ($(this).height() <= 55) {
                            $(this).addClass('hp-show-hheader-3');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                        } else if ($(this).height() <= 75) {
                            $(this).addClass('hp-show-hheader-2');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                        } else if ($(this).height() > 75) {
                            $(this).addClass('hp-show-hheader-1');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                        }
                    } else if ($(this).height() <= 54) {
                        $(this).addClass('hp-hide-hheader');
                        $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');
                    }
                    if (!$(this).siblings('.hp-x').length) {
                        $(this).addClass('hp-hide-delete');
                    }
                    $(this).removeClass('hpe-left');
                });
            }, 500, 5);
            setInterval(function() {
                $('[id*="holddiv"]').each(function() { // Ad Type = "SameSpotTime"
                    if (!$(this).children('.hp-y').length) {
                        if ($(this).children('a').length) { // A tag available
                            if ($(this).children('a').children('img').length) {
                                $(this).attr('data-adid-2', $(this).children('a').children('img').attr('data-title'));
                            }
                        }
                        if (!$(this).children('a').length) { // A tag not available
                            if ($(this).children('img').length) {
                                $(this).attr('data-adid-2', $(this).children('img').attr('data-title'));
                            }
                        }
                        if ($(this).attr('data-adid-2')) {
                            var id1 = $(this).attr('data-adid');
                            var id2 = $(this).attr('data-adid-2');
                            id2 = id2.split('-').pop().split(')').shift();
                            if (id1 != id2) {
                                $(this).attr('data-adid', id2);
                            }
                        }
                        $(this).prepend('<div class="hp-y"></div>');
                        var adnum = $(this).attr('data-adnum');
                        var adid = $(this).attr('data-adid');
                        if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                            $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Ad" onclick="OpenBLPopup(\'/' + pfist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&pkeyname=ar_customers_ads_id&pkey=' + adid + '&fkeyname=group_id&fkey=' + adnum + '&wpage=1&hpath=AdGroup' + adnum + '&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Ad" onclick="OpenBLPopup(\'/' + pfist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&pkeyname=ar_customers_ads_id&pkey=&fkeyname=group_id&fkey=' + adnum + '&eflag=Yes&wpage=1&hpath=AdGroup' + adnum + '&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_newadx\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Ad" onclick="return confirmdelete(\'' + dl1 + ' Ad' + dl2 + '\', \'/' + pdist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&dname=CustomersAds&pkeyname=ar_customers_ads_id&pkey=' + adid + '&wpage=1&hpath=AdGroup' + adnum + '&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div><header class="hp-hheader">AdGroup - ' + adnum + '</header></div>');
                        }
                        $('[class*="hpe-"].hp-x .hp-y .hp-z .hp-span a').click(function() {
                            setTimeout(function() {
                                $('.hp-x-popup iframe.mfp-iframe').load(function() {
                                    $('.mfp-iframe-holder .mfp-close').css('visibility', 'visible');
                                    $('.mfp-iframe-holder .mfp-close').animate({ 'opacity': 1 }, 300);
                                });
                            }, 300);
                        });
                    }
                    if ($(this).css('float') != 'left') { // Box width & Height
                        $(this).addClass('hpe-left');
                    }
                    $(this).children('.hp-y').css('width', $(this).outerWidth());
                    $(this).children('.hp-y').css('height', $(this).outerHeight());
                    $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                    $(this).removeClass('hp-show-lable hp-hide-delete');
                    if ($(this).height() < 40) {
                        $(this).children('.hp-y').addClass('hp-smallh');
                    } else if ($(this).height() > 999) {
                        $(this).children('.hp-y').addClass('hp-longh');
                    }
                    if ($(this).width() < 32) {
                        $(this).children('.hp-y').addClass('hp-smallw');
                    }
                    if ($(this).width() > 300 && $(this).height() > 60) {
                        $(this).addClass('hp-show-lable');
                    }
                    if ($(this).width() < 65) {
                        $(this).addClass('hp-hide-help');
                    } else {
                        $(this).removeClass('hp-hide-help');
                    }
                    if ($(this).width() >= 140) { // Box Header
                        if ($(this).height() <= 55) {
                            $(this).addClass('hp-show-hheader-3');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                        } else if ($(this).height() <= 75) {
                            $(this).addClass('hp-show-hheader-2');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                        } else if ($(this).height() > 75) {
                            $(this).addClass('hp-show-hheader-1');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                        }
                    } else if ($(this).height() <= 54) {
                        $(this).addClass('hp-hide-hheader');
                        $(this).removeClass('hp-show-hheader-3 hp-show-hheader-3 hp-show-hheader-1');
                    }
                    if (!$(this).siblings('.hp-x').length) {
                        $(this).addClass('hp-hide-delete');
                    }
                    $(this).removeClass('hpe-left');
                });
                $('div[id*="divDiffSpotTime"] .hpe-i-ad').addClass('divDiffSpotTime'); // Ad Type = "DiffSpotTime"
                $('.divDiffSpotTime').each(function() {
                    if ($(this).attr('class').indexOf('hp-x') == -1) {
                        $(this).addClass('hp-x');
                        $(this).prepend('<div class="hp-y"></div>');
                        var adnum = $(this).attr('data-adnum');
                        var adid = $(this).attr('data-adid');
                        $(this).addClass('hp-ppp');
                        if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                            $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Ad" onclick="OpenBLPopup(\'/' + pfist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&pkeyname=ar_customers_ads_id&pkey=' + adid + '&fkeyname=group_id&fkey=' + adnum + '&wpage=1&hpath=AdGroup' + adnum + '&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Ad" onclick="OpenBLPopup(\'/' + pfist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&pkeyname=ar_customers_ads_id&pkey=&fkeyname=group_id&fkey=' + adnum + '&eflag=Yes&wpage=1&hpath=AdGroup' + adnum + '&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_newadx\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Ad" onclick="return confirmdelete(\'' + dl1 + ' Ad' + dl2 + '\', \'/' + pdist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&dname=CustomersAds&pkeyname=ar_customers_ads_id&pkey=' + adid + '&wpage=1&hpath=AdGroup' + adnum + '&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div><header class="hp-hheader">AdGroup - ' + adnum + '</header></div>');
                        }
                        if (!$(this).siblings('.hp-x').length) {
                            $(this).parent('tr').addClass('had-tr');
                        }
                        if ($(this).css('float') != 'left') { // Box width & Height
                            $(this).addClass('hpe-left');
                        }
                        $(this).children('.hp-y').css('width', $(this).outerWidth());
                        $(this).children('.hp-y').css('height', $(this).outerHeight());
                        $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                        $(this).removeClass('hp-show-lable hp-hide-delete');
                        if ($(this).height() < 40) {
                            $(this).children('.hp-y').addClass('hp-smallh');
                        } else if ($(this).height() > 999) {
                            $(this).children('.hp-y').addClass('hp-longh');
                        }
                        if ($(this).width() < 32) {
                            $(this).children('.hp-y').addClass('hp-smallw');
                        }
                        if ($(this).width() > 300 && $(this).height() > 60) {
                            $(this).addClass('hp-show-lable');
                        }
                        if ($(this).width() < 65) {
                            $(this).addClass('hp-hide-help');
                        } else {
                            $(this).removeClass('hp-hide-help');
                        }
                        if ($(this).width() >= 140) { // Box Header
                            if ($(this).height() <= 55) {
                                $(this).addClass('hp-show-hheader-3');
                                $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                            } else if ($(this).height() <= 75) {
                                $(this).addClass('hp-show-hheader-2');
                                $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                            } else if ($(this).height() > 75) {
                                $(this).addClass('hp-show-hheader-1');
                                $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                            }
                        } else if ($(this).height() <= 54) {
                            $(this).addClass('hp-hide-hheader');
                            $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');
                        }
                        if (!$(this).siblings('.hp-x').length) {
                            $(this).addClass('hp-hide-delete');
                        }
                        $(this).removeClass('hpe-left');
                    }
                });
                $('.had-tr').each(function() {
                    if ($(this).siblings('.had-tr').length) {
                        $(this).children('.hpe-i-ad').addClass('hp-show-delete');
                    }
                });
                if (typeof SMThemeColor == 'function') {
                    if (SMThemeColor() == 'Yellow') { $('.hp-x, #blbodymain').attr('data-theme', 'Yellow'); }
                    if (SMThemeColor() == 'Blue') { $('.hp-x, #blbodymain').attr('data-theme', 'Blue'); }
                    if (SMThemeColor() == 'Brown') { $('.hp-x, #blbodymain').attr('data-theme', 'Brown'); }
                    if (SMThemeColor() == 'Purple') { $('.hp-x, #blbodymain').attr('data-theme', 'Purple'); }
                    if (SMThemeColor() == 'Orange') { $('.hp-x, #blbodymain').attr('data-theme', 'Orange'); }
                    if (SMThemeColor() == 'Olive') { $('.hp-x, #blbodymain').attr('data-theme', 'Olive'); }
                    if (SMThemeColor() == 'Magenta') { $('.hp-x, #blbodymain').attr('data-theme', 'Magenta'); }
                    if (SMThemeColor() == 'Green') { $('.hp-x, #blbodymain').attr('data-theme', 'Green'); }
                    if (SMThemeColor() == 'Red') { $('.hp-x, #blbodymain').attr('data-theme', 'Red'); }
                    if (SMThemeColor() == 'Black') { $('.hp-x, #blbodymain').attr('data-theme', 'Black'); }
                }
            }, 200);
            // Poll
            var px;
            for (px = 1; px <= 100; px++) {
                if ($('.hpe-poll' + px).length) {
                    var hlp = 'To delete this last poll and wish to add a new poll, add a new poll then delete sample poll. If you wish to remove the poll completely, please create a support ticket. ';
                    $('.polls1body[class*="hpe-poll' + px + ' hp-x"]').addClass('hp-ppp');
                    $('.polls1body[class*="hpe-poll' + px + ' hp-x"] .hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit Poll" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Polls&lid2=&level=0&pform=polls&pkeyname=sys_poll_id&pkey=' + px + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_update_pollxy\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a title="Add New Poll" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Polls&lid2=&level=0&pform=polls&pkeyname=sys_poll_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_new_polls\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a title="Delete Poll" href="javascript:void(0);" onclick="return confirmdelete(\'' + dl1 + ' Poll' + dl2 + '\', \'/' + pdist + 'lid=Polls&lid2=&level=0&pform=polls&dname=Polls&pkeyname=sys_poll_id&pkey=' + px + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a><a class="hp-help hp-tt hp-poll-help" href="javascript:void(0);" title="' + hlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a></div><header class="hp-hheader">Poll</header></div>');
                }
            }
            // Highlights
            var h;
            for (h = 1; h <= 20; h++) {
                if ($('.hpe-hl' + h).length) { // Whole Highlight area
                    $('[class*="hpe-hl' + h + ' hp-x"] .hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit Highlight ' + h + '"href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Pages&x=&site=' + wsite + '#hpe_hl$' + h + '\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div></div>');
                }
                if ($('.hpe-in-hl' + h).length) { // Specific Article
                    $('.hpe-in-hl' + h).each(function() {
                        var haid = $(this).attr('data-article');
                        var isdate = $(this).attr('data-date');
                        var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                        var dh = '<center>Do you want to Hide current Article from<br><b>Highlight - ' + h + '</b>?</center>';
                        $(this).addClass('hp-ppp');
                        if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                            $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&fpx=hlx' + h + '&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_hlx' + h + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Hide Article from Highlight - ' + h + '" onclick="return confirmhide(\'' + dh + '\', \'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_hldx' + h + '\');"><i class="fa fa-minus-circle" aria-hidden="true"></i><b class="hp-llable">Hide</b></a><a href="javascript:void(0);" title="Delete Article" onclick="return confirmdelete(\'' + dl1 + ' Article' + dl2 + '\', \'/' + pdist + 'lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a><a title="View Article" href="' + durl + '"><i class="fa fa-external-link" aria-hidden="true"></i><b class="hp-llable">View</b></a></div><header class="hp-hheader">Highlight - ' + h + '</header></div>');
                        }

                    });
                }
            }
            // Previews
            if ($('.hpe-prev').length) { // Whole Preview area
                $('.hpe-prev.hp-x').each(function() {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit ' + s.replace(/@@/g, "'").replace(/_/g, " ") + '" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Pages&x=&site=' + wsite + '#hpe_prev$$' + m + '&&' + s + '\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div></div>');
                    }
                });
            }
            if ($('.hpe-in-prev').length) { // Specific Article
                $('.hpe-in-prev').each(function() {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=preview#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_prevxy$$' + m + '&&' + s + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Article" onclick="return confirmdelete(\'' + dl1 + ' Article' + dl2 + '\', \'/' + pdist + 'lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a><a title="View Article" href="' + durl + '"><i class="fa fa-external-link" aria-hidden="true"></i><b class="hp-llable">View</b></a></div><header class="hp-hheader">Preview - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            // Previews (Highlight Excluded)
            if ($('.hpe-xprev').length) { // Whole Preview Area
                $('.hpe-xprev.hp-x').each(function() {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit ' + s.replace(/@@/g, "'").replace(/_/g, " ") + '" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Pages&x=&site=' + wsite + '#hpe_xprev$$' + m + '&&' + s + '\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div></div>');
                    }
                });
            }
            if ($('.hpe-in-xprev').length) { // Specific Article
                $('.hpe-in-xprev').each(function() {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=preview#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_xprevxy$$' + m + '&&' + s + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Article" onclick="return confirmdelete(\'' + dl1 + ' Article' + dl2 + '\', \'/' + pdist + 'lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a><a title="View Article" href="' + durl + '"><i class="fa fa-external-link" aria-hidden="true"></i><b class="hp-llable">View</b></a></div><header class="hp-hheader">Preview - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            // Sections
            if ($('.hpe-section').length) {
                $('.hpe-section.hp-x').each(function() {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Pages&x=&site=' + wsite + '#hpe_prev$$' + m + '&&' + s + '\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit ' + s.replace(/@@/g, "'").replace(/_/g, " ") + ' </a></div></div>');
                    }
                });
            }
            if ($('.hpe-in-section').length) { // Specific Article
                $('.hpe-in-section').each(function() {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=section#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&fpx=section&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_prevxy$$' + m + '&&' + s + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Article" onclick="return confirmdelete(\'' + dl1 + ' Article' + dl2 + '\', \'/' + pdist + 'lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a><a title="View Article" href="' + durl + '"><i class="fa fa-external-link" aria-hidden="true"></i><b class="hp-llable">View</b></a></div></div>');
                    }
                });

            }
            // E-Editon or Archive #EEE
            if ($('.hpe-in-edition').length) { // Specific Article
                $('.hpe-in-edition').each(function() {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    //var durl =  dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Edition" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=edition#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Edition" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=edition&isdate=' + isdate + '#hpe_prevxy$$' + m + '&&' + s + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Edition" onclick="return confirmdelete(\'' + dl1 + ' E-Edition' + dl2 + '\', \'/' + pdist + 'lid=Pages&lid2=&level=1&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div></div>');
                    }
                });
            }
            // Single Article on Homepage
            if ($('.hpe-article-only').length) {
                $('.hpe-article-only').each(function() {
                    var daid = $(this).attr('data-article');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + daid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=art_detail#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a title="View Article" href="' + durl + '"><i class="fa fa-external-link" aria-hidden="true"></i><b class="hp-llable">View</b></a></div></div>');
                    }
                });
            }
            // Details page Article
            if ($('.hpe-article-detail').length) {
                $('.hpe-article-detail').each(function() {
                    var daid = $(this).attr('data-detailid');
                    var sbid = $(this).attr('data-submenu');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + daid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=art_detail#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" class="detail_delete" title="Delete Article" onclick="return confirmdetail(\'' + dl1 + ' Article' + dl2 + '\', \'/' + pdist + 'lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=' + daid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\', \'' + sbid + '\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div></div>');
                    }
                });
            }
            // Details page Event
            if ($('.hpe-event-detail').length) {
                $('.hpe-event-detail').each(function() {
                    var daid = $(this).attr('data-detailid');
                    var sbid = $(this).attr('data-submenu');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Event" onclick="OpenBLPopup(\'/' + pfist + 'lid=Events2&lid2=&level=1&pform=events2&pkeyname=sys_information_id&pkey=' + daid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=event_detail#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" class="detail_delete" title="Delete Article" onclick="return confirmdetail(\'' + dl1 + ' Event' + dl2 + '\', \'/' + pdist + 'lid=Events2&lid2=&level=0&pform=events2&dname=Events2&pkeyname=sys_information_id&pkey=' + daid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\', \'' + sbid + '\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div></div>');
                    }
                });
            }
            // Events (New)
            if ($('.hpe-in-event').length) {
                $('.hpe-in-event.hp-x').each(function() {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    var eurl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&hp_editor_eventx_detail=' + '&site=' + wsite;
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Event" onclick="OpenBLPopup(\'/' + pfist + 'lid=Events2&lid2=&level=1&pform=events2&pkeyname=sys_information_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&fpx=event&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Event" onclick="OpenBLPopup(\'/' + pfist + 'lid=Events2&lid2=&level=1&pform=events2&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_eventxy$$' + m + '&&' + s + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Event" onclick="return confirmdelete(\'' + dl1 + ' Event' + dl2 + '\', \'/' + pdist + 'lid=Events2&lid2=&level=0&pform=events2&dname=Events2&pkeyname=sys_information_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a><a title="View Event" href="' + eurl + '"><i class="fa fa-external-link" aria-hidden="true"></i><b class="hp-llable">View</b></a></div><header class="hp-hheader">Event - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            // Events (Old)
            if ($('.hpe-old-event').length) {
                $('.hpe-old-event.hp-x').each(function() {
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Events&x=&site=' + wsite + '#hpe_old_event\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Events </a></div></div>');
                    }
                });
            }
            // Product
            if ($('.hpe-in-product').length) {
                $('.hpe-in-product.hp-x').each(function() {
                    var mc = $(this).attr('data-category').replace(/'/g, "@@").replace(/ /g, "_").replace(/&/g, "A_M_P");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-product');
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Product" onclick="OpenBLPopup(\'/' + pfist + 'lid=Products&lid2=&level=0&pform=products&pkeyname=sys_product_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&fpx=product&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Product" onclick="OpenBLPopup(\'/' + pfist + 'lid=Products&lid2=&level=0&pform=products&pkeyname=sys_product_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpc=' + mc + '#hpe_productxy$$&&' + s + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Product" onclick="return confirmdelete(\'' + dl1 + ' Product' + dl2 + '\', \'/' + pdist + 'lid=Products&lid2=&level=0&pform=products&dname=Products&pkeyname=sys_product_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div><header class="hp-hheader">Product - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            if ($('.hpe-in-product-category').length) { // Codes icon
                $('.hpe-in-product-category.hp-x').each(function() {
                    var dcid = $(this).attr('data-category-id');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Codes&lid2=&level=0&pform=codes&pkeyname=code_id&pkey=' + dcid + '&fkeyname=&fkey=&wpage=&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=codes#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i></a></div></div>');
                    }
                });
            }
            // Directory (Old)
            if ($('.hpe-old-directory').length) {
                $('.hpe-old-directory.hp-x').each(function() {
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=CustomersSetup&x=&site=' + wsite + '#hpe_old_directory\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Directory </a></div></div>');
                    }
                });
            }
            // Directory (New)
            if ($('.hpe-in-directory').length) {
                $('.hpe-in-directory.hp-x').each(function() {
                    var mc = $(this).attr('data-category').replace(/'/g, "@@").replace(/ /g, "_").replace(/&/g, "A_M_P");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-id');
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Directory" onclick="OpenBLPopup(\'/' + pfist + 'lid=CustomersSetup&lid2=&level=0&pform=customers&pkeyname=customer_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&fpx=directory&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Directory" onclick="OpenBLPopup(\'/' + pfist + 'lid=CustomersSetup&lid2=&level=0&pform=customers&pkeyname=customer_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpc=' + mc + '#hpe_directoryxy$$&&' + s + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Directory" onclick="return confirmdelete(\'' + dl1 + ' Directory' + dl2 + '\', \'/' + pdist + 'lid=CustomersSetup&lid2=&level=0&pform=customers&dname=Customers&pkeyname=customer_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div><header class="hp-hheader">Directory - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            if ($('.hpe-in-directory-category').length) { // Codes icon
                $('.hpe-in-directory-category.hp-x').each(function() {
                    var dcid = $(this).attr('data-category-id');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Codes&lid2=&level=0&pform=codes&pkeyname=code_id&pkey=' + dcid + '&fkeyname=&fkey=&wpage=&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=codes#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i></a></div></div>');
                    }
                });
            }
            if ($('.hpe-in-directory-list').length) { // View Directroy Page 2
                $('.hpe-in-directory-list.hp-x').each(function() {
                    var dlink = dlb + $(this).attr('data-link').replace(/.*\//, "")  + '&site=' + wsite;
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a title="View Directory Listings" href="' + dlink + '"><i class="fa fa-external-link" aria-hidden="true"></i></a></div></div>');
                    }
                });
            }

            // Classified (Old)
            if ($('.hpe-old-classified').length) {
                $('.hpe-old-classified.hp-x').each(function() {
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Classifieds&x=&site=' + wsite + '#hpe_old_classified\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Classified </a></div></div>');
                    }
                });
            }
            // Videos - Gallery - YT(URL)
            if ($('.hpe-video-g-yt-url').length) {
                var vm = $('.hpe-video-g-yt-url.hp-x').attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                var vs = $('.hpe-video-g-yt-url.hp-x').attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                $('.hpe-video-g-yt-url.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Galleries&x=&site=' + wsite + '#hpe_video_g_yt_url$$' + vm + '&&' + vs + '\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Videos </a></div></div>');
            }
            if ($('.hpe-in-video-g-yt-url').length) { // Specific Video
                $('.hpe-in-video-g-yt-url').each(function() {
                    var vm = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var vs = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var hvid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Video" onclick="OpenBLPopup(\'/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=' + hvid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=hpe_video_g_yt_url#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Video" onclick="OpenBLPopup(\'/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_video_g_yt_urlxy' + vm + '&&' + vs + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Video" onclick="return confirmdelete(\'' + dl1 + ' Video' + dl2 + '\', \'/' + pdist + 'lid=Galleries&lid2=&level=0&pform=galleries&dname=Galleries&pkeyname=sys_information_id&pkey=' + hvid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div><header class="hp-hheader">VideoGallery - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            // Videos - Gallery - YT(Code)
            if ($('.hpe-video-g-yt-code').length) {
                var vm = $('.hpe-video-g-yt-code.hp-x').attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                var vs = $('.hpe-video-g-yt-code.hp-x').attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                $('.hpe-video-g-yt-code.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Galleries&x=&site=' + wsite + '#hpe_video_g_yt_code$$' + vm + '&&' + vs + '\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Videos </a></div></div>');
            }
            if ($('.hpe-in-video-g-yt-code').length) { // Specific Video
                $('.hpe-in-video-g-yt-code').each(function() {
                    var vm = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var vs = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var hvid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Video" onclick="OpenBLPopup(\'/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=' + hvid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=hpe_video_g_yt_code#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Video" onclick="OpenBLPopup(\'/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_video_g_yt_codexy' + vm + '&&' + vs + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Video" onclick="return confirmdelete(\'' + dl1 + ' Video' + dl2 + '\', \'/' + pdist + 'lid=Galleries&lid2=&level=0&pform=galleries&dname=Galleries&pkeyname=sys_information_id&pkey=' + hvid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div><header class="hp-hheader">VideoGallery - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            // Videos - Gallery - YT(ID)
            if ($('.hpe-video-g-yt-id').length) { // Whole Video Area
                var vm = $('.hpe-video-g-yt-id.hp-x').attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                var vs = $('.hpe-video-g-yt-id.hp-x').attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                $('.hpe-video-g-yt-id.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Galleries&x=&site=' + wsite + '#hpe_video_g_yt_id$$' + vm + '&&' + vs + '\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Videos </a></div></div>');
            }
            if ($('.hpe-in-video-g-yt-id').length) { // Specific Video
                $('.hpe-in-video-g-yt-id').each(function() {
                    var vm = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var vs = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var hvid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Video" onclick="OpenBLPopup(\'/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=' + hvid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=hpe_video_g_yt_id#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Video" onclick="OpenBLPopup(\'/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_video_g_yt_idxy' + vm + '&&' + vs + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Video" onclick="return confirmdelete(\'' + dl1 + ' Video' + dl2 + '\', \'/' + pdist + 'lid=Galleries&lid2=&level=0&pform=galleries&dname=Galleries&pkeyname=sys_information_id&pkey=' + hvid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div><header class="hp-hheader">VideoGallery - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            // Photo - Gallery
            if ($('.hpe-photo-g').length) { // Whole Photo Area
                var pm = $('.hpe-photo-g.hp-x').attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                var ps = $('.hpe-photo-g.hp-x').attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                $('.hpe-photo-g.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Galleries&x=&site=' + wsite + '#hpe_photo_g$$' + pm + '&&' + ps + '\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Photos </a></div></div>');
            }
            if ($('.hpe-in-photo-g').length) { // Specific Photo
                $('.hpe-in-photo-g').each(function() {
                    var pm = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var ps = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var hpid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Photo" onclick="OpenBLPopup(\'/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=' + hpid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Photo" onclick="OpenBLPopup(\'/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_photo_gxy' + pm + '&&' + ps + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Photo" onclick="return confirmdelete(\'' + dl1 + ' Photo' + dl2 + '\', \'/' + pdist + 'lid=Galleries&lid2=&level=0&pform=galleries&dname=Galleries&pkeyname=sys_information_id&pkey=' + hpid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a></div></div>');
                    }
                });
            }
            // Old PhotoGallery
            if ($('.hpe-old-photog').length) {
                $('.hpe-old-photog.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=PhotoGallery&x=&site=' + wsite + '#hpe_old_photogx\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Photos </a></div></div>');
            }
            // ArticleGroup
            if ($('.hpe-in-artgroup').length) {
                $('.hpe-in-artgroup').each(function() {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" title="Edit Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=preview#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a href="javascript:void(0);" title="Add New Article" onclick="OpenBLPopup(\'/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=artgroup&isdate=' + isdate + '#hpe_prevxy$$' + m + '&&' + s + '\',\'iframe\');"><i class="fa fa-plus" aria-hidden="true"></i><b class="hp-llable">New</b></a><a href="javascript:void(0);" title="Delete Article" onclick="return confirmdelete(\'' + dl1 + ' Article' + dl2 + '\', \'/' + pdist + 'lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_deletex\');"><i class="fa fa-trash" aria-hidden="true"></i><b class="hp-llable">Delete</b></a><a title="View Article" href="' + durl + '"><i class="fa fa-external-link" aria-hidden="true"></i><b class="hp-llable">View</b></a></div><header class="hp-hheader">ArticleGroup - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            // Hitcounter
            if ($('.hpe-hitcounter').length) {
                $('.hpe-hitcounter.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'pform=options_systems&pkeyname=sys_option_system_id&pkey=1&x=&site=' + wsite + '#hpe_hitcounter\',\'iframe\');" title="Edit Hit Counter"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div><header class="hp-hheader">Hit Counter</header></div>');
            }
            // Social
            if ($('.hpe-social').length) {
                $('.hpe-social').addClass('hp-ppp');
                var hlp = "Click on 'EDIT' button/icon and provide us social media links.<br>We will update it within few minutes."
                $('.hpe-social.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_social\',\'iframe\');" title="Edit Social Media Links"><i class="fa fa-question-circle" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a class="hp-help hp-tt" href="javascript:void(0);" title="' + hlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a></div><header class="hp-hheader">Social Links</header></div>');
            }
            // Bottom Links
            if ($('.hpe-bottom-links').length) {
                $('.hpe-bottom-links').addClass('hp-ppp');
                var hlp = "You can write us to add/update/delete links.";
                $('.hpe-bottom-links.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_bottom_links\',\'iframe\');" title="Edit Links"><i class="fa fa-question-circle" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a class="hp-help hp-tt" href="javascript:void(0);" title="' + hlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a></div><header class="hp-hheader">Bottom Links</header></div>');
            }
            // Top Links
            if ($('.hpe-top-links').length) {
                $('.hpe-top-links').addClass('hp-ppp');
                var hlp = "You can write us to add/update/delete links.";
                $('.hpe-top-links.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_top_links\',\'iframe\');" title="Edit Links"><i class="fa fa-question-circle" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a class="hp-help hp-tt" href="javascript:void(0);" title="' + hlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a></div><header class="hp-hheader">Top Links</header></div>');
            }
            // Google Custom Search
            if ($('.hpe-gsearch').length) {
                $('.hpe-gsearch').addClass('hp-ppp');
                var hlp = "Please write us if it will not show results from your site.";
                $('.hpe-gsearch.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_gsearch\',\'iframe\');" title="Any issues with Search?"><i class="fa fa-question-circle" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a class="hp-help hp-tt" href="javascript:void(0);" title="' + hlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a></div><header class="hp-hheader">Search Bar</header></div>');
            }
            // Forms
            if ($('.hpe-formbody').length) {
                var fn = $.urlParam('pform');
                createCookie('hpe_formname' + wd, fn);
                $('.hpe-formbody.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_formbodys\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Form</a></div></div>');
            }
            // Service Package
            if ($('.hpe-sp').length) {
                $('.hpe-sp.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_spackages\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div></div>');
            }
            // Custom Sections
            var ch;
            for (ch = 1; ch <= 1000; ch++) {
                if ($('.hpe-custom-text-' + ch).length) { // TEXT
                    $('[class*="hpe-custom-text-' + ch + ' hp-x"] .hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Sections&lid2=&level=1&pform=sections&pkeyname=section_id&pkey=' + ch + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&fpx=cust_text&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div></div>');
                }
                if ($('.hpe-custom-html-' + ch).length) { // HTML
                    $('[class*="hpe-custom-html-' + ch + ' hp-x"] .hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Sections&lid2=&level=1&pform=sections&pkeyname=section_id&pkey=' + ch + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&fpx=cust_html&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div></div>');
                }
                if ($('.hpe-custom-img-' + ch).length) { // IMAGE
                    $('[class*="hpe-custom-img-' + ch + ' hp-x"] .hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Sections&lid2=&level=1&pform=sections&pkeyname=section_id&pkey=' + ch + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&fpx=cust_img&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div></div>');
                }
                if ($('.hpe-weather-' + ch).length) { // Weather Widget
                    var hlp = 'Provide us weather location and we will update it for you.';
                    $('[class*="hpe-weather-' + ch + ' hp-x"] .hp-y').append('<div class="hp-z"><div class="hp-span"><a title="Edit" href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=Sections&lid2=&level=1&pform=sections&pkeyname=section_id&pkey=' + ch + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&fpx=weather&hpe=Y#hpe_updatex\',\'iframe\');"><i class="fa fa-question-circle" aria-hidden="true"></i><b class="hp-llable">Edit</b></a><a class="hp-help hp-tt" href="javascript:void(0);" title="' + hlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a></div><header class="hp-hheader">Weather</header></div>');
                }
            }
            // Box width and Height (2nd time)
            $('.hp-x').each(function() {
                $(this).mouseover(function() {
                    $(this).stop(true, true).removeClass('hp-ppp');
                }).mouseout(function() {
                    $(this).stop(true, true).addClass('hp-ppp');
                });
                if ($(this).css('float') != 'left') {
                    $(this).addClass('hpe-left');
                }
                $(this).children('.hp-y').css('width', $(this).outerWidth());
                $(this).children('.hp-y').css('height', $(this).outerHeight());
                $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                $(this).removeClass('hp-show-lable hp-hide-delete');
                if ($(this).height() < 40) {
                    $(this).children('.hp-y').addClass('hp-smallh');
                } else if ($(this).height() > 999) {
                    $(this).children('.hp-y').addClass('hp-longh');
                }
                if ($(this).width() < 32) {
                    $(this).children('.hp-y').addClass('hp-smallw');
                }
                if ($(this).width() > 300 && $(this).height() > 60) {
                    $(this).addClass('hp-show-lable');
                }
                if ($(this).width() < 65) {
                    $(this).addClass('hp-hide-help');
                } else {
                    $(this).removeClass('hp-hide-help');
                }
                if ($(this).width() >= 140) { // Box Header
                    if ($(this).height() <= 55) {
                        $(this).addClass('hp-show-hheader-3');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                    } else if ($(this).height() <= 75) {
                        $(this).addClass('hp-show-hheader-2');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                    } else if ($(this).height() > 75) {
                        $(this).addClass('hp-show-hheader-1');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                    }
                } else if ($(this).height() <= 54) {
                    $(this).addClass('hp-hide-hheader');
                    $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');
                }
                if (!$(this).siblings('.hp-x').length) {
                    $(this).addClass('hp-hide-delete');
                }
                if ($(this).parent('.had-tr').length) {
                    $(this).addClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div3').parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                $('.hpe-in-menu').removeClass('hp-hide-delete');
                $(this).removeClass('hpe-left');
            });
            // Reload while closing popup window
            var s = setInterval(function() {
                if (readCookie('hpe_blank' + wd)) {
                    eraseCookie('hpe_blank' + wd);
                    setTimeout(function() {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                    }, 1000);
                }
                if (readCookie('hpe_hide_iframe' + wd) == 'Yes') {
                    eraseCookie('hpe_hide_iframe' + wd);
                    $('.mfp-iframe.hpe-iframe').addClass('hpe-iframe-close');
                    $('.hpe-loader.hpe-loader-start').addClass('hpe-loader-restart');
                }
                if (readCookie('hpe_poll_close' + wd) == 'Yes') {
                    $('.hpe-loader.hpe-loader-start').removeClass('hpe-loader-restart');
                    $('.hp-x-popup').addClass('hp-sslide2');
                    $('.hpe-iframe').animate({ opacity: 0 }, 400);
                    setTimeout(function() {
                        $('.hp-x-popup .mfp-close').click();
                    }, 500);
                }
                if (readCookie('hpe_delete_close' + wd) == 'Yes') { // Delete
                    clearInterval(s);
                    eraseCookie('hpe_delete_close' + wd);
                    //$('.hpe-loader.hpe-loader-start').removeClass('hpe-loader-restart');
                    $('.hp-x-popup').addClass('hp-sslidex');
                    $('.hpe-iframe').animate({ opacity: 0 }, 500);
                    window.location.href = window.location.href;
                }
                if (readCookie('hpe_detail_delete_close' + wd) == 'Yes') { // Detail Delete
                    clearInterval(s);
                    var i = readCookie('hpe_detail_delete2' + wd);
                    eraseCookie('hpe_detail_delete_close' + wd);
                    $('.hpe-loader.hpe-loader-start').removeClass('hpe-loader-restart');
                    $('.hp-x-popup').addClass('hp-sslidex');
                    $('.hpe-iframe').animate({ opacity: 0 }, 500);
                    window.location = 'https://' + location.href.match(/:\/\/(.[^/]+)/)[1] + '/hpeditor' + pext + '?lb=index' + i + '.htm' + '&site=' + wsite;
                }
                if (readCookie('hpe_cancel' + wd) == 'Yes') {
                    $('.hp-x-popup').addClass('hp-sslide2');
                    $('.hpe-iframe').animate({ opacity: 0 }, 400);
                    setTimeout(function() {
                        $('.hp-x-popup .mfp-close').click();
                    }, 500);
                }
                $('.hp-x-popup .mfp-close').click(function() {
                    eraseCookie('hpe_old_event' + wd);
                    eraseCookie('hpe_old_photogx' + wd);
                    eraseCookie('hpe_old_directory' + wd);
                    eraseCookie('hpe_old_classified' + wd);
                    if (readCookie('hpe_submit' + wd) == 'Yes') {
                        eraseCookie('hpe_submit' + wd);
                        var hr;
                        for (hr = 1; hr <= 20; hr++) {
                            if (readCookie('hpe_hlx' + hr + wd) == 'Yes') {
                                eraseCookie('hpe_hlx' + hr + wd);
                            }
                        }
                        eraseCookie('hpe_support' + wd);
                        eraseCookie('hpe_menu' + wd);
                        eraseCookie('hpe_hide_iframe' + wd);
                        eraseCookie('hpe_cancel' + wd);
                        eraseCookie('hpe_prevx' + wd);
                        eraseCookie('hpe_xprevx' + wd);
                        eraseCookie('hpe_ms_prev' + wd);
                        eraseCookie('hpe_ms_xprev' + wd);
                        eraseCookie('hpe_delete_hl' + wd);
                        eraseCookie('hpe_updatex' + wd);
                        eraseCookie('hpe_update_setting' + wd);
                        eraseCookie('hpe_newx' + wd);
                        eraseCookie('hpe_newh' + wd);
                        eraseCookie('hpe_deletex' + wd);
                        eraseCookie('hpe_video_g_yt_urlx' + wd);
                        eraseCookie('hpe_ms_video' + wd);
                        eraseCookie('hpe_ms_photo' + wd);
                        eraseCookie('hpe_video_g_yt_codex' + wd);
                        eraseCookie('hpe_video_g_yt_idx' + wd);
                        eraseCookie('hpe_photo_gx' + wd);
                        eraseCookie('hpe_formname' + wd);
                        eraseCookie('hpe_spname' + wd);
                        eraseCookie('hpe_old_photogx' + wd);
                        eraseCookie('hpe_update_pollx' + wd);
                        eraseCookie('hpe_new_pollx' + wd);
                        eraseCookie('hpe_delete_pollx' + wd);
                        eraseCookie('hpe_ticket' + wd);
                        eraseCookie('hpe_xartgroupx' + wd);
                        eraseCookie('hpe_artgroupx' + wd);
                        eraseCookie('hpe_art_detailx' + wd);
                        eraseCookie('hpe_eventx' + wd);
                        eraseCookie('hpe_event_detailx' + wd);
                        eraseCookie('hpe_ms_event' + wd);
                        eraseCookie('hpe_old_event' + wd);
                        eraseCookie('hpe_old_directory' + wd);
                        eraseCookie('hpe_old_classified' + wd);
                        eraseCookie('hpe_in_menux' + wd);
                        if (readCookie('hpe_poll_close' + wd) == 'Yes') {
                            clearInterval(s);
                            eraseCookie('hpe_poll_close' + wd);
                            eraseCookie('hpe_art_detail_url' + wd);
                            eraseCookie('hpe_event_detail_url' + wd);
                            eraseCookie('hpe_rurl' + wd);
                            //window.location.reload();
                            window.location.href = window.location.href;
                        }
                        if (readCookie('hpe_art_detail_url' + wd) && readCookie('hpe_rurl' + wd)) {
                            clearInterval(s);
                            var aurl = readCookie('hpe_art_detail_url' + wd);
                            eraseCookie('hpe_art_detail_url' + wd);
                            eraseCookie('hpe_rurl' + wd);
                            window.location.href = aurl + '&hpe_view=hp_editor$$' + location.href.match(/:\/\/(.[^/]+)/)[1];
                        }
                        if (readCookie('hpe_event_detail_url' + wd) && readCookie('hpe_rurl' + wd)) {
                            clearInterval(s);
                            var aurl = readCookie('hpe_event_detail_url' + wd);
                            eraseCookie('hpe_event_detail_url' + wd);
                            eraseCookie('hpe_rurl' + wd);
                            window.location.href = aurl + '&hpe_view=hp_editor__' + location.href.match(/:\/\/(.[^/]+)/)[1] + '';
                        }
                        if (readCookie('hpe_detail_delete' + wd) && readCookie('hpe_rurl' + wd)) {
                            clearInterval(s);
                            var iurl = readCookie('hpe_detail_delete' + wd);
                            eraseCookie('hpe_detail_delete' + wd);
                            eraseCookie('hpe_rurl' + wd);
                            createCookie('hpe_success_delete' + wd, 'Deleted Successfully');
                            window.location.href = iurl;
                        }
                        if (!readCookie('hpe_rurl' + wd)) {
                            eraseCookie('hpe_art_detail_url' + wd);
                            eraseCookie('hpe_event_detail_url' + wd);
                            eraseCookie('hpe_detail_delete' + wd);
                        }
                    }
                });
            }, 10);
            $('[class*="hpe-"].hp-x .hp-y .hp-z .hp-span a').click(function() {
                setTimeout(function() {
                    $('.hp-x-popup iframe.mfp-iframe').load(function() {
                        $('.mfp-iframe-holder .mfp-close').css('visibility', 'visible');
                        $('.mfp-iframe-holder .mfp-close').animate({ 'opacity': 1 }, 300);
                    });
                }, 300);
            });
        }
        // ToolTip - Slider
        var shlp = "Drag the slider left to right side by holding the mouse to see next article.";
        var shlp_up = "Drag the slider up to down side by holding the mouse to see next article.";
        $('.hp-slide .hp-x .hp-y .hp-z .hp-span').append('<a class="hp-help hp-tt" href="javascript:void(0);" title="' + shlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a>');
        $('.hp-slide-left .hp-x .hp-y .hp-z .hp-span').append('<a class="hp-help hp-tt" href="javascript:void(0);" title="' + shlp + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a>');
        $('.hp-slide-up .hp-x .hp-y .hp-z .hp-span').append('<a class="hp-help hp-tt" href="javascript:void(0);" title="' + shlp_up + '"><i class="fa fa-info-circle" aria-hidden="true"></i><b class="hp-llable">Help</b></a>');
        // Tooltip on help button
        if (typeof Tipped !== "undefined") {
            Tipped.create('.hp-tt', {
                ajax: false,
                closeButton: false,
                showOn: 'click',
                skin: 'cloud',
                fixed: true,
                target: 'mouse',
                maxWidth: 500
            });
        }
        // Get Current Ad width & Height
        $('.hpe-i-ad').each(function() {
            agi = $(this).attr('data-adnum');
            if ($(this).children('.custom_adgroup_' + agi).length) {
                $(this).attr('data-cad-width', $(this).children('.custom_adgroup_' + agi).width());
                $(this).attr('data-cad-height', $(this).children('.custom_adgroup_' + agi).height());
            }
            if ($(this).children('a').children('.custom_adgroup_' + agi).length) {
                $(this).attr('data-cad-width', $(this).children('a').children('.custom_adgroup_' + agi).width());
                $(this).attr('data-cad-height', $(this).children('a').children('.custom_adgroup_' + agi).height());
            }
            if ($(this).children('span').children('.custom_adgroup_' + agi).length) {
                $(this).attr('data-cad-width', $(this).children('span').children('.custom_adgroup_' + agi).width());
                $(this).attr('data-cad-height', $(this).children('span').children('.custom_adgroup_' + agi).height());
            }
            if ($(this).children('span').children('a').children('.custom_adgroup_' + agi).length) {
                $(this).attr('data-cad-width', $(this).children('span').children('a').children('.custom_adgroup_' + agi).width());
                $(this).attr('data-cad-height', $(this).children('span').children('a').children('.custom_adgroup_' + agi).height());
            }
            if (typeof $(this).attr('data-cad-width') !== "undefined" && typeof $(this).attr('data-cad-height') !== "undefined") {
                if ($(this).attr('data-cad-width') == '0' || $(this).attr('data-cad-width') <= 239) {} else {
                    $(this).children('.hp-y').children('.hp-z').children('cpanel').text('Current: ' + $(this).attr('data-cad-width') + 'px x ' + $(this).attr('data-cad-height') + 'px');
                }
            }
        });
        // Get Current Logo width & Height
        $('.hpe-logo').each(function() {
            $(this).children('#logo').addClass('hp-left');
            if ($(this).children('#logo').length) {
                $(this).attr('data-clogo-width', $(this).children('#logo').width());
                $(this).attr('data-clogo-height', $(this).children('#logo').height());
            }
            if ($(this).children('#logo').children('img').length) {
                $(this).attr('data-clogo-width', $(this).children('#logo').children('img').width());
                $(this).attr('data-clogo-height', $(this).children('#logo').children('img').height());
            }
            if ($(this).attr('data-clogo-width') && $(this).attr('data-clogo-height')) {
                $(this).children('.hp-y').children('.hp-z').children('cpanel').text('Current: ' + $(this).attr('data-clogo-width') + 'px x ' + $(this).attr('data-clogo-height') + 'px');
            }
            $(this).children('#logo').removeClass('hp-left');
        });


    }
});
// After full site load
$(window).bind('load', function() {
    if ($(document).width() > 1024) { // Box Width & Height
        // paths
        var lx = 'list';
        var lngn = '2.a'
        var lngl = 'sp'
        var plist = lx + lngn + lngl + '?';
        var pext = '.a' + lngl;
        var lhrx = location.href;
        var lhurlx = new URL(lhrx);
        var wsite = lhurlx.searchParams.get("site");
        var fx = 'form';
        var pfist = fx + lngn + lngl + '?';
        if (window.location.href.indexOf("/hpeditor.") != -1) {
            var lhrx = location.href;
            var lhurlx = new URL(lhrx);
            var wsite = lhurlx.searchParams.get("site");
            var wd = '_' + wsite.split('.').shift();
            // Home Link 
            $('.hp-homemenu-child .hp-menulink').attr('href', '/hpeditor' + pext + '?site=' + wsite);

            $('a').each(function() { // Change link into editor link
                if ($(this).attr('href')) {
                    if ($(this).attr('href').indexOf('hp_editor') == -1) {
                        $(this).removeAttr('target');
                    }
                }
            });

            $('.formbody, .custom-form').addClass('hpe-formbody'); // Add Form Class
            $('#frame1[src*="pform"]').parent('#MainContent').addClass('hpe-formbody'); // Add Form Class 2
            $('#frame1[src*="target_service_package' + pext + '"]').parent('#MainContent').addClass('hpe-sp'); // Add Service Package Class
            $('.hpe-sp').css('width', '100%');
            $('#frame1[src*="target_yellowpage' + pext + '"]').parent('#MainContent').addClass('hpe-old-directory'); // Add Old Directory Class
            $('#frame1[src*="target_classifieds' + pext + '"]').parent('#MainContent').addClass('hpe-old-classified'); // Add Old Classified
            $('.eventbody').addClass('hpe-old-event'); // Add Old Event Class 
            $('.hpe-old-event').css('width', '100%');
            $('[class*="hpe-"]').addClass('hp-x');
            $('[class*="hpe-"]').each(function() {
                if ($(this).children('.hp-y').length == 0) {
                    $(this).prepend('<div class="hp-y"></div>');
                }
            });
            $('.hp-x').each(function() {
                $(this).mouseover(function() {
                    $(this).stop(true, true).removeClass('hp-ppp');
                }).mouseout(function() {
                    $(this).stop(true, true).addClass('hp-ppp');
                });
                if ($(this).css('float') != 'left') {
                    $(this).addClass('hpe-left');
                }
                $(this).children('.hp-y').css('width', $(this).outerWidth());
                $(this).children('.hp-y').css('height', $(this).outerHeight());
                $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                $(this).removeClass('hp-show-lable hp-hide-delete');
                if ($(this).height() < 40) {
                    $(this).children('.hp-y').addClass('hp-smallh');
                } else if ($(this).height() > 999) {
                    $(this).children('.hp-y').addClass('hp-longh');
                }
                if ($(this).width() < 32) {
                    $(this).children('.hp-y').addClass('hp-smallw');
                }
                if ($(this).width() > 300 && $(this).height() > 60) {
                    $(this).addClass('hp-show-lable');
                }
                if ($(this).width() < 65) {
                    $(this).addClass('hp-hide-help');
                } else {
                    $(this).removeClass('hp-hide-help');
                }
                if ($(this).width() >= 140) { // Box Header
                    if ($(this).height() <= 55) {
                        $(this).addClass('hp-show-hheader-3');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                    } else if ($(this).height() <= 75) {
                        $(this).addClass('hp-show-hheader-2');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                    } else if ($(this).height() > 75) {
                        $(this).addClass('hp-show-hheader-1');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                    }
                } else if ($(this).height() <= 54) {
                    $(this).addClass('hp-hide-hheader');
                    $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');
                }
                if (!$(this).siblings('.hp-x').length) {
                    $(this).addClass('hp-hide-delete');
                }
                if ($(this).parent('.had-tr').length) {
                    $(this).addClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div3').parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                $(this).removeClass('hpe-left');
            });
            setIntervalLimited(function() {
                //setInterval(function(){
                $('.hp-x').each(function() {
                    $(this).mouseover(function() {
                        $(this).stop(true, true).removeClass('hp-ppp');
                    }).mouseout(function() {
                        $(this).stop(true, true).addClass('hp-ppp');
                    });
                    if ($(this).css('float') != 'left') {
                        $(this).addClass('hpe-left');
                    }
                    $(this).children('.hp-y').css('width', $(this).outerWidth());
                    $(this).children('.hp-y').css('height', $(this).outerHeight());
                    $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                    $(this).removeClass('hp-show-lable hp-hide-delete');
                    if ($(this).height() < 40) {
                        $(this).children('.hp-y').addClass('hp-smallh');
                    } else if ($(this).height() > 999) {
                        $(this).children('.hp-y').addClass('hp-longh');
                    }
                    if ($(this).width() < 32) {
                        $(this).children('.hp-y').addClass('hp-smallw');
                    }
                    if ($(this).width() > 300 && $(this).height() > 60) {
                        $(this).addClass('hp-show-lable');
                    }
                    if ($(this).width() < 65) {
                        $(this).addClass('hp-hide-help');
                    } else {
                        $(this).removeClass('hp-hide-help');
                    }
                    if ($(this).width() >= 140) { // Box Header
                        if ($(this).height() <= 55) {
                            $(this).addClass('hp-show-hheader-3');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                        } else if ($(this).height() <= 75) {
                            $(this).addClass('hp-show-hheader-2');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                        } else if ($(this).height() > 75) {
                            $(this).addClass('hp-show-hheader-1');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                        }
                    } else if ($(this).height() <= 54) {
                        $(this).addClass('hp-hide-hheader');
                        $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');
                    }
                    if (!$(this).siblings('.hp-x').length) {
                        $(this).addClass('hp-hide-delete');
                    }
                    if ($(this).parent('.had-tr').length) {
                        $(this).addClass('hp-hide-delete');
                    }
                    if ($(this).parent('.hp-parent-div3').parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                        $(this).removeClass('hp-hide-delete');
                    }
                    if ($(this).parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                        $(this).removeClass('hp-hide-delete');
                    }
                    if ($(this).parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                        $(this).removeClass('hp-hide-delete');
                    }
                    $(this).removeClass('hpe-left');
                    $('.hp-hide-help.hp-x .hp-y .hp-z .hp-help').remove();
                });

                // If Parent are not in same order
                $('.hp-parent').each(function() {
                    if ($(this).children('.hp-parent-div1').length > 1) {
                        $(this).children('.hp-parent-div1').addClass('hp-parent-hide-delete');
                        $(this).children('.hp-parent-div1').removeClass('hp-hide-delete');
                    }
                });

                // Get Current Ad width & Height
                $('.hpe-i-ad').each(function() {
                    agi = $(this).attr('data-adnum');
                    if ($(this).children('.custom_adgroup_' + agi).length) {
                        $(this).attr('data-cad-width', $(this).children('.custom_adgroup_' + agi).width());
                        $(this).attr('data-cad-height', $(this).children('.custom_adgroup_' + agi).height());
                    }
                    if ($(this).children('a').children('.custom_adgroup_' + agi).length) {
                        $(this).attr('data-cad-width', $(this).children('a').children('.custom_adgroup_' + agi).width());
                        $(this).attr('data-cad-height', $(this).children('a').children('.custom_adgroup_' + agi).height());
                    }
                    if ($(this).children('span').children('.custom_adgroup_' + agi).length) {
                        $(this).attr('data-cad-width', $(this).children('span').children('.custom_adgroup_' + agi).width());
                        $(this).attr('data-cad-height', $(this).children('span').children('.custom_adgroup_' + agi).height());
                    }
                    if ($(this).children('span').children('a').children('.custom_adgroup_' + agi).length) {
                        $(this).attr('data-cad-width', $(this).children('span').children('a').children('.custom_adgroup_' + agi).width());
                        $(this).attr('data-cad-height', $(this).children('span').children('a').children('.custom_adgroup_' + agi).height());
                    }
                    if (typeof $(this).attr('data-cad-width') !== "undefined" && typeof $(this).attr('data-cad-height') !== "undefined") {
                        if ($(this).attr('data-cad-width') == '0' || $(this).attr('data-cad-width') <= 239) {} else {
                            $(this).children('.hp-y').children('.hp-z').children('cpanel').text('Current: ' + $(this).attr('data-cad-width') + 'px x ' + $(this).attr('data-cad-height') + 'px');
                        }
                    }
                });
                // Get Current Logo width & Height
                $('.hpe-logo').each(function() {
                    $(this).children('#logo').addClass('hp-left');
                    if ($(this).children('#logo').length) {
                        $(this).attr('data-clogo-width', $(this).children('#logo').width());
                        $(this).attr('data-clogo-height', $(this).children('#logo').height());
                    }
                    if ($(this).children('#logo').children('img').length) {
                        $(this).attr('data-clogo-width', $(this).children('#logo').children('img').width());
                        $(this).attr('data-clogo-height', $(this).children('#logo').children('img').height());
                    }
                    if ($(this).attr('data-clogo-width') && $(this).attr('data-clogo-height')) {
                        $(this).children('.hp-y').children('.hp-z').children('cpanel').text('Current: ' + $(this).attr('data-clogo-width') + 'px x ' + $(this).attr('data-clogo-height') + 'px');
                    }
                    $(this).children('#logo').removeClass('hp-left');
                });


            }, 3000, 3);

            // Forms
            if ($('.hpe-formbody').length) {
                var fn = $.urlParam('pform');
                createCookie('hpe_formname' + wd, fn);
                $('.hpe-formbody.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_formbodys\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Form</a></div></div>');
            }
            // Service Package
            if ($('.hpe-sp').length) {
                $('.hpe-sp.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_spackages\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i><b class="hp-llable">Edit</b></a></div></div>');
            }
            // Events (Old)
            if ($('.hpe-old-event').length) {
                $('.hpe-old-event.hp-x').each(function() {
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Events&x=&site=' + wsite + '#hpe_old_event\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Events </a></div></div>');
                    }
                });
            }

            // Directory (Old)
            if ($('.hpe-old-directory').length) {
                $('.hpe-old-directory.hp-x').each(function() {
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=CustomersSetup&x=&site=' + wsite + '#hpe_old_directory\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Directory </a></div></div>');
                    }
                });
            }
            // Classified (Old)
            if ($('.hpe-old-classified').length) {
                $('.hpe-old-classified.hp-x').each(function() {
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenBLPopup(\'/' + plist + 'lid=Classifieds&x=&site=' + wsite + '#hpe_old_classified\',\'iframe\');"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Classified </a></div></div>');
                    }
                });
            }

            setInterval(function() { // DifferentSpotTime Ad
                $('.hpe-i-ad.divDiffSpotTime.hp-x').each(function() {
                    $(this).mouseover(function() {
                        $(this).stop(true, true).removeClass('hp-ppp');
                    }).mouseout(function() {
                        $(this).stop(true, true).addClass('hp-ppp');
                    });
                });
            }, 500);
        }
    }
});
// END: Live Builder(hpeditor.htm)

///////////////////////////////////////// Site Manager //////////////////////////////////////////////////////////////

// BEGIN: Live Builder(Site Manager)
$(document).ready(function() {
    // vars
    var lx = 'list';
    var lngn = '2.a'
    var lngl = 'sp'
    var fx = 'form';
    var dx = 'delete';
    var plist = lx + lngn + lngl + '?';
    var pfist = fx + lngn + lngl + '?';
    var pdist = dx + lngn + lngl + '?';
    var pext = '.a' + lngl;
    if (window.location.href.indexOf("site=") != -1) {
        var lhr = location.href;
        var lhurl = new URL(lhr);
        var surlw = lhurl.searchParams.get("site");
        var wd = '_' + surlw.split('.').shift();
    }
    // Get Domain
    var dplb = 'https://' + location.href.match(/:\/\/(.[^/]+)/)[1];
    // Hide Site Manager after submitting "Settings"
    if (window.location.href.indexOf("/responsibility" + pext) != -1 && window.location.href.indexOf("/responsibility" + pext + "#hpe_$") == -1 && readCookie('hpe_page1' + wd) == 'Yes') {
        // $('.main_wrapper').css('display', 'none');
    }
    // General
    if (window.location.href.indexOf("#hpe_") != -1) {
        $('.my-form').addClass('hpe-my-form');
        $('.main_wrapper').addClass('hpe-main_wrapper');
        $('#form_header_links, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
        $('#form_header_wrapper').css({ 'margin-left': 'auto', 'width': '100%' });
        $('.form_header').css('float', 'none');
        if ($('#submit1').length || $('#submit2').length) {
            createCookie('hpe_submit' + wd, 'Yes');
        }
    }
    // Blank Page after submit
    if (window.location.href.indexOf("/hpe_home") != -1) {
        if (readCookie('hpe_art_detail_url' + wd) || readCookie('hpe_event_detail_url' + wd) || readCookie('hpe_detail_delete' + wd)) {
            createCookie('hpe_cancel' + wd, 'Yes');
            createCookie('hpe_rurl' + wd, 'Yes');
        } else if (readCookie('hpe_delete2' + wd)) {
            createCookie('hpe_delete_close' + wd, 'Yes');
            // createCookie('hpe_poll_close' + wd, 'Yes');
        } else if (readCookie('hpe_detail_delete2' + wd)) {
            createCookie('hpe_detail_delete_close' + wd, 'Yes');
        } else {
            createCookie('hpe_poll_close' + wd, 'Yes');
        }
    }


    // LOGO
    if (window.location.href.indexOf("#hpe_logo") != -1) { // Inside "Settings" screen
        $('fieldset').addClass('fieldset_hpe_logo');
        $('#form_header_wrapper span').text('Logo');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == 'Company Logo' || $(this).text() == 'Company Logo (HTML)' || $(this).text() == 'Company Logo (Text)') {
                $(this).parent('.row').parent('section').attr('data-row', $(this).text());
            }
        });
        // createCookie('hpe_update_setting' + wd, 'Yes');
        $('#submit2').click(function() {
            // eraseCookie('hpe_update_setting' + wd);
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
            if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                createCookie('hpe_hide_iframe' + wd, 'Yes');
                clearInterval(hi);
            }
        }, 10);
        $('.input a').each(function() { // remove delete image link
            if ($(this).text() == 'delete') {
                $(this).css('display', 'none');
            }
        });
        $('input[type="file"]').each(function() { // Do not Compress while uploading PNG/GIF/ICO
            $(this).change(function() {
                var f = $(this).val();
                if (f.toLowerCase().indexOf('.png') != -1 || f.toLowerCase().indexOf('.gif') != -1 || f.toLowerCase().indexOf('.ico') != -1) {
                    $('#compressimages').attr('value', 'No');
                }
            });
        });
    }
    if (window.location.href.indexOf("#hpe_logo_img") != -1) { // Inside "Settings" screen
        $('section[data-row="Company Logo (HTML)"]').css('display', 'none');
        $('section[data-row="Company Logo (Text)"]').css('display', 'none');
        $('#submit2').click(function() {
            // eraseCookie('hpe_update_setting' + wd);
            createCookie('hpe_cancel' + wd, 'Yes');
        });
    }
    // if (readCookie('hpe_update_setting' + wd) == 'Yes') {
    //     history.pushState('', '', "#hpe_update_setting");
    // }
    // Menu
    if (readCookie('hpe_menu' + wd) == 'Yes') {
        eraseCookie('hpe_menu' + wd);
        history.pushState('', '', "#hpe_menu");
    }
    if (window.location.href.indexOf("#hpe_menu") != -1 && window.location.href.indexOf("?lid=Menu&") != -1) {
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_menu');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_menu') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
        if ($('#submit1').length || $('#submit2').length) {
            createCookie('hpe_menu' + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_menu") != -1 && window.location.href.indexOf("?lid=Menu&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search
        $('.label.col.col-4').css('width', 'auto');
        $('#FPmenu, #FPsub_menu').css('width', '120px');
    }
    if (window.location.href.indexOf("#hpe_in_submenu$$") != -1 && window.location.href.indexOf("?lid=Menu&") != -1) { // Go to SubMenu(modify)
        var pki = window.location.href.split('&&').pop();
        var fki = window.location.href.split('nu$$').pop().split('&&').shift();
        window.location.href = '/' + pfist + 'lid=Menu&lid2=&level=1&pform=Sub-Menu&pkeyname=sys_menu_sub_id&pkey=' + pki + '&fkeyname=sys_menu_id&fkey=' + fki + '&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_in_submenux';
    }
    if (window.location.href.indexOf("#hpe_in_submenu_") != -1 && window.location.href.indexOf("?lid=Menu&") != -1) { // Inside SubMenu(General)
        $('#form_header_wrapper span').text('Submenu');
        $('.hpe-my-form fieldset section').css('display', 'none');
        var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
            if ($('#submit1').length) {
                if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                    createCookie('hpe_hide_iframe' + wd, 'Yes');
                    clearInterval(hi);
                }
            }
        }, 10);
        $('#submit2').attr('onclick', 'window.location="/hpe_home' + pext + '"');
        $('#submit2').click(function() {
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        createCookie('hpe_menu' + wd, 'Yes');
        createCookie('hpe_in_menux' + wd, 'Yes');
        if (window.location.href.indexOf("#hpe_in_submenu_only") != -1) { // Inside SubMenu(Only Name Change)
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Sub Menu') {
                    $(this).parent('.row').parent('section').css('display', 'block');
                }
            });
        }
        if (window.location.href.indexOf("#hpe_in_submenu_x") != -1) { // Inside SubMenu(All)
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Sub Menu' || $(this).text() == '* Page Type') {
                    $(this).parent('.row').parent('section').css('display', 'block');
                }
            });
            if ($('#target_window').val() == 'Link') { // If Link, then show Link fields
                $('.label.col.col-4').each(function() {
                    if ($(this).text() == 'Link URL' || $(this).text() == 'Link URL Window') {
                        $(this).parent('.row').parent('section').css('display', 'block');
                    }
                });
            }
            $("#target_window").on('change', function() {
                if ($(this).val() == 'Link') {
                    $('.label.col.col-4').each(function() {
                        if ($(this).text() == 'Link URL' || $(this).text() == 'Link URL Window') {
                            $(this).parent('.row').parent('section').css('display', 'block');
                        }
                    });
                } else {
                    $('.label.col.col-4').each(function() {
                        if ($(this).text() == 'Link URL' || $(this).text() == 'Link URL Window') {
                            $(this).parent('.row').parent('section').css('display', 'none');
                        }
                    });
                }
            });
        }
    }
    if (window.location.href.indexOf("#hpe_in_new_submenu") != -1 && window.location.href.indexOf("?lid=Menu&") != -1) { // New Submenu
        $('#form_header_wrapper span').text('SubMenu');
        $('.hpe-my-form fieldset section').css('display', 'none');
        var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
            if ($('#submit1').length) {
                if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                    createCookie('hpe_hide_iframe' + wd, 'Yes');
                    clearInterval(hi);
                }
            }
        }, 10);
        $('#submit2').attr('onclick', 'window.location="/hpe_home' + pext + '"');
        $('#submit2').click(function() {
            eraseCookie('hpe_newx' + wd);
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        createCookie('hpe_menu' + wd, 'Yes');
        createCookie('hpe_newx' + wd, 'Yes');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == '* Sub Menu' || $(this).text() == '* Order No.' || $(this).text() == '* Page Type') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
        if ($('#target_window').val() == 'Link') { // If Link (on load), then show Link fields
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'Link URL' || $(this).text() == 'Link URL Window') {
                    $(this).parent('.row').parent('section').css('display', 'block');
                }
            });
        }
        $("#target_window").on('change', function() { // If Link (on change), then show Link fields
            if ($(this).val() == 'Link') {
                $('.label.col.col-4').each(function() {
                    if ($(this).text() == 'Link URL' || $(this).text() == 'Link URL Window') {
                        $(this).parent('.row').parent('section').css('display', 'block');
                    }
                });
            } else {
                $('.label.col.col-4').each(function() {
                    if ($(this).text() == 'Link URL' || $(this).text() == 'Link URL Window') {
                        $(this).parent('.row').parent('section').css('display', 'none');
                    }
                });
            }
        });
        var smonx = $.urlParam('fpx');
        if (typeof smonx != 'undefined') {
            $('#order_sequence').val(smonx);
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Order No.') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
        }
        $('#target_window option').filter(function() { // Select "Article" as default Page Type
            return ($(this).text().trim() == 'Article');
        }).prop('selected', true);
    }
    if (window.location.href.indexOf("#hpe_in_new_menu") != -1 && window.location.href.indexOf("?lid=Menu&") != -1) { // New Menu
        $('#form_header_wrapper span').text('Menu');
        var dvx = $.urlParam('vpx'); // Set Menu Position (Vertical/Horizontal)
        if (typeof dvx != 'undefined') {
            $('#menu_position option').filter(function() {
                return ($(this).text().trim() == dvx);
            }).prop('selected', true);
        }
        $('.hpe-my-form fieldset section').css('display', 'none');
        var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
            if ($('#submit1').length) {
                if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                    createCookie('hpe_hide_iframe' + wd, 'Yes');
                    clearInterval(hi);
                }
            }
        }, 10);
        $('#submit2').attr('onclick', 'window.location="/hpe_home' + pext + '"');
        $('#submit2').click(function() {
            eraseCookie('hpe_newx' + wd);
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        createCookie('hpe_menu' + wd, 'Yes');
        createCookie('hpe_newx' + wd, 'Yes');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == '* Menu' || $(this).text() == '* Order No.') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
        $('#menu_html').on('input propertychange paste', function() { // Menu Link field changes
            if ($('#menu_html').val().toLowerCase().indexOf('<a') != -1) {
                $('#menu_html_link_flag option').filter(function() {
                    return ($(this).text().trim() == 'Yes');
                }).prop('selected', true);
            }
            if ($('#menu_html').val().toLowerCase().indexOf('<a') == -1) {
                $('#menu_html_link_flag option').filter(function() {
                    return ($(this).text().trim() == 'No');
                }).prop('selected', true);
            }
        });
        var monx = $.urlParam('fpx'); // Set Order No.
        if (typeof monx != 'undefined') {
            $('#order_sequence').val(monx);
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Order No.') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
        }
    }
    if (window.location.href.indexOf("#hpe_in_menu_") != -1 && window.location.href.indexOf("?lid=Menu&") != -1) { // Inside Menu(General)
        $('#form_header_wrapper span').text('Menu');
        $('.hpe-my-form fieldset section').css('display', 'none');
        var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
            if ($('#submit1').length) {
                if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                    createCookie('hpe_hide_iframe' + wd, 'Yes');
                    clearInterval(hi);
                }
            }
        }, 10);
        $('#submit2').attr('onclick', 'window.location="/hpe_home' + pext + '"');
        $('#submit2').click(function() {
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        createCookie('hpe_menu' + wd, 'Yes');
        createCookie('hpe_in_menux' + wd, 'Yes');
        if (window.location.href.indexOf("#hpe_in_menu_only") != -1) { // Menu(Only Name Change)
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Menu') {
                    $(this).parent('.row').parent('section').css('display', 'block');
                }
            });
        }
        if (window.location.href.indexOf("#hpe_in_menu_x") != -1) { //  Menu(All)
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Menu') {
                    $(this).parent('.row').parent('section').css('display', 'block');
                }
            });
            $('#menu_html').on('input propertychange paste', function() { // Menu Link field changes
                if ($('#menu_html').val().toLowerCase().indexOf('<a') != -1) {
                    $('#menu_html_link_flag option').filter(function() {
                        return ($(this).text().trim() == 'Yes');
                    }).prop('selected', true);
                }
                if ($('#menu_html').val().toLowerCase().indexOf('<a') == -1) {
                    $('#menu_html_link_flag option').filter(function() {
                        return ($(this).text().trim() == 'No');
                    }).prop('selected', true);
                }
            });
        }
    }
    if (readCookie('hpe_in_menux' + wd) == 'Yes' && window.location.href.indexOf("?lid=Menu&") != -1 && window.location.href.indexOf("/list") != -1) {
        createCookie('hpe_poll_close' + wd, 'Yes');
        $('.my-form').css('display', 'none');
        $('.my-form').after('<div class="dpe_delete">Updated Successfully</div>');
    }
    // AdGroups
    if (window.location.href.indexOf("#hpe_new_AG") != -1) { // New Ad
        $('.my-form').css('display', 'none');
        var adnumx = window.location.href.split('_AG').pop();
        window.location.href = '/' + pfist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&pkeyname=ar_customers_ads_id&pkey=&fkeyname=group_id&fkey=' + adnumx + '&eflag=Yes&wpage=1&hpath=AdGroup' + adnumx + '&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_newadx';
    }
    if (window.location.href.indexOf("#hpe_newadx") != -1 && window.location.href.indexOf("?lid=CustomersAdsGroups&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Ad Screen
        $('.hpe-my-form fieldset section').css('display', 'none');
        if ($('#starting_date').val() == '') { // if date blank, set default date
            $('#starting_date').val('01/01/2020');
        }
        $('#ad_image').attr('accept', 'image/*'); // Only Image Upload
        $('.label.col.col-4').each(function() {
            if ($(this).text() == '* Ad Description' || $(this).text() == 'Ad Image' || $(this).text() == 'Ad Link / Script') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
        createCookie('hpe_newx' + wd, 'Yes');
        var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
            if ($('#submit1').length) {
                if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                    createCookie('hpe_hide_iframe' + wd, 'Yes');
                    clearInterval(hi);
                }
            }
        }, 10);
        $('#submit2').click(function() {
            eraseCookie('hpe_newx' + wd);
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        $('input[type="file"]').each(function() { // Do not Compress while uploading PNG/GIF/ICO
            $(this).change(function() {
                var f = $(this).val();
                if (f.toLowerCase().indexOf('.png') != -1 || f.toLowerCase().indexOf('.gif') != -1 || f.toLowerCase().indexOf('.ico') != -1) {
                    $('#compressimages').attr('value', 'No');
                }
            });
        });
    }
    if (readCookie('hpe_ag' + wd) == 'Yes') {
        eraseCookie('hpe_ag' + wd);
        history.pushState('', '', "#hpe_ag");
    }
    if (window.location.href.indexOf("#hpe_ag") != -1 && window.location.href.indexOf("?lid=CustomersAdsGroups&") != -1) {
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_ag');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_ag' || $(this).attr('href') == '' + plist + '#hpe_ag') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
        if ($('#submit1').length || $('#submit2').length) {
            createCookie('hpe_ag' + wd, 'Yes');
        }
    }
    // Polls
    if (window.location.href.indexOf("#hpe_update_poll$$") != -1) { // Go to Poll
        $('.my-form').css('display', 'none');
        var pk = window.location.href.split('$$').pop();
        window.location.href = '/' + pfist + 'lid=Polls&lid2=&level=1&pform=polls&pkeyname=sys_poll_id&pkey=' + pk + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_update_pollxy';
    }
    // if (readCookie('hpe_update_pollx' + wd) == 'Yes') {
    //     history.pushState('', '', "#hpe_update_pollx");
    // }
    // if (window.location.href.indexOf("#hpe_update_pollx") != -1 && window.location.href.indexOf("/list") != -1) { // Poll List Hidden
    //     createCookie('hpe_poll_close' + wd, 'Yes');
    //     $('.my-form').css('display', 'none');
    //     $('.my-form').after('<div class="dpe_delete">Updated Successfully</div>');
    // }
    if (window.location.href.indexOf("#hpe_update_pollxy") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // On Poll Page
        if ($('#submit1').length || $('#submit2').length) {
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'Menu' || $(this).text() == 'Poll Location' || $(this).text() == '* Active') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            createCookie('hpe_update_pollx' + wd, 'Yes');
            var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                if ($('#submit1').length) {
                    if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                        clearInterval(hi);
                    }
                }
            }, 10);
            $('#submit2').click(function() {
                eraseCookie('hpe_update_pollx' + wd);
                createCookie('hpe_cancel' + wd, 'Yes');
            });
        }
    }
    if (window.location.href.indexOf("#hpe_new_poll$$") != -1) { // New Poll
        $('.my-form').css('display', 'none');
        window.location.href = '/' + pfist + 'lid=Polls&lid2=&level=1&pform=polls&pkeyname=sys_poll_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_new_polls';
    }
    // if (readCookie('hpe_new_pollx' + wd) == 'Yes') {
    //     history.pushState('', '', "#hpe_new_pollx");
    // }
    // if (window.location.href.indexOf("#hpe_new_pollx") != -1 && window.location.href.indexOf("/list") != -1) { // Poll List Hidden
    //     createCookie('hpe_poll_close' + wd, 'Yes');
    //     $('.my-form').css('display', 'none');
    //     $('.my-form').after('<div class="dpe_delete">Added Successfully</div>');
    // }
    if (window.location.href.indexOf("#hpe_new_polls") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // On New Poll Page
        if ($('#submit1').length || $('#submit2').length) {
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'Menu' || $(this).text() == 'Poll Location' || $(this).text() == '* Active') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            createCookie('hpe_new_pollx' + wd, 'Yes');
            var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                if ($('#submit1').length) {
                    if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                        clearInterval(hi);
                    }
                }
            }, 10);
            $('#submit2').click(function() {
                createCookie('hpe_cancel' + wd, 'Yes');
            });
        }
    }
    if (window.location.href.indexOf("#hpe_delete_poll$$") != -1) { // Delete Poll
        $('.my-form').css('display', 'none');
        var pk = window.location.href.split('$$').pop();
        window.location.href = '/' + pfist + 'lid=Polls&lid2=&level=1&pform=polls&pkeyname=sys_poll_id&pkey=' + pk + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_delete_polls';
    }
    // if (readCookie('hpe_delete_pollx' + wd) == 'Yes') {
    //     history.pushState('', '', "#hpe_delete_pollx");
    // }
    // if (window.location.href.indexOf("#hpe_delete_pollx") != -1 && window.location.href.indexOf("/list") != -1) { // Poll List Hidden
    //     createCookie('hpe_poll_close' + wd, 'Yes');
    //     $('.my-form').css('display', 'none');
    //     $('.my-form').after('<div class="dpe_delete">Deleted Successfully</div>');
    // }
    if (window.location.href.indexOf("#hpe_delete_polls") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // On Poll Page
        createCookie('hpe_delete_pollx' + wd, 'Yes');
        $('.my-form').css('display', 'none');
        var ht = setInterval(function() {
            if ($('#token').val() != '') {
                clearInterval(ht);
                $('#active option').filter(function() {
                    return ($(this).text() == 'No');
                }).prop('selected', true);
                createCookie('hpe_hide_iframe' + wd, 'Yes');
                createCookie('hpe_success_delete' + wd, 'Deleted Successfully');
                $('#submit1').click();
            }
        }, 10);
    }


    // Clear Cookies on Site Manager page
    if (window.location.href.indexOf("/responsibility" + pext) != -1 || window.location.href.indexOf("/login") != -1) {
        eraseCookie('hpe_prevx' + wd);
        eraseCookie('hpe_xprevx' + wd);
        eraseCookie('hpe_ms_prev' + wd);
        eraseCookie('hpe_support' + wd);
        eraseCookie('hpe_ms_xprev' + wd);
        eraseCookie('hpe_delete_hl' + wd);
        eraseCookie('hpe_updatex' + wd);
        eraseCookie('hpe_newx' + wd);
        eraseCookie('hpe_menu' + wd);
        eraseCookie('hpe_newh' + wd);
        eraseCookie('hpe_deletex' + wd);
        eraseCookie('hpe_video_g_yt_urlx' + wd);
        eraseCookie('hpe_ms_video' + wd);
        eraseCookie('hpe_ms_photo' + wd);
        eraseCookie('hpe_video_g_yt_codex' + wd);
        eraseCookie('hpe_video_g_yt_idx' + wd);
        eraseCookie('hpe_photo_gx' + wd);
        eraseCookie('hpe_formname' + wd);
        eraseCookie('hpe_spname' + wd);
        eraseCookie('hpe_update_pollx' + wd);
        eraseCookie('hpe_new_pollx' + wd);
        eraseCookie('hpe_delete_pollx' + wd);
        eraseCookie('hpe_ticket' + wd);
        eraseCookie('hpe_old_photogx' + wd);
        eraseCookie('hpe_xartgroupx' + wd);
        eraseCookie('hpe_artgroupx' + wd);
        eraseCookie('hpe_art_detailx' + wd);
        eraseCookie('hpe_eventx' + wd);
        eraseCookie('hpe_event_detailx' + wd);
        eraseCookie('hpe_ms_event' + wd);
        eraseCookie('hpe_old_event' + wd);
        eraseCookie('hpe_old_directory' + wd);
        eraseCookie('hpe_old_classified' + wd);
        eraseCookie('hpe_in_menux' + wd);
        var he;
        for (he = 1; he <= 20; he++) {
            if (readCookie('hpe_hlx' + he + wd) == 'Yes') {
                eraseCookie('hpe_hlx' + he + wd);
            }
        }
    }
    // Update Specific Article/Video/Photo/Ad
    if (window.location.href.indexOf("#hpe_update_@@") != -1) { // Go to Article 
        $('.my-form').css('display', 'none');
        var haidx = window.location.href.split('hpe_update_@@').pop();
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haidx + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_updatex';
    }
    if (window.location.href.indexOf("#hpe_update_&&") != -1) { // Go to Video/Photo 
        $('.my-form').css('display', 'none');
        var hvidx = window.location.href.split('hpe_update_&&').pop();
        window.location.href = '/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=' + hvidx + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_updatex';
    }
    if (window.location.href.indexOf("#hpe_update_AD") != -1) { // Go to Ad 
        $('.my-form').css('display', 'none');
        var adidx = window.location.href.split('hpe_update_AD').pop().split('_AG').shift();
        var adnumx = window.location.href.split('_AG').pop();
        window.location.href = '/' + pfist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&pkeyname=ar_customers_ads_id&pkey=' + adidx + '&fkeyname=group_id&fkey=' + adnumx + '&wpage=1&hpath=AdGroup' + adnumx + '&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_updatex';
    }
    if (window.location.href.indexOf("#hpe_updatex") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Article/Ad/Poll/Section Screen
        $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
        $('.label.col.col-4').each(function() { // Hide "Active" field
            if ($(this).text() == '* Active') {
                $(this).parent('.row').parent('section').css('display', 'none');
            }
        });
        createCookie('hpe_updatex' + wd, 'Yes');
        var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
            if ($('#submit1').length) {
                if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                    createCookie('hpe_hide_iframe' + wd, 'Yes');
                    clearInterval(hi);
                }
            }
        }, 10);
        $('#submit2').click(function() {
            eraseCookie('hpe_updatex' + wd);
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        if (window.location.href.indexOf("?lid=CustomersAdsGroups&") != -1) { // If Ads
            $('.hpe-my-form fieldset section').css('display', 'none');
            if ($('#starting_date').val() == '') { // if date blank, set default date
                $('#starting_date').val('01/01/2020');
            }
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Ad Description' || $(this).text() == 'Ad Image' || $(this).text() == 'Ad Link / Script') {
                    $(this).parent('.row').parent('section').css('display', 'block');
                }
            });
            $('#ad_image').attr('accept', 'image/*'); // Only Image Upload
        }

        if (window.location.href.indexOf("&fpx=edition") != -1) { // If E-Edition #EEE
            $('.hpe-my-form fieldset section').css('display', 'none');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Heading' || $(this).text() == '* Issue Date' || $(this).text() == 'Picture (primary)' || $(this).text() == 'Picture (secondary)') {
                    $(this).parent('.row').parent('section').css('display', 'block');
                }
                if ($(this).text() == 'Picture (primary)') {
                    $(this).html('Upload Image<br>(PDF Cover)');
                    $(this).siblings('.col.col-11').children('.input').children('a[title="Crop Images"]').css('display', 'none');
                    $(this).siblings('.col.col-11').children('.input').children('.s1').css('display', 'none');
                }
                if ($(this).text() == 'Picture (secondary)') {
                    $(this).text('Upload PDF');
                    $(this).siblings('.col.col-11').children('.input').children('a[title="Crop Images"]').css('display', 'none');
                    $(this).siblings('.col.col-11').children('.input').children('.s1').css('display', 'none');
                }
            });
        }

        if (window.location.href.indexOf("&fpx=codes") != -1) { // If Codes
            $('.hpe-my-form fieldset section').css('display', 'none');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Code Name') {
                    $(this).parent('.row').parent('section').css('display', 'block');
                }
                if ($(this).text() == '* Code Name') {
                    $(this).text('Category Name');
                }
            });
        }

        if (window.location.href.indexOf("&fpx=product") != -1) { // If Product
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Menu' || $(this).text() == '* Category') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
        }

        if (window.location.href.indexOf("&fpx=directory") != -1) { // If Directory
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'Menu' || $(this).text() == '* Category') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
        }


        if (window.location.href.indexOf("&fpx=hlx") != -1) { // If Highlights
            var hx = $.urlParam('fpx');
            var hs = hx.split('hlx').pop();
            createCookie('hpe_hlx' + hs + wd, 'Yes');
        }
        if (window.location.href.indexOf("&fpx=event") != -1) { // If Events (NEW)
            createCookie('hpe_eventx' + wd, 'Yes');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Menu' || $(this).text() == 'Active') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
        }
        if (window.location.href.indexOf("&fpx=event_detail") != -1) { // If Event Details (NEW)
            createCookie('hpe_event_detailx' + wd, 'Yes');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Menu' || $(this).text() == 'Active') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
        }
        if (window.location.href.indexOf("&fpx=art_detail") != -1) { // If Details page, Hide Highlights, Menus, Dates
            createCookie('hpe_art_detailx' + wd, 'Yes');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9' || $(this).text() == '* Issue Date' || $(this).text() == '* Menu' || $(this).text() == 'Display Heading' || $(this).text() == '* Starting Date' || $(this).text() == 'Ending Date') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
        }
        if (window.location.href.indexOf("&fpx=preview") != -1) { // If Previews, Hide Highlights and Menu
            createCookie('hpe_prevx' + wd, 'Yes');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Menu' || $(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
        }
        if (window.location.href.indexOf("&fpx=section") != -1) { // If Section, Hide Active and Menu
            createCookie('hpe_prevx' + wd, 'Yes');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Menu' || $(this).text() == 'Active') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
        }
        if (window.location.href.indexOf("?lid=Sections&") != -1) { // If Custom Sections
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Description' || $(this).text() == 'Active') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
                if (window.location.href.indexOf("&fpx=cust_text") != -1) { // TEXT
                    if ($(this).text() == 'Image') {
                        $(this).parent('.row').parent('section').css('display', 'none');
                    }
                    var secv = $('#section').val();
                    if ($(this).text() == 'SectionClick below:PageDesigner 2PageDesigner 1') {
                        $(this).text('Section');
                        $(this).parent('.row').parent('section').replaceWith('<section class="custom_input_sectionx"><div class="row"><label  style="display:none;" class="label col col-4">Section</label><div class="col col-8" style="margin-left:25%;"><label class="input"><input style="FONT-FAMILY:" id="section" name="section" size="50" maxlength="50" type="Text" value="' + secv + '"></label></div><div class="col col-11"><label class="input"></label></div></div></section>');
                    }
                }
                if (window.location.href.indexOf("&fpx=cust_html") != -1) { // HTML
                    if ($(this).text() == 'SectionClick below:PageDesigner 2PageDesigner 1') {
                        $(this).css('display', 'none');
                        $(this).siblings('.col.col-10').css('margin-left', '19%');
                    }
                    if ($(this).text() == 'Image') {
                        $(this).parent('.row').parent('section').css('display', 'none');

                    }
                }
                if (window.location.href.indexOf("&fpx=cust_img") != -1) { // IMAGE
                    if ($(this).text() == 'SectionClick below:PageDesigner 2PageDesigner 1') {
                        $(this).parent('.row').parent('section').css('display', 'none');
                    }
                    if ($(this).text() == 'Image') {
                        $(this).css('display', 'none');
                        $(this).siblings('.col.col-8').css({ 'margin-left': '37%' });
                    }
                }
                if (window.location.href.indexOf("&fpx=weather") != -1) { // Weather Widget - Top
                    $('.my-form header').css('display', 'block');
                    $('#form_header_wrapper span').text('Weather');
                    if ($(this).text() == 'SectionClick below:PageDesigner 2PageDesigner 1') {
                        $(this).css('display', 'none');
                        $(this).siblings('.col.col-10').css({ 'width': '90%', 'margin-left': '5%' });
                    }
                    if ($(this).text() == 'Image') {
                        $(this).parent('.row').parent('section').css('display', 'none');
                    }
                }
            });
        }

        $('input[type="file"]').each(function() { // Do not Compress while uploading PNG/GIF/ICO
            $(this).change(function() {
                var f = $(this).val();
                if (f.toLowerCase().indexOf('.png') != -1 || f.toLowerCase().indexOf('.gif') != -1 || f.toLowerCase().indexOf('.ico') != -1) {
                    $('#compressimages').attr('value', 'No');
                }
            });
        });
    }
    // if (readCookie('hpe_updatex' + wd) == 'Yes') {
    //     history.pushState('', '', "#hpe_updatex");
    // }
    // if (window.location.href.indexOf("#hpe_updatex") != -1 && window.location.href.indexOf("/list") != -1) { // Article List Hidden
    //     createCookie('hpe_poll_close' + wd, 'Yes');
    //     $('.my-form').css('display', 'none');
    //     $('.my-form').after('<div class="dpe_delete">Updated Successfully</div>');
    // }
    if (readCookie('hpe_newx' + wd) == 'Yes' && window.location.href.indexOf("/list") != -1) {
        createCookie('hpe_poll_close' + wd, 'Yes');
        $('.my-form').css('display', 'none');
        $('.my-form').after('<div class="dpe_delete">Added Successfully</div>');
    }
    // Delete Specific Article/Video/Photo/Ad
    if (window.location.href.indexOf("#hpe_delete_@@") != -1) { // Go to Article 
        $('.my-form').css('display', 'none');
        var haidx = window.location.href.split('hpe_delete_@@').pop();
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haidx + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_deletex';
    }
    if (window.location.href.indexOf("#hpe_delete_&&") != -1) { // Go to Video/Photo
        $('.my-form').css('display', 'none');
        var hvidx = window.location.href.split('hpe_delete_&&').pop();
        window.location.href = '/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=' + hvidx + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_deletex';
    }
    if (window.location.href.indexOf("#hpe_delete_AD") != -1) { // Go to Ad 
        $('.my-form').css('display', 'none');
        var adidx = window.location.href.split('hpe_delete_AD').pop().split('_AG').shift();
        var adnumx = window.location.href.split('_AG').pop();
        window.location.href = '/' + pfist + 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&pkeyname=ar_customers_ads_id&pkey=' + adidx + '&fkeyname=group_id&fkey=' + adnumx + '&wpage=1&hpath=AdGroup' + adnumx + '&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_deletex';
    }
    if (window.location.href.indexOf("#hpe_deletex") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Article/Video/Photo/Menu/SubMenu Screen Hidden
        $('.my-form').css('display', 'none');
        if (window.location.href.indexOf("&fpx=detail_sm_") != -1) {
            var dsm = $.urlParam('fpx');
            var sm = dsm.split('detail_sm_').pop();
            createCookie('hpe_detail_delete' + wd, 'index' + sm + '.htm?hp_editor');
        }
        if ($('#menu').val() == '') { // if Menu deleted or blank, set first one
            $('#menu option:eq(1)').prop('selected', true);
        }
        createCookie('hpe_deletex' + wd, 'Yes');
        $('#issue_date').val('01/01/2010');
        if (window.location.href.indexOf("?lid=CustomersAdsGroups&") != -1) { // If ad, then set Order
            $('#order_sequence').val('999');
            if ($('#starting_date').val() == '') { // if date blank, set default date
                $('#starting_date').val('01/01/2020');
            }
        }
        var ht = setInterval(function() {
            if ($('#token').val() != '') {
                clearInterval(ht);
                $('#active option').filter(function() {
                    return ($(this).text() == 'No');
                }).prop('selected', true);
                createCookie('hpe_hide_iframe' + wd, 'Yes');
                createCookie('hpe_success_delete' + wd, 'Deleted Successfully');
                $('#submit1').click();
            }
        }, 10);
    }
    // if (readCookie('hpe_deletex' + wd) == 'Yes') {
    //     //history.pushState('', '', "#hpe_deletex");
    // }
    // if (window.location.href.indexOf("#hpe_deletex") != -1 && window.location.href.indexOf("/list") != -1) { // Article List Hidden
    //     createCookie('hpe_poll_close' + wd, 'Yes');
    //     $('.my-form').css('display', 'none');
    //     $('.my-form').after('<div class="dpe_delete">Deleted Successfully</div>');
    // }
    // Highlights
    if (window.location.href.indexOf("#hpe_hl_new") != -1) { // New Specific Article 
        $('.my-form').css('display', 'none');
        var ha = window.location.href.split('$').pop();
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_hlx' + ha;
        createCookie('hpe_newh' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_hl_delete") != -1) { // Delete Specific Article
        $('.my-form').css('display', 'none');
        var haidx = window.location.href.split('_@').pop().split('@').shift();
        var ha = window.location.href.split('$').pop();
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haidx + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_hldx' + ha;
    }
    var h;
    for (h = 1; h <= 20; h++) {
        if (readCookie('hpe_hlx' + h + wd) == 'Yes') {
            //history.pushState('', '', "#hpe_hlx" + h);
        }
    }
    if (window.location.href.indexOf("#hpe_hlx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Article Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
            var hs = window.location.href.split('_hlx').pop();
            createCookie('hpe_hlx' + hs + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_hldx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Delete Article
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form').css('display', 'none');
            if ($('#menu').val() == '') { // if Menu deleted or blank, set first one
                $('#menu option:eq(1)').prop('selected', true);
            }
            var hs = window.location.href.split('_hldx').pop();
            createCookie('hpe_hlx' + hs + wd, 'Yes');
            createCookie('hpe_delete_hl' + wd, 'Yes');
            if (hs == '1') {
                $('#highlight_flag option').filter(function() {
                    return ($(this).text() == 'No');
                }).prop('selected', true);
            } else {
                $('#highlight' + hs + '_flag option').filter(function() {
                    return ($(this).text() == 'No');
                }).prop('selected', true);
            }
            var ht = setInterval(function() {
                if ($('#token').val() != '') {
                    clearInterval(ht);
                    createCookie('hpe_hide_iframe' + wd, 'Yes');
                    createCookie('hpe_success_delete' + wd, 'Hide Successfully from <b>Highlight - ' + hs + '</b>');
                    $('#submit1').click();
                }
            }, 1000);
        }
    }
    if (window.location.href.indexOf("#hpe_hlx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Article 
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
            var hs = window.location.href.split('_hlx').pop();
            if (hs == '1') {
                $('[id*="highlight"] option').filter(function() {
                    return ($(this).text() == 'No');
                }).prop('selected', true);
                $('#highlight_flag option').filter(function() {
                    return ($(this).text() == 'Yes');
                }).prop('selected', true);
            } else {
                $('[id*="highlight"] option').filter(function() {
                    return ($(this).text() == 'No');
                }).prop('selected', true);
                $('#highlight' + hs + '_flag option').filter(function() {
                    return ($(this).text() == 'Yes');
                }).prop('selected', true);
            }
            createCookie('hpe_hlx' + hs + wd, 'Yes');
            var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                if ($('#submit1').length) {
                    if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                        clearInterval(hi);
                    }
                }
            }, 10);
            $('#submit2').click(function() {
                eraseCookie('hpe_hlx' + hs + wd);
                createCookie('hpe_cancel' + wd, 'Yes');
            });
            if (window.location.href.indexOf("&isdate") != -1) { // Set Issue Date
                var dates = $.urlParam('isdate');
                var years = dates.split('_').pop();
                var days = dates.split('_' + years).shift().split('_').pop();
                var months = dates.split('_' + years).shift().split('_').shift();
                //var idate = months + '/' + days + '/' + years;
                var idate = years + '-' + months + '-' + days;
                $('#issue_date').val(idate);
            }
        }
    }
    // var hrr;
    // for (hrr = 1; hrr <= 20; hrr++) {
    //     if (readCookie('hpe_hlx' + hrr + wd) == 'Yes' && window.location.href.indexOf("/list") != -1 && !readCookie('hpe_delete_hl' + wd)) {
    //         createCookie('hpe_poll_close' + wd, 'Yes');
    //         $('.my-form').css('display', 'none');
    //         $('.my-form').after('<div class="dpe_delete">Added Article in Highlight ' + hrr + '</div>');
    //     }
    // }
    // Previews
    if (window.location.href.indexOf("#hpe_prev_new") != -1) { // New Specific Article 
        $('.my-form').css('display', 'none');
        var pa = window.location.href.split('$$').pop();
        var qs = pa.replace(/@@/g, "'").replace(/_/g, " ");
        var ms = qs.replace("&&", " - ");
        createCookie('hpe_ms_prev' + wd, ms);
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_prevxy';
    }
    // if (window.location.href.indexOf("#hpe_prev$$") != -1) { // Go to Search Page - Hidden
    //     $('.my-form').css('display', 'none');
    //     var pa = window.location.href.split('$$').pop();
    //     window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=0&fkeyname=&fkey=&sflag=Form&sortflag=&wpage=1&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_prevs' + pa;
    // }
    // if (window.location.href.indexOf("#hpe_prevs") != -1) { // Inside Search Page - Hidden
    //     $('.my-form').css('display', 'none');
    //     $('.col.col-8 .select select, .input input').val('');
    //     var ps = window.location.href.split('hpe_prevs').pop();
    //     var qs = ps.replace(/@@/g, "'").replace(/_/g, " ");
    //     var ms = qs.replace("&&", " - ");
    //     createCookie('hpe_ms_prev' + wd, ms);
    //     createCookie('hpe_prevx' + wd, 'Yes');
    //     $('#active option').filter(function() {
    //         return ($(this).text() == 'Yes');
    //     }).prop('selected', true);
    //     $('#menu option').filter(function() {
    //         return ($(this).text() == ms);
    //     }).prop('selected', true);
    //     var pt = setInterval(function() {
    //         if ($('#token').val() != '') {
    //             clearInterval(pt);
    //             $('#submit1').click();
    //         }
    //     }, 10);
    // }
    // if (readCookie('hpe_prevx' + wd) == 'Yes') {
    //     history.pushState('', '', "#hpe_prevx");
    // }
    // if (window.location.href.indexOf("#hpe_prevx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/list") != -1) { // Article List
    //     eraseCookie('hpe_prevx' + wd);
    //     $('.smbody td:nth-child(7), .smbody td:nth-child(8), .smbody td:nth-child(6), .smbody td:nth-child(2), .smbody td:nth-child(3)').css('display', 'none');
    //     $('.my-form').css('width', '90%');
    //     $('a').each(function() {
    //         $(this).attr('href', $(this).attr('href') + '#hpe_prevx');
    //         if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
    //             $(this).css('display', 'none');
    //             $(this).prev('.smicon_bullet1').css('display', 'none');
    //         }
    //         if ($(this).attr('href') == '/responsibility' + pext + '#hpe_prevx') {
    //             $(this).css('display', 'none');
    //             $(this).next('.smicon_bullet1').css('display', 'none');
    //         }
    //     });
    // }
    // if (window.location.href.indexOf("#hpe_prevx") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
    //     $('.my-form .label').css('width', '160px');
    //     $('.col.col-8, .col.col-8 select').css('width', '300px');
    //     $('#menu option').filter(function() {
    //         return ($(this).text() == readCookie('hpe_ms_prev' + wd));
    //     }).prop('selected', true);
    //     $('.label.col.col-4').each(function() { // Hide Highlights
    //         if ($(this).text() == '* Menu' || $(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9') {
    //             $(this).parent('.row').parent('section').css('display', 'none');
    //         }
    //     });
    //     createCookie('hpe_prevx' + wd, 'Yes');
    // }
    if (window.location.href.indexOf("#hpe_prevx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Article Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
            createCookie('hpe_prevx' + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_prevx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Article
        if ($('#submit1').length || $('#submit2').length) {
            var pa = window.location.href.split('$$').pop();
            var qs = pa.replace(/@@/g, "'").replace(/_/g, " ");
            var ms = qs.replace("&&", " - ");
            $('#menu option').filter(function() {
                return ($(this).text() == ms);
            }).prop('selected', true);
            $('[id*="highlight"] option').filter(function() {
                return ($(this).text() == 'No');
            }).prop('selected', true);
            $('.label.col.col-4').each(function() { // Hide Highlights and Menu
                if ($(this).text() == '* Menu' || $(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9' || $(this).text() == '* Active') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            if (window.location.href.indexOf("&fpx=section") != -1) { // If sections, then show Highlight
                $('.label.col.col-4').each(function() {
                    if ($(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9') {
                        $(this).parent('.row').parent('section').css('display', 'block');
                    }
                });
            }
            createCookie('hpe_newx' + wd, 'Yes');
            if (window.location.href.indexOf("#hpe_prevxy") != -1) {
                var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                    if ($('#submit1').length) {
                        if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                            createCookie('hpe_hide_iframe' + wd, 'Yes');
                            clearInterval(hi);
                        }
                    }
                }, 10);
                $('#submit2').click(function() {
                    eraseCookie('hpe_newx' + wd);
                    createCookie('hpe_cancel' + wd, 'Yes');
                });
            }
            if (window.location.href.indexOf("&isdate") != -1) { // Set Issue Date
                var dates = $.urlParam('isdate');
                var years = dates.split('_').pop();
                var days = dates.split('_' + years).shift().split('_').pop();
                var months = dates.split('_' + years).shift().split('_').shift();
                //var idate = months + '/' + days + '/' + years;
                var idate = years + '-' + months + '-' + days;
                $('#issue_date').val(idate);
            }
            if (window.location.href.indexOf("&fpx=edition") != -1) { // If E-Edition #EEE
                $('.hpe-my-form fieldset section').css('display', 'none');
                $('.label.col.col-4').each(function() {
                    if ($(this).text() == '* Heading' || $(this).text() == '* Issue Date' || $(this).text() == 'Picture (primary)' || $(this).text() == 'Picture (secondary)') {
                        $(this).parent('.row').parent('section').css('display', 'block');
                    }
                    if ($(this).text() == 'Picture (primary)') {
                        $(this).html('Upload Image<br>(PDF Cover)');
                        $(this).siblings('.col.col-11').children('.input').children('a[title="Crop Images"]').css('display', 'none');
                        $(this).siblings('.col.col-11').children('.input').children('.s1').css('display', 'none');
                    }
                    if ($(this).text() == 'Picture (secondary)') {
                        $(this).text('Upload PDF');
                        $(this).siblings('.col.col-11').children('.input').children('a[title="Crop Images"]').css('display', 'none');
                        $(this).siblings('.col.col-11').children('.input').children('.s1').css('display', 'none');
                    }
                });
            }
            // if (window.location.href.indexOf("&fpx=artgroup") != -1) { // If ArticleGroup, then show Menu
            //     $('.hpe-my-form fieldset section').css('display', 'none');
            //     $('.label.col.col-4').each(function() {
            //         if ($(this).text() == '* Menu') {
            //             $(this).parent('.row').parent('section').css('display', 'block');
            //         }
            //     });
            // }
        }
    }
    // Previews (Highlight Excluded)
    // if (window.location.href.indexOf("#hpe_xprev_new") != -1) { // New Specific Article 
    //     $('.my-form').css('display', 'none');
    //     var pa = window.location.href.split('$$').pop();
    //     var qs = pa.replace(/@@/g, "'").replace(/_/g, " ");
    //     var ms = qs.replace("&&", " - ");
    //     createCookie('hpe_ms_xprev' + wd, ms);
    //     window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_xprevxy';
    // }
    // if (window.location.href.indexOf("#hpe_xprev$$") != -1) { // Go to Search Page - Hidden
    //     $('.my-form').css('display', 'none');
    //     var pxa = window.location.href.split('$$').pop();
    //     window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=0&fkeyname=&fkey=&sflag=Form&sortflag=&wpage=1&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_xprevs' + pxa;
    // }
    // if (window.location.href.indexOf("#hpe_xprevs") != -1) { // Inside Search Page - Hidden
    //     $('.my-form').css('display', 'none');
    //     $('.col.col-8 .select select, .input input').val('');
    //     var ps = window.location.href.split('hpe_xprevs').pop();
    //     var qs = ps.replace(/@@/g, "'").replace(/_/g, " ");
    //     var ms = qs.replace("&&", " - ");
    //     createCookie('hpe_ms_xprev' + wd, ms);
    //     createCookie('hpe_xprevx' + wd, 'Yes');
    //     $('#active option').filter(function() {
    //         return ($(this).text() == 'Yes');
    //     }).prop('selected', true);
    //     $('#menu option').filter(function() {
    //         return ($(this).text() == ms);
    //     }).prop('selected', true);
    //     for (hex = 1; hex <= 20; hex++) { // No Highlight
    //         if (hex == '1') {
    //             $('#highlight_flag option').filter(function() {
    //                 return ($(this).text() == 'No');
    //             }).prop('selected', true);
    //         } else {
    //             $('#highlight' + hex + '_flag option').filter(function() {
    //                 return ($(this).text() == 'No');
    //             }).prop('selected', true);
    //         }
    //     }
    //     var pt = setInterval(function() {
    //         if ($('#token').val() != '') {
    //             clearInterval(pt);
    //             $('#submit1').click();
    //         }
    //     }, 10);
    // }
    // if (readCookie('hpe_xprevx' + wd) == 'Yes') {
    //     history.pushState('', '', "#hpe_xprevx");
    // }
    // if (window.location.href.indexOf("#hpe_xprevx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/list") != -1) { // Article List
    //     eraseCookie('hpe_xprevx' + wd);
    //     $('.smbody td:nth-child(7), .smbody td:nth-child(8), .smbody td:nth-child(6), .smbody td:nth-child(2), .smbody td:nth-child(3)').css('display', 'none');
    //     $('.my-form').css('width', '90%');
    //     $('a').each(function() {
    //         $(this).attr('href', $(this).attr('href') + '#hpe_xprevx');
    //         if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
    //             $(this).css('display', 'none');
    //             $(this).prev('.smicon_bullet1').css('display', 'none');
    //         }
    //         if ($(this).attr('href') == '/responsibility' + pext + '#hpe_xprevx') {
    //             $(this).css('display', 'none');
    //             $(this).next('.smicon_bullet1').css('display', 'none');
    //         }
    //     });
    // }
    // if (window.location.href.indexOf("#hpe_xprevx") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
    //     $('.my-form .label').css('width', '160px');
    //     $('.col.col-8, .col.col-8 select').css('width', '300px');
    //     $('#menu option').filter(function() {
    //         return ($(this).text() == readCookie('hpe_ms_xprev' + wd));
    //     }).prop('selected', true);
    //     for (hex = 1; hex <= 20; hex++) { // No Highlight
    //         if (hex == '1') {
    //             $('#highlight_flag option').filter(function() {
    //                 return ($(this).text() == 'No');
    //             }).prop('selected', true);
    //         } else {
    //             $('#highlight' + hex + '_flag option').filter(function() {
    //                 return ($(this).text() == 'No');
    //             }).prop('selected', true);
    //         }
    //     }
    //     $('.label.col.col-4').each(function() { // Hide Highlights
    //         if ($(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9') {
    //             $(this).parent('.row').parent('section').css('display', 'none');
    //         }
    //     });
    //     createCookie('hpe_xprevx' + wd, 'Yes');
    // }
    if (window.location.href.indexOf("#hpe_xprevx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Article Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
            createCookie('hpe_xprevx' + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_xprevx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Article
        if ($('#submit1').length || $('#submit2').length) {
            var pa = window.location.href.split('$$').pop();
            var qs = pa.replace(/@@/g, "'").replace(/_/g, " ");
            var ms = qs.replace("&&", " - ");
            $('#menu option').filter(function() {
                return ($(this).text() == ms);
            }).prop('selected', true);
            $('[id*="highlight"] option').filter(function() {
                return ($(this).text() == 'No');
            }).prop('selected', true);
            $('.label.col.col-4').each(function() { // Hide Highlights and Menu
                if ($(this).text() == '* Menu' || $(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            createCookie('hpe_newx' + wd, 'Yes');
            if (window.location.href.indexOf("#hpe_xprevxy") != -1) {
                var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                    if ($('#submit1').length) {
                        if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                            createCookie('hpe_hide_iframe' + wd, 'Yes');
                            clearInterval(hi);
                        }
                    }
                }, 10);
                $('#submit2').click(function() {
                    eraseCookie('hpe_newx' + wd);
                    createCookie('hpe_cancel' + wd, 'Yes');
                });
            }
            if (window.location.href.indexOf("&isdate") != -1) { // Set Issue Date
                var dates = $.urlParam('isdate');
                var years = dates.split('_').pop();
                var days = dates.split('_' + years).shift().split('_').pop();
                var months = dates.split('_' + years).shift().split('_').shift();
                //var idate = months + '/' + days + '/' + years;
                var idate = years + '-' + months + '-' + days;
                $('#issue_date').val(idate);
            }
        }
    }
    // Events (New)
    // if (window.location.href.indexOf("#hpe_event$$") != -1) { // Go to Search Page - Hidden
    //     $('.my-form').css('display', 'none');
    //     var pea = window.location.href.split('$$').pop();
    //     window.location.href = '/' + pfist + 'lid=Events2&lid2=&level=1&pform=events2&pkeyname=sys_information_id&pkey=0&fkeyname=&fkey=&sflag=Form&sortflag=&wpage=1&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_events' + pea;
    // }
    // if (window.location.href.indexOf("#hpe_events") != -1) { // Inside Search Page - Hidden
    //     $('.my-form').css('display', 'none');
    //     $('.col.col-8 .select select, .input input').val('');
    //     var pes = window.location.href.split('hpe_events').pop();
    //     var qes = pes.replace(/@@/g, "'").replace(/_/g, " ");
    //     var mes = qes.replace("&&", " - ");
    //     createCookie('hpe_ms_event' + wd, mes);
    //     createCookie('hpe_eventx' + wd, 'Yes');
    //     $('#active option').filter(function() {
    //         return ($(this).text() == 'Yes');
    //     }).prop('selected', true);
    //     $('#menu option').filter(function() {
    //         return ($(this).text() == mes);
    //     }).prop('selected', true);
    //     var pt = setInterval(function() {
    //         if ($('#token').val() != '') {
    //             clearInterval(pt);
    //             $('#submit1').click();
    //         }
    //     }, 10);
    // }
    // if (readCookie('hpe_eventx' + wd) == 'Yes') {
    //     history.pushState('', '', "#hpe_eventx");
    // }
    // if (window.location.href.indexOf("#hpe_eventx") != -1 && window.location.href.indexOf("?lid=Events2&") != -1 && window.location.href.indexOf("/list") != -1) { // Events List
    //     eraseCookie('hpe_eventx' + wd);
    //     $('.smbody td:nth-child(7), .smbody td:nth-child(8)').css('display', 'none');
    //     $('.my-form').css('width', '90%');
    //     $('a').each(function() {
    //         $(this).attr('href', $(this).attr('href') + '#hpe_eventx');
    //         if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
    //             $(this).css('display', 'none');
    //             $(this).prev('.smicon_bullet1').css('display', 'none');
    //         }
    //         if ($(this).attr('href') == '/responsibility' + pext + '#hpe_eventx') {
    //             $(this).css('display', 'none');
    //             $(this).next('.smicon_bullet1').css('display', 'none');
    //         }
    //     });
    // }
    // if (window.location.href.indexOf("#hpe_eventx") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
    //     $('.my-form .label').css('width', '160px');
    //     $('.col.col-8, .col.col-8 select').css('width', '300px');
    //     $('#menu option').filter(function() {
    //         return ($(this).text() == readCookie('hpe_ms_event' + wd));
    //     }).prop('selected', true);
    //     createCookie('hpe_eventx' + wd, 'Yes');
    // }
    if (window.location.href.indexOf("#hpe_eventx") != -1 && window.location.href.indexOf("?lid=Events2&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Event Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
            createCookie('hpe_eventx' + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_old_event") != -1 && window.location.href.indexOf("?lid=Events2&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Event
        $('#menu option').filter(function() {
            return ($(this).text() == readCookie('hpe_ms_event' + wd));
        }).prop('selected', true);
    }
    if (window.location.href.indexOf("#hpe_eventxy") != -1 && window.location.href.indexOf("?lid=Events2&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Event
        if ($('#submit1').length || $('#submit2').length) {
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Menu' || $(this).text() == 'Active') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            var pa = window.location.href.split('$$').pop();
            var qs = pa.replace(/@@/g, "'").replace(/_/g, " ");
            var ms = qs.replace("&&", " - ");
            $('#menu option').filter(function() {
                return ($(this).text() == ms);
            }).prop('selected', true);
            createCookie('hpe_newx' + wd, 'Yes');
            var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                if ($('#submit1').length) {
                    if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                        clearInterval(hi);
                    }
                }
            }, 10);
            $('#submit2').click(function() {
                eraseCookie('hpe_newx' + wd);
                createCookie('hpe_cancel' + wd, 'Yes');
            });
            if (window.location.href.indexOf("&isdate") != -1) { // Set Issue Date
                var dates = $.urlParam('isdate');
                var years = dates.split('_').pop();
                var days = dates.split('_' + years).shift().split('_').pop();
                var months = dates.split('_' + years).shift().split('_').shift();
                //var idate = months + '/' + days + '/' + years;
                var idate = years + '-' + months + '-' + days;
                $('#issue_date').val(idate);
            }
            $('#ending_date').val(''); // Clear Ending Date
        }
    }
    // Events (Old)
    if (readCookie('hpe_old_event' + wd) == 'Yes') {
        history.pushState('', '', "#hpe_old_event");
    }
    if (window.location.href.indexOf("#hpe_old_event") != -1 && window.location.href.indexOf("?lid=Events&") != -1 && window.location.href.indexOf("/list") != -1) { // Events List
        eraseCookie('hpe_old_event' + wd);
        $('.smbody td:nth-child(6)').css('display', 'none');
        $('.my-form').css('width', '90%');
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_old_event');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_old_event') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_old_event") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
        $('.my-form .label').css('width', '160px');
        if ($('#menu option').length == 2) {
            $('#menu option:nth-child(2)').filter(function() {
                return ($(this).text() != '');
            }).prop('selected', true);
        }
        $('.col.col-8, .col.col-8 select').css('width', '300px');
        createCookie('hpe_old_event' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_old_event") != -1 && window.location.href.indexOf("?lid=Events&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Event Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
            createCookie('hpe_old_event' + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_old_event") != -1 && window.location.href.indexOf("?lid=Events&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Event
        if ($('#menu option').length == 2) {
            $('#menu option:nth-child(2)').filter(function() {
                return ($(this).text() != '');
            }).prop('selected', true);
        }
    }
    // Product
    if (window.location.href.indexOf("#hpe_productxy") != -1 && window.location.href.indexOf("?lid=Products&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) {
        if ($('#submit1').length || $('#submit2').length) {
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Active' || $(this).text() == '* Menu' || $(this).text() == '* Category') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            var pa = window.location.href.split('$$').pop();
            var qs = pa.replace(/@@/g, "'").replace(/_/g, " ");
            var ms = qs.replace("&&", " - ");
            $('#menu option').filter(function() {
                return ($(this).text().indexOf(ms) != -1);
            }).prop('selected', true);
            var fpurl = location.href;
            var fpurlx = new URL(fpurl);
            var fpsite = fpurlx.searchParams.get("fpc");
            var fpcc = fpsite.replace(/@@/g, "'").replace(/A_M_P/g, "&").replace(/_/g, " ");
            $('#category option').filter(function() {
                return ($(this).text() == fpcc);
            }).prop('selected', true);
            createCookie('hpe_newx' + wd, 'Yes');
            var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                if ($('#submit1').length) {
                    if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                        clearInterval(hi);
                    }
                }
            }, 10);
            $('#submit2').click(function() {
                eraseCookie('hpe_newx' + wd);
                createCookie('hpe_cancel' + wd, 'Yes');
            });
        }
    }
    // Directory (New)
    if (window.location.href.indexOf("#hpe_directoryxy") != -1 && window.location.href.indexOf("?lid=CustomersSetup&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) {
        if ($('#submit1').length || $('#submit2').length) {
            $('.label.col.col-4').each(function() {
                if ($(this).text() == '* Active' || $(this).text() == 'Menu' || $(this).text() == '* Category') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            var pa = window.location.href.split('$$').pop();
            var qs = pa.replace(/@@/g, "'").replace(/_/g, " ");
            var ms = qs.replace("&&", " - ");
            $('#menu option').filter(function() {
                return ($(this).text().indexOf(ms) != -1);
            }).prop('selected', true);
            var fpurl = location.href;
            var fpurlx = new URL(fpurl);
            var fpsite = fpurlx.searchParams.get("fpc");
            var fpcc = fpsite.replace(/@@/g, "'").replace(/A_M_P/g, "&").replace(/_/g, " ");
            $('#category option').filter(function() {
                return ($(this).text() == fpcc);
            }).prop('selected', true);
            createCookie('hpe_newx' + wd, 'Yes');
            var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                if ($('#submit1').length) {
                    if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                        clearInterval(hi);
                    }
                }
            }, 10);
            $('#submit2').click(function() {
                eraseCookie('hpe_newx' + wd);
                createCookie('hpe_cancel' + wd, 'Yes');
            });
        }
    }
    // Directory (Old)
    if (readCookie('hpe_old_directory' + wd) == 'Yes') {
        history.pushState('', '', "#hpe_old_directory");
    }
    if (window.location.href.indexOf("#hpe_old_directory") != -1 && window.location.href.indexOf("?lid=CustomersSetup&") != -1 && window.location.href.indexOf("/list") != -1) { // Direcotry List
        eraseCookie('hpe_old_directory' + wd);
        $('.smbody td:nth-child(6)').css('display', 'none');
        $('.my-form').css('width', '90%');
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_old_directory');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_old_directory') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_old_directory") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
        $('.my-form .label').css('width', '160px');
        if ($('#menu option').length == 2) {
            $('#menu option:nth-child(2)').filter(function() {
                return ($(this).text() != '');
            }).prop('selected', true);
        }
        $('.col.col-8, .col.col-8 select').css('width', '300px');
        createCookie('hpe_old_directory' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_old_directory") != -1 && window.location.href.indexOf("?lid=CustomersSetup&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Directory Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
            createCookie('hpe_old_directory' + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_old_directory") != -1 && window.location.href.indexOf("?lid=CustomersSetup&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Directory Page
        if ($('#menu option').length == 2) {
            $('#menu option:nth-child(2)').filter(function() {
                return ($(this).text() != '');
            }).prop('selected', true);
        }
    }
    // Classified (Old)
    if (readCookie('hpe_old_classified' + wd) == 'Yes') {
        history.pushState('', '', "#hpe_old_classified");
    }
    if (window.location.href.indexOf("#hpe_old_classified") != -1 && window.location.href.indexOf("?lid=Classifieds&") != -1 && window.location.href.indexOf("/list") != -1) { // Classified List
        eraseCookie('hpe_old_classified' + wd);
        $('.smbody td:nth-child(6)').css('display', 'none');
        $('.my-form').css('width', '90%');
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_old_classified');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_old_classified') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_old_classified") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
        $('.my-form .label').css('width', '160px');
        if ($('#menu option').length == 2) {
            $('#menu option:nth-child(2)').filter(function() {
                return ($(this).text() != '');
            }).prop('selected', true);
        }
        $('.col.col-8, .col.col-8 select').css('width', '300px');
        createCookie('hpe_old_classified' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_old_classified") != -1 && window.location.href.indexOf("?lid=Classifieds&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Classified Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
            createCookie('hpe_old_classified' + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_old_classified") != -1 && window.location.href.indexOf("?lid=Classifieds&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Classified Page
        if ($('#menu option').length == 2) {
            $('#menu option:nth-child(2)').filter(function() {
                return ($(this).text() != '');
            }).prop('selected', true);
        }
    }
    // ArticleGroup - without Highlight
    if (window.location.href.indexOf("#hpe_xartg_@") != -1) { // Update Specific Article
        $('.my-form').css('display', 'none');
        var haidx = window.location.href.split('_@').pop().split('@_xart').shift();
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haidx + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_xartgroupx';
    }
    if (window.location.href.indexOf("#hpe_xartg_new") != -1) { // New Specific Article 
        $('.my-form').css('display', 'none');
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_xartgroupx';
    }
    if (window.location.href.indexOf("#hpe_xartgroup$") != -1) { // Go to Search Page - Hidden
        $('.my-form').css('display', 'none');
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=0&fkeyname=&fkey=&sflag=Form&sortflag=&wpage=1&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_xartgroups';
    }
    if (window.location.href.indexOf("#hpe_xartgroups") != -1) { // Inside Search Page - Hidden
        $('.my-form').css('display', 'none');
        $('.col.col-8 .select select, .input input').val('');
        createCookie('hpe_xartgroupx' + wd, 'Yes');
        $('#active option').filter(function() {
            return ($(this).text() == 'Yes');
        }).prop('selected', true);
        for (agnh = 1; agnh <= 20; agnh++) {
            if (agnh == '1') {
                $('#highlight_flag option').filter(function() {
                    return ($(this).text() == 'No');
                }).prop('selected', true);
            } else {
                $('#highlight' + agnh + '_flag option').filter(function() {
                    return ($(this).text() == 'No');
                }).prop('selected', true);
            }
        }
        var agpt = setInterval(function() {
            if ($('#token').val() != '') {
                clearInterval(agpt);
                $('#submit1').click();
            }
        }, 10);
    }
    if (readCookie('hpe_xartgroupx' + wd) == 'Yes') {
        //history.pushState('', '', "#hpe_xartgroupx");
    }
    if (window.location.href.indexOf("#hpe_xartgroupx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/list") != -1) { // Article List
        eraseCookie('hpe_xartgroupx' + wd);
        $('.smbody td:nth-child(7), .smbody td:nth-child(8), .smbody td:nth-child(6), .smbody td:nth-child(2), .smbody td:nth-child(3)').css('display', 'none');
        $('.my-form').css('width', '90%');
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_xartgroupx');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_xartgroupx') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_xartgroupx") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
        $('.my-form .label').css('width', '160px');
        $('.col.col-8, .col.col-8 select').css('width', '300px');
        $('.label.col.col-4').each(function() { // Hide Highlights
            if ($(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9') {
                $(this).parent('.row').parent('section').css('display', 'none');
            }
        });
        createCookie('hpe_xartgroupx' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_xartgroupx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Article Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
            createCookie('hpe_xartgroupx' + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_xartgroupx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Article
        if ($('#submit1').length || $('#submit2').length) {
            $('[id*="highlight"] option').filter(function() {
                return ($(this).text() == 'No');
            }).prop('selected', true);
            $('.label.col.col-4').each(function() { // Hide Highlights
                if ($(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            if (window.location.href.indexOf("&isdate") != -1) { // Set Issue Date
                var dates = $.urlParam('isdate');
                var years = dates.split('_').pop();
                var days = dates.split('_' + years).shift().split('_').pop();
                var months = dates.split('_' + years).shift().split('_').shift();
                //var idate = months + '/' + days + '/' + years;
                var idate = years + '-' + months + '-' + days;
                $('#issue_date').val(idate);
            }
        }
    }
    // Details Page Article
    if (readCookie('hpe_art_detailx' + wd) == 'Yes') {
        //history.pushState('', '', "#hpe_art_detailx");
    }
    if (window.location.href.indexOf("#hpe_art_detailx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Article Screen
        $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
        var dpk = $.urlParam('pkey');
        createCookie('hpe_art_detail_url' + wd, dplb + '/view_file' + pext + '?lid=Pages&lid2=&level=1&pkeyname=sys_information_id&pkey=' + dpk + '&wpage=&hpath=&smid=&u=&c=&lf=&x=');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9' || $(this).text() == '* Issue Date' || $(this).text() == '* Menu' || $(this).text() == 'Display Heading' || $(this).text() == '* Starting Date' || $(this).text() == 'Ending Date') {
                $(this).parent('.row').parent('section').css('display', 'none');
            }
        });
        var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
            if ($('#submit1').length) {
                if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                    createCookie('hpe_hide_iframe' + wd, 'Yes');
                    clearInterval(hi);
                }
            }
        }, 10);
        $('#submit2').click(function() {
            eraseCookie('hpe_art_detailx' + wd);
            createCookie('hpe_cancel' + wd, 'Yes');
        });
    }
    // Details Page Events (NEW)
    if (readCookie('hpe_event_detailx' + wd) == 'Yes') {
        //history.pushState('', '', "#hpe_event_detailx");
    }
    if (window.location.href.indexOf("#hpe_event_detailx") != -1 && window.location.href.indexOf("?lid=Events2&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Event Screen
        $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
        var dpk = $.urlParam('pkey');
        createCookie('hpe_event_detail_url' + wd, dplb + '/view_file' + pext + '?lid=Events2&lid2=&level=1&pkeyname=sys_information_id&pkey=' + dpk + '&wpage=&hpath=&smid=&u=&c=&lf=&x=');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == '* Menu' || $(this).text() == 'Active') {
                $(this).parent('.row').parent('section').css('display', 'none');
            }
        });
        var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
            if ($('#submit1').length) {
                if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                    createCookie('hpe_hide_iframe' + wd, 'Yes');
                    clearInterval(hi);
                }
            }
        }, 10);
        $('#submit2').click(function() {
            eraseCookie('hpe_event_detailx' + wd);
            createCookie('hpe_cancel' + wd, 'Yes');
        });
    }
    // ArticleGroup
    if (window.location.href.indexOf("#hpe_artg_@") != -1) { // Update Specific Article
        $('.my-form').css('display', 'none');
        var haidx = window.location.href.split('_@').pop().split('@_art').shift();
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=' + haidx + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_artgroupx';
    }
    if (window.location.href.indexOf("#hpe_artg_new") != -1) { // New Specific Article 
        $('.my-form').css('display', 'none');
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_artgroupx';
    }
    if (window.location.href.indexOf("#hpe_artgroup$") != -1) { // Go to Search Page - Hidden
        $('.my-form').css('display', 'none');
        window.location.href = '/' + pfist + 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=0&fkeyname=&fkey=&sflag=Form&sortflag=&wpage=1&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_artgroups';
    }
    if (window.location.href.indexOf("#hpe_artgroups") != -1) { // Inside Search Page - Hidden
        $('.my-form').css('display', 'none');
        $('.col.col-8 .select select, .input input').val('');
        createCookie('hpe_artgroupx' + wd, 'Yes');
        $('#active option').filter(function() {
            return ($(this).text() == 'Yes');
        }).prop('selected', true);
        var agpt = setInterval(function() {
            if ($('#token').val() != '') {
                clearInterval(agpt);
                $('#submit1').click();
            }
        }, 10);
    }
    if (readCookie('hpe_artgroupx' + wd) == 'Yes') {
        //history.pushState('', '', "#hpe_artgroupx");
    }
    if (window.location.href.indexOf("#hpe_artgroupx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/list") != -1) { // Article List
        eraseCookie('hpe_artgroupx' + wd);
        $('.smbody td:nth-child(7), .smbody td:nth-child(8), .smbody td:nth-child(6), .smbody td:nth-child(2), .smbody td:nth-child(3)').css('display', 'none');
        $('.my-form').css('width', '90%');
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_artgroupx');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_artgroupx') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_artgroupx") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
        $('.my-form .label').css('width', '160px');
        $('.col.col-8, .col.col-8 select').css('width', '300px');
        $('.label.col.col-4').each(function() { // Hide Highlights
            if ($(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9') {
                $(this).parent('.row').parent('section').css('display', 'none');
            }
        });
        createCookie('hpe_artgroupx' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_artgroupx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Article Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.my-form header, .footer_links, #bottom_scroll, #top_scroll').css('display', 'none');
            createCookie('hpe_artgroupx' + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_artgroupx") != -1 && window.location.href.indexOf("?lid=Pages&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Article
        if ($('#submit1').length || $('#submit2').length) {
            $('[id*="highlight"] option').filter(function() {
                return ($(this).text() == 'No');
            }).prop('selected', true);
            $('.label.col.col-4').each(function() { // Hide Highlights
                if ($(this).text() == 'Add to Highlight' || $(this).text() == 'Add to Highlight2' || $(this).text() == 'Add to Highlight3' || $(this).text() == 'Add to Highlight4' || $(this).text() == 'Add to Highlight5' || $(this).text() == 'Add to Highlight6' || $(this).text() == 'Add to Highlight7' || $(this).text() == 'Add to Highlight8' || $(this).text() == 'Add to Highlight9') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            if (window.location.href.indexOf("#hpe_artgroupxy") != -1) {
                createCookie('hpe_newx' + wd, 'Yes');
                var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                    if ($('#submit1').length) {
                        if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                            createCookie('hpe_hide_iframe' + wd, 'Yes');
                            clearInterval(hi);
                        }
                    }
                }, 10);
                $('#submit2').click(function() {
                    eraseCookie('hpe_newx' + wd);
                    createCookie('hpe_cancel' + wd, 'Yes');
                });
            }
            if (window.location.href.indexOf("&isdate") != -1) { // Set Issue Date
                var dates = $.urlParam('isdate');
                var years = dates.split('_').pop();
                var days = dates.split('_' + years).shift().split('_').pop();
                var months = dates.split('_' + years).shift().split('_').shift();
                //var idate = months + '/' + days + '/' + years;
                var idate = years + '-' + months + '-' + days;
                $('#issue_date').val(idate);
            }
        }
    }
    if (readCookie('hpe_newx' + wd) == 'Yes' && window.location.href.indexOf("/list") != -1) {
        createCookie('hpe_poll_close' + wd, 'Yes');
        $('.my-form').css('display', 'none');
        $('.my-form').after('<div class="dpe_delete">Added Successfully</div>');
    }
    // Videos - Gallery - YT(URL)
    if (window.location.href.indexOf("#hpe_new_video_g_yt_url$$") != -1) { // New Specific Video
        $('.my-form').css('display', 'none');
        var vps = window.location.href.split('$$').pop();
        var vqs = vps.replace(/@@/g, "'").replace(/_/g, " ");
        var vms = vqs.replace("&&", " - ");
        createCookie('hpe_ms_video' + wd, vms);
        window.location.href = '/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_video_g_yt_urlxy';
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_url$$") != -1) { // Go to Search Page - Hidden
        $('.my-form').css('display', 'none');
        var va = window.location.href.split('$$').pop();
        window.location.href = '/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=0&fkeyname=&fkey=&sflag=Form&sortflag=&wpage=1&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_video_g_yt_urls' + va;
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_urls") != -1) { // Inside Search Page - Hidden
        $('.my-form').css('display', 'none');
        $('.col.col-8 .select select, .input input').val('');
        var pvs = window.location.href.split('hpe_video_g_yt_urls').pop();
        var qvs = pvs.replace(/@@/g, "'").replace(/_/g, " ");
        var mvs = qvs.replace("&&", " - ");
        createCookie('hpe_video_g_yt_urlx' + wd, 'Yes');
        $('#active option').filter(function() {
            return ($(this).text() == 'Yes');
        }).prop('selected', true);
        $('#menu option').filter(function() {
            return ($(this).text() == mvs);
        }).prop('selected', true);
        var pt = setInterval(function() {
            if ($('#token').val() != '') {
                clearInterval(pt);
                $('#submit1').click();
            }
        }, 10);
    }
    if (readCookie('hpe_video_g_yt_urlx' + wd) == 'Yes') {
        //history.pushState('', '', "#hpe_video_g_yt_urlx");
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_urlx") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/list") != -1) { // Video List
        eraseCookie('hpe_video_g_yt_urlx' + wd);
        $('.smbody td:nth-child(4), .smbody td:nth-child(5), .smbody td:nth-child(6)').css('display', 'none');
        $('.my-form').css('width', '90%');
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_video_g_yt_urlx');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_video_g_yt_urlx') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_urlx") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
        $('.my-form .label').css('width', '160px');
        $('.col.col-8, .col.col-8 select').css('width', '300px');
        createCookie('hpe_video_g_yt_urlx' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_urlx") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Video Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.hpe-my-form header').css('display', 'none');
            createCookie('hpe_video_g_yt_urlx' + wd, 'Yes');
            $('#body').attr('placeholder', 'Put YouTube Video URL here...');
            $('#body').attr('rows', '3');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'Picture' || $(this).text() == 'Picture Caption' || $(this).text() == 'Website Title' || $(this).text() == 'Meta Keywords' || $(this).text() == 'Meta Description') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'BodyClick below:PageDesigner 2PageDesigner 1') {
                    $(this).text('YouTube Video URL');
                }
            });
        }
    }
    if (window.location.href.indexOf("&fpx=hpe_video_g_yt_url") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Video Screen
        $('#body').attr('placeholder', 'Put YouTube Video URL here...');
        $('#body').attr('rows', '3');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == 'Picture' || $(this).text() == 'Picture Caption' || $(this).text() == 'Website Title' || $(this).text() == 'Meta Keywords' || $(this).text() == 'Meta Description') {
                $(this).parent('.row').parent('section').css('display', 'none');
            }
        });
        $('.label.col.col-4').each(function() {
            if ($(this).text() == 'BodyClick below:PageDesigner 2PageDesigner 1') {
                $(this).text('YouTube Video URL');
                $(this).siblings('.col.col-11').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_urlxy") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Video
        if ($('#submit1').length || $('#submit2').length) {
            var vps = window.location.href.split('hpe_video_g_yt_urlxy').pop();
            var vqs = vps.replace(/@@/g, "'").replace(/_/g, " ");
            var vms = vqs.replace("&&", " - ");
            $('#menu option').filter(function() {
                return ($(this).text() == vms);
            }).prop('selected', true);
            createCookie('hpe_newx' + wd, 'Yes');
            var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                if ($('#submit1').length) {
                    if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                        clearInterval(hi);
                    }
                }
            }, 10);
            $('#submit2').click(function() {
                eraseCookie('hpe_newx' + wd);
                createCookie('hpe_cancel' + wd, 'Yes');
            });
            if (window.location.href.indexOf("&isdate") != -1) { // Set Issue Date
                var dates = $.urlParam('isdate');
                var years = dates.split('_').pop();
                var days = dates.split('_' + years).shift().split('_').pop();
                var months = dates.split('_' + years).shift().split('_').shift();
                //var idate = months + '/' + days + '/' + years;
                var idate = years + '-' + months + '-' + days;
                $('#issue_date').val(idate);
            }
        }
    }
    // Videos - Gallery - YT(ID)
    if (window.location.href.indexOf("#hpe_new_video_g_yt_id$$") != -1) { // Add New Specific Video
        $('.my-form').css('display', 'none');
        var vps = window.location.href.split('$$').pop();
        var vqs = vps.replace(/@@/g, "'").replace(/_/g, " ");
        var vms = vqs.replace("&&", " - ");
        createCookie('hpe_ms_video' + wd, vms);
        window.location.href = '/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_video_g_yt_idxy';
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_id$$") != -1) { // Go to Search Page - Hidden
        $('.my-form').css('display', 'none');
        var va = window.location.href.split('$$').pop();
        window.location.href = '/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=0&fkeyname=&fkey=&sflag=Form&sortflag=&wpage=1&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_video_g_yt_ids' + va;
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_ids") != -1) { // Inside Search Page - Hidden
        $('.my-form').css('display', 'none');
        $('.col.col-8 .select select, .input input').val('');
        var pvs = window.location.href.split('hpe_video_g_yt_ids').pop();
        var qvs = pvs.replace(/@@/g, "'").replace(/_/g, " ");
        var mvs = qvs.replace("&&", " - ");
        createCookie('hpe_video_g_yt_idx' + wd, 'Yes');
        $('#active option').filter(function() {
            return ($(this).text() == 'Yes');
        }).prop('selected', true);
        $('#menu option').filter(function() {
            return ($(this).text() == mvs);
        }).prop('selected', true);
        var pt = setInterval(function() {
            if ($('#token').val() != '') {
                clearInterval(pt);
                $('#submit1').click();
            }
        }, 10);
    }
    if (readCookie('hpe_video_g_yt_idx' + wd) == 'Yes') {
        //history.pushState('', '', "#hpe_video_g_yt_idx");
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_idx") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/list") != -1) { // Video List
        eraseCookie('hpe_video_g_yt_idx' + wd);
        $('.smbody td:nth-child(4), .smbody td:nth-child(5), .smbody td:nth-child(6)').css('display', 'none');
        $('.my-form').css('width', '90%');
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_video_g_yt_idx');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_video_g_yt_idx') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_idx") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
        $('.my-form .label').css('width', '160px');
        $('.col.col-8, .col.col-8 select').css('width', '300px');
        createCookie('hpe_video_g_yt_idx' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_idx") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Video Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.hpe-my-form header').css('display', 'none');
            createCookie('hpe_video_g_yt_idx' + wd, 'Yes');
            $('#body').attr('placeholder', 'Put YouTube Video ID here...');
            $('#body').attr('rows', '3');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'Picture' || $(this).text() == 'Picture Caption' || $(this).text() == 'Website Title' || $(this).text() == 'Meta Keywords' || $(this).text() == 'Meta Description') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'BodyClick below:PageDesigner 2PageDesigner 1') {
                    $(this).text('YouTube Video ID');
                }
            });
        }
    }
    if (window.location.href.indexOf("&fpx=hpe_video_g_yt_id") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Video Screen
        $('#body').attr('placeholder', 'Put YouTube Video ID here...');
        $('#body').attr('rows', '3');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == 'Picture' || $(this).text() == 'Picture Caption' || $(this).text() == 'Website Title' || $(this).text() == 'Meta Keywords' || $(this).text() == 'Meta Description') {
                $(this).parent('.row').parent('section').css('display', 'none');
            }
        });
        $('.label.col.col-4').each(function() {
            if ($(this).text() == 'BodyClick below:PageDesigner 2PageDesigner 1') {
                $(this).text('YouTube Video ID');
                $(this).siblings('.col.col-11').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_idxy") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Video
        if ($('#submit1').length || $('#submit2').length) {
            var vps = window.location.href.split('hpe_video_g_yt_idxy').pop();
            var vqs = vps.replace(/@@/g, "'").replace(/_/g, " ");
            var vms = vqs.replace("&&", " - ");
            $('#menu option').filter(function() {
                return ($(this).text() == vms);
            }).prop('selected', true);
            createCookie('hpe_newx' + wd, 'Yes');
            var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                if ($('#submit1').length) {
                    if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                        clearInterval(hi);
                    }
                }
            }, 10);
            $('#submit2').click(function() {
                eraseCookie('hpe_newx' + wd);
                createCookie('hpe_cancel' + wd, 'Yes');
            });
            if (window.location.href.indexOf("&isdate") != -1) { // Set Issue Date
                var dates = $.urlParam('isdate');
                var years = dates.split('_').pop();
                var days = dates.split('_' + years).shift().split('_').pop();
                var months = dates.split('_' + years).shift().split('_').shift();
                //var idate = months + '/' + days + '/' + years;
                var idate = years + '-' + months + '-' + days;
                $('#issue_date').val(idate);
            }
        }
    }
    // Videos - Gallery - YT(Code)
    if (window.location.href.indexOf("#hpe_new_video_g_yt_code$$") != -1) { // Add New Specific Video
        $('.my-form').css('display', 'none');
        var vps = window.location.href.split('$$').pop();
        var vqs = vps.replace(/@@/g, "'").replace(/_/g, " ");
        var vms = vqs.replace("&&", " - ");
        createCookie('hpe_ms_video' + wd, vms);
        window.location.href = '/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_video_g_yt_codexy';
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_code$$") != -1) { // Go to Search Page - Hidden
        $('.my-form').css('display', 'none');
        var va = window.location.href.split('$$').pop();
        window.location.href = '/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=0&fkeyname=&fkey=&sflag=Form&sortflag=&wpage=1&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_video_g_yt_codes' + va;
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_codes") != -1) { // Inside Search Page - Hidden
        $('.my-form').css('display', 'none');
        $('.col.col-8 .select select, .input input').val('');
        var pvs = window.location.href.split('hpe_video_g_yt_codes').pop();
        var qvs = pvs.replace(/@@/g, "'").replace(/_/g, " ");
        var mvs = qvs.replace("&&", " - ");
        createCookie('hpe_video_g_yt_codex' + wd, 'Yes');
        $('#active option').filter(function() {
            return ($(this).text() == 'Yes');
        }).prop('selected', true);
        $('#menu option').filter(function() {
            return ($(this).text() == mvs);
        }).prop('selected', true);
        var pt = setInterval(function() {
            if ($('#token').val() != '') {
                clearInterval(pt);
                $('#submit1').click();
            }
        }, 10);
    }
    if (readCookie('hpe_video_g_yt_codex' + wd) == 'Yes') {
        //history.pushState('', '', "#hpe_video_g_yt_codex");
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_codex") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/list") != -1) { // Video List
        eraseCookie('hpe_video_g_yt_codex' + wd);
        $('.smbody td:nth-child(4), .smbody td:nth-child(5), .smbody td:nth-child(6)').css('display', 'none');
        $('.my-form').css('width', '90%');
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_video_g_yt_codex');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_video_g_yt_codex') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_codex") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
        $('.my-form .label').css('width', '160px');
        $('.col.col-8, .col.col-8 select').css('width', '300px');
        createCookie('hpe_video_g_yt_codex' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_codex") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Video Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.hpe-my-form header').css('display', 'none');
            createCookie('hpe_video_g_yt_codex' + wd, 'Yes');
            $('#body').attr('placeholder', 'Put YouTube Video Embed Code...');
            $('#body').attr('rows', '3');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'Picture' || $(this).text() == 'Picture Caption' || $(this).text() == 'Website Title' || $(this).text() == 'Meta Keywords' || $(this).text() == 'Meta Description') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'BodyClick below:PageDesigner 2PageDesigner 1') {
                    $(this).text('YouTube Video Code');
                }
            });
        }
    }
    if (window.location.href.indexOf("&fpx=hpe_video_g_yt_code") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Video Screen
        $('#body').attr('placeholder', 'Put YouTube Video Embed Code...');
        $('#body').attr('rows', '5');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == 'Picture' || $(this).text() == 'Picture Caption' || $(this).text() == 'Website Title' || $(this).text() == 'Meta Keywords' || $(this).text() == 'Meta Description') {
                $(this).parent('.row').parent('section').css('display', 'none');
            }
        });
        $('.label.col.col-4').each(function() {
            if ($(this).text() == 'BodyClick below:PageDesigner 2PageDesigner 1') {
                $(this).text('YouTube Video Code');
                $(this).siblings('.col.col-11').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_video_g_yt_codexy") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Video
        if ($('#submit1').length || $('#submit2').length) {
            var vps = window.location.href.split('hpe_video_g_yt_codexy').pop();
            var vqs = vps.replace(/@@/g, "'").replace(/_/g, " ");
            var vms = vqs.replace("&&", " - ");
            $('#menu option').filter(function() {
                return ($(this).text() == vms);
            }).prop('selected', true);
            createCookie('hpe_newx' + wd, 'Yes');
            var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                if ($('#submit1').length) {
                    if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                        clearInterval(hi);
                    }
                }
            }, 10);
            $('#submit2').click(function() {
                eraseCookie('hpe_newx' + wd);
                createCookie('hpe_cancel' + wd, 'Yes');
            });
            if (window.location.href.indexOf("&isdate") != -1) { // Set Issue Date
                var dates = $.urlParam('isdate');
                var years = dates.split('_').pop();
                var days = dates.split('_' + years).shift().split('_').pop();
                var months = dates.split('_' + years).shift().split('_').shift();
                //var idate = months + '/' + days + '/' + years;
                var idate = years + '-' + months + '-' + days;
                $('#issue_date').val(idate);
            }
        }
    }
    // Photo - Gallery
    if (window.location.href.indexOf("#hpe_new_photo_g$$") != -1) { // New Specific Photo
        $('.my-form').css('display', 'none');
        var pps = window.location.href.split('$$').pop();
        var pqs = pps.replace(/@@/g, "'").replace(/_/g, " ");
        var pms = pqs.replace("&&", " - ");
        createCookie('hpe_ms_photo' + wd, pms);
        window.location.href = '/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_photo_gxy';
    }
    if (window.location.href.indexOf("#hpe_photo_g$$") != -1) { // Go to Search Page - Hidden
        $('.my-form').css('display', 'none');
        var pg = window.location.href.split('$$').pop();
        window.location.href = '/' + pfist + 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=0&fkeyname=&fkey=&sflag=Form&sortflag=&wpage=1&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_photo_gs' + pg;
    }
    if (window.location.href.indexOf("#hpe_photo_gs") != -1) { // Inside Search Page - Hidden
        $('.my-form').css('display', 'none');
        $('.col.col-8 .select select, .input input').val('');
        var pps = window.location.href.split('hpe_photo_gs').pop();
        var qps = pps.replace(/@@/g, "'").replace(/_/g, " ");
        var mps = qps.replace("&&", " - ");
        createCookie('hpe_photo_gx' + wd, 'Yes');
        $('#active option').filter(function() {
            return ($(this).text() == 'Yes');
        }).prop('selected', true);
        $('#menu option').filter(function() {
            return ($(this).text() == mps);
        }).prop('selected', true);
        var pt = setInterval(function() {
            if ($('#token').val() != '') {
                clearInterval(pt);
                $('#submit1').click();
            }
        }, 10);
    }
    if (readCookie('hpe_photo_gx' + wd) == 'Yes') {
        //history.pushState('', '', "#hpe_photo_gx");
    }
    if (window.location.href.indexOf("#hpe_photo_gx") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/list") != -1) { // Photos List
        eraseCookie('hpe_photo_gx' + wd);
        $('.smbody td:nth-child(4), .smbody td:nth-child(5), .smbody td:nth-child(6)').css('display', 'none');
        $('.my-form').css('width', '90%');
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_photo_gx');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_photo_gx') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_photo_gx") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
        $('.my-form .label').css('width', '160px');
        $('.col.col-8, .col.col-8 select').css('width', '300px');
        createCookie('hpe_photo_gx' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_photo_gx") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Photo Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.hpe-my-form header').css('display', 'none');
            createCookie('hpe_photo_gx' + wd, 'Yes');
            $('.label.col.col-4').each(function() {
                if ($(this).text() == 'Website Title' || $(this).text() == 'Meta Keywords' || $(this).text() == 'Meta Description') {
                    $(this).parent('.row').parent('section').css('display', 'none');
                }
            });
        }
    }
    if (window.location.href.indexOf("#hpe_photo_gxy") != -1 && window.location.href.indexOf("?lid=Galleries&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1 && window.location.href.indexOf("&pkey=&") != -1) { // New Photo
        if ($('#submit1').length || $('#submit2').length) {
            var pps = window.location.href.split('hpe_photo_gxy').pop();
            var pqs = pps.replace(/@@/g, "'").replace(/_/g, " ");
            var pms = pqs.replace("&&", " - ");
            $('#menu option').filter(function() {
                return ($(this).text() == pms);
            }).prop('selected', true);
            createCookie('hpe_newx' + wd, 'Yes');
            var hi = setInterval(function() { // Click on "SUBMIT" will hide IFRAME and show Loader
                if ($('#submit1').length) {
                    if ($('#submit1').val().toLowerCase().indexOf('wait') != -1) {
                        createCookie('hpe_hide_iframe' + wd, 'Yes');
                        clearInterval(hi);
                    }
                }
            }, 10);
            $('#submit2').click(function() {
                eraseCookie('hpe_newx' + wd);
                createCookie('hpe_cancel' + wd, 'Yes');
            });
            if (window.location.href.indexOf("&isdate") != -1) { // Set Issue Date
                var dates = $.urlParam('isdate');
                var years = dates.split('_').pop();
                var days = dates.split('_' + years).shift().split('_').pop();
                var months = dates.split('_' + years).shift().split('_').shift();
                //var idate = months + '/' + days + '/' + years;
                var idate = years + '-' + months + '-' + days;
                $('#issue_date').val(idate);
            }
        }
    }
    // OLD PhotoGallery
    if (readCookie('hpe_old_photogx' + wd) == 'Yes') {
        history.pushState('', '', "#hpe_old_photogx");
    }
    if (window.location.href.indexOf("#hpe_old_photogx") != -1 && window.location.href.indexOf("?lid=PhotoGallery&") != -1 && window.location.href.indexOf("/list") != -1) { // Gallery List
        eraseCookie('hpe_old_photogx' + wd);
        $('.smbody td:nth-child(5), .smbody td:nth-child(6)').css('display', 'none');
        $('.my-form').css('width', '90%');
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_old_photogx');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_old_photogx') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
    }
    if (window.location.href.indexOf("#hpe_old_photogx") != -1 && window.location.href.indexOf("&eflag=") == -1) { // Inside Search Page - Visible
        $('.my-form .label').css('width', '160px');
        $('.col.col-8, .col.col-8 select').css('width', '300px');
        createCookie('hpe_old_photogx' + wd, 'Yes');
    }
    if (window.location.href.indexOf("#hpe_old_photogx") != -1 && window.location.href.indexOf("?lid=PhotoGallery&") != -1 && window.location.href.indexOf("/form") != -1 && window.location.href.indexOf("&eflag=") != -1) { // Photo Screen
        if ($('#submit1').length || $('#submit2').length) {
            $('.hpe-my-form header').css('display', 'none');
            createCookie('hpe_old_photogx' + wd, 'Yes');
        }
    }
    // Email
    if (window.location.href.indexOf("#hpe_$email") != -1) { // First load
        window.location.href = '/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_email';
    }
    if (window.location.href.indexOf("#hpe_email") != -1) { // Inside Ticket Page
        $('#submit2').click(function() {
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        $('#submit1').click(function() {
            createCookie('hpe_ticket' + wd, 'Yes');
        });
        $('fieldset section').css('display', 'none');
        $('#subject').val('Change Email on Homepage');
        $('#message').attr('placeholder', 'Write new Email here...');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == '* Issue, Request or Question') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
    }
    if (window.location.href.indexOf("/list") != -1 && window.location.href.indexOf("lid=SupportTickets&") != -1 && readCookie('hpe_ticket' + wd) == 'Yes') { // Inside Ticket List
        createCookie('hpe_poll_close' + wd, 'Yes');
        $('.my-form').css('display', 'none');
        $('.my-form').after('<div class="dpe_delete">Your request has been successfully submitted</div>');
    }
    // Social
    if (window.location.href.indexOf("#hpe_$social") != -1) { // First load
        window.location.href = '/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_social';
    }
    if (window.location.href.indexOf("#hpe_social") != -1) { // Inside Ticket Page
        $('#submit2').click(function() {
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        $('#submit1').click(function() {
            createCookie('hpe_ticket' + wd, 'Yes');
        });
        $('fieldset section').css('display', 'none');
        $('#subject').val('Change Social media links on Homepage');
        $('#message').attr('placeholder', 'Write Social media links here...');
        $('.label.col.col-4').each(function() {
            $(this).css('display', 'none');
            $(this).siblings('.col.col-10').css({ 'width': '90%', 'margin-left': '5%' });
            if ($(this).text() == '* Issue, Request or Question') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
    }
    // Phone
    if (window.location.href.indexOf("#hpe_$phone") != -1) { // First load
        window.location.href = '/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_phone';
    }
    if (window.location.href.indexOf("#hpe_phone") != -1) { // Inside Ticket Page
        $('#submit2').click(function() {
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        $('#submit1').click(function() {
            createCookie('hpe_ticket' + wd, 'Yes');
        });
        $('fieldset section').css('display', 'none');
        $('#subject').val('Change Phone number on Homepage');
        $('#message').attr('placeholder', 'Write new Phone number here...');
        $('.label.col.col-4').each(function() {
            $(this).css('display', 'none');
            $(this).siblings('.col.col-10').css({ 'width': '90%', 'margin-left': '5%' });
            if ($(this).text() == '* Issue, Request or Question') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
    }
    // Bottom Links
    if (window.location.href.indexOf("#hpe_$bottom_links") != -1) { // First load
        window.location.href = '/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_bottom_links';
    }
    if (window.location.href.indexOf("#hpe_bottom_links") != -1) { // Inside Ticket Page
        $('#submit2').click(function() {
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        $('#submit1').click(function() {
            createCookie('hpe_ticket' + wd, 'Yes');
        });
        $('fieldset section').css('display', 'none');
        $('#subject').val('Bottom Links on Homepage');
        $('#message').attr('placeholder', 'Write issue/request regarding links here..');
        $('.label.col.col-4').each(function() {
            $(this).css('display', 'none');
            $(this).siblings('.col.col-10').css({ 'width': '90%', 'margin-left': '5%' });
            if ($(this).text() == '* Issue, Request or Question') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
    }
    // Top Links
    if (window.location.href.indexOf("#hpe_$top_links") != -1) { // First load
        window.location.href = '/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_top_links';
    }
    if (window.location.href.indexOf("#hpe_top_links") != -1) { // Inside Ticket Page
        $('#submit2').click(function() {
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        $('#submit1').click(function() {
            createCookie('hpe_ticket' + wd, 'Yes');
        });
        $('fieldset section').css('display', 'none');
        $('#subject').val('Top Links on Homepage');
        $('#message').attr('placeholder', 'Write issue/request regarding links here..');
        $('.label.col.col-4').each(function() {
            $(this).css('display', 'none');
            $(this).siblings('.col.col-10').css({ 'width': '90%', 'margin-left': '5%' });
            if ($(this).text() == '* Issue, Request or Question') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
    }
    // Google Custom Search
    if (window.location.href.indexOf("#hpe_$gsearch") != -1) { // First load
        window.location.href = '/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_gsearch';
    }
    if (window.location.href.indexOf("#hpe_gsearch") != -1) { // Inside Ticket Page
        $('#submit2').click(function() {
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        $('#submit1').click(function() {
            createCookie('hpe_ticket' + wd, 'Yes');
        });
        $('fieldset section').css('display', 'none');
        $('#subject').val('Search box on Homepage');
        $('#message').attr('placeholder', 'Write issue/request regarding Search box here..');
        $('.label.col.col-4').each(function() {
            $(this).css('display', 'none');
            $(this).siblings('.col.col-10').css({ 'width': '90%', 'margin-left': '5%' });
            if ($(this).text() == '* Issue, Request or Question') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
    }
    // Forms
    if (window.location.href.indexOf("#hpe_$formbody$$") != -1) { // First load
        //var fnn = window.location.href.split('$$').pop();
        window.location.href = '/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_formbodys';
    }
    if (window.location.href.indexOf("#hpe_formbodys") != -1) { // Inside Ticket Page
        var tfn = readCookie('hpe_formname' + wd);
        $('#submit2').click(function() {
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        $('#submit1').click(function() {
            createCookie('hpe_ticket' + wd, 'Yes');
        });
        $('fieldset section').css('display', 'none');
        $('#subject').val(tfn + ' Form');
        $('#message').attr('placeholder', 'Would you like to make changes to this form?  Give us your requirements or issues regarding this form.');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == '* Issue, Request or Question' || $(this).text() == 'Attachment') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
    }
    // Service Package
    if (window.location.href.indexOf("#hpe_$spackage$$") != -1) { // First load
        window.location.href = '/' + pfist + 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=' + wsite + '#hpe_spackages';
    }
    if (window.location.href.indexOf("#hpe_spackages") != -1) { // Inside Ticket Page
        $('#submit2').click(function() {
            createCookie('hpe_cancel' + wd, 'Yes');
        });
        $('#submit1').click(function() {
            createCookie('hpe_ticket' + wd, 'Yes');
        });
        $('fieldset section').css('display', 'none');
        $('#subject').val('Service Package');
        $('#message').attr('placeholder', 'Write issue/request regarding this Service Package...');
        $('.label.col.col-4').each(function() {
            if ($(this).text() == '* Issue, Request or Question' || $(this).text() == 'Attachment') {
                $(this).parent('.row').parent('section').css('display', 'block');
            }
        });
    }
    // Support Ticket List
    if (readCookie('hpe_support' + wd) == 'Yes') {
        eraseCookie('hpe_support' + wd);
        history.pushState('', '', "#hpe_support");
    }
    if (window.location.href.indexOf("#hpe_support") != -1 && window.location.href.indexOf("?lid=SupportTickets&") != -1) { // Ticket List
        $('a').each(function() {
            $(this).attr('href', $(this).attr('href') + '#hpe_support');
            if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager') {
                $(this).css('display', 'none');
                $(this).prev('.smicon_bullet1').css('display', 'none');
            }
            if ($(this).attr('href') == '/responsibility' + pext + '#hpe_support') {
                $(this).css('display', 'none');
                $(this).next('.smicon_bullet1').css('display', 'none');
            }
        });
        if ($('#submit1').length || $('#submit2').length) {
            createCookie('hpe_support' + wd, 'Yes');
        }
    }
    if (window.location.href.indexOf("#hpe_support") != -1 && window.location.href.indexOf("pform=support_tickets") != -1) { // Inside Ticket
        createCookie('hpe_support' + wd, 'Yes');
    }
});
// END: Live Builder(Site Manager)
