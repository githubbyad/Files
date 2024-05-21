/* peeler ad */
function writeObjects(small_path, big_path, small_width, small_height, big_width, big_height, link, direction, new_window) {

  /* get site url */
  let site = location.href.match(/:\/\/(.[^/]+)/)[1];
  let folder = "";
  const url = window.location.href;
  if (url.split("/").length == 5) { // Folder Sites
    folder = "/" + url.split("/")[3];
  }
  site = `https://${site}${folder}/`;

  /* get small image */
  let small = small_path;
  let small_parts = small.split('/');
  small = small_parts[small_parts.length - 1];
  const small_image = site + small;

  /* get big image */
  let big = big_path;
  let big_parts = big.split('/');
  big = big_parts[big_parts.length - 1];
  const big_image = site + big; 

  /* link */
  let link_code = '';
  if (link.trim() != '') {
    if (new_window == 'new') {
      link_code = `onclick="window.open('${link}');"`;
    } else {
      link_code = `onclick="window.open('${link}', '_self');"`;
    }
  }

  /* hide peeler ad after specific height */
  const scroll_height = 200;

  /* only for desktop */
  if (window.screen.width > 992) {
    /* if direction is Top-Right */
    if (direction == 'rt') {
      document.body.insertAdjacentHTML(`beforeend`, `
      <!-- Peeler Ad Start -->
      <div id="peeler-top-right" class="peeler_top_right" ${link_code}>
        <div class="back-img peeler_top_right"></div>
        <img class="peel-ad-small peeler_top_right" src="${small_image}">
        <img class="peel-ad-big peeler_top_right" src="${big_image}">
      </div>
      <style>
        #peeler-top-right {
            position: fixed;
            right: 0;
            top: 0;
            float: right;
            z-index: 999999;
            cursor: pointer
        }
        #peeler-top-right .back-img,
        #peeler-top-right img {
            width: 100px;
            height: 100px;
            position: absolute;
            right: 0;
            top: 0
        }
        #peeler-top-right .peel-ad-small {
            z-index: 99;
            transition-delay: 0.2s !important
        }
        #peeler-top-right .back-img {
            overflow: hidden;
            z-index: 101;
            background: linear-gradient(-2.35998rad, transparent 45%, rgba(0, 0, 0, .2) 50%, #aaa 50%, #bbb 56%, #ccc 62%, #f3f3f3 80%, #fff 100%);
            box-shadow: 0 0 10px rgba(0, 0, 0, .5);
        }
        #peeler-top-right .back-img,
        #peeler-top-right .peel-ad-big,
        #peeler-top-right .peel-ad-small {
            transition: .2s ease-in-out
        }
        #peeler-top-right:hover .back-img,
        #peeler-top-right:hover .peel-ad-big {
            width: 600px;
            height: 600px;
            transition: .3s ease-in-out
        }
        #peeler-top-right:hover .peel-ad-small {
            opacity: 0
        }
        #peeler-top-right:hover .peel-ad-big {
            z-index: 100
        }
        #peeler-top-right:hover .back-img {
            top: -12px;
            width: 600px;
            height: 613px;
        }
      </style>
      <script>
        window.addEventListener("scroll", function (event) {
            if (this.scrollY > ${scroll_height}) {
                document.querySelector("#peeler-top-right").style.display = "none";
            }
            else {
                document.querySelector("#peeler-top-right").style.display = "block";
            }
        }, false);
      <\/script>
      <!-- Peeler Ad End -->`);
    } else {
      document.body.insertAdjacentHTML(`beforeend`, `
      <!-- Peeler Ad Start -->
      <div id="peeler-top-left" class="peeler_top_left" ${link_code}>
        <div class="back-img peeler_top_left"></div>
        <img class="peel-ad-small peeler_top_left" src="${small_image}">
        <img class="peel-ad-big peeler_top_left" src="${big_image}">
      </div>
      <style>
        #peeler-top-left {
            position: fixed;
            left: 0;
            top: 0;
            float: left;
            z-index: 999999;
            cursor: pointer
        }
        #peeler-top-left .back-img,
        #peeler-top-left img {
            width: 100px;
            height: 100px;
            position: absolute;
            left: 0;
            top: 0
        }
        #peeler-top-left .peel-ad-small {
            z-index: 99;
            transition-delay: 0.2s !important
        }
        #peeler-top-left .back-img {
            overflow: hidden;
            z-index: 101;
            background: linear-gradient(2.35998rad, transparent 45%, rgba(0, 0, 0, .2) 50%, #aaa 50%, #bbb 56%, #ccc 62%, #f3f3f3 80%, #fff 100%);
            box-shadow: 0 0 10px rgba(0, 0, 0, .5);
        }
        #peeler-top-left .back-img,
        #peeler-top-left .peel-ad-big,
        #peeler-top-left .peel-ad-small {
            transition: .2s ease-in-out
        }
        #peeler-top-left:hover .back-img,
        #peeler-top-left:hover .peel-ad-big {
            width: 600px;
            height: 600px;
            transition: .3s ease-in-out
        }
        #peeler-top-left:hover .peel-ad-small {
            opacity: 0
        }
        #peeler-top-left:hover .peel-ad-big {
            z-index: 100
        }
        #peeler-top-left:hover .back-img {
            top: -12px;
            width: 600px;
            height: 613px;
        }
      </style>
      <script>
        window.addEventListener("scroll", function (event) {
            if (this.scrollY > ${scroll_height}) {
                document.querySelector("#peeler-top-left").style.display = "none";
            }
            else {
                document.querySelector("#peeler-top-left").style.display = "block";
            }
        }, false);
      <\/script>
      <!-- Peeler Ad End -->`);
    }

    /* hide peeler ad after provided height in 'scroll_height' */
    document.addEventListener("DOMContentLoaded", function () {
      if (direction != '') {
        var script = document.createElement('script');
        script.textContent = `
        window.addEventListener("scroll", function(event) {
            if (this.scrollY > ${scroll_height}) {
              if(document.querySelector("#peeler-top-right")) {
                document.querySelector("#peeler-top-right").style.display = "none";
              }
              if(document.querySelector("#peeler-top-left")) {
                document.querySelector("#peeler-top-left").style.display = "none";
              }                
            } else {
              if(document.querySelector("#peeler-top-right")) {
                document.querySelector("#peeler-top-right").style.display = "block";
              }
              if(document.querySelector("#peeler-top-left")) {
                document.querySelector("#peeler-top-left").style.display = "block";
              }

            }
        }, false);`;
        document.body.appendChild(script);
      }
    });
  }
}
