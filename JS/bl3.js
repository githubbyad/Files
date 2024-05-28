function Tooltip() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}


function ReadSubmenu() {
    let qrStr = location.href;
    if (qrStr.indexOf('&site') != -1) {
        qrStr = qrStr.split('&site').shift();
    }
    if (qrStr.indexOf("/index.html") != -1) {
        return SParameters();
    }
    const isFrontPage = qrStr.indexOf('.htm', 0);
    if (isFrontPage == -1) {
        return SParameters();
    } else {
        let sPos, ePos, smenu;
        sPos = qrStr.indexOf('/index', 0);
        if (qrStr.indexOf('?lb=') != -1) {
            sPos = qrStr.indexOf('=index', 0);
        }
        if (sPos != -1) {
            ePos = qrStr.lastIndexOf('.', qrStr.length);
            smenu = qrStr.substring(sPos + 6, ePos);
            if (smenu == SParameters()) {
                return SParameters();
            }
            if (qrStr.indexOf('smenu') != -1) {
                const url = new URL(qrStr);
                const smenup = url.searchParams.get("smenu");
                return smenup;
            } else {
                return smenu;
            }
        } else {
            sPos = qrStr.lastIndexOf('-', qrStr.length);
            if (sPos != -1) {
                ePos = qrStr.lastIndexOf('.', qrStr.length);
                smenu = qrStr.substring(sPos + 1, ePos);
                if (smenu == SParameters()) {
                    sPos = qrStr.lastIndexOf('-p', qrStr.length);
                    if (sPos == -1) {
                        return 'home';
                    }
                } else {
                    return smenu;
                }
            }
        }
    }
}




function getVIP(myObj) {
    document.write("<input type=\"hidden\" id=\"vip\" name=\"vip\" value=\"" + myObj.ip + "\">");
}


