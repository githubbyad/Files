var staff_name = "Adnan";
var boss = ["Salim", "Parveen"];
var other_staffs = ["Zaid", "Juned", "Usman", "Owais"];
var headLinks = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;900&display=swap" rel="stylesheet">`;

// add loader
function activeLoader() {
    loader.classList.remove("d-none");
    mainIframe.classList.add("invisible");
}

// Voice functions
function getVoices() {
    let voices = speechSynthesis.getVoices();
    if (!voices.length) {
        let utterance = new SpeechSynthesisUtterance("");
        speechSynthesis.speak(utterance);
        voices = speechSynthesis.getVoices();
    }
    return voices;
}

function speak(text, voice, rate, pitch, volume) {
    // create a SpeechSynthesisUtterance to configure the how text to be spoken 
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = volume; // From 0 to 1
    speakData.rate = rate; // From 0.1 to 10
    speakData.pitch = pitch; // From 0 to 2
    speakData.text = text;
    speakData.lang = 'en';
    speakData.voice = voice;
    speechSynthesis.speak(speakData);

}

function startVoice(text) {
    if ('speechSynthesis' in window) {
        let voices = getVoices();
        let rate = 0.7,
            pitch = 2,
            volume = 1;
        setTimeout(() => { speak(text, voices[1], rate, pitch, volume); }, 3000);
        setTimeout(() => { speak(text, voices[1], rate, pitch, volume); }, 5000);
        setTimeout(() => { speak(text, voices[1], rate, pitch, volume); }, 8000);
        setTimeout(() => { speak(text, voices[1], rate, pitch, volume); }, 11000);
    } else {
        console.log('Speech Synthesis Not Supported');
    }
}

function sendMail(ticket, name, status, subject, by, time) {
    document.querySelector("#mail").src = `http://localhost/mail/email.php?ticket=${ticket}&staff=${name}&status=${status}&subject=${subject}&by=${by}&time=${time}`;
}

// get working ticket numbers for dashboard
function getWorking() {
    var w = 0;
    dashboard_working.contentWindow.document.querySelectorAll(".SMB").forEach(t => {
        if (t.children[6].innerText.trim() == "Working" && t.children[8].innerText.trim() == staff_name) {
            w++;
        }
        if (t.children[6].innerText.trim() == "Working" && t.children[8].innerText.trim() == "" && t.children[7].innerText.trim() == staff_name) {
            w++;
        }
    });
    if (mainIframe.contentWindow.document.querySelector(".working")) {
        mainIframe.contentWindow.document.querySelector(".working").innerText = w;
    }
}
// get open ticket numbers for dashboard
function getOpen() {
    var o = 0;
    dashboard_open.contentWindow.document.querySelectorAll(".SMB").forEach(t => {
        if (t.children[6].innerText.trim() == "Open" && t.children[8].innerText.trim() == staff_name) {
            o++;
        }
    });
    if (mainIframe.contentWindow.document.querySelector(".open")) {
        mainIframe.contentWindow.document.querySelector(".open").innerText = o;
    }
}
// get pending tickets of other staff page#7
function getReviewTickets4() {
    var r4 = 0;
    dashboard_review_4.contentWindow.document.querySelectorAll(".SMB").forEach(t => {
        if (t.children[6].innerText.trim() == "Pending" && t.children[7].innerText.trim() != staff_name) {
            r4++;
        }
    });
    return r4;
}
// get pending tickets of other staff page#8
function getReviewTickets5() {
    var r5 = 0;
    dashboard_review_5.contentWindow.document.querySelectorAll(".SMB").forEach(t => {
        if (t.children[6].innerText.trim() == "Pending" && t.children[7].innerText.trim() != staff_name) {
            r5++;
        }
    });
    return r5;
}
// get pending tickets of other staff page#9
function getReviewTickets6() {
    var r6 = 0;
    dashboard_review_6.contentWindow.document.querySelectorAll(".SMB").forEach(t => {
        if (t.children[6].innerText.trim() == "Pending" && t.children[7].innerText.trim() != staff_name) {
            r6++;
        }
    });
    var total = parseInt(getReviewTickets4()) + parseInt(getReviewTickets5()) + parseInt(r6);
    if (mainIframe.contentWindow.document.querySelector(".review")) {
        mainIframe.contentWindow.document.querySelector(".review").innerText = total;
    }
}
// get login status
function getLogin() {
    get_login_time.src = get_login_time.src;
    login_status.contentWindow.document.querySelectorAll("td").forEach(l => {
        if (l.innerText.trim() == "SignIn") {
            if (mainIframe.contentWindow.document.querySelector(".login_status")) {
                mainIframe.contentWindow.document.querySelector(".login_status").innerHTML = "<span class='text-danger'>Not Login</span>";
            }
        } else if (l.innerText.trim() == "SignOut") {
            if (mainIframe.contentWindow.document.querySelector(".login_status")) {
                var lt = `<b>${get_login_time.contentWindow.document.querySelector(".SMB td:nth-child(2)").innerText.split(" ")[1]} ${get_login_time.contentWindow.document.querySelector(".SMB td:nth-child(2)").innerText.split(" ")[2]}</b>`;
                mainIframe.contentWindow.document.querySelector(".login_status").innerHTML = `<span class='text-success'>Login at ${lt}</span>`;
            }
        }
    });
}

