var arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle-fill me-2 mb-1" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>`;
arrow="";
var you = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#777" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>`;
var arrow_double = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right mt-1 me-2 position-absolute start-0" style="transform: translateY(2px);" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/><path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/></svg>`;
arrow_double = "";
var bot = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#777" class="bi bi-robot" viewBox="0 0 16 16"><path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"></path><path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"></path></svg>`;

// check for LocalStorage
if(localStorage.getItem('viewData')) {
    document.querySelector("#loadData").innerHTML = "";
    document.querySelector("#search_box").classList.remove("suggestions");
    document.querySelector(".viewData").classList.remove("d-none");
    document.querySelector(".viewData").innerHTML = localStorage.getItem('viewData');
    window.scrollTo({top:document.body.scrollHeight, left:0, behavior: "instant"});
}

// get localStorage size
function getLocalStorage() {
    var _lsTotal = 0,
    _xLen, _x;
    for (_x in localStorage) {
        if (!localStorage.hasOwnProperty(_x)) {
            continue;
        }
        _xLen = ((localStorage[_x].length + _x.length) * 2);
        _lsTotal += _xLen;
        //console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
    }
    //console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
    var ls = (_lsTotal / 1024).toFixed(2);
    return ls;
}
    
// typeWriter
var t = 0;
var txt = 'BL Chatbot';
var speed = 200;
function typeWriter() {
    if(document.querySelector(".chatLoaderText")) {
        if (t < txt.length) {
            document.querySelector(".chatLoaderText").innerHTML += txt.charAt(t);
            t++;
            setTimeout(typeWriter, speed);
          }
    }
}
setTimeout(() => {
  typeWriter();
},500);

// loader
setTimeout(() => {
  document.querySelector(".chatLoader").classList.add("chatHide");
},3000);
setTimeout(() => {
  document.querySelector(".chatLoader").classList.add("d-none");
},3500);
setTimeout(() => {
  document.querySelector(".mainbody").classList.remove("invisible");
},3500);
setTimeout(() => {
  document.querySelector(".mainbody").classList.add("mainbodyShow");
},3550);
// focus search field to clear responses
searchData.addEventListener("focus", () => {
    document.querySelector("#search_box").classList.remove("formShadow");
});

// clear boxes
document.querySelector(".close_boxes svg").addEventListener("click", () => {
  document.querySelector("#searchData").value = "";
  document.querySelector("#loadData").innerHTML = "";
  document.querySelector("#search_box").classList.remove("suggestions");
  document.querySelector(".close_boxes").classList.add("d-none");
});

// show error message
function show_message(e, m) {
    var success = document.querySelector(".success-message");
    var error = document.querySelector(".error-message");
    if (e == "error") {
        document.querySelector(".refresh-message").classList.remove('d-none');
        error.innerHTML = m;
        //error.classList.remove('d-none');
        success.classList.add('d-none');
    } else {
        success.innerHTML = m;
        //success.classList.remove('d-none');
        error.classList.add('d-none');
    }
    setTimeout(() => {
        success.classList.add('d-none');
        error.classList.add('d-none');
    }, 3000);
}

function showbody(id) {
    document.querySelector(".close_boxes").classList.add("d-none");
    document.querySelector("#search_box").classList.add("formShadow");
    document.querySelector("#searchData").blur(); // remove focus
    var subject = document.querySelector(`.search_subject[data-id='${id}']`).innerHTML;
    var body = document.querySelector(`.search_body[data-id='${id}']`).innerHTML;
    var chat = `<div class="col-12 newChat loadChat">
                    <p class="viewSubject w-100 text-light d-block py-2 text-end float-end mb-0"><span class="user_chat p-3 mt-4 float-end position-relative">${subject}${you}</span></p>
                    <p class="viewBody w-100 py-2 d-block text-dark float-start mb-0"><span class="bot_chat float-start p-3 mt-4 position-relative">${body}${bot}</span></p>
                </div>`;
    document.querySelector(".viewData").innerHTML += chat;
    document.querySelector("#searchData").value = "";
    document.querySelector("#loadData").innerHTML = "";
    document.querySelector("#search_box").classList.remove("suggestions");
    document.querySelector(".viewData").classList.remove("d-none");
    document.querySelector(".newChat:last-child").scrollIntoView();
    if(window.screen.width < 900) { // mobile scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
    }
    setTimeout(() => {
        if(document.querySelector(".loadChat")) {
            document.querySelector(".loadChat").classList.remove("loadChat");
            // if localStorage limit exceeds 1MB
            if(getLocalStorage() > 1000) {
                localStorage.clear(); // clear localStorage
            } else {
                localStorage.setItem("viewData", document.querySelector(".viewData").innerHTML); // save to localStorage
            }
        }
    },300);
}

