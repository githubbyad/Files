function checkLoginStatus(isRestricted) {
  if (readCookie('Style_s13251')) { // header background - old template
    document.getElementById('tdHeader').style.backgroundImage = "url(/lib/images/" + readCookie('Style_s13251') + ")";
  }
  var url = location.href;
  var qs = url.substring(url.indexOf('?'));

  var myParameters = new Array();
  myParameters = ReadSParameters();
  var sname = myParameters['sname'];
  var a = myParameters['a'];
  var urlhttps = url.startsWith("https");
  var urlarr = new URL(url);
  var surl;
  if (sname.length > 0) {
    var uint = setInterval(function () {
      if (readCookie('AppServer')) {
        clearInterval(uint);
        surl = readCookie('AppServer');
        var sframe = "<center class='cus-frame1-loader mt-5 position-absolute w-100'><i aria-hidden='true' style='font-size: 5rem;' class='fa fa-spinner fa-6 fa-spin text-theme'></i></center><iframe id=\"frame1\" style=\"border:none;visibility:hidden\" width=\"100%\" src=\"" + surl + sname + qs + "\" onload=\"document.getElementsByClassName('cus-frame1-loader')[0].style.display = 'none';document.getElementById('frame1').style.visibility = 'visible';window.parent.parent.scrollTo(0,0);iFrameResize({log:true}, '#frame1');\"></iframe>"
        document.getElementById("MainContent").innerHTML = sframe;
      }
    }, 10);

  } else {
    if (a == 1) {
      var s = readCookie('loginStatus');
      if (s != 'Yes') {
        var divAccess1 = document.getElementById('divAccess');
        if (divAccess1 != null) {
          document.getElementById('divAccess').style.display = 'none';
          OpenLoginPopup();
          document.getElementById('divMain').style.display = 'none';
        }
        return false;
      } else {
        var divMain1 = document.getElementById('divMain');
        if (divMain1 != null) {
          document.getElementById('divMain').style.display = 'block';
        }
        return true;
      }
    } else {
      var divMain = document.getElementById('divMain');
      if (divMain != null) {
        document.getElementById('divMain').style.display = 'block';
      }
      return true;
    }
  }
}


// sticky column css&js 
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
    if (document.querySelector("[data-sticky]")) {
      var sp = document.querySelectorAll("[data-sticky]");
      var sw = window.innerHeight;
      var sf = () => {
        if (sp != null) {
          sp.forEach(x => {
            var ds = x.getAttribute("data-sticky") != "" ? x.getAttribute("data-sticky") : 10;
            var st = x.offsetHeight - sw + 10;
            if (st >= 0) {
              x.style.top = `-${st}px`;
            } else if (st < 0) {
              if (st > -ds) {
                x.style.top = `${Math.abs(st)}px`;
              } else {
                x.style.top = `${ds}px`;
              }
            }
          });
        }
      }
      sf();
      setTimeout(() => {
        sf();
      }, 500);
      setTimeout(() => {
        sf();
      }, 1000);
      setTimeout(() => {
        sf();
      }, 3000);
    }
  }
});



// sticky column css&js
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
    if (document.querySelector("[data-sticky]")) {
      var sp = document.querySelectorAll("[data-sticky]");
      var sw = window.innerHeight;
      var sf = () => {
        if (sp != null) {
          sp.forEach(x => {
            var ds = x.getAttribute("data-sticky") != "" ? x.getAttribute("data-sticky") : 10;
            var st = x.offsetHeight - sw + 10;
            if (st >= 0) {
              x.style.top = `-${st}px`;
            } else if (st < 0) {
              if (st > -ds) {
                x.style.top = `${Math.abs(st)}px`;
              } else {
                x.style.top = `${ds}px`;
              }
            }
          });
        }
      }
      sf();
      setTimeout(() => {
        sf();
      }, 500);
      setTimeout(() => {
        sf();
      }, 1000);
      setTimeout(() => {
        sf();
      }, 3000);
    }
  }
});

// Google Custom Search
document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
    if (document.querySelector("#gsc-i-id1")) {
      document.querySelector("#gsc-i-id1").setAttribute("placeholder", "Search here...");
    }
  }
});