/* get AppServer */
let sites = ["bulletlink.one", "bulletlink.net"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
async function checkStatus(domain) {
  try {
    const response = await fetch(domain + 'app_server.php', {
      method: 'HEAD',
      headers: {
        'Access-Control-Request-Headers': 'content-type', // Add any additional headers if needed
      }
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}
async function findAvailableServer(sites) {
  for (const site of sites) {
    const url = 'https://' + site + '/';
    const isAvailable = await checkStatus(url);
    if (isAvailable) {
      return url;
    }
  }
  return '';
}
/* Check if the "AppServer" cookie exists */
const cookies = document.cookie.split(';');
let appServerCookie = null;
for (const cookie of cookies) {
  const [cookieName, cookieValue] = cookie.trim().split('=');
  if (cookieName === 'AppServer') {
    appServerCookie = cookieValue;
    break;
  }
}
if (appServerCookie == null) {
  sites = shuffleArray(sites);
  findAvailableServer(sites).then(appServer => document.cookie = "AppServer=" + appServer);
}


function ShowHTag(HTag) { document.getElementById(HTag).style.visibility = "visible"; }

function HideHTag(HTag) { document.getElementById(HTag).style.visibility = "hidden"; }


function setIframeHeight2(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
};



function GetTimeAgo(sDate, adjusttime, Article_Timestamp, format, TimezoneOffset) {

    var startDate = new Date(sDate);
    startDate = dateFormat(startDate, 'mm/dd/yyyy h:MM:ss TT');
    startDate = new Date(startDate);

    var endDate = new Date();
    endDate = dateFormat(endDate, 'mm/dd/yyyy h:MM:ss TT');
    endDate = new Date(endDate);

    if (adjusttime > 0) adjusttime = -adjusttime;
    else adjusttime = Math.abs(adjusttime);

    diff = new Date();
    diff.setTime(Math.abs((endDate.getTime() - ((TimezoneOffset + adjusttime - endDate.getTimezoneOffset()) * 60000)) - startDate.getTime()));
    timediff = diff.getTime();

    diff_pos_neg = new Date();
    diff_pos_neg.setTime((endDate.getTime() - ((TimezoneOffset + adjusttime - endDate.getTimezoneOffset()) * 60000)) - startDate.getTime());
    diff_check = diff_pos_neg.getTime();

    var cnt = 0;
    var str = '';

    days = Math.floor(timediff / (1000 * 60 * 60 * 24));
    timediff -= days * (1000 * 60 * 60 * 24);

    hours = Math.floor(timediff / (1000 * 60 * 60));
    timediff -= hours * (1000 * 60 * 60);

    mins = Math.floor(timediff / (1000 * 60));
    timediff -= mins * (1000 * 60);

    secs = Math.floor(timediff / 1000);
    timediff -= secs * 1000;

    // Rounding
    if (days > 0) cnt = cnt + 1;
    if (hours > 0 && cnt < 2) {
        cnt = cnt + 1;
        if (cnt == 2 && hours >= 12) days = days + 1;
        else if (cnt == 2 && hours < 12) hours = 0;
    }
    if (mins > 0 && cnt < 2) {
        cnt = cnt + 1;
        if (cnt == 2 && mins >= 30) hours = hours + 1;
        else if (cnt == 2 && mins < 30) mins = 0;
    }
    if (secs > 0 && cnt < 2) {
        cnt = cnt + 1;
        if (cnt == 2 && secs >= 30) mins = mins + 1;
        else if (cnt == 2 && secs < 30) secs = 0;
    }

    //------------------------------------

    if (diff_check > -5000) {
        if (days > 0 && days < 2) str = document.write(days + ' day ago');
        else if (days > 1 && days <= Article_Timestamp) str = document.write(days + ' days ago');
        else if (days > Article_Timestamp) return GetDate(sDate, format);
        else if (hours > 0 && hours < 2) str = document.write(hours + ' hour ago');
        else if (hours > 1) str = document.write(hours + ' hours ago');
        else if (mins > 0 && mins < 2) str = document.write(mins + ' min ago');
        else if (mins > 1) str = document.write(mins + ' mins ago');
        else if (secs > 0 && secs < 2) str = document.write(secs + ' sec ago');
        else if (secs > 1) str = document.write(secs + ' secs ago');
        else return GetDate(sDate, format);

    } else {
        return GetDate(sDate, format);
    }
    return str;
}



function GetSandwichMenu() { Tipped.create('.smenu1', { ajax: true, closeButton: false, showOn: 'click', skin: 'yellow', fixed: true, target: 'mouse', maxWidth: $(window).width() - 30 }); }


function LimitCharacters(txtMsg, indicator, indicator2, limitword) {
    stringmemo = txtMsg.value;
    stringmemo2 = stringmemo.replace(/\s\s+/g, ' '); // replace multiple whitespaces whit single space
    chars = txtMsg.value.length;
    word = stringmemo2.split(/\s/);
    wordcount = word.length;
    maxChar = txtMsg.maxLength;
    limitword2 = limitword.replace("W", "");


    if (limitword.toLowerCase().indexOf("w") >= 0) {
        if (wordcount > limitword2) {

            rgxwords = new RegExp('([^ ]*[ ]{0,1}){1,' + limitword2 + '}', 'g'); // regexp for specified number of spaces
            stringmemo3 = stringmemo2.match(rgxwords)[0]; // get the substring with "limitword2" number of words

            alert("Maximum word limit exceeded.!");
            stringmemo3 = stringmemo3.replace(/\s?$/, '');
            txtMsg.value = stringmemo3;
            word = stringmemo3.split(/\s/);
            wordcount = word.length;
            chars = stringmemo3.value.length;
        }

        if (txtMsg.value.length < 1) {
            document.getElementById(indicator).innerHTML = chars + " characters &nbsp; | &nbsp;";
            document.getElementById(indicator2).innerHTML = chars + " words";
        } else {
            document.getElementById(indicator).innerHTML = chars + " characters &nbsp; | &nbsp;";
            document.getElementById(indicator2).innerHTML = wordcount + " of " + limitword2 + " words";
        }

    } else {

        if (txtMsg.value.length < 1) {
            document.getElementById(indicator).innerHTML = chars + " of " + maxChar + " characters &nbsp; | &nbsp;";
            document.getElementById(indicator2).innerHTML = chars + " words";
        } else {
            document.getElementById(indicator).innerHTML = chars + " of " + maxChar + " characters &nbsp; | &nbsp;";
            document.getElementById(indicator2).innerHTML = wordcount + " words";
        }

    }
}



function goBack() {
    window.history.back()
}

function ArrayRemoveByKey(arrayName, key) {
    var x;
    var tmpArray = new Array();
    for (x in arrayName) {
        if (x != key) { tmpArray[x] = arrayName[x]; }
    }
    return tmpArray;
}

function ChangeBodyImage(styleName) {

    //alert(document.getElementById('blbodymain'));
    if (document.getElementById('blbodymain') != '') {

        if (readCookie(styleName) != null && readCookie(styleName) != '') {
            document.getElementById('blbodymain').style.backgroundImage = "url(/images/" + readCookie(styleName) + ")";
        }
    }
}


function GetTooltipSys1(width) {
    if (width == null || width == '') { width = 500; }
    Tipped.create('.s1', { ajax: false, closeButton: true, showOn: 'mouseover', skin: 'yellow', fixed: true, target: 'mouse', maxWidth: width });
}


function DisplayHighlight(divHighlight) {
    var qrStr = location.href;
    if (qrStr.indexOf("/index.html") != -1) { // Front Page New
        document.getElementById(divHighlight).style.display = 'block';
    }
    var isFrontPage = qrStr.indexOf('.htm', 0);
    if (isFrontPage == -1) { // Front Page
        document.getElementById(divHighlight).style.display = 'block';
    } else {
        var sPos, ePos, smenu;
        sPos = qrStr.indexOf('/index', 0);
        if (sPos != -1) {
            ePos = qrStr.lastIndexOf('.', qrStr.length);
            smenu = qrStr.substring(sPos + 6, ePos);
            if (smenu == SParameters()) {
                document.getElementById(divHighlight).style.display = 'block';
            }
        } else {
            sPos = qrStr.lastIndexOf('-', qrStr.length);
            if (sPos != -1) {
                ePos = qrStr.lastIndexOf('.', qrStr.length);
                smenu = qrStr.substring(sPos + 1, ePos);
                if (smenu == SParameters()) {
                    sPos = qrStr.lastIndexOf('-p', qrStr.length);
                    if (sPos == -1) {
                        document.getElementById(divHighlight).style.display = 'block';
                    }
                }
            }
        }
    }
}


function HideUnhideStickyAd(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display == 'none')
        content.style.display = 'block';
    else
        content.style.display = 'none';
}

function CloseStickyAd(contentId) {
    var myParameters = new Array();
    myParameters = ReadSParameters(location.href);
    var smenu = myParameters['smenu'];

    var content = document.getElementById(contentId);
    content.style.display = 'none';
    var adCode;
    if (contentId == 'stickyright')
        adCode = 'R';
    if (contentId == 'stickybottom')
        adCode = 'B';
    if (contentId == 'stickyleft')
        adCode = 'L';
    if (contentId == 'stickytop')
        adCode = 'T';

    createCookie("AdSticky" + adCode + smenu, "Yes");
}


function checkStickyAdCookie() {
    var myParameters = new Array();
    myParameters = ReadSParameters(location.href);
    var smenu = myParameters['smenu'];
    var isClosed;
    isClosed = readCookie("AdStickyR" + smenu);
    if (isClosed == "Yes")
        CloseStickyAd("stickyright");
    isClosed = readCookie("AdStickyB" + smenu);
    if (isClosed == "Yes")
        CloseStickyAd("stickybottom");
    isClosed = readCookie("AdStickyL" + smenu);
    if (isClosed == "Yes")
        CloseStickyAd("stickyleft");
    isClosed = readCookie("AdStickyT" + smenu);
    if (isClosed == "Yes")
        CloseStickyAd("stickytop");
    if (document.getElementById('stickytopContent').children.length < 2) {
        CloseStickyAd("stickytop");
    }
    if (document.getElementById('stickybottomContent').children.length < 2) {
        CloseStickyAd("stickybottom");
    }
    if (document.getElementById('stickyleftContent').children.length < 2) {
        CloseStickyAd("stickyleft");
    }
    if (document.getElementById('stickyrightContent').children.length < 2) {
        CloseStickyAd("stickyright");
    }
}

// To search value in array. Returns array with indexes.
function ArraySearch(myArray, searchStr) {
    var returnArray = false;
    for (i = 0; i < myArray.length; i++) {
        if (typeof(searchStr) == 'function') {
            if (searchStr.test(myArray[i])) {
                if (!returnArray) { returnArray = [] }
                returnArray.push(i);
            }
        } else {
            if (myArray[i] === searchStr) {
                if (!returnArray) { returnArray = [] }
                returnArray.push(i);
            }
        }
    }
    return returnArray;
}

// To find max value in array  
function ArrayMax(myArray) {
    var max = myArray[0];
    var len = myArray.length;
    //alert(len);
    for (var i = 1; i < len; i++)
        if (myArray[i] > max) max = myArray[i];
    return max;
}

// To find min value in array  
function ArrayMin(myArray) {
    var min = myArray[0];
    var len = myArray.length;
    for (var i = 1; i < len; i++)
        if (myArray[i] < min) min = myArray[i];
    return min;
}

function GetTimeDifference(sDate) {

    var startDate = new Date(sDate);
    startDate = dateFormat(startDate, 'mm/dd/yyyy h:MM:ss TT');
    startDate = new Date(startDate);

    var endDate = new Date();
    endDate = dateFormat(endDate, 'mm/dd/yyyy h:MM:ss TT');
    endDate = new Date(endDate);

    diff = new Date();
    diff.setTime(Math.abs((endDate.getTime() + (endDate.getTimezoneOffset() * 60000)) - startDate.getTime()));
    timediff = diff.getTime();

    var cnt = 0;
    var str = '';

    //------------------------------------

    //weeks = Math.floor(timediff / (1000 * 60 * 60 * 24 * 7));
    //timediff -= weeks * (1000 * 60 * 60 * 24 * 7);

    days = Math.floor(timediff / (1000 * 60 * 60 * 24));
    timediff -= days * (1000 * 60 * 60 * 24);

    hours = Math.floor(timediff / (1000 * 60 * 60));
    timediff -= hours * (1000 * 60 * 60);

    mins = Math.floor(timediff / (1000 * 60));
    timediff -= mins * (1000 * 60);

    secs = Math.floor(timediff / 1000);
    timediff -= secs * 1000;

    // Rounding
    if (days > 0) cnt = cnt + 1;
    if (hours > 0 && cnt < 2) {
        cnt = cnt + 1;
        if (cnt == 2 && hours >= 12) days = days + 1;
        else if (cnt == 2 && hours < 12) hours = 0;
    }
    if (mins > 0 && cnt < 2) {
        cnt = cnt + 1;
        if (cnt == 2 && mins >= 30) hours = hours + 1;
        else if (cnt == 2 && mins < 30) mins = 0;
    }
    if (secs > 0 && cnt < 2) {
        cnt = cnt + 1;
        if (cnt == 2 && secs >= 30) mins = mins + 1;
        else if (cnt == 2 && secs < 30) secs = 0;
    }

    //------------------------------------

    if (days > 0) str = days + ' days';
    else if (hours > 0) str = hours + ' hours';
    else if (mins > 0) str = mins + ' mins';
    else if (secs > 0) str = secs + ' secs';
    else str = '0 secs';

    return str;
}

function ReadSParameters(str) {
    var qrStr, spQrStr, isFrontPage, sPos, ePos;
    var twindow, smenu, mad, a, sname, isIndex0;
    var myParameters = new Array();
    if (str == null) {
        qrStr = location.href;

        isPopUp = qrStr.indexOf('/AdGroupPopup.htm', 0);
        if (isPopUp != -1) {
            qrStr = parent.location.href;
        }
    } else {
        qrStr = str
    }

    spQrStr = qrStr.substring(1);
    isFrontPage = qrStr.indexOf('.htm', 0);
    isIndex0 = qrStr.indexOf('/index0', 0);
    smenu = getQueryVariable(spQrStr, 'smenu');



    // Front Page
    if (isFrontPage == -1) {
        smenu = SParameters();
        var myArray = new Array();
        myArray = GetMenuParameters(smenu);
        twindow = myArray['twindow'];
        smenu = smenu;
        mad = myArray['mad'];
        a = myArray['a'];
        sname = myArray['sname'];
        //alert('*' + smenu + '*');

    }

    // Parameters stored in hostname.js
    else if ((smenu == '' || smenu == null) && (isIndex0 == -1)) {
        sPos = qrStr.indexOf('/index', 0);
        if (sPos != -1) {
            ePos = qrStr.lastIndexOf('.', qrStr.length);
            smenu = qrStr.substring(sPos + 6, ePos);
            //alert(qrStr + '*' + smenu);

        } else {
            sPos1 = qrStr.lastIndexOf('-', qrStr.length);
            sPos2 = qrStr.lastIndexOf('.htm', qrStr.length);
            if (sPos1 != -1 || sPos2 != -1) {
                smenu = qrStr.substring(sPos1 + 1, sPos2);
                //alert('*' + smenu + '*');
            }
        }
        var myArray = new Array();
        myArray = GetMenuParameters(smenu);
        twindow = myArray['twindow'];
        smenu = smenu;
        mad = myArray['mad'];
        a = myArray['a'];
        sname = myArray['sname'];

    }

    // Parameters passed using Querystring
    else {
        twindow = getQueryVariable(spQrStr, 'twindow');
        smenu = getQueryVariable(spQrStr, 'smenu');
        mad = getQueryVariable(spQrStr, 'mad');
        a = getQueryVariable(spQrStr, 'a');
        sname = getQueryVariable(spQrStr, 'sname');
    }

    if (twindow == null) {
        twindow = '';
    }
    if (smenu == null) {
        smenu = '';
    }
    if (mad == null) {
        mad = '';
    }
    if (a == null) {
        a = '';
    }
    if (sname == null) {
        sname = '';
    }

    myParameters['twindow'] = twindow;
    myParameters['smenu'] = smenu;
    myParameters['mad'] = mad;
    myParameters['a'] = a;
    myParameters['sname'] = sname;

    return myParameters;
}

function OpenLoginPopup(ctl) {
    var s = readCookie('loginStatus');
    var url = window.location.href;
    var siteUh = location.href.match(/:\/\/(.[^/]+)/)[1];
    var siteU = location.href.match(/:\/\/(.[^/]+)/)[1];
    if (readCookie('hpe_client_domain')) {
        if (siteU != readCookie('hpe_client_domain').split('//').pop().split('/').shift()) {
            siteU = readCookie('hpe_client_domain').split('//').pop().split('/').shift();
        }
    }
    var lb_page = 'hpeditor.asp'; // LB page
    var myParameters = new Array();
    var qrStr;
    if (ctl == null) {
        qrStr = location.href;
    } else {
        qrStr = ctl.href;
    }
    myParameters = ReadSParameters(qrStr);
    var a = myParameters['a'];

    if (a == '1' && s != 'Yes') {
        createCookie('curl', escape(qrStr));
        if (readCookie('hpe_client_domain')) {
            if (siteUh != readCookie('hpe_client_domain').split('//').pop().split('/').shift()) {
                window.open('/' + lb_page + '?lb=index0.htm?twindow=Form&pform={{Login}}&smenu=0&sname=target_form2.asp&site=' + siteU, target = '_parent');
                return false;
            }
        }
        if (url.split("/").length == 5) { // Folder Sites
            var folder = "/" + url.split("/")[3];
            window.open(folder + "/index0.htm?pform={{Login}}&sname=target_form2.asp&site=" + siteU + folder, target = "_parent");
            return false;
        }
        window.open('/index0.htm?pform={{Login}}&sname=target_form2.asp&site=' + siteU, target = '_parent');
        return false;
    } else {
        return true;
    }
}

function checkLoginStatus(isRestricted) {
    if (readCookie('Style_s13251')) { // header background - old template
        document.getElementById('tdHeader').style.backgroundImage = "url(/lib/images/" + readCookie('Style_s13251') + ")";
    }
    var url = location.href;
    var qs = url.substring(url.indexOf('?'));

    var myParameters = new Array();
    myParameters = ReadSParameters();
    var sname = myParameters['sname'];
    var a = myParameters['a'];
    var urlhttps = url.startsWith("https");
    var urlarr = new URL(url);
    var surl;
    if (sname.length > 0) {
        var uint = setInterval(function() {
            if (readCookie('AppServer')) {
                clearInterval(uint);
                surl = readCookie('AppServer');
                var sframe = "<iframe id=\"frame1\" style=\"border:none;\" width=\"100%\" src=\"" + surl + sname + qs + "\" onload=\"window.parent.parent.scrollTo(0,0);iFrameResize({log:true}, '#frame1');\"></iframe>"
                document.getElementById("MainContent").innerHTML = sframe;
            }
        }, 10);

    } else {
        if (a == 1) {
            var s = readCookie('loginStatus');
            if (s != 'Yes') {
                var divAccess1 = document.getElementById('divAccess');
                if (divAccess1 != null) {
                    document.getElementById('divAccess').style.display = 'none';
                    OpenLoginPopup();
                    document.getElementById('divMain').style.display = 'none';
                }
                return false;
            } else {
                var divMain1 = document.getElementById('divMain');
                if (divMain1 != null) {
                    document.getElementById('divMain').style.display = 'block';
                }
                return true;
            }
        } else {
            var divMain = document.getElementById('divMain');
            if (divMain != null) {
                document.getElementById('divMain').style.display = 'block';
            }
            return true;
        }
    }
}

function jsAppend(js_file) {
    js_script = document.createElement('script');
    js_script.type = "text/javascript";
    js_script.src = js_file;
    document.getElementsByTagName('head')[0].appendChild(js_script);
}

function cssAppend(css_file) {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", css_file);
    document.getElementsByTagName('head')[0].appendChild(fileref);
}

String.prototype.startsWith = function(str) {
    return (this.indexOf(str) === 0);
}

function ReservedKeywordChecker(ctl) {
    if (ctl.type == "text" || ctl.type == "textarea") {
        var v1 = ctl.value.toLowerCase();
        if (v1.startsWith('insert ') || v1.startsWith('insert%20') || v1.startsWith('update ') || v1.startsWith('update%20') || v1.startsWith('delete ') || v1.startsWith('delete%20') || v1.startsWith('truncate ') || v1.startsWith('truncate%20')) {
            var msg = "You cannot start with this special word. Try again with different word.";
            alert(msg, ctl);
            ctl.focus();
            return false;
        }
    }
    return true;
}

function reloadiframe(id, theme, days) {
    var win = window.frames[id];
    if (win != null) {
        window.frames[id].IframeChooseStyle(theme, days);
    }
}

function GetDate(CurrentDate, format) {
    if (CurrentDate == null) {
        CurrentDate = new Date();
    }
    if (format == '') {
        format = GetDateFormat();
    }
    if (format == 'No') {
        document.write('');
    }
    if (format == 'Default') {
        document.write(new Date());
    }
    if (format == 'Friday, Jul 15, 2009') {
        document.write(dateFormat(CurrentDate, 'dddd, mmm dd, yyyy'));
    }
    if (format == 'Friday, Jul 15, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dddd, mmm dd, yyyy, h:MM TT'));
    }
    if (format == 'Friday, July 15, 2009') {
        document.write(dateFormat(CurrentDate, 'dddd, mmmm dd, yyyy'));
    }
    if (format == 'Friday, July 15, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dddd, mmmm dd, yyyy, h:MM TT'));
    }
    if (format == 'Fri, Jul 15, 2009') {
        document.write(dateFormat(CurrentDate, 'ddd, mmm dd, yyyy'));
    }
    if (format == 'Fri, Jul 15, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'ddd, mmm dd, yyyy, h:MM TT'));
    }
    if (format == 'Fri, July 15, 2009') {
        document.write(dateFormat(CurrentDate, 'ddd, mmmm dd, yyyy'));
    }
    if (format == 'Fri, July 15, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'ddd, mmmm dd, yyyy, h:MM TT'));
    }
    if (format == 'Jul 15, 2009') {
        document.write(dateFormat(CurrentDate, 'mmm dd, yyyy'));
    }
    if (format == 'Jul 15, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'mmm dd, yyyy, h:MM TT'));
    }
    if (format == 'July 15, 2009') {
        document.write(dateFormat(CurrentDate, 'mmmm dd, yyyy'));
    }
    if (format == 'July 15, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'mmmm dd, yyyy, h:MM TT'));
    }

    //-----------

    if (format == '07/15/09') {
        document.write(dateFormat(CurrentDate, 'mm/dd/yy'));
    }
    if (format == '07/15/09 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'mm/dd/yy h:MM TT'));
    }
    if (format == '07/15/2009') {
        document.write(dateFormat(CurrentDate, 'mm/dd/yyyy'));
    }
    if (format == '07/15/2009 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'mm/dd/yyyy h:MM TT'));
    }

    if (format == '07.15.09') {
        document.write(dateFormat(CurrentDate, 'mm.dd.yy'));
    }
    if (format == '07.15.09 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'mm.dd.yy h:MM TT'));
    }
    if (format == '07.15.2009') {
        document.write(dateFormat(CurrentDate, 'mm.dd.yyyy'));
    }
    if (format == '07.15.2009 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'mm.dd.yyyy h:MM TT'));
    }

    if (format == '07-15-09') {
        document.write(dateFormat(CurrentDate, 'mm-dd-yy'));
    }
    if (format == '07-15-09 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'mm-dd-yy h:MM TT'));
    }
    if (format == '07-15-2009') {
        document.write(dateFormat(CurrentDate, 'mm-dd-yyyy'));
    }
    if (format == '07-15-2009 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'mm-dd-yyyy h:MM TT'));
    }

    //-----------------------------------------------------------------

    if (format == 'Friday, 15 Jul, 2009') {
        document.write(dateFormat(CurrentDate, 'dddd, dd mmm, yyyy'));
    }
    if (format == 'Friday, 15 Jul, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dddd, dd mmm, yyyy, h:MM TT'));
    }
    if (format == 'Friday, 15 July, 2009') {
        document.write(dateFormat(CurrentDate, 'dddd, dd mmmm, yyyy'));
    }
    if (format == 'Friday, 15 July, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dddd, dd mmmm, yyyy, h:MM TT'));
    }
    if (format == 'Fri, 15 Jul, 2009') {
        document.write(dateFormat(CurrentDate, 'ddd, dd mmm, yyyy'));
    }
    if (format == 'Fri, 15 Jul, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'ddd, dd mmm, yyyy, h:MM TT'));
    }
    if (format == 'Fri, 15 July, 2009') {
        document.write(dateFormat(CurrentDate, 'ddd, dd mmmm, yyyy'));
    }
    if (format == 'Fri, 15 July, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'ddd, dd mmmm, yyyy, h:MM TT'));
    }
    if (format == '15 Jul, 2009') {
        document.write(dateFormat(CurrentDate, 'dd mmm, yyyy'));
    }
    if (format == '15 Jul, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dd mmm, yyyy, h:MM TT'));
    }
    if (format == '15 July, 2009') {
        document.write(dateFormat(CurrentDate, 'dd mmmm, yyyy'));
    }
    if (format == '15 July, 2009, 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dd mmmm, yyyy, h:MM TT'));
    }

    //-----------

    if (format == '15/07/09') {
        document.write(dateFormat(CurrentDate, 'dd/mm/yy'));
    }
    if (format == '15/07/09 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dd/mm/yy h:MM TT'));
    }
    if (format == '15/07/2009') {
        document.write(dateFormat(CurrentDate, 'dd/mm/yyyy'));
    }
    if (format == '15/07/2009 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dd/mm/yyyy h:MM TT'));
    }

    if (format == '15.07.09') {
        document.write(dateFormat(CurrentDate, 'dd.mm.yy'));
    }
    if (format == '15.07.09 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dd.mm.yy h:MM TT'));
    }
    if (format == '15.07.2009') {
        document.write(dateFormat(CurrentDate, 'dd.mm.yyyy'));
    }
    if (format == '15.07.2009 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dd.mm.yyyy h:MM TT'));
    }

    if (format == '15-07-09') {
        document.write(dateFormat(CurrentDate, 'dd-mm-yy'));
    }
    if (format == '15-07-09 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dd-mm-yy h:MM TT'));
    }
    if (format == '15-07-2009') {
        document.write(dateFormat(CurrentDate, 'dd-mm-yyyy'));
    }
    if (format == '15-07-2009 10:30 AM') {
        document.write(dateFormat(CurrentDate, 'dd-mm-yyyy h:MM TT'));
    }

}


