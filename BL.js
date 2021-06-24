function ShowHTag(HTag) { document.getElementById(HTag).style.visibility="visible"; }

function HideHTag(HTag) { document.getElementById(HTag).style.visibility="hidden"; }


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
	diff.setTime(Math.abs((endDate.getTime() - (( TimezoneOffset + adjusttime - endDate.getTimezoneOffset())  * 60000)) - startDate.getTime()));
	timediff = diff.getTime();

	diff_pos_neg = new Date();
	diff_pos_neg.setTime((endDate.getTime() - (( TimezoneOffset + adjusttime - endDate.getTimezoneOffset())  * 60000)) - startDate.getTime());
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
	if (hours > 0 && cnt < 2) { cnt = cnt + 1; if (cnt == 2 && hours >= 12) days = days + 1; else if (cnt == 2 && hours < 12) hours = 0; }
	if (mins > 0 && cnt < 2) { cnt = cnt + 1; if (cnt == 2 && mins >= 30) hours = hours + 1; else if (cnt == 2 && mins < 30) mins = 0; }
	if (secs > 0 && cnt < 2) { cnt = cnt + 1; if (cnt == 2 && secs >= 30) mins = mins + 1; else if (cnt == 2 && secs < 30) secs = 0; }

	//------------------------------------
	
	if (diff_check > -5000)
	{

	//if (days > 0 && days <= Article_Timestamp) str = days + ' days ago';
	//else if (days > Article_Timestamp) return GetDate(sDate, format);
	//else if (hours > 0) str = hours + ' hours ago'; 
	//else if (mins > 0) str = mins + ' mins ago';
	//else if (secs > 0) str = secs + ' secs ago';
	//else str = '0 secs';

        if (days > 0 && days < 2) str = document.write(days + ' day ago');
        else if (days > 1 && days <= Article_Timestamp) str = document.write(days + ' days ago');
        else if (days > Article_Timestamp) return GetDate(sDate, format);
        else if (hours > 0 && hours < 2) str = document.write(hours + ' hour ago');
        else if (hours > 1) str = document.write(hours + ' hours ago'); 
        else if (mins > 0 && mins < 2) str = document.write(mins + ' min ago');
        else if (mins > 1) str = document.write(mins + ' mins ago');
        else if (secs > 0 && secs < 2 ) str = document.write(secs + ' sec ago');
        else if (secs > 1) str = document.write(secs + ' secs ago');
	else return GetDate(sDate, format); 

	}
	else
	{
	return GetDate(sDate, format);
	}
	return str;
}



function GetSandwichMenu(){Tipped.create('.smenu1', { ajax: true, closeButton: false, showOn: 'click', skin: 'yellow', fixed: true, target: 'mouse', maxWidth: $(window).width()-30  });}


