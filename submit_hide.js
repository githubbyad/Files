// prevent submit article before 28
if (window.location.href.includes('&pform=pages&pkeyname=sys_information_id')) {
    if (document.querySelector('#issue_date')) {
        let issue = document.querySelector('#issue_date').value;
        let form = document.querySelector(".my-form");
        let issueDate = new Date(issue); 
        let stopDate = new Date("2024-03-28"); 
        if (issueDate <= stopDate) {
            console.log("Form submission prevented!");
            form.addEventListener("submit", function (event) {
                event.preventDefault();
            });
        }
    }
}