var dateFormat = function() {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function(val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function(date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.format = function(mask, utc) {
    return dateFormat(this, mask, utc);
};

//------------------------------------------------------------

function ArraySortShuffleMerge(myAds) {
    var negAds = new Array();
    var zeroAds = new Array();
    var posiAds = new Array();
    var totalAds = new Array();
    var order_no;

    for (var i in myAds) {
        order_no = i.substring(i.lastIndexOf("_") + 1, i.length);
        if (order_no < 0) {
            negAds[i] = myAds[i];
        } else if (order_no == 0) {
            zeroAds[i] = myAds[i];
        } else if (order_no > 0) {
            posiAds[i] = myAds[i];
        }
    }

    zeroAds = ArrayShuffle(zeroAds);

    for (var i in negAds) {
        totalAds[i] = negAds[i];
    }
    for (var i in zeroAds) {
        totalAds[i] = zeroAds[i];
    }
    for (var i in posiAds) {
        totalAds[i] = posiAds[i];
    }
    return totalAds;
}


///////////////////////////////////////////////////////////////////////////////////


function DoClickOnEnter(link, e) {
    var key;

    if (window.event)
        key = window.event.keyCode; //IE
    else
        key = e.which; //firefox

    if (key == 13) {
        var search = document.getElementById('SearchBox1').value;
        window.location.href = link + escape(search);
        //event.keyCode = 0
    }
}

function HideControls(objName) {
    var arr = new Array();
    arr = document.getElementsByTagName('span');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].getAttribute('name') == objName) {
            arr[i].style.display = 'none';
        }
    }
    arr = document.getElementsByTagName('div');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].getAttribute('name') == objName) {
            arr[i].style.display = 'none';
        }
    }
}


