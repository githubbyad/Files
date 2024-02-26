<?php

$path_dots = "";
if (file_exists("../css/bootstrap.css")) {
    $path_dots = "../";
}

include_once $path_dots . "core/init.php";

include $path_dots . "declarations/init.php";


// instances
$settings = new Settings;

// check user login
$loggedIn = 0;
$level = 0;
if (isset($_SESSION["user"])) {
    $loggedIn = 1;
    $level = $_SESSION["user_level"];
}

?>
<!DOCTYPE html>
<html lang="en">

<head>

    <title><?= $title . " | " . $company_logo; ?></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="<?= $path_dots ?>images/favicon.ico">
    <link href="<?= $path_dots ?>css/bootstrap.css" rel="stylesheet">
    <link href="<?= $path_dots ?>css/fonts.css" rel="stylesheet">
    <link href="<?= $path_dots ?>css/styles.css" rel="stylesheet">
    <script src="<?= $path_dots ?>js/bootstrap.js"></script>
    <script src="<?= $path_dots ?>js/script.js"></script>
    <?php include $path_dots . "css/style.php"; ?>

</head>

<body class="body mb-4" style="font-family: Outfit, sans-serif;">

    <div class="loader no-print"><?= $loaderIcon; ?></div>


    <div class="header fw-bold w-100 p-0 fs-6 no-print position-fixed top-0 d-flex justify-content-between align-items-center shadow no-print">
        <div class="d-flex align-items-center">
            <?php if ($user_level == 2) : ?>
                <a class="logo layoutBar barWidth text-center p-3 d-inline-block" href="<?= $path_dots ?>">
                    <div class="logo-small fs-5 d-none"><?= $pos_icon ?></div>
                    <div class="logo-big fs-5"><?= $pos_icon . "<b class='ms-2'>" . $settings->first()->company_text . "</b>" ?></div>
                </a>
                <span class="ms-2 sandwichIcon cursor-pointer p-3"><b><?= $barIcon . $leftArrow; ?></b></span>
            <?php endif ?>
            <span class="subpage text-title text-dark fs-6 p-3 text-start fw-bold"><?= $title ?><b></b></span>
        </div>
        <div class="d-flex align-items-center text-gray">

            <span class="new-order-top btn btn-theme me-4 cursor-pointer" onclick="window.open('<?= $path_dots ?>order/new','_self')"><?= $addMoreIcon ?>New<b class="fw-normal d-none d-lg-inline"> Order</b></span>

            <span class="full-screen me-4 cursor-pointer d-none"><?= $fullScreenIcon ?></span>

            <span class="userDetails text-end fw-normal fs-6 me-3 cursor-pointer user-select-none"><?= $userIcon . " " . ucfirst($_SESSION['user']); ?></span>

        </div>
    </div>

    <div class="userBox d-none no-print">
        <ul class="shadow p-3 rounded" style="list-style: none;">
            <li>
                <a href="<?= $path_dots ?>user/logout" class="text-white fw-normal"><?= $logoutIcon; ?>Logout</a>
            </li>
        </ul>
    </div>
    <script>
        document.querySelector(".userBox").style.top = document.querySelector(".header").clientHeight + "px";
        document.querySelector(".userBox").style.right = (window.innerWidth - document.querySelector(".userDetails").offsetLeft - document.querySelector(".userDetails").clientWidth) + "px";
        document.querySelector(".userDetails").addEventListener("click", () => {
            document.querySelector(".userBox").classList.toggle("d-none");
        });
    </script>

    <?php if ($user_level == 1) : ?>
        <style>
            .main-content {
                padding-left: 0px !important;
            }
        </style>
    <?php endif ?>

    <?php if ($user_level == 2) : ?>
        <!-- side bar -->
        <div class="sideBar layoutBar page header user-select-none no-print">

            <ul class="side_bar_ul py-2 px-2 text-start fw-normal fs-6" style="list-style: none;">

                <li class="sideLI">
                    <a class="no-drop" href="<?= $path_dots ?>">
                        <?= $dashboardIcon; ?>
                        <span class="sideMenus"><b class="ms-2 fw-normal">Dashboard</b></span>
                    </a>
                </li>

                <li class="sideLI">
                    <p class="drop-down">
                        <span class="menu_icon float-start"><?= $cartIcon; ?></span>
                        <span class="sideMenus d-flex justify-content-between">
                            <b class="ms-2 fw-normal">Order</b>
                            <?= $downArrowIcon; ?>
                        </span>
                    </p>
                    <ul class="submenu-ul invisible w-100 d-none mt-3 px-2" style="list-style: none;">
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>order/new">
                                <span>Add New</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>order/pending">
                                <span>Pending</span>
                                <?= $downArrowIcon; ?></a>
                        </li>
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>order/list">
                                <span>View All</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>order/summary">
                                <span>Summary</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="sideLI">
                    <p class="drop-down">
                        <span class="menu_icon float-start"><?= $categoryIcon; ?></span>
                        <span class="sideMenus d-flex justify-content-between">
                            <b class="ms-2 fw-normal">Category</b>
                            <?= $downArrowIcon; ?>
                        </span>
                    </p>
                    <ul class="submenu-ul invisible w-100 d-none mt-3 px-2" style="list-style: none;">
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>category/new">
                                <span>Add New</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>category/list">
                                <span>View All</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="sideLI">
                    <p class="drop-down">
                        <span class="menu_icon float-start"><?= $menuIcon; ?></span>
                        <span class="sideMenus d-flex justify-content-between">
                            <b class="ms-2 fw-normal">Menu/Base</b>
                            <?= $downArrowIcon; ?>
                        </span>
                    </p>
                    <ul class="submenu-ul invisible w-100 d-none mt-3 px-2" style="list-style: none;">
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>menu/new">
                                <span>Add New</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>menu/all">
                                <span>View All</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="sideLI">
                    <p class="drop-down">
                        <span class="menu_icon float-start"><?= $subMenuIcon; ?></span>
                        <span class="sideMenus d-flex justify-content-between">
                            <b class="ms-2 fw-normal">Submenu/Flavour</b>
                            <?= $downArrowIcon; ?>
                        </span>
                    </p>
                    <ul class="submenu-ul invisible w-100 d-none mt-3 px-2" style="list-style: none;">
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>submenu/new">
                                <span>Add New</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>submenu/all">
                                <span>View All</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="sideLI">
                    <p class="drop-down">
                        <span class="menu_icon float-start"><?= $addOnIcon; ?></span>
                        <span class="sideMenus d-flex justify-content-between">
                            <b class="ms-2 fw-normal">Add-On</b>
                            <?= $downArrowIcon; ?>
                        </span>
                    </p>
                    <ul class="submenu-ul invisible w-100 d-none mt-3 px-2" style="list-style: none;">
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>addon/new">
                                <span>Add New</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>addon/all">
                                <span>View All</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="sideLI">
                    <p class="drop-down">
                        <span class="menu_icon float-start"><?= $commentIcon; ?></span>
                        <span class="sideMenus d-flex justify-content-between">
                            <b class="ms-2 fw-normal">Comments</b>
                            <?= $downArrowIcon; ?>
                        </span>
                    </p>
                    <ul class="submenu-ul invisible w-100 d-none mt-3 px-2" style="list-style: none;">
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>comment/new">
                                <span>Add New</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                        <li>
                            <a class="drow-submenu" href="<?= $path_dots ?>comment/all">
                                <span>View All</span>
                                <?= $downArrowIcon; ?>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="sideLI">
                    <a class="no-drop" href="<?= $path_dots . 'user/list' ?>">
                        <?= $user_icon ?>
                        <span class="sideMenus"><b class="ms-2 fw-normal">Users</b></span>
                    </a>
                </li>
                <li class="sideLI">
                    <a class="no-drop" href="<?= $path_dots . 'faq' ?>">
                        <?= $faq_icon ?>
                        <span class="sideMenus"><b class="ms-2 fw-normal">FAQs</b></span>
                    </a>
                </li>
                <li class="sideLI">
                    <a class="no-drop" href="<?= ROOT . '/setting' ?>">
                        <?= $settings_icon; ?>
                        <span class="sideMenus"><b class="ms-2 fw-normal">Settings</b></span>
                    </a>
                </li>

            </ul>

        </div>

    <?php endif ?>

    <!-- <div class="sideBarCover d-none"></div> -->

    <!-- /side bar -->

    <!-- main content -->
    <div class="main-content my-2 w-100">

        <div class="page container-fluid py-2 d-none">

            <?php if ($user_level == 2) : ?>
                <script>
                    // postion of side bar from top
                    let sideX = setInterval(() => {
                        document.querySelector(".sideBar").style.top = document.querySelector(".header").offsetHeight + "px";
                    }, 200);
                    document.addEventListener("DOMContentLoaded", () => {
                        setTimeout(() => {
                            clearInterval(sideX);
                            document.querySelector(".sideBar").style.top = document.querySelector(".header").offsetHeight + "px";
                            //document.querySelector(".sideBar").style.left = "auto";
                        }, 500);
                    });

                    // side bar menu    
                    const barAction = () => {
                            addClass("sideBar", "start-0");
                            document.querySelector(".sideBar").classList.toggle("collapsed");
                            document.querySelector(".logo-big").classList.toggle("d-none");
                            document.querySelector(".logo-small").classList.toggle("d-none");
                            document.querySelector(".left_arrow_icon").classList.toggle("d-none");
                            document.querySelector(".bar_icon").classList.toggle("d-none");
                            document.querySelectorAll(".sideMenus").forEach(s => s.classList.toggle("d-none"));
                            document.querySelectorAll(".sideLI .no-drop svg, .sideLI .drop-down svg").forEach(s => s.classList.toggle("scaled"));
                            document.querySelectorAll(".sideLI .no-drop, .sideLI .drop-down").forEach(s => s.classList.toggle("icon-centered"));
                            document.querySelector(".barWidth").classList.toggle("barWidthAuto");
                            document.querySelector(".main-content").classList.toggle("main-content-auto");
                            document.querySelector(".sideBar").style.width = document.querySelector(".layoutBar").offsetWidth + "px";
                            if (document.querySelector(".logo-big.d-none")) { // save side bar status in localStorage
                                localStorage.setItem("side-bar", "collapse");
                            } else {
                                localStorage.setItem("side-bar", "");
                            }
                        }
                        (localStorage.getItem("side-bar") == "collapse" && !document.querySelector(".logo-big.d-none")) && barAction();
                    document.querySelector(".sandwichIcon").addEventListener("click", barAction); // bar click
                    document.querySelectorAll(".menu_icon svg").forEach(m => m.addEventListener("click", barAction)); // menus click

                    // menu click
                    document.querySelectorAll(".drop-down").forEach(m => {
                        m.addEventListener("click", () => {
                            m.nextElementSibling.classList.toggle("invisible");
                            setTimeout(() => {
                                m.nextElementSibling.classList.toggle("d-none");
                            }, 200);
                            m.querySelector(".sideMenus svg").classList.toggle("menu_iconSelected");
                        });
                    });

                    // full screen
                    const docElm = document.documentElement;

                    const fullScreen = () => {
                        if (docElm.mozRequestFullScreen) {
                            /* firefox */
                            docElm.mozRequestFullScreen();
                        } else if (docElm.requestFullscreen) {
                            /* chrome*/
                            docElm.requestFullscreen();
                        }
                    }

                    document.querySelector('.full-screen').addEventListener("click", fullScreen);
                </script>

            <?php endif ?>

            <script>
                // show page
                document.addEventListener("DOMContentLoaded", () => {
                    setTimeout(() => {
                        addClass("loader", "d-none");
                        removeClass("page", "d-none");
                    }, 500);
                });
            </script>