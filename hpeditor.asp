<%
response.write("<html>")
response.write("<head>")
response.write("<title>Home Page Editor</title>")
response.write("<script type='text/javascript' src='/JQuery/jquery.js'></script>")
response.write("<script type='text/javascript' src='/clients/bulletlink/staff-aai-22922/staff-aai-22922.js'></script>")
response.write("<link type='text/css' rel='stylesheet' href='/clients/bulletlink/staff-aai-22922/ufields.css'>")
response.write("<link href='https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap' rel='stylesheet'> ")
response.write("<link href='https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap' rel='stylesheet'>")
response.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' />")
response.write("<script>")
response.write("$(document).ready(function(){")
response.write("$('.hpx-iframe').css('height',$(window).height() - $('.hpx-header').innerHeight());")
response.write("if(SMThemeColor() == 'Black') {$('.hpx-main').attr('data-theme','Black');}")
response.write("if(SMThemeColor() == 'Blue') {$('.hpx-main').attr('data-theme','Blue');}")
response.write("if(SMThemeColor() == 'Brown') {$('.hpx-main').attr('data-theme','Brown');}")
response.write("if(SMThemeColor() == 'Purple') {$('.hpx-main').attr('data-theme','Purple');}")
response.write("if(SMThemeColor() == 'Orange') {$('.hpx-main').attr('data-theme','Orange');}")
response.write("if(SMThemeColor() == 'Olive') {$('.hpx-main').attr('data-theme','Olive');}")
response.write("if(SMThemeColor() == 'Magenta') {$('.hpx-main').attr('data-theme','Magenta');}")
response.write("if(SMThemeColor() == 'Green') {$('.hpx-main').attr('data-theme','Green');}")
response.write("if(SMThemeColor() == 'Red') {$('.hpx-main').attr('data-theme','Red');}")
response.write("if(SMThemeColor() == 'Yellow') {$('.hpx-main').attr('data-theme','Yellow');}")
response.write("});")
response.write("$(window).bind('load',function(){")
response.write("$('.hpx-iframe').css('height',$(window).height() - $('.hpx-header').innerHeight());")
response.write("});")
response.write("setTimeout(function(){")
response.write("$('.hpx-loader').animate({opacity: 0}, 400, function() {")
response.write("$('.hpx-loader').css('display','none');")
response.write("});")
response.write("$('.hpx-iframe').css('visibility','visible');")
response.write("$('.hpx-iframe').animate({opacity: 1}, 400);")
response.write("}, 6000);")
response.write("</script>")
response.write("</head>")
response.write("<body class='hpx-main'>")
response.write("<div class='hpx-loader'></div>")
response.write("<div class='hpx-wrapper'>")
response.write("<div class='hpx-header'>")
response.write("<div class='hpx-sm'>")
response.write("<a href='/responsibility.asp' title='Back to Site Manager'><i class='fa fa-angle-left' aria-hidden='true'></i>Site Manager</a>")
response.write("</div>")
response.write("<div class='hpx-label'>Home Page Editor</div>")
response.write("<div class='hpx-homepage'>")
response.write("<a href='/clients/bulletlink/staff-aai-22922/index90.htm?hle' target='_blank' title='View your Homepage without Editor'>Preview Homepage<i class='fa fa-external-link' aria-hidden='true'></i></a>")
response.write("</div>")
response.write("</div>")
response.write("<iframe class='hpx-iframe' src='/clients/bulletlink/staff-aai-22922/index90.htm?hp_editor'>")
response.write("</div>")
response.write("</body>")
response.write("</html>")
%>