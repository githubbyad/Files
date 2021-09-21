<style>/*MenuHover*/
.no-submenu .dropdown-toggle::after {display: none;}
.navbar-nav li:hover>ul.dropdown-menu {display: block;margin-top: 0px;}
</style>
<script>
/*HideSubMenu*/
var nav_dm = document.getElementsByClassName("dropdown-menu");
var nav_dml = nav_dm.length;
for (i = 0; i < nav_dml; i++) {
var nav_dms = nav_dm[i].children.length;
for (j = 0; j < nav_dms; j++) {
if (nav_dm[i].children[j].style.display == "none") {
nav_dm[i].children[j].remove();
}
}
if (nav_dm[i].children.length == 0) {
nav_dm[i].parentNode.classList.add("no-submenu");
nav_dm[i].style.display = "none";
}
}
/*MenuLink*/
var ns = document.getElementsByClassName("no-submenu").length;
var nss = document.getElementsByClassName("no-submenu");
for (k = 0; k < ns; k++) {
var nshref = nss[k].children[0].getAttribute("href");
var nsso = "location.href = \'" + nshref + "\';";
nss[k].children[0].setAttribute("onclick", nsso);
}
<\/script>
