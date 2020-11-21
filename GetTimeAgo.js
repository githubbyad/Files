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

        if (days > 0 && days <= Article_Timestamp) str = document.write(days + ' days ago');
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
