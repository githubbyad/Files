// Function to render the PDF in a specific container
function renderPdf(url, container) {
    loadPdfJs(function () {
        var pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf.worker.min.js';

        var loadingTask = pdfjsLib.getDocument(url);
        loadingTask.promise.then(function (pdf) {
            //console.log('PDF loaded');

            container.innerHTML = ''; // Clear any previous content

            // Default parent width
            var parent_width = "300px";

            // Check for the .hpe-article-detail element and set its width
            var articleDetailElement = document.querySelector(".hpe-article-detail");
            if (articleDetailElement) {
                parent_width = articleDetailElement.offsetWidth + "px";
            }

            // Check for the container and its data-width attribute
            var pdf_width = parent_width;
            var dataWidth = container.getAttribute('size')?.trim();
            if (dataWidth && dataWidth !== 'full') {
                pdf_width = dataWidth + 'px';
            }

            // Add styles dynamically
            var style = document.createElement('style');
            style.textContent = `
                        div[pdf] {
                            width: ${pdf_width};
                            border: 1px solid #ccc;
                            margin-bottom: 10px;
                            &[align="center"] {
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                                text-align: center;
                            }

                            &[align="right"] {
                                display: inline-block;
                                float: right;
                                margin-left: 10px;
                            }

                            &[align="left"] {
                                display: inline-block;
                                float: left;
                                margin-right: 10px;
                            }
                        }
                        .page {
                            display: block;
                            margin: 0 auto 20px auto;
                        }                        
                        @media (max-width:992px) {
                            div[pdf] {
                                width: ${parent_width};
                            }
                        }
                    `;
            container.appendChild(style);

            for (var pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                (function (pageNum) {
                    pdf.getPage(pageNum).then(function (page) {
                        var viewport = page.getViewport({ scale: 1 });
                        var scale = container.clientWidth / viewport.width;
                        viewport = page.getViewport({ scale: scale });

                        var canvas = document.createElement('canvas');
                        canvas.className = 'page';
                        var context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        container.appendChild(canvas);

                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        page.render(renderContext).promise.then(function () {
                            //console.log('Page rendered');
                        });
                    });
                })(pageNum); // Immediately-invoked function expression (IIFE) to capture pageNum
            }
        }, function (reason) {
            console.error(reason);
        });
    });
}
