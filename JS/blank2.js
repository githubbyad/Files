<script>
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "interactive") {
            if (window.location.href.includes('&pform=pages&pkeyname=sys_information_id') && !window.location.href.includes('&pkey=&')) {
                if (document.querySelector('#issue_date')) {
                    let issue = document.querySelector('#issue_date').value;
                    let body = document.querySelector('#body').value;
                    let form = document.querySelector(".my-form");
                    let issueDate = new Date(issue);
                    let stopDate = new Date("2024-03-28");
                    let art_url = window.location.href.replace("/form2.","/view_file.");
                    if (body == "") {
                        if (issueDate <= stopDate) {  
                            //form.setAttribute('onsubmit', '');                          
                            form.addEventListener("submit", function (event) {
                                if (!window.location.href.includes('&subx=Y')) {
                                    //event.preventDefault();
                                    alert(`The Article body is currently blank. <br><br>To proceed, please click on the "View Article" link below, then copy the content of the article body and paste it into the designated "Body" field.<br><br> <a href="${art_url}" target="_blank" style="text-decoration: underline !important;">View Article</a><br><br>`);
                                }
                            });
                        }
                    }
                }
            }
        }
    });
</script>