function chkSearch(link, ctrl) {
    var search = document.getElementById('SearchBox1').value;
    ctrl.href = link + escape(search);
}


function alert(msg, ctl) {
    if (!document.getElementById('f_alert_button')) {
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<button id='f_alert_button' type='button' data-bs-toggle='modal' data-bs-target='#f_alert' style='display:none;'></button><div class='f_alert_box modal fade' id='f_alert' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_alertLabel' aria-hidden='true'><div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'><div class='modal-content'><div class='modal-header' style='display:none'><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body text-center' style='white-space: pre-wrap;'>" + msg + "</div><div class='modal-footer d-flex justify-content-center border-0'><button type='button' class='f_alert_close btn btn-dark py-2 px-4' data-bs-dismiss='modal'>OK</button></div></div></div><style>@media (min-width:576px){.modal-dialog{max-width:400px}}</style></div>");
        document.getElementById('f_alert_button').click();
        document.getElementsByClassName('f_alert_close')[0].addEventListener('click', function() {
            document.getElementById('f_alert_button').remove();
            document.getElementsByClassName('f_alert_box')[0].remove();
            if (ctl) {
                ctl.focus();
            }
        });
    }
}

function confirm(msg, ctl) {
    if (!document.getElementById('f_confirm_button')) {
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<button id='f_confirm_button' type='button' data-bs-toggle='modal' data-bs-target='#f_confirm' style='display:none;'></button><div class='f_confirm_box modal fade' id='f_confirm' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_confirmLabel' aria-hidden='true'><div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'><div class='modal-content'><div class='modal-header' style='display:none'><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body text-center' style='white-space: pre-wrap;'>" + msg + "</div><div class='modal-footer d-flex justify-content-center border-0'><button type='button' class='f_confirm_yes btn btn-danger me-3 py-2 px-4' data-bs-dismiss='modal'>Confirm</button><button type='button' class='f_confirm_close btn btn-dark py-2 px-4' data-bs-dismiss='modal'>Cancel</button></div></div></div><style>@media (min-width:576px){.modal-dialog{max-width:400px}}</style></div>");
        document.getElementById('f_confirm_button').click();
        document.getElementsByClassName('f_confirm_close')[0].addEventListener('click', function() {
            document.getElementById('f_confirm_button').remove();
            document.getElementsByClassName('f_confirm_box')[0].remove();
        });
        document.getElementsByClassName('f_confirm_yes')[0].addEventListener('click', function() {
            document.getElementById('f_confirm_button').remove();
            document.getElementsByClassName('f_confirm_box')[0].remove();
            if (ctl) {
                window.location = ctl.href;
            }
        });
    }
    return false;
}

function confirmdelete(msg, ctl) {
    if (!document.getElementById('f_confirm_delete_button')) {
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<button id='f_confirm_delete_button' type='button' data-bs-toggle='modal' data-bs-target='#f_confirm_delete' style='display:none;'></button><div class='f_confirm_delete_box modal fade' id='f_confirm_delete' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_confirm_deleteLabel' aria-hidden='true'><div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'><div class='modal-content'><div class='modal-header' style='display:none'><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body text-center' style='white-space: pre-wrap;'>" + msg + "</div><div class='modal-footer d-flex justify-content-center border-0'><button type='button' class='f_confirm_delete_yes btn btn-danger me-3 py-2 px-4' data-bs-dismiss='modal'>Delete</button><button type='button' class='f_confirm_delete_close btn btn-dark py-2 px-4' data-bs-dismiss='modal'>Cancel</button></div></div></div><style>@media (min-width:576px){.modal-dialog{max-width:400px}}</style></div>");
        document.getElementById('f_confirm_delete_button').click();
        document.getElementsByClassName('f_confirm_delete_close')[0].addEventListener('click', function() {
            document.getElementById('f_confirm_delete_button').remove();
            document.getElementsByClassName('f_confirm_delete_box')[0].remove();
        });
        document.getElementsByClassName('f_confirm_delete_yes')[0].addEventListener('click', function() {
            document.getElementById('f_confirm_delete_button').remove();
            document.getElementsByClassName('f_confirm_delete_box')[0].remove();
            if (ctl) {
                window.location = ctl.href;
            }
        });
    }
    return false;
}

function confirmhide(msg, ctl) {
    if (!document.getElementById('f_confirm_hide_button')) {
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<button id='f_confirm_hide_button' type='button' data-bs-toggle='modal' data-bs-target='#f_confirm_hide' style='display:none;'></button><div class='f_confirm_hide_box modal fade' id='f_confirm_hide' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_confirm_hideLabel' aria-hidden='true'><div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'><div class='modal-content'><div class='modal-header' style='display:none'><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body text-center' style='white-space: pre-wrap;'>" + msg + "</div><div class='modal-footer d-flex justify-content-center border-0'><button type='button' class='f_confirm_hide_yes btn btn-danger me-3 py-2 px-4' data-bs-dismiss='modal'>Hide</button><button type='button' class='f_confirm_hide_close btn btn-dark py-2 px-4' data-bs-dismiss='modal'>Cancel</button></div></div></div><style>@media (min-width:576px){.modal-dialog{max-width:400px}}</style></div>");
        document.getElementById('f_confirm_hide_button').click();
        document.getElementsByClassName('f_confirm_hide_close')[0].addEventListener('click', function() {
            document.getElementById('f_confirm_hide_button').remove();
            document.getElementsByClassName('f_confirm_hide_box')[0].remove();
        });
        document.getElementsByClassName('f_confirm_hide_yes')[0].addEventListener('click', function() {
            document.getElementById('f_confirm_hide_button').remove();
            document.getElementsByClassName('f_confirm_hide_box')[0].remove();
            if (ctl) {
                window.location = ctl.href;
            }
        });
    }
    return false;
}

