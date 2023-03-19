// Load Data
function loadTable(page = 1) {
    fetch("load-responses.php?page=" + page)
        .then(result => result.json())
        .then(data => {
            var output = "";
            for (var i in data) {
                output += `<tr>
                <td class="fw-bold">${data[i].subject}</td>
                <td>${data[i].question}</td>
                <td>${data[i].active}</td>
                <td style='width:140px;text-align:center'>
                    <button type="button" class="btn btn-dark me-2" data-bs-toggle="modal" data-bs-target="#EditModal" onclick="edit_form(${data[i].id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button>
                    <button type="button" class="btn btn-danger" onclick="delete_data(${data[i].id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></button>
                </td>
            </tr>`;
            }
            document.querySelector("#loadData").innerHTML = output;
        })
        .catch(e => console.log("Load Error"));
}
loadTable();

// pagination
function pageActive() {
    document.querySelectorAll(".page-item").forEach(p => {
      p.addEventListener("click", x => {
        document.querySelector(".table").scrollIntoView();
        document.querySelectorAll(".page-item").forEach(r => {
          r.classList.remove("active");
        });
        p.classList.add("active");
      })
    });
}
function pagination(){
    fetch("pagination.php")
    .then(res => res.json())
    .then(data => {
        var output = `<ul class="pagination justify-content-center"><li class="page-item active" data-page="1" onclick="loadTable(1)"><a class="page-link" href="javascript:void(0)">1</a></li>`;
        for(var i = 2; i <= data.pages; i++) {
            output += `<li class="page-item" data-page="${i}" onclick="loadTable(${i})"><a class="page-link" href="javascript:void(0)">${i}</a></li>`;
        }
        output += `</ul>`;
        document.querySelector(".pages").innerHTML = output;
        pageActive();
    })
    .catch(e => console.log("Pagination Error"));
}
pagination();

// Show Insert Form
function show_insert() {
    document.querySelector("#addResponse").classList.remove("d-none");
}

// Insert data
document.querySelector("#insert_data").addEventListener("click", e => {
    e.preventDefault();
    // get form values
    var f_subject = document.querySelector("#subject").value;
    var f_question = document.querySelector("#question").value;
    var f_pattern = document.querySelector("#pattern").value;
    var f_body = document.querySelector("#body").value;
    var f_active = document.querySelector("#active").value;

    // create object
    var obj = {
        pattern: f_pattern,
        subject: f_subject,
        question: f_question,
        body: f_body,
        active: f_active
    }
    var jsonData = JSON.stringify(obj);
    fetch("insert-response.php", {
            method: "POST",
            body: jsonData,
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.insert == "success") {
                document.querySelector(".insert-close").click();
                document.querySelector("#addResponse").reset();
                loadTable();
                show_message(data.insert, data.message);
            } else if (data.insert == "error") {
                document.querySelector(".insert-close").click();
                show_message(data.insert, data.message);
            }
        })
        .catch(error => {
            show_message("error", error);
            document.querySelector(".insert-close").click();
        });

});

// Update data
document.querySelector("#update_data").addEventListener("click", e => {
    e.preventDefault();
    // get form values
    var f_id = document.querySelector("#edit_id").value;
    var f_subject = document.querySelector("#edit_subject").value;
    var f_question = document.querySelector("#edit_question").value;
    var f_pattern = document.querySelector("#edit_pattern").value;
    var f_body = document.querySelector("#edit_body").value;
    var f_active = document.querySelector("#edit_active").value;

    // create object
    var obj = {
        id: f_id,
        pattern: f_pattern,
        subject: f_subject,
        question: f_question,
        body: f_body,
        active: f_active
    }
    var jsonData = JSON.stringify(obj);
    fetch("update-response.php", {
            method: "POST",
            mode:"no-cors",
            body: jsonData,
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.update == "success") {
                document.querySelector(".edit-close").click();
                document.querySelector("#updateResponse").reset();
                loadTable();
                show_message(data.update, data.message);
            } else if (data.update == "error") {
                document.querySelector(".edit-close").click();
                show_message(data.update, data.message);
            }
        })
        .catch(error => {
            show_message("error", error);
            document.querySelector(".edit-close").click();
        });

});
// show message
function show_message(e, m) {
    var success = document.querySelector(".success-message");
    var error = document.querySelector(".error-message");
    if (e == "error") {
        error.innerHTML = m;
        error.classList.remove('d-none');
        success.classList.add('d-none');
    } else {
        success.innerHTML = m;
        success.classList.remove('d-none');
        error.classList.add('d-none');
    }
    setTimeout(() => {
        success.classList.add('d-none');
        error.classList.add('d-none');
    }, 3000);
}

// Edit Form
function edit_form(id) {
    fetch("get-response.php?id=" + id)
        .then(res => res.json())
        .then(data => {
            document.querySelector("#edit_id").value = data.id;
            document.querySelector("#edit_subject").value = data.subject;
            document.querySelector("#edit_question").value = data.question;
            document.querySelector("#edit_pattern").value = data.pattern;
            document.querySelector("#edit_body").value = data.body;
            document.querySelector("#edit_active").value = data.active;
        })
        .catch(error => {
            document.querySelector(".edit-close").click();
            show_message("error", error);
        })
}

// delete data
function delete_data(id) {
    if (confirm("Do you want to delete this data?")) {
        fetch("delete-resoonse.php?id=" + id)
            .then(res => res.json())
            .then(data => {
                if (data.delete == "success") {
                    show_message(data.insert, data.message);
                    loadTable();
                } else if (data.insert == "error") {
                    show_message(data.insert, data.message);
                }
            })
            .catch(error => {
                show_message("error", error);
            })
    }
}

// search data
document.querySelector("#searchData").addEventListener("keyup", e => {
    var search = document.querySelector("#searchData").value;
    if(search != "") {
        document.querySelector(".pages").classList.add('d-none');
        fetch("search-response.php?search=" + search)
            .then(res => res.json())
            .then(data => {
                if (data.search == "empty") {
                    document.querySelector("#loadData").innerHTML = `<tr>
                    <th colspan='5' style='text-align:center;color:red;'>No Data Found</th>
                </tr>`;
                } else {
                    var output = "";
                    for (var i in data) {
                        output += `<tr>
                    <td class="fw-bold">${data[i].subject}</td>
                    <td>${data[i].question}</td>
                    <td>${data[i].active}</td>
                    <td style='width:140px;text-align:center'>
                        <button type="button" class="btn btn-dark me-2" data-bs-toggle="modal" data-bs-target="#EditModal" onclick="edit_form(${data[i].id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button>
                        <button type="button" class="btn btn-danger" onclick="delete_data(${data[i].id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></button>
                    </td>
                </tr>`;
                    }
                    document.querySelector("#loadData").innerHTML = output;
                }
            })
            .catch(err => show_message("error", err));
        } else {
           document.querySelector(".pages").classList.remove('d-none'); 
        }
});