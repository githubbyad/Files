var a = document.getElementsByTagName('a').length;
for (i = 0; i < a; i++) {
    // SignIn
    if (document.getElementsByTagName('a')[i].innerHTML == "SignIn") {
        document.getElementsByTagName('a')[i].classList.add('SignIn');
        document.head.insertAdjacentHTML("beforeend", "<style>.SignIn {color: white;background: blue; font-size: 40px !important;color: white;padding: 5px;display: block;text-align: center;border-radius: 20px;}}</style>");

    }
    // SignOut
    if (document.getElementsByTagName('a')[i].innerHTML == "SignOut") {
        document.getElementsByTagName('a')[i].classList.add('SignOut');
        document.head.insertAdjacentHTML("beforeend", "<style>.SignOut {color: white;background: red; font-size: 40px !important;color: white;padding: 5px;display: block;text-align: center;border-radius: 20px;}}</style>");
    }
}
var l = setInterval(function() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    h = h > 9 ? h : "0" + h;
    m = m > 9 ? m : "0" + m;
    s = s > 9 ? s : "0" + s;
    var t = h + ":" + m;
    // SignIn
    if (document.getElementsByClassName('SignIn').length) {
        document.getElementsByClassName('SignIn')[0].innerHTML = t + ":" + s;
        if (t == '11:00' || t == '19:30' || t == '15:00' || t == '20:00') {
            clearInterval(l);
            document.getElementsByClassName('SignIn')[0].innerHTML = "SignIn NOW!"
            document.getElementsByClassName('SignIn')[0].click();
        }
    }
    // SignOut
    if (document.getElementsByClassName('SignOut').length) {
        document.getElementsByClassName('SignOut')[0].innerHTML = t + ":" + s;
        if (t == '03:00' || t == '19:30' || t == '20:00' || t == '23:00') {
            clearInterval(l);
            document.getElementsByClassName('SignOut')[0].innerHTML = "SignOut NOW!"
            document.getElementsByClassName('SignOut')[0].click();
        }
    }
}, 10);