function ChangeInputFocus(obj, evt, cname) {
    if (evt.type == "focus")
        obj.className = cname;
    else if (evt.type == "blur")
        obj.className = cname;
}


function getQueryVariable(query, variable) {
    query = query.replace('?', "&");
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return "";
}

function ResizeIFrame(IFrameContent) {
    document.getElementById(IFrameContent).height = document.getElementById(IFrameContent).contentWindow.document.body.scrollHeight;
    document.getElementById(IFrameContent).width = document.getElementById(IFrameContent).contentWindow.document.body.scrollWidth;
    scroll(0, 0);
}


function UseIFrameAds(IFrameContent) {
    document.getElementById(IFrameContent).height = document.getElementById(IFrameContent).contentWindow.document.body.scrollHeight;
    document.getElementById(IFrameContent).width = document.getElementById(IFrameContent).contentWindow.document.body.scrollWidth;
}


function GotoParent(url) {
    if (self.parent.frames.length != 0) self.parent.location = url;
}

function login() {
    url = location.href;
    var f = url.substring(0, url.indexOf('?'));
    if (f == "") { f = url; }
    f = f.substring(f.lastIndexOf('/') + 1);
    url = url.replace(f, "index0.htm")
    if (f.substring(0, 2).toLowerCase() == "ps" && readCookie("BLUserLoggedIn") == null) { document.location.href = url + "&sdetail=0"; }
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

function RunScript() {

}

function ChangeStyle_s13251(fName) {
    parent.document.getElementById('tdHeader').style.backgroundImage = "url(/lib/images/" + fName + ")";
    createCookie("Style_s13251", fName, 60);
}

function PopupWindow(mypage, myname, w, h, scroll) {
    var win = null;
    LPos = (screen.width) ? (screen.width - w) / 2 : 0;
    TPos = (screen.height) ? (screen.height - h) / 2 : 0;
    settings = 'height=' + h + ',width=' + w + ',top=' + TPos + ',left=' + LPos + ',scrollbars=' + scroll + ',resizable';
    win = window.open(mypage, myname, settings);

}

function PopupWindow2(wName, w, h, scroll) {
    LPos = (screen.width) ? (screen.width - w) / 2 : 0;
    TPos = (screen.height) ? (screen.height - h) / 2 : 0;
    features = 'width=' + w + ',height=' + h + ',top=' + TPos + ',left=' + LPos + ',status=no,toolbar=no,location=no,menubar=no,titlebar=no,scrollbars=' + scroll + '';
    pop = window.open('', wName, features);
    if (pop.focus) { pop.focus(); }
    return true;
}

function LoadDoc(dataSource, dtag, gtrack) {

    var XMLHttpRequestObject = false;

    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new
        ActiveXObject("Microsoft.XMLHTTP");
    }

    if (XMLHttpRequestObject) {
        XMLHttpRequestObject.open("GET", dataSource);
        XMLHttpRequestObject.onreadystatechange = function() {
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                var v1 = document.getElementById(dtag);
                if (v1 != null)
                    v1.innerHTML = XMLHttpRequestObject.responseText;
                else {
                    v1 = parent.document.getElementById(dtag);
                    if (v1 != null)
                        v1.innerHTML = XMLHttpRequestObject.responseText;
                }

            }
        }

        XMLHttpRequestObject.send(null);
    }
}


function ValidateSize(file, limit) {
    var v = trim(file.value);
    if (v != '') {
        var FileSize = file.files[0].size / 1024 / 1024; // in MB
        var LimitSize = limit / 1024 / 1024;
        if (FileSize > LimitSize) {
            var msg = 'File size exceeded <b>' + LimitSize + ' MB</b> limit. Please upload smaller size.';
            alert(msg, this);
            this.focus();
            return false
        }
    }
    return true;
}

function DuplicateChecker(myValue, t, c, kn, kv, fkn, fkv, it, cv) {

    var XMLHttpRequestObject = false;
    if (location.protocol == "file:") {
        if (!XMLHttpRequestObject) try { XMLHttpRequestObject = new ActiveXObject("MSXML2.XMLHTTP"); } catch (e) { XMLHttpRequestObject = false; }
        if (!XMLHttpRequestObject) try { XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { XMLHttpRequestObject = false; }
    };
    if (!XMLHttpRequestObject) try { XMLHttpRequestObject = new XMLHttpRequest(); } catch (e) { XMLHttpRequestObject = false; }
    if (typeof ActiveXObject != "undefined") {
        if (!XMLHttpRequestObject) try { XMLHttpRequestObject = new ActiveXObject("MSXML2.XMLHTTP"); } catch (e) { XMLHttpRequestObject = false; }
        if (!XMLHttpRequestObject) try { XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { XMLHttpRequestObject = false; }
    }

    if (XMLHttpRequestObject) {
        var url = "DuplicateChecker.asp?v=" + myValue + "&t=" + t + "&c=" + c + "&kn=" + kn + "&kv=" + kv + "&fkn=" + fkn + "&fkv=" + fkv + "&it=" + it + "&cv=" + cv;
        // return url;
        XMLHttpRequestObject.open("GET", url, false);
        XMLHttpRequestObject.send(null);
        return XMLHttpRequestObject.responseText;
    } else {
        alert("To use this feature, please upgrade to a current web browser");
    }
}



function get_radio_value(frmId) {
    var rad_val;
    var frm;
    frm = document.getElementById(frmId);
    for (var i = 0; i < frm.choiceid.length; i++) {
        if (frm.choiceid[i].checked) {
            rad_val = frm.choiceid[i].value;
        }
    }
    return rad_val;
}


function get_checkbox_value(frmId) {
    var chk_val;
    var flag;
    var chk;
    var frm;
    frm = document.getElementById(frmId);

    chk = frm.choiceid1;
    if (chk != null) {
        if (chk.checked) {
            flag = 1;
        } else {
            flag = '';
        }
    } else {
        flag = '';
    }
    chk_val = "choiceid1=" + flag;

    chk = frm.choiceid2;
    if (chk != null) {
        if (chk.checked) {
            flag = 1;
        } else {
            flag = '';
        }
    } else {
        flag = '';
    }
    chk_val = chk_val + "&choiceid2=" + flag;

    chk = frm.choiceid3;
    if (chk != null) {
        if (chk.checked) {
            flag = 1;
        } else {
            flag = '';
        }
    } else {
        flag = '';
    }
    chk_val = chk_val + "&choiceid3=" + flag;

    chk = frm.choiceid4;
    if (chk != null) {
        if (chk.checked) {
            flag = 1;
        } else {
            flag = '';
        }
    } else {
        flag = '';
    }
    chk_val = chk_val + "&choiceid4=" + flag;

    chk = frm.choiceid5;
    if (chk != null) {
        if (chk.checked) {
            flag = 1;
        } else {
            flag = '';
        }
    } else {
        flag = '';
    }
    chk_val = chk_val + "&choiceid5=" + flag;

    chk = frm.choiceid6;
    if (chk != null) {
        if (chk.checked) {
            flag = 1;
        } else {
            flag = '';
        }
    } else {
        flag = '';
    }
    chk_val = chk_val + "&choiceid6=" + flag;

    chk = frm.choiceid7;
    if (chk != null) {
        if (chk.checked) {
            flag = 1;
        } else {
            flag = '';
        }
    } else {
        flag = '';
    }
    chk_val = chk_val + "&choiceid7=" + flag;
    return chk_val;
}





function keyRestrict(e, val, validType) {

    var key = '',
        keychar = '';
    key = getKeyCode(e);
    if (key == null) return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();

    var validchars;
    if (validType == "Number") {
        validchars = "0123456789";
    } else if (validType == "NumberNegative") {
        validchars = "-0123456789";
    } else if (validType == "Decimal") {
        validchars = "0123456789.";
    } else if (validType == "DecimalNegative") {
        validchars = "-0123456789.";
    } else if (validType == "cssNumber") {
        validchars = "0123456789%";
    } else if (validType == "Filename") {
        validchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
    } else if (validType == "Formname") {
        validchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_{}";
    } else if (validType == "ProductDiscount") {
        validchars = "0123456789.%";
    } else if (validType == "ServicePackageDiscount") {
        validchars = "0123456789.%F";
    } else if (validType == "Menu") {
        validchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_~!@$%^*()+={}[]<>|:. -";
    }
    validchars = validchars.toLowerCase();

    if (validType == "NumberNegative") {
        if (keychar == "-") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    } else if (validType == "Decimal") {
        if (keychar == ".") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    } else if (validType == "DecimalNegative") {
        if (keychar == ".") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (keychar == "-") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    } else if (validType == "cssNumber") {
        if (keychar == "%") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    } else {
        if (validchars.indexOf(keychar) != -1)
            return true;
    }

    if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27)
        return true;
    return false;
}






function getKeyCode(e) {
    if (window.event)
        return window.event.keyCode;
    else if (e)
        return e.which;
    else
        return null;
}








function trim(s) {
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    //s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    return s;
}


function DecimalValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var re5digit = /^[0-9]*(\.[0-9]+)?$/;
    if (myValue.search(re5digit) == -1) {
        var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
        alert(msg, myControl);
        myControl.focus();
        return false;
    }
    return true;
}


