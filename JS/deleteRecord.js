function showLoadingMessage() {
    // Dynamically add the CSS link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'icompress.css';
    document.head.appendChild(link);

    // Hide body
    const myForm = document.querySelector(".my-form");
    if (myForm) {
        myForm.style.display = "none";
    }

    // Create and insert loading container
    const loadingHTML = `
            <div id="container-css">
                <div class="loader--container">
                    <div class="loader--dot"></div>
                    <div class="loader--dot"></div>
                    <div class="loader--dot"></div>
                    <div class="loader--dot"></div>
                    <div class="loader--dot"></div>
                    <div class="loader--dot"></div>                        
                    <div class="loader--text"></div>
                </div>
            </div>
        `;
    document.body.insertAdjacentHTML('beforeend', loadingHTML);
}

function confirmdelete(msg, ctl) {
    jConfirm2(msg, 'Delete', function (r) {
        if (r) {
            showLoadingMessage(); // Show loading message
            window.location = ctl.href;
        }
    });
    return false;
}
