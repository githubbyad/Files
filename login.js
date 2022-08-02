var login = ["11:00", "19:30", "15:00", "20:00"]; // Login Times
var logout = ["03:00", "19:30", "20:00", "23:00"]; // Logout Times
document.querySelectorAll("a").forEach(x => { // Add class and styles
    if (x.innerHTML == "SignIn") {
        x.classList.add('SignIn');
        document.head.insertAdjacentHTML("beforeend", "<style>.SignIn {color: white;background: blue; font-size: 40px !important;color: white;padding: 5px;display: block;text-align: center;border-radius: 20px;}}</style>");

    } else if (x.innerHTML == "SignOut") {
        x.classList.add('SignOut');
        document.head.insertAdjacentHTML("beforeend", "<style>.SignOut {color: white;background: red; font-size: 40px !important;color: white;padding: 5px;display: block;text-align: center;border-radius: 20px;}}</style>");
    }
});
var l = setInterval(function() {
    var sin = document.getElementsByClassName('SignIn')[0];
    var sout = document.getElementsByClassName('SignOut')[0];
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    h = h > 9 ? h : "0" + h;
    m = m > 9 ? m : "0" + m;
    s = s > 9 ? s : "0" + s;
    var t = h + ":" + m;
    if (document.getElementsByClassName('SignIn').length) { // SignIn
        sin.innerHTML = t + ":" + s;
        login.forEach(i => {
            if (t == i) {
                clearInterval(l);
                sin.innerHTML = "SignIn NOW!"
                sin.click();
            }
        });
    }
    if (document.getElementsByClassName('SignOut').length) { // SignOut
        sout.innerHTML = t + ":" + s;
        logout.forEach(o => {
            if (t == o) {
                clearInterval(l);
                sout.innerHTML = "SignOut NOW!"
                sout.click();
            }
        });
    }
}, 10);
