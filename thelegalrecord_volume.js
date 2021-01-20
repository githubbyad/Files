// BEGIN: Volume Changes

$(document).ready(function() {
    var d = new Date();
    d.setDate(d.getDate() + (2 - 7 - d.getDay()) % 7);
    var date = d.getDate();
    var year = d.getFullYear();
    var weekday = new Array(7);
    var m = d.getMonth();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var monthx = month[d.getMonth()];
    $('.volume-date').text(monthx + ' ' + date + ', ' + year);

    function getWeekNumber(dx) {
        dx = new Date(Date.UTC(dx.getFullYear(), dx.getMonth(), dx.getDate()));
        dx.setUTCDate(dx.getUTCDate() + 4 - (dx.getUTCDay() || 7));
        var yearStart = new Date(Date.UTC(dx.getUTCFullYear(), 0, 1));
        var weekNo = Math.ceil((((dx - yearStart) / 86400000) + 1) / 7);
        return [dx.getUTCFullYear(), weekNo];
    }
    var result = getWeekNumber(new Date());
    $('.volume-week').text(result[1]);

    vnum = year - 2021;
    $('.volume-number').text(123 + vnum);
});

// END: Volume Changes
