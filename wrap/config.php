<?php

define("SERVER_ADDR", getIPAddress());

$_SERVER["SERVER_NAME"] == "localhost" && ($_SERVER["SERVER_NAME"] = SERVER_ADDR);

if ($_SERVER["SERVER_NAME"] == SERVER_ADDR) { // localhost
    
    define("ROOT", "http://" . SERVER_ADDR . "/Projects/BulletBilling/chiliwraps");

    /* true means it will show error */
    define("DEBUG", true);

    // database details
    define("HOST", "localhost");
    define("DB_NAME", "wraps");
    define("USER", "root");
    define("PASSWORD", "");
    define("DATABASE", "mysql:host=" . HOST . ";dbname=" . DB_NAME);
} else {

    /* true means it will show error */
    define("DEBUG", true);

    // database details
    define("HOST", "https://www.mywebsite.com");
    define("DB_NAME", "wraps");
    define("USER", "root");
    define("PASSWORD", "");
    define("DATABASE", "mysql:host=" . HOST . ";dbname=" . DB_NAME);
}

// get user level
$user_level = 1;
if (isset($_SESSION['user'])) {
    $user_level = $_SESSION['user_level'];
}
