<section class="w-96 mb-3" style="margin-left:2%" data-bs-toggle="tooltip" data-bs-placement="auto" title="{{FieldHelpB}}">
    <div class="input input-file w-100 form-floating">
        <input type="file" id="{{FieldName}}" class="form-control" name="{{FieldName}}" accept="image/*" {{FieldRequiredBrowser}}>
        <label for="{{FieldName}}" class="form-label text-muted">{{FieldRequired}} Upload {{FieldCaption}}</label>
        <div id="{{FieldName}}-prv-div" class="input-file-preview mt-2 w-100">
            <img id="{{FieldName}}_prvx" src="#" alt="" onclick="window.open(this.src, '_blank');" />
            <span id="{{FieldName}}_sizex" class="text-muted" style="font-size: 0.875rem !important"></span>
        </div>
    </div>
    <script>
        document.addEventListener("readystatechange", event => { 
            if (event.target.readyState === "complete") {
                document.getElementById("{{FieldName}}").onchange = evt => {
                    var re = /(?:\.([^.]+))?$/;
                    var y = 0;
                    const vf = ["gif", "jpg", "jpeg", "png"];
                    var ext = re.exec(document.getElementById('{{FieldName}}').value)[1].toLowerCase();
                    for (v = 0; v < vf.length; v++) {
                        if (ext == vf[v]) {
                            y = 1;
                        }
                    }
                    if (y == 1) {
                        const [file] = document.getElementById("{{FieldName}}").files;
                        if (file) {                                                    
                            var fileUpload = document.getElementById("{{FieldName}}");
                            var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);
                            var asize = fileUpload.files[0].size;
                            var usize = document.getElementById("uploadfilesize").value;
                            if (typeof(fileUpload.files) != "undefined") {       
                                if (asize > usize) {
                                    document.getElementById('{{FieldName}}-prv-div').style.display = "none";
                                    document.getElementById("{{FieldName}}_prvx").src =""; 
                                    document.getElementById("{{FieldName}}").value = "";
                                    alert("<br><svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='#dc3545' class='bi bi-exclamation-triangle-fill pe-2' viewBox='0 0 16 16'>   <path d='M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'/></svg>File size must not exceed <b>" + bytesToSize(usize) + "</b>");
                                }
                                else {      
                                    document.getElementById('{{FieldName}}-prv-div').style.display = "block";
                                    document.getElementById("{{FieldName}}_prvx").src = URL.createObjectURL(file);                                           
                                    document.getElementById('{{FieldName}}_sizex').innerHTML = "[File Size: " + size + " KB]";
                                }
                            }                                                    
                        }
                    } else {
                        document.getElementById('{{FieldName}}').value = ""
                        document.getElementById("{{FieldName}}_prvx").src =""; 
                        document.getElementById('{{FieldName}}-prv-div').style.display = "none";
                        alert('Invalid file type: <b style="color:red;">' + ext + '</b><br><br>Valid files: <b>gif, jpg, jpeg, png</b>')
                    }
                }
            }
        });                            
    </script>
</section>
