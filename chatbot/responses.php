<?php
include "config.php";
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bulletlink Responses</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <style>
        a[title*="000webhost"] {
        	display: none !important;
        }
    </style>
</head>

<body class="bg-primary">
    <div class="container-fluid my-4">
        <div class="row mx-0">
            <div class="col-12 pb-4 px-lg-5 bg-light rounded">
                <h1 class="fw-bold text-center my-3 border-bottom border-primary border-2 pb-2 text-primary">BL Chatbot - Responses</h1>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="searchData" placeholder="Search Data">
                    <label for="floatingInput"><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-search' viewBox='0 0 16 16'>
                            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                        </svg> Search Responses</label>
                </div>
                <p class="text-end"><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#InsertModal">Add New</button></p>
                <div class="alert alert-danger error-message d-none"></div>
                <div class="alert alert-success success-message d-none"></div>
                <table class="table table-primary table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col" class="bg-primary text-light">Subject</th>
                            <th scope="col" class="bg-primary text-light">Question</th>
                            <th scope="col" class="bg-primary text-light">Status</th>
                            <th scope="col" class="bg-primary text-light" style="width:140px;text-align:center">Action</th>
                        </tr>
                    </thead>
                    <tbody id="loadData"></tbody>
                </table>
                <p class="text-center pages py-lg-3"></p>
            </div>
        </div>
    </div>


    <!-- Insert Modal -->
    <div class="modal fade" id="InsertModal" tabindex="-1" aria-labelledby="InsertModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="InsertModalLabel">Add New</h1>
                    <button type="button" class="btn-close insert-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="addResponse">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Question</label>
                            <input type="text" class="form-control" id="question" placeholder="Question">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Pattern</label>                            
                            <textarea name="body" class="form-control" id="pattern" cols="30" rows="3" placeholder="Pattern"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Body</label>
                            <textarea name="body" class="form-control" id="body" cols="30" rows="5" placeholder="Body"></textarea>
                        </div>
                        <div class="mb-3 form-select">
                            <select name="active" id="active" class="form-control">
                                <option value="Yes" selected>Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <p class="text-center"><button type="submit" id="insert_data" class="btn btn-primary w-50">Submit</button></p>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="EditModal" tabindex="-1" aria-labelledby="EditModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="EditModalLabel">Edit Data</h1>
                    <button type="button" class="btn-close edit-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="updateResponse">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="edit_subject" placeholder="Subject">
                            <input type="hidden" class="form-control" id="edit_id">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Question</label>
                            <input type="text" class="form-control" id="edit_question" placeholder="Question">                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Pattern</label>                                 
                            <textarea name="body" class="form-control" id="edit_pattern" cols="30" rows="3" placeholder="Pattern"></textarea>                       
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Body</label>
                            <textarea name="body" class="form-control" id="edit_body" cols="30" rows="5" placeholder="Body"></textarea>
                        </div>
                        <div class="mb-3 form-select">
                            <select name="edit_active" id="edit_active" class="form-control">
                                <option value="Yes" selected>Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <p class="text-center"><button type="submit" id="update_data" class="btn btn-primary w-50">Submit</button></p>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="fetch.js"></script>
</body>

</html>