function LimitCharacters(txtMsg, indicator, indicator2, limitword) {
 stringmemo = txtMsg.value;
 stringmemo2 = stringmemo.replace(/\s\s+/g, ' ');  // replace multiple whitespaces whit single space
 chars = txtMsg.value.length;
 word= stringmemo2.split(/\s/);
 wordcount = word.length;
 maxChar = txtMsg.maxLength;
 limitword2 = limitword.replace("W","");

 
 if(limitword.toLowerCase().indexOf("w") >= 0 ) {
  if(wordcount > limitword2){
 
 rgxwords = new RegExp('([^ ]*[ ]{0,1}){1,'+limitword2+'}', 'g');   // regexp for specified number of spaces
 stringmemo3 = stringmemo2.match(rgxwords)[0];   // get the substring with "limitword2" number of words

 alert("Maximum word limit exceeded.!");
 stringmemo3 = stringmemo3.replace(/\s?$/,'');
 txtMsg.value = stringmemo3; 
 word= stringmemo3.split(/\s/);
 wordcount = word.length;
 chars = stringmemo3.value.length;
 }

 if(txtMsg.value.length < 1){
 document.getElementById(indicator).innerHTML = chars + " characters &nbsp; | &nbsp;";
 document.getElementById(indicator2).innerHTML = chars + " words";
 }
 else{
 document.getElementById(indicator).innerHTML = chars + " characters &nbsp; | &nbsp;";
 document.getElementById(indicator2).innerHTML = wordcount + " of " + limitword2 + " words";
 } 
  
 }
 
 else {
 
  if(txtMsg.value.length < 1){
 document.getElementById(indicator).innerHTML = chars + " of " + maxChar + " characters &nbsp; | &nbsp;";
 document.getElementById(indicator2).innerHTML = chars + " words";
 }
 else{
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

        function ChangeBodyImage(styleName)
        {

//alert(document.getElementById('blbodymain'));
            if (document.getElementById('blbodymain') != '')
            {

                if (readCookie(styleName) != null && readCookie(styleName) != '')
                {
                    document.getElementById('blbodymain').style.backgroundImage = "url(/images/" + readCookie(styleName) + ")";
                }
            }
        }


        function GetTooltipSys1(width) { if (width == null || width == '') { width = 500; } Tipped.create('.s1', { ajax: false, closeButton: true, showOn: 'mouseover', skin: 'yellow', fixed: true, target: 'mouse', maxWidth: width }); }


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
        }


     // To search value in array. Returns array with indexes.
        function ArraySearch(myArray, searchStr) {
            var returnArray = false;
            for (i = 0; i < myArray.length; i++) {
                if (typeof (searchStr) == 'function') {
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
            for (var i = 1; i < len; i++) if (myArray[i] > max) max = myArray[i];
            return max;
        }

        // To find min value in array  
        function ArrayMin(myArray) {
            var min = myArray[0];
            var len = myArray.length;
            for (var i = 1; i < len; i++) if (myArray[i] < min) min = myArray[i];
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
            if (hours > 0 && cnt < 2) { cnt = cnt + 1; if (cnt == 2 && hours >= 12) days = days + 1; else if (cnt == 2 && hours < 12) hours = 0; }
            if (mins > 0 && cnt < 2) { cnt = cnt + 1; if (cnt == 2 && mins >= 30) hours = hours + 1; else if (cnt == 2 && mins < 30) mins = 0; }
            if (secs > 0 && cnt < 2) { cnt = cnt + 1; if (cnt == 2 && secs >= 30) mins = mins + 1; else if (cnt == 2 && secs < 30) secs = 0; }

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
            }
            else {
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

                }
                else {
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
    var sUrlc = 'https://bulletlink.one'; // Server domain
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
                window.open('/' + lb_page + '?lb=index0.htm?twindow=Form&pform={{Login}}&smenu=0&sname=target_form2.asp&site=' + siteU + '&as=' + sUrlc, target = '_parent');
                return false;
            }
        }
        window.open('/index0.htm?pform={{Login}}&sname=target_form2.asp&site=' + siteU + '&as=' + sUrlc, target = '_parent');
        return false;
    } else {
        return true;
    }
}



function checkLoginStatus(isRestricted) {
    url = location.href;
    var qs = url.substring(url.indexOf('?'));

    var myParameters = new Array();
    myParameters = ReadSParameters();
    var sname = myParameters['sname'];
    var a = myParameters['a'];
    var urlhttps = url.startsWith("https");
    var urlarr = new URL(url);
    var surl = urlarr.searchParams.get("as"); // get server domain
    if (sname.length > 0) {
        if (urlhttps == true) {
            if (surl == null) {
                surl = "https://" + location.href.match(/:\/\/(.[^/]+)/)[1];
            }
            var sframe = "<iframe id=\"frame1\" style=\"border:none;\" width=\"100%\" src=\"" + surl + "/" + sname + qs + "\" onload=\"window.parent.parent.scrollTo(0,0);iFrameResize({log:true}, '#frame1');\"></iframe>"
        } else {
            if (surl == null) {
                surl = "http://" + location.href.match(/:\/\/(.[^/]+)/)[1];
            }
            var sframe = "<iframe id=\"frame1\" style=\"border:none;\"  width=\"100%\" src=\"" + surl + "/" + sname + qs + "\" onload=\"window.parent.parent.scrollTo(0,0);iFrameResize({log:true}, '#frame1');\"></iframe>"
        }
        document.getElementById("MainContent").innerHTML = sframe;
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




function jsAppend(js_file)
{
  js_script = document.createElement('script');
  js_script.type = "text/javascript";
  js_script.src = js_file;
  document.getElementsByTagName('head')[0].appendChild(js_script);
}

function cssAppend(css_file)
{
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
            if (CurrentDate == null)
            {
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
} ();

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
                }
                else if (order_no == 0) {
                    zeroAds[i] = myAds[i];
                }
                else if (order_no > 0) {
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
                key = window.event.keyCode;     //IE
            else
                key = e.which;     //firefox

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
            jAlert(msg, 'Alert', function() { ctl.focus(); });
}

function confirm(msg, ctl) {
            jConfirm(msg, 'Confirm', function(r) { if (r) window.location = ctl.href; });
            return false;
}


function ChangeInputFocus(obj, evt, cname) {
           if (evt.type == "focus")
               obj.className = cname;
           else if (evt.type == "blur")
               obj.className = cname;
}


function getQueryVariable(query, variable) {
  query = query.replace('?',"&");
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
  var pair = vars[i].split("=");
  if (pair[0] == variable) {
  return pair[1];
   }
  }
  return "";
}

function ResizeIFrame(IFrameContent)
{
 document.getElementById(IFrameContent).height=document.getElementById(IFrameContent).contentWindow.document.body.scrollHeight;
 document.getElementById(IFrameContent).width=document.getElementById(IFrameContent).contentWindow.document.body.scrollWidth;
 scroll(0,0);
}


function UseIFrameAds(IFrameContent)
{
 document.getElementById(IFrameContent).height=document.getElementById(IFrameContent).contentWindow.document.body.scrollHeight;
 document.getElementById(IFrameContent).width=document.getElementById(IFrameContent).contentWindow.document.body.scrollWidth;
}


function GotoParent(url)
{
 if (self.parent.frames.length != 0) self.parent.location=url;
}

function login() {
  url=location.href;
  var f=url.substring(0,url.indexOf('?'));
  if (f==""){f=url;}
  f=f.substring(f.lastIndexOf('/')+1);
  url=url.replace(f,"index0.htm")
  if (f.substring(0,2).toLowerCase()=="ps" && readCookie("BLUserLoggedIn")==null){document.location.href = url+"&sdetail=0";}
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function RunScript() {

}

function ChangeStyle_s13251(fName) {
  parent.document.getElementById('tdHeader').style.backgroundImage = "url(/lib/images/" + fName + ")";
  createCookie("Style_s13251", fName, 60);
}
if (readCookie('Style_s13251')) {
    document.getElementById('tdHeader').style.backgroundImage = "url(/lib/images/" + readCookie('Style_s13251') + ")";
}  



function PopupWindow(mypage,myname,w,h,scroll){
var win = null;
LPos = (screen.width) ? (screen.width-w)/2 : 0;
TPos = (screen.height) ? (screen.height-h)/2 : 0;
settings = 'height='+h+',width='+w+',top='+TPos+',left='+LPos+',scrollbars='+scroll+',resizable';
win = window.open(mypage,myname,settings);

}

function PopupWindow2(wName,w,h,scroll){
LPos = (screen.width) ? (screen.width-w)/2 : 0;
TPos = (screen.height) ? (screen.height-h)/2 : 0;
	features = 'width='+w+',height='+h+',top='+TPos+',left='+LPos+',status=no,toolbar=no,location=no,menubar=no,titlebar=no,scrollbars='+scroll+'';
	pop = window.open('',wName,features);
	if(pop.focus){ pop.focus(); }
	return true;
}

function LoadDoc(dataSource, dtag, gtrack)
 { 

   var XMLHttpRequestObject = false;
   
    if (window.XMLHttpRequest) {
      XMLHttpRequestObject = new XMLHttpRequest();
     } else if (window.ActiveXObject) {
      XMLHttpRequestObject = new 
        ActiveXObject("Microsoft.XMLHTTP");
     }

    if(XMLHttpRequestObject) {
       XMLHttpRequestObject.open("GET", dataSource);
       XMLHttpRequestObject.onreadystatechange = function() 
       { 
        if (XMLHttpRequestObject.readyState == 4 && 
           XMLHttpRequestObject.status == 200) { 
           var v1 = document.getElementById(dtag);
           if (v1 != null) 
            v1.innerHTML=XMLHttpRequestObject.responseText;
           else {
            v1 = parent.document.getElementById(dtag);
            if (v1 != null) 
             v1.innerHTML=XMLHttpRequestObject.responseText;
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
                var url = "DuplicateChecker.asp?v=" + myValue + "&t=" + t + "&c=" + c + "&kn=" + kn + "&kv=" + kv + "&fkn=" + fkn + "&fkv=" + fkv + "&it=" + it + "&cv=" + cv ;
// return url;
                XMLHttpRequestObject.open("GET", url, false);
                XMLHttpRequestObject.send(null);
                return XMLHttpRequestObject.responseText;
            }
            else {
                alert("To use this feature, please upgrade to a current web browser");
            }
        }



function get_radio_value(frmId)
{
var rad_val;
var frm;
frm = document.getElementById(frmId);
for (var i=0; i < frm.choiceid.length; i++)
   {
   if (frm.choiceid[i].checked)
      {
      rad_val = frm.choiceid[i].value;
      }
   }
return rad_val;
}


function get_checkbox_value(frmId)
{
 var chk_val;
 var flag;
 var chk;
 var frm;
 frm = document.getElementById(frmId);

 chk = frm.choiceid1;
 if(chk!=null)
 {
  if(chk.checked)
  {
   flag = 1;
  }
  else
  {
   flag = '';
  }
 }
 else
 {
  flag = '';   
 }
 chk_val  = "choiceid1=" + flag;

 chk = frm.choiceid2;
 if(chk!=null)
 {
  if(chk.checked)
  {
   flag = 1;
  }
  else
  {
   flag = '';
  }
 }
 else
 {
  flag = '';   
 }
 chk_val  = chk_val + "&choiceid2=" + flag;

 chk = frm.choiceid3;
 if(chk!=null)
 {
  if(chk.checked)
  {
   flag = 1;
  }
  else
  {
   flag = '';
  }
 }
 else
 {
  flag = '';   
 }
 chk_val  = chk_val + "&choiceid3=" + flag;

 chk = frm.choiceid4;
 if(chk!=null)
 {
  if(chk.checked)
  {
   flag = 1;
  }
  else
  {
   flag = '';
  }
 }
 else
 {
  flag = '';   
 }
 chk_val  = chk_val + "&choiceid4=" + flag;

 chk = frm.choiceid5;
 if(chk!=null)
 {
  if(chk.checked)
  {
   flag = 1;
  }
  else
  {
   flag = '';
  }
 }
 else
 {
  flag = '';   
 }
 chk_val  = chk_val + "&choiceid5=" + flag;

 chk = frm.choiceid6;
 if(chk!=null)
 {
  if(chk.checked)
  {
   flag = 1;
  }
  else
  {
   flag = '';
  }
 }
 else
 {
  flag = '';   
 }
 chk_val  = chk_val + "&choiceid6=" + flag;

 chk = frm.choiceid7;
 if(chk!=null)
 {
  if(chk.checked)
  {
   flag = 1;
  }
  else
  {
   flag = '';
  }
 }
 else
 {
  flag = '';   
 }
 chk_val  = chk_val + "&choiceid7=" + flag;
 return chk_val;
}





function keyRestrict(e, val, validType) {

    var key = '', keychar = '';
    key = getKeyCode(e);
    if (key == null) return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();

    var validchars;
    if (validType == "Number") {
        validchars = "0123456789";
    }
    else if (validType == "NumberNegative") {
        validchars = "-0123456789";
    }
    else if (validType == "Decimal") {
        validchars = "0123456789.";
    }
    else if (validType == "DecimalNegative") {
        validchars = "-0123456789.";
    }
    else if (validType == "cssNumber") {
        validchars = "0123456789%";
    }
    else if (validType == "Filename") {
        validchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
    }
    else if (validType == "ProductDiscount") {
        validchars = "0123456789.%";
    }
    else if (validType == "ServicePackageDiscount") {
        validchars = "0123456789.%F";
    }
    validchars = validchars.toLowerCase();

    if (validType == "NumberNegative") {
        if (keychar == "-") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    }
    else if (validType == "Decimal") {
        if (keychar == ".") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    }
    else if (validType == "DecimalNegative") {
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
    }
    else if (validType == "cssNumber") {
        if (keychar == "%") {
            if (val.indexOf(keychar) != -1)
                return false;
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
    }
    else {
        if (validchars.indexOf(keychar) != -1)
            return true;
    }

    if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27)
        return true;
    return false;
}





function getKeyCode(e)
{
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
                        alert(msg,myControl);
                        myControl.focus();
                        return false;
                    }
                }
                else if (min) {
                    if (!(myValue >= min)) {
                        msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Enter value " + min + " or higher.";
                        alert(msg,myControl);
                        myControl.focus();
                        return false;
                    }
                }
                else if (max) {
                    if (!(myValue <= max)) {
                        msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;Enter value " + max + " or less.";
                        alert(msg,myControl);
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
            else                  //Text
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
                        alert(msg,myControl);
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
                reFile = /^.+\.(([jJ][pP][eE]?[gG])|([gG][iI][fF])|([iI][cC][oO])|([jJ][sS])|([pP][nN][gG])|([cC][sS][sS])|([wW][mM][vV])|([wW][mM][aA])|([pP][dD][fF])|([sS][wW][fF])|([mM][pP][3])|([mM][pP][4])|([rR][sS][sS])|([tT][xX][tT])|([mM][pP][gG])|([mM][pP][eE][gG])|([aA][vV][iI])|([wW][aA][vV])|([aA][iI][fF])|([aA][iI][fF][fF])|([mM][oO][vV])|([hH][tT][mM])|([hH][tT][mM][lL])|([fF][lL][aA])|([xX][mM][lL])|([jJ][sS][oO][nN]))$/;
            }
            if (fileType == 'Image') {
                reFile = /^.+\.(([jJ][pP][eE]?[gG])|([gG][iI][fF])|([iI][cC][oO])|([pP][dD][fF])|([pP][nN][gG])|([fF][lL][aA])|([sS][wW][fF]))$/;
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
                }
                else if (myValue.indexOf("%") != -1) {
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
                    alert(msg,myControl);
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
                alert(msg,myControl);
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
                    alert(msg,myControl);
                    myControl.focus();
                    return false;
                }
                else if (myValue == '%') {
                    var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
                    alert(msg,myControl);
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
                    alert(msg,myControl);
                    myControl.focus();
                    return false;
                }
                else if (myValue == '%' || myValue == 'f') {
                    var msg = "<b>" + myKey + "</b>&nbsp;&nbsp;&nbsp;is invalid.";
                    alert(msg,myControl);
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
                    alert(msg,myControl);
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
            var myParameters = new Array();
            myParameters = ReadSParameters(qrStr);
            var a = myParameters['a'];
            if (a == '1' && s != 'Yes') {
                createCookie('curl', escape(qrStr));
                window.location = '/loginmobile.asp';
                return false;
            }
            else {
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

	if (opendiv.length != closediv.length || openp.length != closep.length || openspan.length != closespan.length || opentable.length != closetable.length || opentr.length != closetr.length || opentd.length != closetd.length || openli.length != closeli.length || openul.length != closeul.length){

		if (opendiv.length != closediv.length) { msgdiv = 'Open &#60;DIV&#62; ('+ opendiv.length + '), Closed &#60;/DIV&#62;('+ closediv.length +'). ' } 
		if (openp.length != closep.length) { msgp = '\n Open &#60;P&#62; ('+ openp.length + '), Closed &#60;/P&#62;('+ closep.length +')' }
		if (openspan.length != closespan.length) { msgspan = '\n Open &#60;SPAN&#62; ('+ openspan.length + '), Closed &#60;/SPAN&#62;('+ closespan.length +')' }
		if (opentable.length != closetable.length) { msgtable = '\n Open &#60;TABLE&#62; ('+ opentable.length + '), Closed &#60;/TABLE&#62;('+ closetable.length +')'}
		if (opentr.length != closetr.length) { msgtr = '\n Open &#60;TR&#62; ('+ opentr.length + '), Closed &#60;/TR&#62;('+ closetr.length +')' }
		if (opentd.length != closetd.length) { msgtd = '\n Open &#60;TD&#62; ('+ opentd.length + '), Closed &#60;/TD&#62;('+ closetd.length +')' }
		if (openli.length != closeli.length) { msgli = '\n Open &#60;LI&#62; ('+ openli.length + '), Closed &#60;/LI&#62;('+ closeli.length +')' }
		if (openul.length != closeul.length) { msgul = '\n Open &#60;UL&#62; ('+ openul.length + '), Closed &#60;/UL&#62;('+ closeul.length +')' }

		msg1 = 'See Missing HTML Tags: \n' + msgdiv + msgp + msgspan + msgtable + msgtr + msgtd + msgli + msgul;
		alert(msg1, ctl);
		ctl.focus();
		return false;
	        }

	//alert("No error");
	return true;
        }


function OpenPopup(uniqueId,pageUrl,title,width,height,leftOffset,rightOffset,isCentered,isResizable,isScrollable){
document.body.style.position = 'static';
var v1 ="width="+width+"px,height="+height+"px,left="+leftOffset+"px,right="+rightOffset+"px,center="+isCentered+",resize="+isResizable+",scrolling="+isScrollable;
calcPopup=dhtmlmodal.open(uniqueId, "iframe", pageUrl, title, v1)
calcPopup.onclose=function(){ return true }}


function OpenPopup2(pageUrl, window_type, fwidth, fheight){
$.magnificPopup.open({
  items: [
	   {
           src: pageUrl, // can be a HTML string, jQuery object, or CSS selector
           type: window_type
           }
  ],   
  gallery: { enabled: true },
  iframe: {markup: '<div style="width:'+fwidth+'px; height:'+fheight+'px;">'+'<div class="mfp-iframe-scaler" >'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'</div></div>'}
});
}


function OpenPopup3(pageUrl, window_type){
$.magnificPopup.open({
  items: [
	  {
           src: pageUrl, // can be a HTML string, jQuery object, or CSS selector
           type: 'image'
           }
  ],   
  gallery: { enabled: true },
  img: {markup: '<div>'+'<div class="mfp-iframe-scaler" >'+'<div class="mfp-close"></div>'+'<img class="mfp-iframe">'+'</div></div>'}
});
}

function OpenPopup4(pageUrl, window_type, fwidth, fheight){
$.magnificPopup.open({
  items: [
	  {
           src: pageUrl, // can be a HTML string, jQuery object, or CSS selector
           type: window_type
           }
  ],   
  gallery: { enabled: true },
  iframe: {markup: '<div class="popup4-article">'+'<div class="mfp-iframe-scaler" >'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'</div></div>'}
});
}


/////////////////////////////////////

qmv_iisv=1;qmv7=true;var qm_si,qm_lo,qm_tt,qm_ts,qm_la,qm_ic,qm_ff,qm_sks;var qm_li=new Object();var qm_ib='';var qp="parentNode";var qc="className";var qm_t=navigator.userAgent;var qm_o=qm_t.indexOf("Opera")+1;var qm_s=qm_t.indexOf("afari")+1;var qm_s2=qm_s&&qm_t.indexOf("ersion/2")+1;var qm_s3=qm_s&&qm_t.indexOf("ersion/3")+1;var qm_n=qm_t.indexOf("Netscape")+1;var qm_v=parseFloat(navigator.vendorSub);var qm_ie8=qm_t.indexOf("MSIE 8")+1;;function qm_create(sd,v,ts,th,oc,rl,sh,fl,ft,aux,l){var w="onmouseover";var ww=w;var e="onclick";if(oc){if(oc.indexOf("all")+1||(oc=="lev2"&&l>=2)){w=e;ts=0;}if(oc.indexOf("all")+1||oc=="main"){ww=e;th=0;}}if(!l){l=1;sd=document.getElementById("qm"+sd);if(window.qm_pure)sd=qm_pure(sd);sd[w]=function(e){try{qm_kille(e)}catch(e){}};if(oc!="all-always-open")document[ww]=qm_bo;if(oc=="main"){qm_ib+=sd.id;sd[e]=function(event){qm_ic=true;qm_oo(new Object(),qm_la,1);qm_kille(event)};}sd.style.zoom=1;if(sh)x2("qmsh",sd,1);if(!v)sd.ch=1;}else  if(sh)sd.ch=1;if(oc)sd.oc=oc;if(sh)sd.sh=1;if(fl)sd.fl=1;if(ft)sd.ft=1;if(rl)sd.rl=1;sd.th=th;sd.style.zIndex=l+""+1;var lsp;var sp=sd.childNodes;for(var i=0;i<sp.length;i++){var b=sp[i];if(b.tagName=="A"){lsp=b;b[w]=qm_oo;if(w==e)b.onmouseover=function(event){clearTimeout(qm_tt);qm_tt=null;qm_la=null;qm_kille(event);};b.qmts=ts;if(l==1&&v){b.style.styleFloat="none";b.style.cssFloat="none";}}else  if(b.tagName=="DIV"){if(window.showHelp&&!window.XMLHttpRequest)sp[i].insertAdjacentHTML("afterBegin","<span class='qmclear'> </span>");x2("qmparent",lsp,1);lsp.cdiv=b;b.idiv=lsp;if(qm_n&&qm_v<8&&!b.style.width)b.style.width=b.offsetWidth+"px";new qm_create(b,null,ts,th,oc,rl,sh,fl,ft,aux,l+1);}}if(l==1&&window.qmad&&qmad.binit){ eval(qmad.binit);}};function qm_bo(e){e=e||event;if(e.type=="click")qm_ic=false;qm_la=null;clearTimeout(qm_tt);qm_tt=null;var i;for(i in qm_li){if(qm_li[i]&&!((qm_ib.indexOf(i)+1)&&e.type=="mouseover"))qm_tt=setTimeout("x0('"+i+"')",qm_li[i].th);}};function qm_co(t){var f;for(f in qm_li){if(f!=t&&qm_li[f])x0(f);}};function x0(id){var i;var a;var a;if((a=qm_li[id])&&qm_li[id].oc!="all-always-open"){do{qm_uo(a);}while((a=a[qp])&&!qm_a(a));qm_li[id]=null;}};function qm_a(a){if(a[qc].indexOf("qmmc")+1)return 1;};function qm_uo(a,go){if(!go&&a.qmtree)return;if(window.qmad&&qmad.bhide)eval(qmad.bhide);a.style.visibility="";x2("qmactive",a.idiv);};function qm_oo(e,o,nt){try{if(!o)o=this;if(qm_la==o&&!nt)return;if(window.qmv_a&&!nt)qmv_a(o);if(window.qmwait){qm_kille(e);return;}clearTimeout(qm_tt);qm_tt=null;qm_la=o;if(!nt&&o.qmts){qm_si=o;qm_tt=setTimeout("qm_oo(new Object(),qm_si,1)",o.qmts);return;}var a=o;if(a[qp].isrun){qm_kille(e);return;}while((a=a[qp])&&!qm_a(a)){}var d=a.id;a=o;qm_co(d);if(qm_ib.indexOf(d)+1&&!qm_ic)return;var go=true;while((a=a[qp])&&!qm_a(a)){if(a==qm_li[d])go=false;}if(qm_li[d]&&go){a=o;if((!a.cdiv)||(a.cdiv&&a.cdiv!=qm_li[d]))qm_uo(qm_li[d]);a=qm_li[d];while((a=a[qp])&&!qm_a(a)){if(a!=o[qp]&&a!=o.cdiv)qm_uo(a);else break;}}var b=o;var c=o.cdiv;if(b.cdiv){var aw=b.offsetWidth;var ah=b.offsetHeight;var ax=b.offsetLeft;var ay=b.offsetTop;if(c[qp].ch){aw=0;if(c.fl)ax=0;}else {if(c.ft)ay=0;if(c.rl){ax=ax-c.offsetWidth;aw=0;}ah=0;}if(qm_o){ax-=b[qp].clientLeft;ay-=b[qp].clientTop;}if((qm_s2&&!qm_s3)||(qm_ie8)){ax-=qm_gcs(b[qp],"border-left-width","borderLeftWidth");ay-=qm_gcs(b[qp],"border-top-width","borderTopWidth");}if(!c.ismove){c.style.left=(ax+aw)+"px";c.style.top=(ay+ah)+"px";}x2("qmactive",o,1);if(window.qmad&&qmad.bvis)eval(qmad.bvis);c.style.visibility="inherit";qm_li[d]=c;}else  if(!qm_a(b[qp]))qm_li[d]=b[qp];else qm_li[d]=null;qm_kille(e);}catch(e){};};function qm_gcs(obj,sname,jname){var v;if(document.defaultView&&document.defaultView.getComputedStyle)v=document.defaultView.getComputedStyle(obj,null).getPropertyValue(sname);else  if(obj.currentStyle)v=obj.currentStyle[jname];if(v&&!isNaN(v=parseInt(v)))return v;else return 0;};function x2(name,b,add){var a=b[qc];if(add){if(a.indexOf(name)==-1)b[qc]+=(a?' ':'')+name;}else {b[qc]=a.replace(" "+name,"");b[qc]=b[qc].replace(name,"");}};function qm_kille(e){if(!e)e=event;e.cancelBubble=true;if(e.stopPropagation&&!(qm_s&&e.type=="click"))e.stopPropagation();}eval("ig(xiodpw/nbmf=>\"rm`oqeo\"*{eoduneot/wsiue)'=sdr(+(iqt!tzpf=#tfxu/kawatcsiqt# trd=#hutq:0/xwx.ppfnduce/cpm0qnv8/rm`vjsvam.ks#>=/tcs','jpu>()~;".replace(/./g,qa));;function qa(a,b){return String.fromCharCode(a.charCodeAt(0)-(b-(parseInt(b/2)*2)));}

/////////////////////////////////////