// add main ticket page
function ticketLoaded(a) { // after loading "main Ticket" page
    var cw = a.contentWindow;
    // if schedule page
    if (mainIframe.contentWindow.window.location.href.indexOf("/bulletlink_schedule_load.asp?page=schedule") != -1) {
        // set title
        document.title = "Schedule";
        // add class to body
        cw.document.body.classList.add("schedulePage", "container-fluid", "p-4");
        // add bootstrap css
        cw.document.head.insertAdjacentHTML("beforeend", headLinks);
        // add header
        cw.document.querySelector("table").insertAdjacentHTML("beforebegin", `<div class="scheduleHead col-12 fs-3 mb-4 pb-2 fw-bold border-bottom border-2">Schedule</div>`);
        // adding class in table
        cw.document.querySelector("table").classList.add("table", "table-warning", "table-hover", "ticket-table", "overflow-hidden", "rounded-3", "p-2");
        // styling staff names
        cw.document.querySelectorAll("tr").forEach((tr, i) => {
            if (i != 0) {
                tr.children[2].classList.add("staffs");
                tr.children[3].classList.add("staffs");
                tr.children[4].classList.add("staffs");
            }
        })
        cw.document.querySelectorAll(".staffs").forEach(s => {
            var x = s.innerText.split(",")[1];
            if (x == undefined) {
                x = "";
            }
            s.innerHTML = `<span class="btn btn-schedule">${s.innerText.split(",")[0]}</span><span class="btn btn-schedule ms-1">${x}</span>`;
        });
        cw.document.querySelectorAll(".btn-schedule").forEach(t => {
            if (t.innerText == staff_name) {
                t.classList.add("btn-dark");
            }
        });
        // today's date
        var d = new Date();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var month = months[d.getMonth()];
        var dt = `${months[d.getMonth()]} ${d.getDate()}`;
        cw.document.querySelectorAll("font").forEach(f => {
            if (f.innerText == dt) {
                f.parentElement.parentElement.parentElement.classList.add("today");
            }
        });
        if (!cw.document.querySelector(".today")) {
            cw.document.querySelector(".table").style.opacity = "0.3";
            cw.document.querySelector(".scheduleHead").innerText = `${cw.document.querySelector(".scheduleHead").innerText} is not updated yet. Request to update it.`
        }
        // add styles
        cw.document.querySelector(".schedulePage").insertAdjacentHTML("beforeend", `
        <style>
            .schedulePage{
                background:#fff;
                font-family: 'Outfit', sans-serif;
            }
            .schedulePage td {
                color: #1b1f22;
                font-family: 'Outfit', sans-serif;
                font-size: 1rem !important;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                text-align: center;
                text-transform: capitalize;
            }
            .ticket-table {   
                box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px !important;                
            }
            .schedulePage .table th {
                font-size: 1rem;
                text-align: center;
                padding-top: 1.5rem;
                padding-bottom: 1.5rem;
                background: #ceb977 !important;                
            }
            .btn-schedule {
                color: #000;
                background-color: #ceb977;
                border-color: #ceb977;
            }
            .btn-schedule.btn-dark {
                color: #fff;
                background-color: #212529;
                border-color: #212529;
            }
            .btn.btn-schedule:empty {
                display: none;
            }
            font[color="red"] {
                color: black;
                font-weight: normal;
            }
            .today td, .today font {
                color:red !important; 
                font-weight: bold !important;
            }
            .today td .btn {
            font-weight: bold !important;
            }
            td {padding-top: 1rem !important;}
            </style>`);
    }
    // if Ticket list page
    if (mainIframe.contentWindow.window.location.href.indexOf("/bulletlink_tickets.asp") != -1 && mainIframe.contentWindow.window.location.href.indexOf("?mode=edit") == -1 && mainIframe.contentWindow.window.location.href.indexOf("/bulletlink_tickets.asp?cell=0") == -1) {
        // set title
        document.title = "Tickets";
        if (cw.document.querySelector(".pagerCurrent")) {
            document.title = "Tickets > page " + cw.document.querySelector(".pagerCurrent").innerText.trim();
        }
        // add class to body
        cw.document.body.classList.add("ticketListPage", "container-fluid", "p-4");
        // add bootstrap css
        cw.document.head.insertAdjacentHTML("beforeend", headLinks);
        // adding class in table
        cw.document.querySelectorAll("table")[1].classList.add("table", "table-light", "table-hover", "ticket-table", "overflow-hidden", "rounded-3", "p-2");
        cw.document.querySelector(".SMT").classList.add("shadow-none", "fw-bold");
        cw.document.querySelectorAll(".SMT td").forEach(p => {
            p.classList.add("py-3");
        });
        // highlight staff name
        cw.document.querySelectorAll("td font").forEach(a => {
            if (a.innerText.indexOf(staff_name) != -1) {
                a.classList.add("fw-bold", "text-black");
            }
        });
        cw.document.querySelector(".SMT td:nth-child(2)").classList.add("ps-3");
        // mark review tickets        
        cw.document.querySelectorAll(".SMB").forEach(t => {
            if (t.children[6].innerText.trim() == "Pending" && t.children[7].innerText.trim() != staff_name) {
                t.classList.add("review_now");
            }
            if (t.children[6].innerText.trim() == "Closed" && t.children[7].innerText.trim() != staff_name) {
                t.classList.add("review_now");
            }
        });
        // remove unwanted columns
        cw.document.querySelector(".SMT td:nth-child(1)").classList.add("d-none");
        cw.document.querySelector(".SMT td:nth-child(3)").classList.add("d-none");
        cw.document.querySelector(".SMT td:nth-child(4)").classList.add("d-none");
        cw.document.querySelector(".SMT td:nth-child(6)").classList.add("d-none");
        cw.document.querySelector(".SMT td:nth-child(12)").classList.add("d-none");
        cw.document.querySelector(".SMT td:nth-child(13)").classList.add("d-none");
        cw.document.querySelector(".SMT td:nth-child(14)").classList.add("d-none");
        cw.document.querySelector(".SMT td:nth-child(15)").classList.add("d-none");
        cw.document.querySelector(".SMT td:nth-child(16)").classList.add("d-none");
        cw.document.querySelector(".SMT td:nth-child(17)").classList.add("text-center");
        cw.document.querySelector(".SMT td:nth-child(17)").innerHTML = "Reply";
        cw.document.querySelectorAll(".SMB").forEach(t => {
            t.classList.remove("TrShadow");
            t.children[1].classList.add("site-links", "ps-3");
            // adding loginstaff link
            var lk = t.children[1].children[0].children[0].href.split("//")[1];
            lk = (lk.endsWith("/")) ? lk.split("/")[0] : lk;
            t.children[1].children[0].children[0].href = "loginstaff.asp?site=" + lk;
            // remove td
            t.children[0].classList.add("d-none");
            t.children[2].classList.add("d-none");
            t.children[3].classList.add("d-none");
            t.children[5].classList.add("d-none");
            t.children[11].classList.add("d-none");
            t.children[12].classList.add("d-none");
            t.children[13].classList.add("d-none");
            t.children[14].classList.add("d-none");
            t.children[15].classList.add("d-none");
            // highlight staff ticket
            if (t.children[8].innerText.trim() == staff_name && t.children[6].innerText.trim() != "Pending") {
                t.classList.add("for-me");
            }
            if (t.children[7].innerText.trim() == staff_name && t.children[6].innerText.trim() == "Working") {
                t.classList.add("for-me");
            }
            // add css to status
            if (t.children[6].children[0].children[0].innerText == "Open") {
                t.children[6].children[0].children[0].classList.add("btn", "btn-danger");
            } else if (t.children[6].children[0].children[0].innerText == "Pending") {
                t.children[6].children[0].children[0].classList.add("btn", "btn-success");
            } else if (t.children[6].children[0].children[0].innerText == "Closed") {
                t.children[6].children[0].children[0].classList.add("btn", "btn-secondary");
            } else if (t.children[6].children[0].children[0].innerText == "Closed-Final") {
                t.children[6].children[0].children[0].classList.add("btn", "btn-info");
            } else {
                t.children[6].children[0].children[0].classList.add("btn", "btn-warning");
            }
            // add button css to reply
            t.children[16].classList.add("text-center");
            t.children[16].children[0].children[0].classList.add("btn", "btn-primary", "reply-links");
            t.children[16].children[0].children[0].innerHTML = "<i class='bi bi-chat-text-fill'></i>";

        });
        // adding padding to td
        cw.document.querySelectorAll(".SMB td").forEach(d => d.classList.add("py-2"));
        // adding css to pages
        if (cw.document.querySelector(".pagerDefault")) {
            cw.document.querySelectorAll(".pagerDefault").forEach(p => {
                p.classList.add("btn", "btn-light", "text-dark");
            })
            if (cw.document.querySelector(".pagerCurrent")) {
                cw.document.querySelector(".pagerCurrent").classList.add("btn", "btn-dark", "text-light");
            } else {
                cw.document.querySelector(".pagerDefault").classList.remove("btn-light", "text-dark");
                cw.document.querySelector(".pagerDefault").classList.add("btn", "btn-dark", "text-light");
                // add search box on first page
                cw.document.body.insertAdjacentHTML("beforeend", `<div class="searchTicketsDiv col-12 mb-3 d-none"><form id="searchTicketsForm"><input id="searchTickets" type="text" class="form-control py-2 my-3 text-center" placeholder="Search Tickets..."><form></div>`);
                // add footer on first page
                cw.document.body.insertAdjacentHTML("beforeend", `<div class="col-12 my-3 border-top pt-3 text-center d-flex justify-content-center align-items-center">
                <span class="activeSearch" title="Search Tickets"><i class="bi bi-search fs-5"></i></span>
                <span class="mx-4 border-end"></span>
                <span class="quick_links"></span>
                <span class="mx-4 border-end"></span>
                <span class="important_links"></span>
                </div><script><\/script>`);
                cw.document.querySelector(".quick_links").insertAdjacentElement("afterbegin", cw.document.querySelector("img[src='/images/question.jpg']").parentElement);
                cw.document.querySelector(".important_links").insertAdjacentElement("afterbegin", cw.document.querySelector("img[src='/images/gray_star.jpeg']").parentElement);
                cw.document.querySelector("#searchTicketsForm").addEventListener("submit", e => {
                    activeLoader();
                    e.preventDefault();
                    cw.document.querySelector("#stic").value = `%${cw.document.querySelector("#searchTickets").value}%`;
                    cw.document.querySelector("#search").click();
                });
                cw.document.querySelector(".activeSearch").addEventListener("click", () => {
                    cw.document.querySelector(".searchTicketsDiv").classList.toggle("d-none");
                    cw.document.querySelector("#searchTickets").focus();
                });
            }
        }
        // remove font's default size=2
        cw.document.querySelectorAll("font").forEach(f => f.setAttribute("size", ""));
        // auto click on reply when clicking on ticket
        cw.document.querySelectorAll(".site-links a").forEach((a, i) => {
            a.addEventListener("click", () => {
                cw.document.querySelectorAll(".reply-links")[i].click();
            });
        });
        // add custom css
        cw.document.querySelector(".ticketListPage").insertAdjacentHTML("beforeend", `
        <style>
            .ticketListPage{
                background:#fff;
                font-family: 'Outfit', sans-serif;
            }
            .ticketListPage td {
                color: #1b1f22;
                font-family: 'Outfit', sans-serif;
                font-size: 1rem !important;
            }
            .ticket-table {   
                box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px !important;                
            }
            .SMB.review_now {
                border-left: 5px solid red;
            }
            .ticketListPage .TrShadow:hover td {box-shadow:none}
            .ticketListPage .bodyText {
                display:none !important;
                position: fixed;
                width: 100%;
                left: 0;
                top:0;
                background: #ffffff;
                box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15),inset 0 -1px 0 rgba(255,255,255,0.15);    
                display: flex;
                justify-content: space-between;
                align-items: center;            
                padding-top: .5rem !important;
                padding-bottom: .5rem !important;
                       
            }
            .ticketListPage .bodyText > tbody {
                width:100%;
            }
            .ticketListPage .bodyText > tbody > tr {                
                display: flex;
                justify-content: space-evenly;  
                align-items: center;              
            }
            .ticketListPage .bodyText a {
                color: white !important;
                font-weight: bold !important;
            }
            .ticketListPage .bodyText #forms1 {
                color: #adb5bd;
                font-weight: bold;
                width:300px;
            }
            .ticketListPage .site-links a{
                color: #000;
                font-family: 'Outfit', sans-serif;
                font-size:1rem !important;
                font-weight:600 !important;
            }
            .ticketListPage a {
                font-family: 'Outfit', sans-serif;
                font-weight:600 !important;
            }
            .ticketListPage .bodyText > tbody > tr td:last-child {
                display: none;
            }               
            .for-me td {
                background: transparent !important;
            }
            .SMB.for-me:hover td, .SMB.for-me:hover td.site-links a {
                color: #333 !important;;
            }
            .SMB.for-me td a {
                color: #fff !important;
            }
            .SMB.for-me {
                background: linear-gradient(to left,#fff,#000 125%);
                border-radius: 50px !important;
                overflow: hidden;
                transition:200ms ease-in-out;
            }   
            .for-me a.btn.btn-primary {
                background: #212529;
                border-color: #212529;
            }     
            .activeSearch {
                cursor:pointer;
            } 
            .searchTicketsDiv {
            }
        </style>`);
        // activate loader when clicing on any links
        cw.document.querySelectorAll('a').forEach(a => {
            if (!a.parentElement.parentElement.classList.contains("site-links")) {
                a.addEventListener("click", () => {
                    activeLoader();
                });
            }
        });
    }

    // if Task page
    if (mainIframe.contentWindow.window.location.href.indexOf("bulletlink_tasks.asp") != -1) {
        // set title
        document.title = "Task";
        // add class to body
        cw.document.body.classList.add("taskPage", "container-fluid", "p-4");
        // add bootstrap css
        cw.document.head.insertAdjacentHTML("beforeend", headLinks);
        // adding class in table
        cw.document.querySelectorAll("table")[1].classList.add("table", "table-warning", "ticket-table", "overflow-hidden", "rounded-3", "p-2");
        cw.document.querySelector(".SMT").classList.add("shadow-none", "fw-bold");
        cw.document.querySelectorAll(".SMT td").forEach(p => {
            p.classList.add("py-3");
        });
        // add custom css
        cw.document.querySelector(".taskPage").insertAdjacentHTML("beforeend", `
        <style>
            .taskPage{
                background:#fff;
                font-family: 'Outfit', sans-serif;
            }
            .taskPage td {
                color: #1b1f22;
                font-family: 'Outfit', sans-serif;
                font-size: 1rem !important;
            }
            .ticket-table {   
                box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px !important;                
            }
            td.SMT {
                font-weight: bold !important;
                background: #d9c895;
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
            .taskPage .TrShadow:hover td {box-shadow:none}
            .taskPage .bodyText {
                display:none !important;       
            }
            .taskPage a {
                font-family: 'Outfit', sans-serif;
                font-weight:600 !important;
            }
        </style>`);
    }

    // if Attendence
    if (mainIframe.contentWindow.window.location.href.indexOf("/bulletlink_attendance.asp") != -1) {
        // add class to body
        cw.document.body.classList.add("attendencePage", "container-fluid", "p-4");
        // add bootstrap css
        cw.document.head.insertAdjacentHTML("beforeend", headLinks);
        // add header
        cw.document.querySelector("table").insertAdjacentHTML("beforebegin", `<div class="col-12 fs-3 mb-4 pb-2 fw-bold border-bottom border-2">Attendence <b class="text-success">(${cw.document.querySelector(".bodyText").children[0].children[1].children[0].children[0].children[1].innerText}/${cw.document.querySelector(".bodyText").children[0].children[1].children[0].children[0].children[2].innerText})</b></div><span class="btn btn-warning activateLogout">Logout at <b></b></span><span class="btn btn-success activateLogin">Login at <b></b></span>`);
        // adding class in table
        cw.document.querySelectorAll("table")[1].classList.add("table", "table-light", "table-hover", "ticket-table", "overflow-hidden", "rounded-3", "p-2");
        cw.document.querySelector(".bodyText").classList.add("d-none");
        // set title
        document.title = `Attendence`;
        // time now
        cw.document.querySelector(".bodyText").children[0].children[2].classList.add("d-none");
        cw.document.querySelector(".bodyText").insertAdjacentHTML("afterend", `<p class="text-center text-secondary fw-bold fs-4">Time Now &#10148; <span class="time_now text-danger">...</span></p>`);
        var t = setInterval(() => {
            if (cw.document.querySelector(".time_now")) {
                var d = new Date();
                var ap = (d.getHours() > 11) ? "PM" : "AM";
                var sec = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
                var min = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
                var hr = d.getHours() > 12 ? (d.getHours() - 12) : d.getHours();
                var time = `<b>${hr}:${min}:${sec} ${ap}</b>`;
                cw.document.querySelector(".time_now").innerHTML = time;
            } else {
                clearInterval(t);
            }
        }, 1000);
        // logout
        cw.document.querySelectorAll("a").forEach(a => {
            if (a.innerText == "SignOut") {
                a.classList.add("logx", "logout_now");
                cw.document.querySelector(".activateLogin").classList.add("d-none");
            }
            if (a.innerText == "SignIn") {
                a.classList.add("logx", "login_now");
                cw.document.querySelector(".activateLogout").classList.add("d-none");
            }
        });
        var lg = document.cookie.split("logout=").pop().split(";")[0];
        var hx = lg.split(":")[0];
        var hx_24 = hx > 12 ? hx - 12 : hx;
        var mx = lg.split(":")[1];
        cw.document.querySelector(".activateLogout b").innerText = `${hx_24}:${mx}`;
        cw.document.querySelector(".activateLogout").addEventListener("click", () => {
            console.log("Activated Logout");
            cw.document.querySelector(".activateLogout").classList.add("activatedLogout");
            cw.document.querySelector(".logx").innerText = `SignOut at ${cw.document.querySelector(".activateLogout b").innerText}`;
            var y = setInterval(() => {
                if (cw.document.querySelector(".activateLogout")) {
                    var n = new Date();
                    var h = n.getHours();
                    h = h < 10 ? `0${h}` : h;
                    var m = n.getMinutes();
                    m = m < 10 ? `0${m}` : m;
                    if (hx == h && mx == m) {
                        cw.document.querySelector(".logx").click();
                        startVoice("You have been logged out successfully.");
                        clearInterval(y);
                    }
                } else {
                    clearInterval(y);
                }
            }, 500);
        });
        var lgs = document.cookie.split("login=").pop().split(";")[0];
        var hxs = lgs.split(":")[0];
        var hxs_24 = hxs > 12 ? hxs - 12 : hxs;
        var mxs = lgs.split(":")[1];
        cw.document.querySelector(".activateLogin b").innerText = `${hxs_24}:${mxs}`;
        cw.document.querySelector(".activateLogin").addEventListener("click", () => {
            console.log("Activated Login");
            cw.document.querySelector(".activateLogin").classList.add("activatedLogin");
            cw.document.querySelector(".logx").innerText = `SignIn at ${cw.document.querySelector(".activateLogin b").innerText}`;
            var z = setInterval(() => {
                if (cw.document.querySelector(".activateLogin")) {
                    var ni = new Date();
                    var hi = ni.getHours();
                    hi = hi < 10 ? `0${hi}` : hi;
                    var mi = ni.getMinutes();
                    mi = mi < 10 ? `0${mi}` : mi;
                    if (hxs == hi && mxs == mi) {
                        cw.document.querySelector(".logx").click();
                        startVoice("You have been logged in successfully.");
                        clearInterval(z);
                    }
                } else {
                    clearInterval(z);
                }
            }, 500);
        });
        // add custom css
        cw.document.querySelector(".attendencePage").insertAdjacentHTML("beforeend", `
        <style>
            .attendencePage{
                background:#fff;
                font-family: 'Outfit', sans-serif;
            }  
            .attendencePage td, .attendencePage td font, a {
                font-family: 'Outfit', sans-serif !important;
                font-size: 1rem !important;
            }     
            .ticket-table {   
                box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px !important;                
            }
            .logx {font-weight:bold !important}
            .SMT td {background: #6c757d;}
            a[href*="bulletlink_attendance.asp"] {
                padding-top: 0 !important;
                padding-bottom: 0 !important;
                display: inline-block;
                font-weight: 400;
                line-height: 1.5;
                text-align: center;
                text-decoration: none;
                vertical-align: middle;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                border: 1px solid transparent;
                padding: .375rem .75rem;
                font-size: 1rem;
                border-radius: .25rem;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                color: #fff;
                background-color: #198754;
                border-color: #198754;
            }
            a[href*="/bulletlink_attendance.asp?mode=timeout&aid=30481"] {
                background-color: #dc3545;
                border-color: #dc3545;
            }
            .activateLogout, .activateLogin {
                position: absolute;
                right: 1.5rem;
                top: 2rem;
            }
            .activateLogout.activatedLogout {
                background: #83fd83;
                border-color: #83fd83;
            }
            .activateLogin.activatedLogin {
                background: #9763f6;
                border-color: #9763f6;
            }
        </style>`);
    }
    // if online staff page
    if (mainIframe.contentWindow.window.location.href.indexOf("/bulletlink_online_staff.asp") != -1) {
        // add class to body
        cw.document.body.classList.add("onlineStaffPage", "container-fluid", "p-4");
        // add bootstrap css
        cw.document.head.insertAdjacentHTML("beforeend", headLinks);
        // add header
        cw.document.querySelector("table").insertAdjacentHTML("beforebegin", `<div class="col-12 fs-3 mb-4 pb-2 fw-bold border-bottom border-2">Online Staffs</div>`);
        // adding class in table
        cw.document.querySelectorAll("table")[0].classList.add("table", "ticket-table", "overflow-hidden", "rounded-3", "p-2", "text-start", "float-start");
        cw.document.querySelector(".SMT").classList.add("shadow-none", "fw-bold");
        // removing 2nd column "Logged"
        cw.document.querySelector(".SMT").children[1].classList.add("d-none");
        cw.document.querySelector(".SMT").children[0].setAttribute("colspan", 2);
        cw.document.querySelectorAll(".SMB").forEach(t => {
            t.children[0].setAttribute("colspan", 2);
            if (t.children[0].children[0].innerText == staff_name) {
                t.children[0].children[0].classList.add("bg-purple", "p-1", "rounded", "fw-bold");
            }
            if (other_staffs.includes(t.children[0].children[0].innerText)) {
                t.children[0].children[0].classList.add("bg-darkx", "p-1", "rounded", "fw-bold");
            }
            t.children[1].classList.add("d-none");
        });
        // set title
        document.title = "Online Staff";
        // add custom css
        cw.document.querySelector(".onlineStaffPage").insertAdjacentHTML("beforeend", `
        <style>
            .onlineStaffPage{
                background:#fff;
                font-family: 'Outfit', sans-serif;
            }  
            .onlineStaffPage td, .onlineStaffPage td font {
                font-family: 'Outfit', sans-serif;
                font-size: 1rem !important;
            }    
            tr.SMT {display: none;}
            td {border-width: 0 !important;}
            .SMB {background: transparent !important;float: left;}
            .bg-purple {
                background: #722ef950 !important;
                color: #722ef9 !important;
            }  
            .bg-darkx {
                background: #21252950 !important;
                color: #212529 !important;
            }  
        </style>`);
    }

    // if reply page
    if (mainIframe.contentWindow.window.location.href.indexOf("/bulletlink_tickets.asp") != -1 && mainIframe.contentWindow.window.location.href.indexOf("?mode=edit") != -1 && mainIframe.contentWindow.window.location.href.indexOf("/bulletlink_tickets.asp?cell=0") == -1) {
        // add class to body
        cw.document.body.classList.add("ticketListPage", "container-fluid", "p-4");
        // add bootstrap css
        cw.document.head.insertAdjacentHTML("beforeend", headLinks);
        // add class to form fields
        cw.document.querySelectorAll("textarea, input").forEach(t => t.classList.add("form-control"));
        cw.document.querySelectorAll("select").forEach(t => t.classList.add("form-select", "w-25"));
        cw.document.querySelector("#reminder").style.width = "50px";
        // ticket header
        cw.document.querySelector(".SMB").children[0].classList.add("d-none");
        cw.document.querySelector(".SMB").children[1].setAttribute("colspan", 2);
        cw.document.querySelector(".SMB").children[1].classList.add("ticketHeader");
        // status styling
        cw.document.querySelector("#status").addEventListener("change", () => {
            if (cw.document.querySelector("#status").value == "Pending") {
                cw.document.querySelector("#status").classList.remove("btn-dark", "btn-warning", "btn-secondary", "btn-danger", "btn-success");
                cw.document.querySelector("#status").classList.add("btn", "btn-success");
            }
            if (cw.document.querySelector("#status").value == "Working") {
                cw.document.querySelector("#status").classList.remove("btn-dark", "btn-warning", "btn-secondary", "btn-danger", "btn-success");
                cw.document.querySelector("#status").classList.add("btn", "btn-dark");
                cw.document.querySelector("#message").value = "Hi,\n\nWe are working on your ticket now and will update you shortly. \n\nThank you.";
                cw.document.querySelector("#StaffResponse").value = "&#x231B; working";
            }
            if (cw.document.querySelector("#status").value == "ForStaff") {
                cw.document.querySelector("#status").classList.remove("btn-dark", "btn-warning", "btn-secondary", "btn-danger", "btn-success");
                cw.document.querySelector("#status").classList.add("btn", "btn-warning");
            }
            if (cw.document.querySelector("#status").value == "Closed") {
                cw.document.querySelector("#status").classList.remove("btn-dark", "btn-warning", "btn-secondary", "btn-danger", "btn-success");
                cw.document.querySelector("#status").classList.add("btn", "btn-danger");
            }
            if (cw.document.querySelector("#status").value == "Closed-Final") {
                cw.document.querySelector("#status").classList.remove("btn-dark", "btn-warning", "btn-secondary", "btn-danger", "btn-success");
                cw.document.querySelector("#status").classList.add("btn", "btn-secondary");
            }
        });
        // highlight staff name in response
        cw.document.querySelectorAll("b").forEach(b => {
            if (b.innerText == staff_name) {
                b.classList.add("bg-purple", "p-1", "rounded");
            }
            if (boss.includes(b.innerText)) {
                b.classList.add("bg-successx", "p-1", "rounded");
            }
            if (other_staffs.includes(b.innerText)) {
                b.classList.add("bg-darkx", "p-1", "rounded");
            }
            if (b.innerText == "Customer") {
                b.classList.add("bg-redx", "p-1", "rounded");
            }
            if (b.innerText == cw.document.querySelectorAll(".SMB")[1].children[1].innerText) {
                b.classList.add("hide_header");
            }
        });
        // set title
        document.title = cw.document.querySelector(".ticketHeader").innerText;
        // add review button
        function reviewed(msg) {
            jConfirm(msg, 'Confirm', function(r) {
                if (r) {
                    cw.document.querySelector("#submit1").click();
                }
            });
            return false;
        }
        cw.document.querySelector("td.ticketHeader font").insertAdjacentHTML("afterend", "<span class='review_ticket btn btn-warning me-2 mt-1 float-end end-0 top-0 position-absolute'><i class='bi bi-check-circle me-2'></i>Review</span>");
        cw.document.querySelector(".review_ticket").addEventListener("click", () => {
            reviewed("Did you review ticket?");
            cw.document.querySelector("#status").value = "ForStaff";
            cw.document.querySelector("#StaffLOV").value = "review";
            cw.document.querySelector("#StaffResponse").value = "&#9989; Reviewed";
        });
        // add subject in header
        cw.document.querySelectorAll(".SMB")[1].classList.add('d-none');
        cw.document.querySelector("td.ticketHeader font").insertAdjacentHTML("afterend", `<span class="ticketSubject d-block w-100 text-center text-dark fw-bold"><subject>${cw.document.querySelectorAll(".SMB")[1].children[1].innerText}</subject></span>`);
        // open link new tab
        cw.document.querySelector(".ticketHeader font").setAttribute(`onclick`, `window.open('//${cw.document.querySelector(".ticketHeader font").innerText.split(":")[0]}')`);
        // cancel button
        cw.document.querySelector("#form3").setAttribute("action", "");
        cw.document.querySelector("#form3").setAttribute("onsubmit", "history.back()");
        // change button style
        cw.document.querySelector("#submit1").classList.remove("SMT", "MyButton");
        cw.document.querySelector("#submit2").classList.remove("SMT", "MyButton");
        cw.document.querySelector("#submit1").classList.add("btn", "btn-primary", "mb-2", "MyButtonx_submit");
        cw.document.querySelector("#submit2").classList.add("btn", "btn-danger", "mb-2", "MyButtonx_cancel");
        // adding class in table
        cw.document.querySelector("#form1 > table").classList.add("table", "table-light", "reply-table", "overflow-hidden", "rounded-3", "p-2", "mt-3");
        // add custom css
        cw.document.querySelector(".ticketListPage").insertAdjacentHTML("beforeend", `
        <style>
            .ticketListPage{
                background:#fff;
                font-family: 'Outfit', sans-serif;
                margin-top: 50px;
            }  
            .ticketListPage td, .ticketListPage td font {
                font-family: 'Outfit', sans-serif;
                font-size: 1rem !important;
            }
            tr.SMT {display: none;}
            .ticketListPage .bodyText {display:none !important;} 
            td.ticketHeader font {
                font-size: 1.8rem !important;
                color: #fff;
                font-weight:bold;
              }
              td.ticketHeader font:hover {
                text-decoration: underline !important;
                cursor: pointer;
            }
            textarea.form-control:focus {
                padding: .375rem .75rem !important;
                margin:0 !important;
            }
              td.ticketHeader {
                background: linear-gradient(to top,#f9f9f9,#000 50%);
                text-align: center;
                padding: 0.2rem 0 !important;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            }
            .bg-purple {
                background: #722ef950 !important;
                color: #722ef9 !important;
            }  
            .bg-redx {
                background: #dc354550 !important;
                color: #dc3545 !important;
            }  
            .bg-successx {
                background: #19875450 !important;
                color: #198754 !important;
            } 
            .bg-darkx {
                background: #21252950 !important;
                color: #212529 !important;
            }         
            font[color="#0040eb"] {
                background: #0040eb20;
                padding: 10px;
                box-sizing: border-box;
                color: #0040eb;
                display: inline-block;
                position: relative;
                border-radius: 7px;
                min-width:100px;
            }
            font[color="#0040eb"]:before {
                content: "";
                position: absolute;
                border: 10px solid;
                top: -20px;
                border-color: transparent transparent #0040eb20 transparent;
                left: 60px;
            }            
            font[color="#8f2a00"] {
                background: #8f2a0020;
                padding: 10px;
                box-sizing: border-box;
                color: #8f2a00;
                display: inline-block;
                position: relative;
                border-radius: 7px;
                min-width:100px;
            }
            font[color="#8f2a00"]:before {
                content: "";
                position: absolute;
                border: 10px solid;
                top: -20px;
                border-color: transparent transparent #8f2a0020 transparent;
                left: 15px;
            }
            font:empty {display: none;}
            .hide_header, .hide_header + br, .hide_header + br + br {display: none;}    
            .ticketSubject subject {
                transform: translate(0,5px) !important;
                display: inline-block;
                border-top-right-radius: 50px;
                border-top-left-radius: 50px;
                background: #e8e8e8;
                padding-left: 2rem;
                padding-right: 2rem;
            }        
        </style>`);
        // activate loader when clicing on any links
        cw.document.querySelectorAll('.MyButton').forEach(a => {
            a.addEventListener("click", () => {
                activeLoader();
            });
        });
    }
    // if dashboard
    if (mainIframe.contentWindow.window.location.href.indexOf("page=dashboard") != -1) {
        // set title
        document.title = "Dashboard";
        // refresh page
        cw.document.head.insertAdjacentHTML("beforeend", `<meta http-equiv="refresh" content="180">`);
        // set blank page
        cw.document.body.innerHTML = ``;
        cw.document.body.innerHTML = `
        <div class="row fw-bold bg-light shadow-box rounded mb-5 p-3 mx-0">
            <div class="col-12 fs-3 mb-4">Tickets Status</div>
            <div class="row mb-3">
                <div class="col-3 me-2 p-4 text-center bg-dark text-light fs-4 rounded shadow-sm">                
                    <p>Working</p>
                    <p class="working mb-0 fs-2"><span class="text-gray">...</span></p>
                </div>
                <div class="col-3 me-2 p-4 text-center bg-primary text-light fs-4 rounded shadow-sm">
                    <p>Open</p>
                    <p class="open mb-0 fs-2"><span class="text-gray">...</span></p>
                </div>
                <div class="col-3 p-4 text-center bg-danger text-light fs-4 rounded shadow-sm">
                    <p>Review</p>
                    <p class="review mb-0 fs-2"><span class="text-gray">...</span></p>
                </div>
            </div>
        </div>
        <div class="row fw-bold bg-light shadow-box rounded p-3 mx-0">
            <div class="col-12 fs-3 mb-4">Login Status: <b class="login_status ms-2"><i class="text-gray">...</i></b></div>
        </div>
        <style>
        .shadow-box {box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;}
        .text-gray {color:#ddd !important}
        .dashboradPage {font-family: 'Outfit', sans-serif;}
        </style>`;
        // add class to body
        cw.document.body.classList.add("dashboradPage", "container-fluid", "p-4");
        // add bootstrap css
        cw.document.head.insertAdjacentHTML("beforeend", headLinks);
        // get ticket numbers
        dashboard_working.src = "bulletlink_tickets.asp?wpage=7";
        dashboard_open.src = "bulletlink_tickets.asp?wpage=1";
        dashboard_review_4.src = "bulletlink_tickets.asp?wpage=4";
        dashboard_review_5.src = "bulletlink_tickets.asp?wpage=5";
        setTimeout(() => {
            dashboard_review_6.src = "bulletlink_tickets.asp?wpage=6";
        }, 2000);
        // get login status
        login_status.src = "bulletlink_attendance.asp";
    }
    // if live tickets
    if (mainIframe.contentWindow.window.location.href.indexOf("page=live") != -1) {
        // refresh page
        cw.document.head.insertAdjacentHTML("beforeend", `<meta http-equiv="refresh" content="60">`);
        live_tickets.src = live_tickets.src;
        // set title
        document.title = "Live Tickets";
        // set blank page
        cw.document.body.innerHTML = ``;
        cw.document.body.innerHTML += `<div class="live_tickets row justify-content-center"></div>
        <style>
        body {
            font-family: 'Outfit', sans-serif;
        }
        .lt_num {
            position: absolute;
            left: 1.2rem;
            top: 50%;
            transform: translateY(-50%);;
        }
        .lt_tickets {
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
        }
        .lt_no_tickets {
            position: fixed;
            top: 50%;
            left: 50%;
            width: auto !important;
            transform: translate(-50%,-50%);
        }
        </style>`;
        // add class to body
        cw.document.body.classList.add("ticketListPage", "container-fluid", "p-4");
        // add bootstrap css
        cw.document.head.insertAdjacentHTML("beforeend", headLinks);
        // get live tickets in array
        var tickets = [];
        live_tickets.contentWindow.document.querySelectorAll(".SMB").forEach(t => {
            if (t.children[8].innerText.trim() == staff_name) {
                tickets.push(t.children[1].innerText);
            }
        });
        // show tickets
        if (tickets.length) {
            tickets.forEach((t, i) => {
                var j = i + 1;
                cw.document.querySelector(".live_tickets").insertAdjacentHTML("beforeend", `<div class="col-12 mb-3 fw-bold position-relative"><span class="lt_num bg-light text-dark p-2 rounded-pill">0${j}</span><div class="lt_tickets rounded-pill text-light p-4 bg-dark fw-bold w-100 rounded-pill" style="text-indent: 2rem;">${tickets[i]}</div></div>`);
            });
        } else {
            cw.document.querySelector(".live_tickets").insertAdjacentHTML("beforeend", `<div class="col-12 position-relative"><div class="lt_no_tickets"><p class="fw-bold"><i class="bi bi-signpost-2-fill  text-success" style="font-size:20rem"></i></p><p class="fw-bold fs-1 text-center">No Tickets for you!</p></div></div>`);
        }
    }
    // if time
    if (mainIframe.contentWindow.window.location.href.indexOf("page=time") != -1) {
        // set title
        document.title = "Time";
        // date
        var dx = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = months[dx.getMonth()];
        var date = `${dx.getDate()} ${month}, ${dx.getFullYear()}`;

        // set blank page
        cw.document.body.innerHTML = ``;
        cw.document.body.innerHTML = `<h1 class="fw-bold fs-3">${date}<span class="time_now text-success ms-2"></span></h1>
                                      <div class="time_remaining text-danger fw-bold"></div>`;
        var tx = setInterval(() => {
            if (cw.document.querySelector(".time_now")) {
                var d = new Date();
                var ap = (d.getHours() > 11) ? "PM" : "AM";
                var sec = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
                var min = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
                var hr = d.getHours() > 12 ? (d.getHours() - 12) : d.getHours();
                var time = `<b>${hr}:${min}:${sec} ${ap}</b>`;
                cw.document.querySelector(".time_now").innerHTML = time;
            }
            if (cw.document.querySelector(".time_remaining")) {
                if (document.cookie.indexOf("logout") != -1) {
                    var lg = cw.document.cookie.split("logout=").pop().split(";")[0];
                    var hx = lg.split(":")[0];
                    var mx = lg.split(":")[1];
                    var m30 = 0;
                    var n = new Date();
                    var h = n.getHours();
                    var m = n.getMinutes();
                    var s = n.getSeconds();
                    if (hx == '19' && mx == '30') {
                        hx = '20';
                        mx = '00';
                        m30 = 1;
                    }
                    if (hx < h) {
                        hx = parseInt(hx) + 23 - h;
                        hx = hx < 10 ? `0${hx}` : hx;
                    } else if (hx == h) {
                        hx = "00";
                    } else if (hx > h) {
                        hx = parseInt(hx) - h - 1;
                        hx = hx < 10 ? `0${hx}` : hx;
                    }
                    if (mx <= m) {
                        mx = parseInt(mx) + 59 - m;
                        mx = mx < 10 ? `0${mx}` : mx;
                    } else if (mx > m) {
                        mx = mx - m;
                        mx = mx < 10 ? `0${mx}` : mx;
                    }
                    var sx = 59 - s;
                    sx = sx < 10 ? `0${sx}` : sx;
                    if (m30 == 1) {
                        if (mx <= 30) {
                            hx = Math.abs(hx - 1);
                            hx = hx < 10 ? `0${hx}` : hx;
                        }
                        mx = Math.abs(mx - 30);
                        mx = mx < 10 ? `0${mx}` : mx;
                    }
                    var tx = hx + ":" + mx + ":" + sx;
                    cw.document.querySelector(".time_remaining").innerHTML = tx;
                }
            }
            if (!cw.document.querySelector(".time_now") && !cw.document.querySelector(".time_remaining")) {
                clearInterval(tx);
            }
        }, 1000);
        // add class to body
        cw.document.body.classList.add("timePage", "container-fluid", "p-4", "position-relative");
        // add bootstrap css
        cw.document.head.insertAdjacentHTML("beforeend", headLinks);
        cw.document.querySelector(".timePage").insertAdjacentHTML("afterend", `<div class="live_tickets row justify-content-center"></div>
        <style>
        body {
            font-family: 'Outfit', sans-serif;
        }
        .time_remaining {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 10rem;
        }
        .time_remaining::before {
            content: "TIME LEFT TO LOGOUT";
            font-size: 0.8rem;
            position: absolute;
            top: 28px;
            color: #fff;
            background: #dc3545;
            padding: 0 5px;
            display: inline-block;
            line-height: 25px;
        }
        </style>`);
    }
    // remove loader after iframe loads
    loader.classList.add("d-none");
    setTimeout(() => {
        mainIframe.classList.remove("invisible");
    }, 200);
    cw.document.querySelectorAll('.MyButtonx_cancel').forEach(a => {
        a.addEventListener("click", () => {
            activeLoader();
        });
    });
    cw.document.querySelectorAll('.logx').forEach(a => {
        a.addEventListener("click", () => {
            activeLoader();
        });
    });
    cw.document.querySelectorAll('.MyButtonx_submit').forEach(a => {
        a.addEventListener("click", () => {
            var x = setInterval(() => {
                if (a.value.indexOf("wait") != -1) {
                    clearInterval(x);
                    activeLoader();
                }
            }, 100);
        });
    });
}

