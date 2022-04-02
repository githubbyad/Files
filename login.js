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
    var t = h + ":" + m;
    // SignIn
    if (document.getElementsByClassName('SignIn').length) {
        document.getElementsByClassName('SignIn')[0].innerHTML = t + ":" + s;
        // 11:00 AM
        if (t == '11:0') {
            clearInterval(l);
            document.getElementsByClassName('SignIn')[0].innerHTML = "SignIn NOW!"
            document.getElementsByClassName('SignIn')[0].click();
        }
        // 7:30 PM
        if (t == '19:30') {
            clearInterval(l);
            document.getElementsByClassName('SignIn')[0].innerHTML = "SignIn NOW!"
            document.getElementsByClassName('SignIn')[0].click();
        }
        // 8:00 PM for Ramazan
        if (t == '20:00') {
            clearInterval(l);
            document.getElementsByClassName('SignIn')[0].innerHTML = "SignIn NOW!"
            document.getElementsByClassName('SignIn')[0].click();
        }
    }
    // SignOut
    if (document.getElementsByClassName('SignOut').length) {
        document.getElementsByClassName('SignOut')[0].innerHTML = t + ":" + s;
        // 3:00 AM
        if (t == '3:0') {
            clearInterval(l);
            document.getElementsByClassName('SignOut')[0].innerHTML = "SignOut NOW!"
            document.getElementsByClassName('SignOut')[0].click();
        }
        // 7:30 PM
        if (t == '19:30') {
            clearInterval(l);
            document.getElementsByClassName('SignOut')[0].innerHTML = "SignOut NOW!"
            document.getElementsByClassName('SignOut')[0].click();
        }
    }
}, 10);
