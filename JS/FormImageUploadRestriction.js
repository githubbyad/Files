document.getElementById("Image").onchange = evt => {
    var re = /(?:\.([^.]+))?$/;
    var y = 0;
    const vf = ["gif", "jpg", "jpeg", "png"];
    var ext = re.exec(document.getElementById('Image').value)[1].toLowerCase();
    for (v = 0; v < vf.length; v++) {
        if (ext == vf[v]) {
            y = 1;
        }
    }
    if (y == 1) {
        const [file] = document.getElementById("Image").files;
        if (file) {
            // Image - Browse_prvx.src = URL.createObjectURL(file);
            var fileUpload = document.getElementById("Image");
            if (typeof(fileUpload.files) != "undefined") {
                var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);
                if (size > 100) {
                    document.getElementById("Image").value = "";
                    alert("Error: Image – Upload an image no more than 2MB in size");
                }
            }
        }

    }
    if (y == 0) {
        document.getElementById("Image").value = "";
        alert("Error: Image – Only JPG, PNG & GIF files are allowed.");
    }
}