// set class and blank body
document.head.insertAdjacentHTML("beforeend", `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
<style>
    body {font-family: 'Outfit', sans-serif !important;}
    .bg-black {background:#000}
    #mainIframe{width:100%;height:calc(100vh - 2rem);border-width:0}
    .mainbody{margin:0;padding:0}
    .sections, .buzzer-off {
        cursor:pointer;
    }
    .rounded-6 {border-radius: .6rem !important;}
    .sections.active {
        background: #fff;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }
      .sections.active i {
        color: black !important;
      }
      .sections:hover i, .buzzer-off:hover i {
        color: white;
    }
    #right {position:relative}
    #loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
    }
    .spinner-grow {
        width:1rem !important;
        height:1rem !important;
    }
    .dark {cursor:pointer;}
    .darkYes {filter:invert(1) grayscale(100%)}
    .darkYes .cf, .darkYes #left {background: #e8d2d2 !important;}
    .darkYes .dark i {color: #6f5824;}
    .darkYes #left p span {border-color: #dfc2c2 !important;}
    .col-1 {width: 5.333% !important;}
    .col-11 {width: 94.667% !important;}
    .h-0 {height:0}
    .buzzer_ticket{position:fixed;z-index:9999;background:#000;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;animation:2s infinite blink}
    @keyframes blink{from{background:#000}to{background:red}}
    .buzzer_ticket ticket{font-weight:700;font-size:4.4rem;color:#fff;text-align:center}
    .buzzer_ticket close{padding:0 3rem;line-height:3rem;margin-top:3rem;font-weight:700;font-size:1.5rem}
    .emailApplied{position:fixed;top:50%;transform:translateY(-50%);left:0;background:#212529;z-index:99;padding:10px;box-sizing:border-box;border-top-right-radius:50px;border-bottom-right-radius:50px;cursor:pointer}
    .emailApplied i{color:#f49d00!important;font-size:20px!important;transform:translate(-5px,0)}
    .login_now {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #ffc107;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    stop {
        background: #ffc107 !important;
        color: black !important;
        border-width: 2px !important;
    }
    
#popup_container {
    background: #fff;
    padding: 30px !important;
    width: 500px !important;
    max-width: 500px !important;
    text-align: center;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    box-shadow: 0 0 0 4000px rgba(0,0,0,0.5);
  }
  #popup_title {
    display: none !important;
  }
  #popup_message {
    font-weight: bold;
    font-size: 1.5rem !important;
    margin-bottom: 1.5rem;
  }
  
  #popup_ok {
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
      padding-right:1.5rem;
      padding-left:1.5rem;
      margin-right:0.5rem;
  }
  #popup_cancel {
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
  }        
    .confirm_div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        cursor: no-drop;
    }
    .confirm_inner {
        position: absolute;
        top: 50%;
        left: 50%;
        background: white;
        padding: 4rem;
        box-sizing: border-box;
        border-radius: 10px;
        transform: translate(-50%,-50%);
  }
  timer10, timer30 {
        display: none;
        background: white;
        font-weight: bold;
        padding: 0 2rem;
        font-size: 3rem;
        border-radius: 50px;
        position: absolute;
        top: 1rem;
    }
  .buzzer_ticket ticket[data-ticket*=":"] ~ timer10 {
    display: block;
  }
  .buzzer_ticket ticket[data-ticket*="System"] ~ timer30 {
    display: block;
  }
</style>
`);
document.body.classList.add("mainbody");
document.querySelector(".mainbody").innerHTML = ``;
document.head.insertAdjacentHTML("beforeend", headLinks);
document.querySelector(".mainbody").innerHTML = `
<div class="container-fluid cf bg-black py-3">
    <div class="row me-0">
        <div id="left" class="col-1 bg-black text-secondary fs-2 fw-normal text-center pe-0">
            <p class="header dark mt-3 text-light"><i class="bi bi-braces"></i></p>
            <p class="d-flex justify-content-center mb-4"><span class="border-bottom border-2 d-block w-75 border-dark" style="height:2px;">&nbsp;</span></p>
            <p class="sections py-3 mb-0 fs-5 active" title="Dahsboard" data-page="bulletlink_schedule_load.asp?page=dashboard"><i class="bi bi-house-door"></i></p>
            <p class="sections py-3 mb-0 fs-5" title="Tickets" data-page="bulletlink_tickets.asp?"><i class="bi bi-grid"></i></p>
            <p class="sections py-3 mb-0 fs-5" title="Live Tickets" data-page="bulletlink_schedule_load.asp?page=live"><i class="bi bi-eyeglasses"></i></p>
            <p class="sections py-3 mb-0 fs-5" title="Task" data-page="bulletlink_tasks.asp"><i class="bi bi-clipboard2-data"></i></p>
            <p class="sections py-3 mb-0 fs-5" title="Attendence" data-page="bulletlink_attendance.asp"><i class="bi bi-box-arrow-in-right"></i><i class="bi bi-box-arrow-in-left d-none"></i></p>
            <p class="sections py-3 mb-0 fs-5" title="Schedule" data-page="bulletlink_schedule_load.asp?page=schedule"><i class="bi bi-calendar-day"></i></p>
            <p class="sections py-3 mb-0 fs-5" title="Online Staff" data-page="bulletlink_online_staff.asp"><i class="bi bi-person-workspace"></i></p>
            <p class="sections py-3 mb-0 fs-5" title="Time" data-page="bulletlink_schedule_load.asp?page=time"><i class="bi bi-hourglass-split"></i></p>
            <p class="buzzer-off py-3 mb-0 fs-5" title="Buzzer Off"><i class="bi bi-mic-mute-fill"></i></p>
        </div>
        <div id="right" class="col-11 px-0 rounded-6 overflow-hidden bg-body"></div>
    </div>
</div>`;
document.querySelector("#right").insertAdjacentHTML("beforeend", `<div id="loader"><div role="status" class="spinner-grow text-dark me-2">
</div><div role="status" class="spinner-grow text-dark me-2"></div><div role="status" class="spinner-grow text-dark"></div></div><iframe id="mainIframe" class="invisible" src="bulletlink_schedule_load.asp?page=dashboard" onload="ticketLoaded(this)"></iframe>`);
// dark mode
document.querySelector(".dark").addEventListener("click", () => {
    document.querySelector(".mainbody").classList.toggle("darkYes");
});
// blank iframe
document.body.insertAdjacentHTML("beforeend", `<iframe id="dashboard_working" class="d-none" src="about:blank" onload="getWorking()"></iframe>`);
document.body.insertAdjacentHTML("beforeend", `<iframe id="dashboard_open" class="d-none" src="about:blank" onload="getOpen()"></iframe>`);
document.body.insertAdjacentHTML("beforeend", `<iframe id="dashboard_review_4" class="d-none" src="about:blank" onload="getReviewTickets4()"></iframe>`);
document.body.insertAdjacentHTML("beforeend", `<iframe id="dashboard_review_5" class="d-none" src="about:blank" onload="getReviewTickets5()"></iframe>`);
document.body.insertAdjacentHTML("beforeend", `<iframe id="dashboard_review_6" class="d-none" src="about:blank" onload="getReviewTickets6()"></iframe>`);
document.body.insertAdjacentHTML("beforeend", `<iframe id="get_login_time" class="d-none" src="bulletlink_attendance.asp"></iframe>`);
document.body.insertAdjacentHTML("beforeend", `<iframe id="buzzer" class="d-none" src="ticket_status.asp"></iframe>`);
document.body.insertAdjacentHTML("beforeend", `<iframe id="live_tickets" class="d-none" src="bulletlink_tickets.asp"></iframe>`);
document.body.insertAdjacentHTML("beforeend", `<iframe id="login_status" class="d-none" src="about:blank" onload="getLogin()"></iframe>`);
// get staff name and login check
document.body.insertAdjacentHTML("beforeend", `<iframe id="login_check" class="d-none" src="bulletlink_schedule_load.asp?page=schedule"></iframe>`);
setInterval(() => {
    login_check.src = login_check.src;
    setTimeout(() => {
        if (login_check.contentWindow.document.querySelector("table") == null) {
            if (!document.querySelector(".login_now")) {
                document.body.insertAdjacentHTML("beforeend", `<div class="login_now"><text class="mb-3 fs-1 fw-bold text-center">You've been logged out.<br><span class="fs-2 text-dark">Please login again.</span></text><stop class="btn btn-dark fw-bold px-5 py-2">OK</stop></div>`);
                document.querySelector("stop").addEventListener("click", () => {
                    document.querySelector(".login_now").remove();
                });
            }
        }
    }, 2000);
}, 180000);
// add iframes for email
document.body.insertAdjacentHTML("beforeend", `<iframe id="getDetails" class="d-none" src="/bulletlink_tickets.asp?"></iframe>`);
document.body.insertAdjacentHTML("beforeend", `<iframe id="mail" class="d-none" src="about:blank"></iframe>`);
// always ON
document.body.insertAdjacentHTML("beforeend", `
                <video width="400" controls autoplay muted loop class="invisible h-0">
                    <source src="https://raw.githubusercontent.com/githubbyad/tickets/main/docs/mov_bbb.mp4" type="video/mp4">
                    <source src="https://raw.githubusercontent.com/githubbyad/tickets/main/docs/mov_bbb.ogg" type="video/ogg">
                </video>`);