/* peeler ad */
function writeObjects(small_path, big_path, small_width, small_height, big_width, big_height, link, direction, new_window) {

  /* add peeler ad element */
  document.body.insertAdjacentHTML(`beforeend`, `<!-- Peeler Ad Start --><peeler></peeler><!-- Peeler Ad End -->`);

  /* hide peeler ad after specific height */
  const scroll_hide = 'Yes';
  const scroll_position = 200;

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
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      link = '//' + link;
    }
    if (new_window == 'new') {
      link_code = `onclick="window.open('${link}');"`;
    } else {
      link_code = `onclick="window.open('${link}', '_self');"`;
    }
    document.querySelector('peeler').insertAdjacentHTML(`beforeend`, `<style>.peeler_position {cursor:pointer;}</style>`);
  }

  /* add common css */
  document.querySelector('peeler').insertAdjacentHTML(`beforeend`, `
    <style>
    #peeler-top-right, #peeler-top-left {
      position: fixed;
      top: 0;
      z-index: 999999;            
    }
    #peeler-top-right .back-img,
    #peeler-top-left .back-img,
    #peeler-top-right img,
    #peeler-top-left img
     {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0
    }
    #peeler-top-right .peel-ad-small,
    #peeler-top-left .peel-ad-small {
        z-index: 99;
        transition-delay: 0.2s !important
    }
    #peeler-top-right .back-img,
    #peeler-top-left .back-img {
        overflow: hidden;
        z-index: 101;
        box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    }
    #peeler-top-right .back-img,
    #peeler-top-right .peel-ad-big,
    #peeler-top-right .peel-ad-small,
    #peeler-top-left .back-img,
    #peeler-top-left .peel-ad-big,
    #peeler-top-left .peel-ad-small {
        transition: .2s ease-in-out
    }
    #peeler-top-right:hover .back-img,
    #peeler-top-right:hover .peel-ad-big,
    #peeler-top-left:hover .back-img,
    #peeler-top-left:hover .peel-ad-big {
        width: 600px;
        height: 600px;
        transition: .3s ease-in-out
    }
    #peeler-top-right:hover .peel-ad-small,
    #peeler-top-left:hover .peel-ad-small {
        opacity: 0
    }
    #peeler-top-right:hover .peel-ad-big,
    #peeler-top-left:hover .peel-ad-big {
        z-index: 100
    }
    #peeler-top-right:hover .back-img,
    #peeler-top-left:hover .back-img {
        top: -12px;
        width: 600px;
        height: 613px;
    }
    </style>
  `);

  /* only for desktop */
  if (window.screen.width > 992) {
    /* if direction is Top-Right */
    if (direction == 'rt') {
      document.querySelector('peeler').insertAdjacentHTML(`beforeend`, `      
      <div id="peeler-top-right" class="peeler_top_right peeler_position" ${link_code}>
        <div class="back-img peeler_top_right"></div>
        <img class="peel-ad-small peeler_top_right" src="${small_image}">
        <img class="peel-ad-big peeler_top_right" src="${big_image}">
      </div>
      <style>
        #peeler-top-right {
            right: 0;
            float: right;     
            & .back-img, & img {
              right: 0;
            }      
            & .back-img {
              background: linear-gradient(-2.35998rad, transparent 45%, rgba(0, 0, 0, .2) 50%, #aaa 50%, #bbb 56%, #ccc 62%, #f3f3f3 80%, #fff 100%);              
          }
        }                
      </style>`);
    } else {
      document.querySelector('peeler').insertAdjacentHTML(`beforeend`, `
      <div id="peeler-top-left" class="peeler_top_left" ${link_code}>
        <div class="back-img peeler_top_left"></div>
        <img class="peel-ad-small peeler_top_left" src="${small_image}">
        <img class="peel-ad-big peeler_top_left" src="${big_image}">
      </div>
      <style>
        #peeler-top-left {
            left: 0;   
            float:left;
            & .back-img, & img {
              left: 0;
            }
            & .back-img {
              background: linear-gradient(2.35998rad, transparent 45%, rgba(0, 0, 0, .2) 50%, #aaa 50%, #bbb 56%, #ccc 62%, #f3f3f3 80%, #fff 100%);
          }         
        }        
      </style>`);
    }

    /* hide peeler ad after provided height in 'scroll_position' */
    document.addEventListener("DOMContentLoaded", function () {
      if (direction != '') {
        var script = document.createElement('script');
        script.textContent = `
        window.addEventListener("scroll", function(event) {
            if (this.scrollY > ${scroll_position}) {
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
        if (scroll_hide == 'Yes') {
          document.querySelector('peeler').appendChild(script);
        }
      }
    });
  }
}

