function alert(msg, ctl) {
    if (!document.getElementById('f_alert_button')) {
        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<button id='f_alert_button' type='button' data-bs-toggle='modal' data-bs-target='#f_alert' style='display:none;'></button><div class='f_alert_box modal fade' id='f_alert' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_alertLabel' aria-hidden='true'><div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'><div class='modal-content'><div class='modal-header' style='display:none'><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body text-center' style='white-space: pre-wrap;'>" + msg + "</div><div class='modal-footer d-flex justify-content-center border-0'><button type='button' class='f_alert_close btn btn-dark py-2 px-4' data-bs-dismiss='modal'>OK</button></div></div></div><style>@media (min-width:576px){.modal-dialog{max-width:400px}}</style></div>");
        document.getElementById('f_alert_button').click();
        document.getElementsByClassName('f_alert_close')[0].addEventListener('click', function () {
            document.getElementById('f_alert_button').remove();
            document.getElementsByClassName('f_alert_box')[0].remove();
            if (ctl) {
                ctl.focus();
            }
        });
    }
}

function confirmdelete(msg, id) {
    if (!document.getElementById('f_confirm_delete_button')) {
        document.getElementsByTagName("body")[0].insertAdjacentHTML(`beforeend`, `
            <button id='f_confirm_delete_button' type='button' data-bs-toggle='modal' data-bs-target='#f_confirm_delete' style='display:none;'></button>
            <div class='f_confirm_delete_box modal fade' id='f_confirm_delete' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_confirm_deleteLabel' aria-hidden='true'>
                <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                    <div class='modal-content'>
                        <div class='modal-header' style='display:none'>
                            <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div class='modal-body text-center' style='white-space: pre-wrap;'>${msg}</div>
                        <div class='modal-footer d-flex justify-content-center border-0'>
                            <button type='button' class='f_confirm_delete_yes btn btn-danger me-3 py-2 px-4' data-bs-dismiss='modal'>Delete</button>
                            <button type='button' class='f_confirm_delete_close btn btn-dark py-2 px-4' data-bs-dismiss='modal'>Cancel</button>
                        </div>
                    </div>
                </div>
                <style>@media (min-width:576px){.modal-dialog{max-width:400px}}</style>
            </div>
        `);
        document.getElementById('f_confirm_delete_button').click();
        document.getElementsByClassName('f_confirm_delete_close')[0].addEventListener('click', function () {
            document.getElementById('f_confirm_delete_button').remove();
            document.getElementsByClassName('f_confirm_delete_box')[0].remove();
        });
        document.getElementsByClassName('f_confirm_delete_yes')[0].addEventListener('click', function () {
            document.getElementById('f_confirm_delete_button').remove();
            document.getElementsByClassName('f_confirm_delete_box')[0].remove();
            deleteConfirmed(id);
        });
    }
    return false;
}

const addClass = (e, c) => {
    document.querySelector(`.${e}`) && document.querySelectorAll(`.${e}`).forEach(n => n.classList.add(c));
}
const removeClass = (e, c) => {
    document.querySelector(`.${e}`) && document.querySelectorAll(`.${e}`).forEach(n => n.classList.remove(c));
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
        let rate = 1,
            pitch = 0.1,
            volume = 1;
        speak(text, voices[1], rate, pitch, volume);
    } else {
        console.log('Speech Synthesis Not Supported');
    }
}


function confirmnew(msg, url) {
    if (!document.getElementById('f_confirm_delete_button')) {
        document.getElementsByTagName("body")[0].insertAdjacentHTML(`beforeend`, `
            <button id='f_confirm_delete_button' type='button' data-bs-toggle='modal' data-bs-target='#f_confirm_delete' style='display:none;'></button>
            <div class='f_confirm_delete_box modal fade' id='f_confirm_delete' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_confirm_deleteLabel' aria-hidden='true'>
                <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                    <div class='modal-content'>
                        <div class='modal-header' style='display:none'>
                            <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <p class="text-center my-3 mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#04aa6d" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg></p>
                        <div class='modal-body text-center'>
                            <p class="mb-1">Thank you!</p>
                            <p class="mb-1">${msg}</p>
                            <p class="fw-bold mb-0">${document.querySelector('.totalAmountAll').closest('p').innerHTML}</p>
                        </div>
                        <div class='modal-footer d-flex justify-content-center border-0'>
                            <button type='button' class='f_confirm_delete_yes btn btn-outline-primary me-3 py-2 px-4' data-bs-dismiss='modal'>New Order</button>
                            <button type='button' class='f_confirm_delete_close btn btn-outline-danger py-2 px-4' data-bs-dismiss='modal'>Edit</button>
                        </div>
                    </div>
                </div>
                <style>@media (min-width:576px){.modal-dialog{max-width:400px}}</style>
            </div>
        `);
        document.getElementById('f_confirm_delete_button').click();
        document.getElementsByClassName('f_confirm_delete_close')[0].addEventListener('click', function () {
            document.getElementById('f_confirm_delete_button').remove();
            document.getElementsByClassName('f_confirm_delete_box')[0].remove();
        });
        document.getElementsByClassName('f_confirm_delete_yes')[0].addEventListener('click', function () {
            document.getElementById('f_confirm_delete_button').remove();
            document.getElementsByClassName('f_confirm_delete_box')[0].remove();
            window.location.href = url;            
        });
    }
    return false;
}

function localNumber(number) {
    return number.toLocaleString();
}