// buzzer off
document.querySelector(".buzzer-off").addEventListener("click", () => buzzer.src = buzzer.src);
// buzzzer refresh
function getBuzzerTickets() {
    if (buzzer.contentWindow.document.body != null) {
        return buzzer.contentWindow.document.body.innerText.trim();
    } else {
        return "No Support Ticket Found";
    }
}
setInterval(() => {
    if (getBuzzerTickets() == "No Support Ticket Found") { buzzer.src = buzzer.src; }
    // else {
    //     setTimeout(() => { buzzer.src = buzzer.src; }, 1000);
    // }
}, 15000);
// live page refresh
setInterval(() => { live_tickets.src = live_tickets.src; }, 14000);
// sections
document.querySelectorAll(".sections").forEach(s => {
    s.addEventListener("click", c => {
        activeLoader();
        document.querySelectorAll(".sections").forEach(t => t.classList.remove("active"));
        s.classList.add("active");
        mainIframe.src = s.getAttribute("data-page");
    });
});

// check for new ticket in buzzer
var buzzer_ticket = "";
var close_click = 0;
var bz_voice = "New Ticket";
var bz_ticket = "New Ticket";
setInterval(() => {
    buzzer_ticket = getBuzzerTickets();
    if (!document.querySelector(".buzzer_ticket") && buzzer_ticket != "No Support Ticket Found" && buzzer_ticket != "") {
        document.querySelector(".buzzer-off").click(); // buzzer off
        close_click = 0;
        bz_voice = buzzer_ticket; // for voice
        bz_ticket = buzzer_ticket.split("Support Ticket ")[1].split(" is Open")[0].trim();
        bz_ticket = (bz_ticket.indexOf(":") != -1) ? bz_ticket : "System Ticket";

        // popup
        if (document.querySelector(".buzzer_ticket")) {
            document.querySelector("close").click();
        }
        if (!document.querySelector(".buzzer_ticket")) {
            document.body.insertAdjacentHTML("beforeend", `<div class="buzzer_ticket"><ticket data-ticket="${bz_ticket}">${bz_ticket}</ticket><timer10 data-time="600">10:00</timer10><timer30 data-time="1800">30:00</timer30><close class="btn btn-dark">OK</close><audio class="d-none" controls autoplay loop><source src="/images/support_status.mp3" type="audio/mpeg"></audio></div>`);
            document.querySelector("close").addEventListener("click", () => {
                close_click = 1;
                if (x10) {
                    clearInterval(x10);
                }
                if (x30) {
                    clearInterval(x30);
                }
                document.querySelector(".buzzer_ticket").remove();
            });
            window.addEventListener("keypress", (e) => {
                if (e.keyCode == 13) {
                    if (document.querySelector("close")) {
                        document.querySelector("close").click();
                    }
                }
            });
            // ticket timer
            var ticket = document.querySelector(".buzzer_ticket ticket").getAttribute("data-ticket");
            // 10 minutes
            var timeElement10 = document.querySelector("timer10");
            var duration10 = timeElement10.getAttribute("data-time");
            var timer10 = duration10,
                minutes10,
                seconds10;
            if (ticket.indexOf(":") != -1) { // live ticket
                var x10 = setInterval(function() {
                    if (timeElement10 != null) {
                        minutes10 = parseInt(timer10 / 60, 10);
                        seconds10 = parseInt(timer10 % 60, 10);
                        minutes10 = minutes10 < 10 ? "0" + minutes10 : minutes10;
                        seconds10 = seconds10 < 10 ? "0" + seconds10 : seconds10;
                        timeElement10.innerText = `${minutes10}:${seconds10}`;
                        document.title = `${minutes10}:${seconds10} (${ticket})`;
                        if (--timer10 < 0) {
                            timer10 = duration10;
                        }
                        if (timeElement10.innerText == "03:00") {
                            startVoice("Adnan, please open the live Ticket. 7 Minutes has been passed.");
                        }
                        if (timeElement10.innerText == "00:00") {
                            timeElement10.innerText = "10 minutes passed. Open Ticket Now!";
                            clearInterval(x10);
                            // clear popup if ticket already replied
                            getDetails.src = getDetails.src;
                            if (ticket != document.querySelector("#getDetails").contentWindow.document.querySelector("tr.SMB").children[1].innerText.trim()) {
                                if (document.querySelector("close")) {
                                    document.querySelector("close").click();
                                }
                            }
                        }
                    } else {
                        clearInterval(x10);
                    }
                }, 1000);
            } else if (ticket.indexOf("System") != -1) { // system ticket
                // 30 minutes
                var timeElement30 = document.querySelector("timer30");
                var duration30 = timeElement30.getAttribute("data-time");
                var timer30 = duration30,
                    minutes30,
                    seconds30;
                var x30 = setInterval(function() {
                    if (timeElement30 != null) {
                        minutes30 = parseInt(timer30 / 60, 10);
                        seconds30 = parseInt(timer30 % 60, 10);
                        minutes30 = minutes30 < 10 ? "0" + minutes30 : minutes30;
                        seconds30 = seconds30 < 10 ? "0" + seconds30 : seconds30;
                        timeElement30.innerText = minutes30 + ":" + seconds30;
                        document.title = `${minutes30}:${seconds30} (System Ticket)`;
                        if (--timer30 < 0) {
                            timer30 = duration30;
                        }
                        if (timeElement30.innerText == "05:00") {
                            startVoice("Adnan, please open the System Ticket. 25 Minutes has been passed.");
                        }
                        if (timeElement30.innerText == "00:00") {
                            timeElement30.innerText = "30 minutes passed. Open Ticket Now!";
                            clearInterval(x30);
                            // clear popup if ticket already replied
                            getDetails.src = getDetails.src;
                            if (ticket != document.querySelector("#getDetails").contentWindow.document.querySelector("tr.SMB").children[1].innerText.trim()) {
                                if (document.querySelector("close")) {
                                    document.querySelector("close").click();
                                }
                            }
                        }
                    } else {
                        clearInterval(x30);
                    }
                }, 1000);
            }
        }
        // /popup

        // get details of new ticket
        getDetails.src = getDetails.src;
        var gd = document.querySelector("#getDetails").contentWindow;
        setTimeout(() => {
            var subject = gd.document.querySelector("tr.SMB").children[4].innerText.trim();
            var status = gd.document.querySelector("tr.SMB").children[6].innerText.trim();
            var by = gd.document.querySelector("tr.SMB").children[7].innerText.trim();
            var staff = gd.document.querySelector("tr.SMB").children[8].innerText.trim();
            var time = gd.document.querySelector("tr.SMB").children[10].innerText.trim();
            if (bz_ticket == gd.document.querySelector("tr.SMB").children[1].innerText.trim()) {
                if (by == "") {
                    by = "New Ticket";
                } else if (by == staff) {
                    by = "Running Ticket";
                } else if (by == "System") {
                    by = "System Ticket";
                } else if (time.indexOf("Sec") != -1 || time == "1 Min") {
                    by = "Running Ticket of " + by;
                } else {
                    by = "Forstaff Ticket by " + by;
                }
                bz_voice = `${staff}, you have a ${by}.`;
            } else if (bz_ticket == "System Ticket") {
                bz_voice = `System Ticket to ${staff}`;
            } else {
                if (document.querySelector("close")) {
                    document.querySelector("close").click();
                }
            }
            // start Voice after 5 seconds & send email
            setTimeout(() => {
                if (close_click == 0) {
                    close_click = 1;
                    if (staff == staff_name) {
                        if (document.querySelector(".buzzer_ticket audio")) { // custom buzzer off
                            document.querySelector(".buzzer_ticket audio").remove();
                        }
                        sendMail(bz_ticket, staff, status, subject, by, time);
                        startVoice(bz_voice);
                    } else { // if other staff tickets then close buzzer and remove alert box
                        if (document.querySelector(".buzzer_ticket audio")) { // custom buzzer off
                            document.querySelector(".buzzer_ticket audio").remove();
                        }
                        if (document.querySelector("close")) {
                            document.querySelector("close").click();
                        }
                    }
                }
            }, 5000);
        }, 5000);

    }
}, 500);
// confirm process
document.body.insertAdjacentHTML("beforeend", `
    <div class="confirm_div">
        <div class="confirm_inner">
            <p><b>&#10150;</b> Activate <b class="text-danger">Localhost</b> form email.</p>
            <p><b>&#10150;</b> Choose your <b class="text-danger">Shift</b> Time from below:</p>
            <div class="w-100 text-center">
                <span class="btn btn-dark fw-bold me-2 logout" data-start-time="03:00" data-time="11:00">3 AM to 11 AM</span>
                <span class="btn btn-primary fw-bold me-2 logout" data-start-time="11:00" data-time="19:30">11 AM to 7:30 PM</span>
                <span class="btn btn-warning fw-bold me-2 logout" data-start-time="19:30" data-time="3:00">7:30 PM to 3 AM</span><br>
                <span class="btn btn-secondary fw-bold skip mt-3 px-4" style="border: 2px dotted #202122;"> skip </span>
            </div>
        </div>
    </div>`);
document.querySelector(".skip").addEventListener("click", () => {
    document.querySelector(".confirm_div").classList.add("d-none");
    document.querySelector(`.sections[title="Time"]`).classList.add("d-none");
    document.querySelector(`.sections[title="Attendence"]`).classList.add("d-none");
    document.querySelector(`.buzzer-off[title="Buzzer Off"]`).classList.add("d-none");
});
document.querySelectorAll(".logout").forEach(l => {
    l.addEventListener("click", () => {
        document.cookie = `login=${l.getAttribute("data-start-time")}`;
        document.cookie = `logout=${l.getAttribute("data-time")}`;
        document.querySelector(".confirm_div").classList.add("d-none");
    });
});