function RangeValidator(min, max, myKey, myControl) {
    var msg;
    var myValue = trim(myControl.value);
    if (myValue != "") {
        if (min && max) {
            if (!(myValue >= min && myValue <= max)) {
                msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Enter value between " + min + " and " + max + ".";
                alert(msg, myControl);
                myControl.focus();
                return false;
            }
        } else if (min) {
            if (!(myValue >= min)) {
                msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Enter value " + min + " or higher.";
                alert(msg, myControl);
                myControl.focus();
                return false;
            }
        } else if (max) {
            if (!(myValue <= max)) {
                msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Enter value " + max + " or less.";
                alert(msg, myControl);
                myControl.focus();
                return false;
            }
        }
    }
    return true;
}

function SelectHTMLtagValidator(caption, ctl) {
    if (ctl.type == 'text') {
        var v1 = ctl.value.toLowerCase();
        if (v1.indexOf('<html') > -1 || v1.indexOf('/html>') > -1 || v1.indexOf('<iframe') > -1 || v1.indexOf('<script') > -1 || v1.indexOf('<\/script>') > -1 || v1.indexOf('<div') > -1 || v1.indexOf('/div>') > -1 || v1.indexOf('<body') > -1 || v1.indexOf('/body>') > -1 || v1.indexOf('<p') > -1 || v1.indexOf('/p>') > -1 || v1.indexOf('<br') > -1 || v1.indexOf('/br>') > -1 || v1.indexOf('hr>') > -1 || v1.indexOf('<textarea') > -1 || v1.indexOf('<img') > -1 || v1.indexOf('<a') > -1 || v1.indexOf('<ul') > -1 || v1.indexOf('<li') > -1 || v1.indexOf('<table') > -1 || v1.indexOf('/table>') > -1 || v1.indexOf('<tr') > -1 || v1.indexOf('/tr>') > -1 || v1.indexOf('<td') > -1 || v1.indexOf('/td>') > -1 || v1.indexOf('<span') > -1 || v1.indexOf('<embed') > -1 || v1.indexOf('<object') > -1) {
            var msg = 'Some HTML tags are not allowed in <br><br><b>' + caption + '</b><br><br>';
            alert(msg, ctl);
            ctl.focus();
            return false;
        }
    }
    return true;
}


function EmptyValidator(myKey, myControl) {
    var myValue;
    if (myControl.type == "select-one")
        myValue = trim(myControl[myControl.selectedIndex].text);
    else //Text
        myValue = trim(myControl.value);

    var myValueb = myValue.startsWith("-- ");

    if (myValue == "" || myValueb == true) {
        var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is required.";
        alert(msg, myControl);
        myControl.focus();
        return false;
    }
    return true;
}


function MenuValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var re5digit = /^[a-zA-Z0-9_~!@$%^*()+={}\[\]|:'. -]+$/;
    if (myValue != "") {
        if (myValue.search(re5digit) == -1) {
            var msg = "<b>" + myKey + "</b> has invalid characters.\n\n Mouse over to light bulb for help.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }
    }
    return true;
}

function EmailValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var filter = /^.+@.+\..{2,7}$/

    if (myValue != "") {
        if (!filter.test(myValue)) {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }
    }
    return true;
}


function EmailValidatorMultiple(myKey, myControl) {
    var myValueArray = trim(myControl.value);
    if (myValueArray != "") {
        myValueArray = myValueArray.split(",");

        var i = 0;
        for (i = 0; i < myValueArray.length; i++) {
            var myValue = trim(myValueArray[i]);
            var filter = /^.+@.+\..{2,7}$/

            if (!filter.test(myValue)) {
                var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
                alert(msg, myControl);
                myControl.focus();
                return false;
            }
        }

    }
    return true;
}


function PasswordValidator(myKey1, myControl1, myKey2, myControl2) {
    var myValue1 = trim(myControl1.value);
    var myValue2 = trim(myControl2.value);

    if (myValue1 != myValue2) {
        var msg = "<b>" + myKey1 + "</b>&nbsp;&nbsp;&nbsp;and<b>" + myKey2 + "</b>&nbsp;&nbsp;&nbsp;must be same.";
        alert(msg, myControl);
        myControl1.focus();
        return false;
    }
    return true;
}

function PasswordValidator2(PField) {
    var str = document.getElementById(PField).value;
    if (str.length < 6) {
        alert("Password must be 6 characters long.");
        return false;
    } else if (str.length > 25) {
        alert("Password must be less than 25 characters long.");
        return false;
    } else if (str.search(/\d/) == -1) {
        alert("Password must contain numeric letter.");
        return false;
    } else if (str.search(/[a-zA-Z]/) == -1) {
        alert("Password must contain alphabet letters.");
        return false;
    } else if (str.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\:\[\]\{\}\<\>]/) == -1) {
        alert("Password must contain following special letters. <br><br> ! @ # $ % ^ & * ( ) _ + . , : [ ] { } < >");
        return false;
    }
    return true;
}


function FileValidator(myKey, myControl, fileType) {
    var myValue = trim(myControl.value);
    var reFile;
    if (fileType == 'All') {
        reFile = /^.+\.(([jJ][pP][eE]?[gG])|([gG][iI][fF])|([iI][cC][oO])|([jJ][sS])|([pP][nN][gG])|([cC][sS][sS])|([wW][mM][vV])|([wW][mM][aA])|([pP][dD][fF])|([sS][wW][fF])|([wW][eE][bB][pP])|([mM][pP][3])|([mM][pP][4])|([rR][sS][sS])|([tT][xX][tT])|([mM][pP][gG])|([mM][pP][eE][gG])|([aA][vV][iI])|([wW][aA][vV])|([aA][iI][fF])|([aA][iI][fF][fF])|([mM][oO][vV])|([hH][tT][mM])|([hH][tT][mM][lL])|([fF][lL][aA])|([xX][mM][lL])|([jJ][sS][oO][nN]))$/;
    }
    if (fileType == 'Image') {        
        reFile = /^.+\.(([jJ][pP][eE]?[gG])|([gG][iI][fF])|([iI][cC][oO])|([pP][dD][fF])|([pP][nN][gG])|([fF][lL][aA])|([sS][wW][fF])|([wW][eE][bB][pP]))$/;

    }

    if (myValue != "") {
        if (myValue.search(reFile) == -1) {
            var msg;
            if (fileType == "All")
                msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Invalid file type.";
            if (fileType == "Image")
                msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Invalid file type. Valid files: gif, ico, wmv, wma, jpg, jpeg, flv, pdf, png, css, swf, mp3, mp4, rss, txt, mpg, mpeg, avi, wav, aif, aiff, mov, htm, html, fla, xml";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }
    }
    return true;
}


function ColorCodeValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var filter = /^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

    if (myValue != "") {
        if (!filter.test(myValue)) {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Invalid color code.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }
    }
    return true;
}



function NumberValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var re5digit = /^[0-9]+$/;
    if (myValue != "") {
        if (myValue.search(re5digit) == -1) {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }
    }
    return true;
}

function FilenameValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var re5digit = /^[a-zA-Z0-9_-]+$/;
    if (myValue != "") {
        if (myValue.search(re5digit) == -1) {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }
    }
    return true;
}



function WebsiteValidator(myKey, myControl) {
    var myValue = trim(myControl.value.toLowerCase());
    var filter = /http(s)?:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{2}/;

    if (myValue != "") {
        if (!filter.test(myValue)) {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Invalid website URL. Valid URL example: http://cnn.com";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }
    }
    return true;
}


function CSSNumberValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var filter = /^([0-9])+%?$/

    if (myValue != "") {
        if (!filter.test(myValue)) {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Invalid value.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        } else if (myValue.indexOf("%") != -1) {
            myValue = myValue.substring(0, myValue.length - 1);
            if (parseInt(myValue) > 100) {
                var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;% value should not be exceed 100.";
                alert(msg, myControl);
                myControl.focus();
                return false;
            }
        }
    }
    return true;
}



function NumberNegativeValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var re5digit = /^(-)?[0-9]+$/;
    if (myValue != "") {
        if (myValue.search(re5digit) == -1) {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }
    }
    return true;
}



function DecimalNegativeValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var re5digit = /^(-)?[0-9]*(\.[0-9]+)?$/;
    if (myValue.search(re5digit) == -1) {
        var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
        alert(msg, myControl);
        myControl.focus();
        return false;
    }
    return true;
}



function ProductDiscountValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var re5digit = /^[0-9]*(\.[0-9]+)?(%)?$/;
    if (myValue != "") {
        if (myValue.search(re5digit) == -1) {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        } else if (myValue == '%') {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }

    }
    return true;
}


function ServicePackageDiscountValidator(myKey, myControl) {
    var myValue = trim(myControl.value.toLowerCase());
    var re5digit = /^[0-9]*(\.[0-9]+)?([f%])?$/;
    if (myValue != "") {
        if (myValue.search(re5digit) == -1) {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        } else if (myValue == '%' || myValue == 'f') {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }

    }
    return true;
}


function FormnameValidator(myKey, myControl) {
    var myValue = trim(myControl.value);
    var re5digit1 = /^[a-zA-Z0-9_]+$/;
    var re5digit2 = /^{{[a-zA-Z0-9_]+}}$/;
    if (myValue != "") {
        if (myValue.search(re5digit1) == -1 && myValue.search(re5digit2) == -1) {
            var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
            alert(msg, myControl);
            myControl.focus();
            return false;
        }
    }
    return true;
}

function ArrayShuffle(myAds) {
    var cnt = 0;
    var o = new Array();
    for (var i in myAds) {
        o[cnt] = myAds[i];
        cnt = cnt + 1;
    }

    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);

    cnt = 0;
    for (var i in myAds) {
        myAds[i] = o[cnt];
        cnt = cnt + 1;
    }
    return myAds;
}

function OpenLoginPopupM(qrStr) {
    var s = readCookie('loginStatus');
    var pg = 'a';
    var url = window.location.href;
    var myParameters = new Array();
    myParameters = ReadSParameters(qrStr);
    var sg = 'sp';
    var a = myParameters['a'];
    var as = readCookie('AppServer');
    var st = window.location.hostname;
    if (url.split("/").length == 9) { // Folder Sites
        var st = st + "/" + url.split("/")[7];
    }
    var lg = '.' + pg + sg;
    if (a == '1' && s != 'Yes') {
        createCookie('curl', escape(qrStr));
        window.location = as + 'target_form2' + lg + '?pform={{Login}}&sname=target_form2' + lg + '&site=' + st;
        return false;
    } else {
        return true;
    }
}


