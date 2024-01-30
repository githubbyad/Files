<?php

define("SERVER", $_SERVER["SERVER_NAME"]);

//if ($_SERVER["SERVER_NAME"] == "localhost") { // localhost

// folder name
define("FOLDER", "/pos");

// full path 
define("ROOT", "http://" . SERVER . "" . FOLDER);

// true means it will show error
define("DEBUG", true);

// database details
define("HOST", "localhost");
define("DB_NAME", "wraps");
define("USER", "root");
define("PASSWORD", "");
define("DATABASE", "mysql:host=" . HOST . ";dbname=" . DB_NAME);

//} 

// else {

//     // folder to save data
//     define("FOLDER", "");

//     // full path 
//     define("ROOT", "https://www.mywebsite.com" . FOLDER);

//     // true means it will show error
//     define("DEBUG", true);

//     // database details
//     define("HOST", "https://www.mywebsite.com");
//     define("DB_NAME", "wraps");
//     define("USER", "root");
//     define("PASSWORD", "");
//     define("DATABASE", "mysql:host=" . HOST . ";dbname=" . DB_NAME);
// }

// get user level
$user_level = 1;
if (isset($_SESSION['user'])) {
    $user_level = $_SESSION['user_level'];
}
