// Convert Old Photo Gallery to New (#133)
const style = document.createElement('style');
style.textContent = `
  a[rel*="myfancybox"] {
    display: none;
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
const tableScripts = document.querySelectorAll('script');
let tableFound = false;
outerLoop:
for (let i = 0; i < tableScripts.length; i++) {
  const match = tableScripts[i].textContent.match(/GetSubMenuHeader(\d+)\s*\(\s*\)/);
  if (match) {
    const table = tableScripts[i].nextElementSibling;
    if (table && table.tagName === 'TABLE') {
      const anchors = table.querySelectorAll('a[rel^="myfancybox"]');
      for (let j = 0; j < anchors.length; j++) {
        const rel = anchors[j].getAttribute('rel');
        if (/^myfancybox\d+$/.test(rel)) {          
          table.classList.add("Gallery_Table");
          table.style.display = 'none'; // or any disable logic                    
          tableFound = true;
          // Break
          break outerLoop;
        }
      }
    }
  }
}

if (tableFound) {
  // Add CSS
  const fancyboxCSS = document.createElement('link');
  fancyboxCSS.rel = 'stylesheet';
  fancyboxCSS.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css';
  document.head.appendChild(fancyboxCSS);
  const style = document.createElement('style');
  style.innerHTML = `
  @import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap");
  .cus-133-label {
    font-family: 'PT Sans', sans-serif;
    border-bottom: 4px solid #bdcde3;
  }
  .cus-133-label > span {
    position: relative;
  }
  .cus-133-label > span:before {
    background: #252c44;
    position: absolute;
    display: inline-block;
    content: "";
    width: 100%;
    height: 4px;
    bottom: -6px;
  }
  .cus-photogallery-133-icon {
    opacity: 0;
    transition: 200ms linear;
  }
  .cus-photogallery-133-popup:hover .cus-photogallery-133-icon {
    opacity: 1;
    transition: 300ms linear;
  }
`;
  document.head.appendChild(style);


  // Add JS
  const fancyboxJS = document.createElement('script');
  fancyboxJS.src = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js';
  document.body.appendChild(fancyboxJS);

  // Add Menu 
  const tableClass = document.querySelector(".Gallery_Table");
  tableClass.insertAdjacentHTML("afterend", `<div class="cus-default-menu-bar"><div class="text-uppercase fw-bold px-0 mb-2 text-gray cus-133-label"><span><span class="cus-default-submenu hpe-in-submenu-only" data-menu="7" data-submenu="24">${document.title}</span>                    </span></div></div><div class="Gallery_Row row mx-0 hp-parent"></div>`);

  // Step 1: Collect all hrefs from anchors with rel="myfancybox###"
  const imageHrefs = [];
  document.querySelectorAll('a[rel^="myfancybox"]').forEach(anchor => {
    const rel = anchor.getAttribute('rel');
    if (/^myfancybox\d+$/.test(rel)) {
      const href = anchor.getAttribute('href');
      if (href) {
        imageHrefs.push(href);
      }
    }
  });

  // Step 2: Generate and append HTML blocks
  const galleryContainer = document.querySelector('.Gallery_Row');
  if (galleryContainer) {
    imageHrefs.forEach(href => {
      const div = document.createElement('div');
      div.className = 'col-6 col-md-3 px-1 mb-2';
      div.innerHTML = `
      <a class="cus-photogallery-133-popup d-block position-relative" data-fancybox="gallery" data-src="${href}" data-caption="">
        <div class="ratio-3-2">
          <div class="img-content cus-dark-img cus-cursor-zoom">
            <img class="cus-photogallery-133-img img-fluid lazy loaded" src="${href}" data-src="${href}" alt="Sample Photo" data-was-processed="true">
            <span class="cus-photogallery-133-icon position-absolute translate-middle top-50 start-50 z-index-1">
              <i class="fa fa-picture-o text-white text-shadow-1" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </a>
    `;
      galleryContainer.appendChild(div);
    });
  }

}
});