function HtmlTagCounter(ctl) {
    var searchtext = ctl.value.toLowerCase();
    var opendiv = searchtext.match(new RegExp('<div'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var closediv = searchtext.match(new RegExp('</div'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var openp = searchtext.match(new RegExp('<p'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var closep = searchtext.match(new RegExp('</p'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var openspan = searchtext.match(new RegExp('<span'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var closespan = searchtext.match(new RegExp('</span'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var opentable = searchtext.match(new RegExp('<table'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var closetable = searchtext.match(new RegExp('</table'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var opentr = searchtext.match(new RegExp('<tr'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var closetr = searchtext.match(new RegExp('</tr'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var opentd = searchtext.match(new RegExp('<td'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var closetd = searchtext.match(new RegExp('</td'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var openli = searchtext.match(new RegExp('<li>'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var closeli = searchtext.match(new RegExp('</li>'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var openul = searchtext.match(new RegExp('<ul'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
    var closeul = searchtext.match(new RegExp('</ul'.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));

    var msg1 = "";
    var msgdiv = "";
    var msgp = "";
    var msgspan = "";
    var msgtable = "";
    var msgtr = "";
    var msgtd = "";
    var msgli = "";
    var msgul = "";

    if (!(openp)) { openp = ""; }
    if (!(closep)) { closep = ""; }
    if (!(opendiv)) { opendiv = ""; }
    if (!(closediv)) { closediv = ""; }
    if (!(openspan)) { openspan = ""; }
    if (!(closespan)) { closespan = ""; }
    if (!(opentable)) { opentable = ""; }
    if (!(closetable)) { closetable = ""; }
    if (!(opentr)) { opentr = ""; }
    if (!(closetr)) { closetr = ""; }
    if (!(opentd)) { opentd = ""; }
    if (!(closetd)) { closetd = ""; }
    if (!(openli)) { openli = ""; }
    if (!(closeli)) { closeli = ""; }
    if (!(openul)) { openul = ""; }
    if (!(closeul)) { closeul = ""; }

    if (opendiv.length != closediv.length || openp.length != closep.length || openspan.length != closespan.length || opentable.length != closetable.length || opentr.length != closetr.length || opentd.length != closetd.length || openli.length != closeli.length || openul.length != closeul.length) {

        if (opendiv.length != closediv.length) { msgdiv = 'Open &#60;DIV&#62; (' + opendiv.length + '), Closed &#60;/DIV&#62;(' + closediv.length + '). ' }
        if (openp.length != closep.length) { msgp = '\n Open &#60;P&#62; (' + openp.length + '), Closed &#60;/P&#62;(' + closep.length + ')' }
        if (openspan.length != closespan.length) { msgspan = '\n Open &#60;SPAN&#62; (' + openspan.length + '), Closed &#60;/SPAN&#62;(' + closespan.length + ')' }
        if (opentable.length != closetable.length) { msgtable = '\n Open &#60;TABLE&#62; (' + opentable.length + '), Closed &#60;/TABLE&#62;(' + closetable.length + ')' }
        if (opentr.length != closetr.length) { msgtr = '\n Open &#60;TR&#62; (' + opentr.length + '), Closed &#60;/TR&#62;(' + closetr.length + ')' }
        if (opentd.length != closetd.length) { msgtd = '\n Open &#60;TD&#62; (' + opentd.length + '), Closed &#60;/TD&#62;(' + closetd.length + ')' }
        if (openli.length != closeli.length) { msgli = '\n Open &#60;LI&#62; (' + openli.length + '), Closed &#60;/LI&#62;(' + closeli.length + ')' }
        if (openul.length != closeul.length) { msgul = '\n Open &#60;UL&#62; (' + openul.length + '), Closed &#60;/UL&#62;(' + closeul.length + ')' }

        msg1 = 'See Missing HTML Tags: \n' + msgdiv + msgp + msgspan + msgtable + msgtr + msgtd + msgli + msgul;
        alert(msg1, ctl);
        ctl.focus();
        return false;
    }

    //alert("No error");
    return true;
}


function OpenPopup(uniqueId, pageUrl, title, width, height, leftOffset, rightOffset, isCentered, isResizable, isScrollable) {
    document.body.style.position = 'static';
    var v1 = "width=" + width + "px,height=" + height + "px,left=" + leftOffset + "px,right=" + rightOffset + "px,center=" + isCentered + ",resize=" + isResizable + ",scrolling=" + isScrollable;
    calcPopup = dhtmlmodal.open(uniqueId, "iframe", pageUrl, title, v1)
    calcPopup.onclose = function() { return true }
}


function OpenPopup2(pageUrl, window_type, fwidth, fheight) {
    if (!document.getElementById('f_Popup2_button')) {
        var msg = '<iframe id="f-mfp-iframe" class="f-mfp-iframe" allowfullscreen="" src="' + pageUrl + '" frameborder="0"></iframe>';
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<button id='f_Popup2_button' type='button' data-bs-toggle='modal' data-bs-target='#f_Popup2' style='display:none;'></button><div class='f_Popup2_box modal fade' id='f_Popup2' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_Popup2Label' aria-hidden='true'><div class='modal-dialog modal-dialog-centered modal-dialog-scrollable mx-auto'><div class='modal-content'><button type='button' class='f_Popup2_close btn-close position-absolute' data-bs-dismiss='modal' aria-label='Close'>âœ•</button><div class='modal-body text-center' style='white-space: pre-wrap;'><p id='f_loader'><i class='fa fa-spinner fa-spin' aria-hidden='true'></i></p>" + msg + "</div></div></div><style>.modal-dialog-scrollable .modal-content {max-height: none;overflow:visible;}.modal-body {padding:0;} .f_Popup2_close{right:-1rem;z-index:999;top:-1rem;background-color:#0d6efd;border-radius:50px;padding:.5rem;opacity:1;box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);background-image:none;color:#fff;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:18px}.modal-dialog{display:flex;justify-content:center} .f_Popup2_close:hover{color:#fff;background-color: red;opacity:1} #f-mfp-iframe{width:100%;height:90vh} @media (min-width:992px) {.modal-content{width:auto;border-width:0;}#f-mfp-iframe{width:" + fwidth + "px;height:" + fheight + "px;}}#f_loader{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}#f_loader i{font-size:4rem;color:#0d6efd;opacity:0.8} @media (max-width:991px) {#f_Popup2 .modal-dialog {max-width: 85vw;}}</style></div>");
        document.getElementById('f-mfp-iframe').onload = function() {
            document.getElementById("f_loader").remove();
        };
        document.getElementById('f_Popup2_button').click();
        document.getElementsByClassName('f_Popup2_close')[0].addEventListener('click', function() {
            document.getElementById('f_Popup2_button').remove();
            document.getElementsByClassName('f_Popup2_box')[0].remove();
        });
    }
}


function OpenPopup3(pageUrl, window_type) {
    if (!document.getElementById('f_Popup3_button')) {
        if (pageUrl.indexOf('?pul=') != -1) {
            var aurl = pageUrl.split('?pul=').pop();
            aurl = (aurl.indexOf('http') == -1) ? 'http://' + aurl : aurl; // add http if not added
            pageUrl = pageUrl.split('?pul').shift();
            var msg = '<figure class="figure"><img id="f-mfp-img" class="mb-0" src="' + pageUrl + '" class="figure-img img-fluid" style="cursor:pointer" onclick="window.open(\'' + aurl + '\', \'_blank\')"></figure>';
        } else {
            var msg = '<figure class="figure"><img id="f-mfp-img" class="mb-0" src="' + pageUrl + '" class="figure-img img-fluid"></figure>';
        }
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<button id='f_Popup3_button' type='button' data-bs-toggle='modal' data-bs-target='#f_Popup3' style='display:none;'></button><div class='f_Popup3_box modal fade' id='f_Popup3' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_Popup3Label' aria-hidden='true'><div class='modal-dialog modal-dialog-centered modal-dialog-scrollable mx-auto'><div class='modal-content'><button type='button' class='f_Popup3_close btn-close position-absolute' data-bs-dismiss='modal' aria-label='Close'>âœ•</button><div class='modal-body text-center' style='white-space: pre-wrap;'>" + msg + "</div></div></div><style>.modal-dialog-scrollable .modal-content {max-height: none;overflow:visible;}.modal-body {padding:0;} .f_Popup3_close{right:-1rem;z-index:999;top:-1rem;background-color:#0d6efd;border-radius:50px;padding:.5rem;opacity:1;box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);background-image:none;color:#fff;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:18px}.f_Popup3_close:hover{color:#fff;background-color: red;opacity:1}.modal-dialog{display:flex;justify-content:center} .modal-content{width:auto;border-width:0} #f-mfp-img{max-height:90vh;max-width: 90vw;} @media (min-width:576px) {.modal-content{width:auto;}.modal-dialog{max-width:800px;}} .modal-content{background:0 0}}</style></div>");
        document.getElementById('f_Popup3_button').click();
        document.getElementsByClassName('f_Popup3_close')[0].addEventListener('click', function() {
            document.getElementById('f_Popup3_button').remove();
            document.getElementsByClassName('f_Popup3_box')[0].remove();
        });
    }
}

function OpenPopup4(pageUrl, window_type, fwidth, fheight) {
    if (!document.getElementById('f_Popup4_button')) {
        var msg = '<iframe id="f-mfp-iframe" class="f-mfp-iframe" allowfullscreen="" src="' + pageUrl + '" frameborder="0"></iframe>';
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<button id='f_Popup4_button' type='button' data-bs-toggle='modal' data-bs-target='#f_Popup4' style='display:none;'></button><div class='f_Popup4_box modal fade' id='f_Popup4' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_Popup4Label' aria-hidden='true'><div class='modal-dialog modal-dialog-centered modal-dialog-scrollable mx-auto'><div class='modal-content'><button type='button' class='f_Popup4_close btn-close position-absolute' data-bs-dismiss='modal' aria-label='Close'>âœ•</button><div class='modal-body text-center' style='white-space: pre-wrap;'><p id='f_loader'><i class='fa fa-spinner fa-spin' aria-hidden='true'></i></p>" + msg + "</div></div></div><style>.modal-dialog-scrollable .modal-content {max-height: none;overflow:visible;}.modal-body {padding:0;} .f_Popup4_close{right:-1rem;z-index:999;top:-1rem;background-color:#0d6efd;border-radius:50px;padding:.5rem;opacity:1;box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);background-image:none;color:#fff;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:18px}.f_Popup4_close:hover{color:#fff;background-color: red;opacity:1} @media (min-width:992px) {#f_Popup4 .modal-dialog {max-width: 70vw;}} @media (max-width:991px) {#f_Popup4 .modal-dialog {max-width: 85vw;}} .f-mfp-iframe {width:100%;min-height:90vh;height:90vh;}#f_loader{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}#f_loader i{font-size:4rem;color:#0d6efd;opacity:0.8}</style></div>");
        document.getElementById('f-mfp-iframe').onload = function() {
            document.getElementById("f_loader").remove();
        };
        document.getElementById('f_Popup4_button').click();
        document.getElementsByClassName('f_Popup4_close')[0].addEventListener('click', function() {
            document.getElementById('f_Popup4_button').remove();
            document.getElementsByClassName('f_Popup4_box')[0].remove();
        });
    }
}


function OpenPopup5(pageUrl, window_type, fwidth, fheight) {
    if (!document.getElementById('f_Popup5_button')) {
        pageUrl = readCookie('AppServer') + pageUrl;
        var msg = '<iframe id="f-mfp-iframe" class="f-mfp-iframe" allowfullscreen="" src="' + pageUrl + '" frameborder="0"></iframe>';
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<button id='f_Popup5_button' type='button' data-bs-toggle='modal' data-bs-target='#f_Popup5' style='display:none;'></button><div class='f_Popup5_box modal fade' id='f_Popup5' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_Popup5Label' aria-hidden='true'><div class='modal-dialog modal-dialog-centered modal-dialog-scrollable mx-auto'><div class='modal-content'><button type='button' class='f_Popup5_close btn-close position-absolute' data-bs-dismiss='modal' aria-label='Close'>âœ•</button><div class='modal-body text-center' style='white-space: pre-wrap;'><p id='f_loader'><i class='fa fa-spinner fa-spin' aria-hidden='true'></i></p>" + msg + "</div></div></div><style>.modal-dialog-scrollable .modal-content {max-height: none;overflow:visible;}.modal-body {padding:0;} .f_Popup5_close{right:-1rem;z-index:999;top:-1rem;background-color:#0d6efd;border-radius:50px;padding:.5rem;opacity:1;box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);background-image:none;color:#fff;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:18px}.f_Popup5_close:hover{color:#fff;background-color: red;opacity:1} @media (min-width:992px) {#f_Popup5 .modal-dialog {max-width: 70vw;}}@media (max-width:991px) {#f_Popup5 .modal-dialog {max-width: 85vw;}} .f-mfp-iframe {width:100%;min-height:90vh;height:90vh;}#f_loader{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}#f_loader i{font-size:4rem;color:#0d6efd;opacity:0.8}</style></div>");
        document.getElementById('f-mfp-iframe').onload = function() {
            document.getElementById("f_loader").remove();
        };
        document.getElementById('f_Popup5_button').click();
        document.getElementsByClassName('f_Popup5_close')[0].addEventListener('click', function() {
            document.getElementById('f_Popup5_button').remove();
            document.getElementsByClassName('f_Popup5_box')[0].remove();
        });
    }
}

function OpenYouTube(id) {
    if (!document.getElementById('f_YT_button')) {
        var msg = '<iframe id="f-mfp-iframe" class="f-mfp-iframe" allowfullscreen="" src="https://www.youtube.com/embed/' + id + '?autoplay=1" scrolling="no" frameborder="0"></iframe>';
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<button id='f_YT_button' type='button' data-bs-toggle='modal' data-bs-target='#f_YT' style='display:none;'></button><div class='f_YT_box modal fade' id='f_YT' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_YTLabel' aria-hidden='true'><div class='modal-dialog modal-dialog-centered mx-auto'><div class='modal-content' id='YT_parent'><button type='button' class='f_YT_close btn-close position-absolute' data-bs-dismiss='modal' aria-label='Close'>âœ•</button><div class='modal-body text-center' style='white-space: pre-wrap;'><p id='f_loader'><i class='fa fa-spinner fa-spin' aria-hidden='true'></i></p>" + msg + "</div></div></div><style>#YT_parent{width:70vw;height:39.43vw}.modal-dialog{max-width:none;display:flex;align-items:center;justify-content:center}.modal-dialog-scrollable .modal-content {max-height: none;overflow:visible;}.modal-body {padding:0;} .f_YT_close{right:-1rem;z-index:999;top:-1rem;background-color:red;border-radius:50px;padding:.5rem;opacity:1;box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);background-image:none;color:#fff;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:18px}.f_YT_close:hover{color:#fff;background-color: #333;opacity:1} .f-mfp-iframe {width:100%;height:100%;}#f_loader{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}#f_loader i{font-size:4rem;color:red;opacity:0.8}@media (max-width:576px){#YT_parent{width:85vw;height:48vw}}</style></div>");
        document.getElementById('f-mfp-iframe').onload = function() {
            document.getElementById("f_loader").remove();
        };
        document.getElementById('f_YT_button').click();
        document.getElementsByClassName('f_YT_close')[0].addEventListener('click', function() {
            document.getElementById('f_YT_button').remove();
            document.getElementsByClassName('f_YT_box')[0].remove();
        });
    }
}
