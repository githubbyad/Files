// BEGIN: Poll IP
$(document).ready(function() {
$.getJSON("https://api.ipify.org?format=json", function(data) {
$('.polls1body > form').each(function() {
// Radio Poll
if ($(this).attr('onsubmit').indexOf('rad_val') != -1 && $(this).attr('onsubmit').indexOf('&vip=') == -1) {
$(this).attr('onsubmit', $(this).attr('onsubmit').split('+rad_val').shift() + '+ rad_val + \'&vip=' + data.ip + '\', \'iframe\', \'600\', \'400\');return false;');
}
// CheckBox Poll
if ($(this).attr('onsubmit').indexOf('chk_val') != -1 && $(this).attr('onsubmit').indexOf('&vip=') == -1) {
$(this).attr('onsubmit', $(this).attr('onsubmit').split('+chk_val').shift() + '+ chk_val + \'&vip=' + data.ip + '\', \'iframe\', \'600\', \'400\');return false;');
}
});
});
});
// END: Poll IP