// search data
document.querySelector("#searchData").value = "";
document.querySelector("#searchData").addEventListener("keyup", e => {
    if(!document.querySelector("#loadData").classList.contains("p-3")) {
      document.querySelector("#loadData").classList.add("p-3", "pb-4");
    }   
    document.querySelector("#search_box").classList.add("suggestions");
    document.querySelector("#search_box").classList.remove("formShadow");
    var search = document.querySelector("#searchData").value;
    search = search.trim();
    if (search != "") {
        fetch("search-response.php?search=" + search)
            .then(res => res.json())
            .then(data => {
                if (data.search == "empty") {
                    document.querySelector("#loadData").innerHTML = `<tr>
                <th colspan='5' class='text-center'>                    
                    <p class='notResult text-dark my-3 fw-bold'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="20" height="20" class="bi bi-exclamation-circle-fill text-secondary me-2 mb-1"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>Sorry, I didn't understand that. Could you please try rephrasing your search request?</p>
                </th>
            </tr>`;
                } else {
                    var output = "";
                    for (var i in data) {
                        output += `<span class="search_id border border-1 border-light p-2 mb-1 rounded-3 d-inline-block" style="transform: scale(0.95);" onclick="showbody(${data[i].id})">
                                        <p class="search_subject mb-0 text-light position-relative lh-sm" data-id="${data[i].id}"><span class="subjectSpan">${arrow_double}${data[i].subject}</span></p>
                                        <p class="search_questionx mb-0 ps-0 lh-sm" style="color:#555">${data[i].question}</p>
                                        <div class="search_body mb-0 d-none" data-id="${data[i].id}">${data[i].body}</div>
                                    </span>`;
                    }
                    document.querySelector("#loadData").innerHTML = "<p class='searchMeans pt-0'>Did you mean one of the following?</p>" + output;
                    if(document.querySelector("#loadData").childElementCount == 3) {
                        document.querySelector("#loadData").children[1].classList.add("col-lg-6");
                        document.querySelector("#loadData").children[2].classList.add("col-lg-6");
                    } else if(document.querySelector("#loadData").childElementCount == 2) {
                        document.querySelector("#loadData").children[0].classList.add("d-none");
                        document.querySelector("#loadData").children[1].classList.add("col-lg-12");
                    }
                }
            })
            .catch(err => {
                show_message("error", err);
            })
        document.querySelector(".close_boxes").classList.remove("d-none");
    } else if(search == "") {
        document.querySelector("#loadData").innerHTML = "";
        document.querySelector(".close_boxes").classList.add("d-none");
        document.querySelector("#search_box").classList.remove("suggestions");
    }else {
        document.querySelector("#loadData").innerHTML = "";
        document.querySelector(".close_boxes").classList.add("d-none"); 
        document.querySelector("#search_box").classList.remove("suggestions");
    }
});

// scroll bottom for mobile on load
document.querySelector(".chatbot-container").scrollTo(0,document.querySelector(".chatbot_list").scrollHeight);
// scroll to bottom
// if (document.querySelector(".scrollDownx")) {
//     var chatScreen = document.querySelector(".chatbot_list");
//     var bott = chatScreen.scrollHeight - 650;
//     console.log(bott);
//     chatScreen.addEventListener("scroll", () => {
//         bott = document.body.scrollHeight - 650;
//         console.log(`CScreeb: ${bott} Top ${chatScreen.scrollTop}`);
//         if (chatScreen.scrollTop < bott) {
//             document.querySelector(".scrollDownx").classList.remove("d-none");
//         } else {
//             document.querySelector(".scrollDownx").classList.add("d-none");
//         }
//     });
//     document.querySelector('.scrollDownx').addEventListener('click', () => {
//         window.scrollTo(0, document.body.scrollHeight);
//     });
// }