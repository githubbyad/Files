<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

// LINK EXAMPLE: https://bulletlink.one/mdetail.php?app=Y&pop=Y&dm=Yes&l=vaccinations-of-yearolds-to-begin-second-doses-coming-soon-p3490-1.htm&site=cfimran.com
// LINK EXAMPLE: https://bulletlink.one/mdetail.php?app=Y&pop=Y&dm=Yes&l=https://bulletlink.com/template-100/cameron-diaz-offers-her-truth-%27everyone-will-be-cheated-on%27-p179-100.htm&site=bulletlink.com/template-100

//$HttpHost = $_SERVER['HTTP_HOST'];
$parts = explode('/',$_GET['site']);
$HttpHost = $parts[0];
$DemoSite = "";
if(isset($parts[1])) {
    $DemoSite = $parts[1] . '/';
}
$MyDomain = "https://" . $HttpHost . "/";
$MHomePage = $MyDomain . "m.htm";

$QSapp = $_GET['app'];  // app=Y
$QSpop = $_GET['pop'];  // pop=Y
$QSdm = $_GET['dm'];    // dm=Yes  dark mode for app
$QSl = $_GET['l'];      // article link
$QSl = str_replace($MyDomain, "", $QSl);
// $DemoSite = "";
// $Pos = strpos($QSl, "/");
// if ($Pos > 0) {
//     $DemoSite = substr($QSl, 0, $Pos + 1);
// }


$SMenu = strrchr($QSl, "-");
$SMenu = str_replace("-", "", $SMenu);
$SMenu = str_replace(".htm", "", $SMenu);
$SMenu = str_replace(".html", "", $SMenu);

$MyURL = $MyDomain . $QSl;

$handle = fopen($MyURL, "rb");
$page = stream_get_contents($handle);
fclose($handle);


/////////////////////////////////////////////////////////////////////////////////////////////////////

function string_between_two_string($str, $starting_word, $ending_word)
{
    $subtring_start = strpos($str, $starting_word);
    //Adding the strating index of the strating word to 
    //its length would give its ending index
    $subtring_start += strlen($starting_word);
    //Length of our required sub string
    $size = strpos($str, $ending_word, $subtring_start) - $subtring_start;
    // Return the substring from the index substring_start of length size 
    return substr($str, $subtring_start, $size);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

$FileContentH = string_between_two_string(strval($page), '<!--StartMH-->', '<!--EndMH-->');
$FileContentMain = string_between_two_string(strval($page), '<!--StartM-->', '<!--EndM-->');
//echo "#############" . $FileContentMain . "XXXXXXXXXXXX";

if (strlen($FileContentMain) > 0) {

    echo "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>" . chr(13) . chr(10);
    echo "<html><head>" . chr(13) . chr(10);
    echo "<meta http-equiv='Cache-Control' content='no-cache, no-store, must-revalidate' />" . chr(13) . chr(10);
    echo "<meta http-equiv='Pragma' content='no-cache' />" . chr(13) . chr(10);
    echo "<meta http-equiv='Expires' content='0' />" . chr(13) . chr(10);
    echo "<meta charset='UTF-8'>" . chr(13) . chr(10);
    echo "<script type='text/javascript' language='javascript' src='" . $MyDomain . "lib/bl2.js'></script>" . chr(13) . chr(10);
    echo "<script>if (window.location.href.indexOf('mdetail2.php') != -1 && window.screen.width > 1024 && window == window.parent) {mburl = location.href;var mbar= new URL(mburl );var murl= mbar.searchParams.get('l');window.location.replace(murl);}</script>" . chr(13) . chr(10);
    echo "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>" . chr(13) . chr(10);
    echo "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script>" . chr(13) . chr(10);
    echo "<script type='text/javascript' language='javascript' src='" . $MyDomain . "lib/JQuery/jquery.js'></script>" . chr(13) . chr(10);
    echo "<script type='text/javascript' language='javascript' src='" . $MyDomain . $DemoSite . "settings.js'></script>" . chr(13) . chr(10);
    echo "<script type='text/javascript' language='javascript' src='" . $MyDomain . $DemoSite . "ads.js'></script>" . chr(13) . chr(10);
    echo "<script type='text/javascript' language='javascript' src='" . $MyDomain . $DemoSite . "articles.js'></script>" . chr(13) . chr(10);
    echo "<script type='text/javascript' language='javascript' src='" . $MyDomain . $DemoSite . "customform.js'></script>" . chr(13) . chr(10);
    echo "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'>" . chr(13) . chr(10);
    echo "<script type='text/javascript' language='javascript' src='" . $MyDomain . "lib/iframeResizer.min.js'></script>" . chr(13) . chr(10);
    echo "<link type='text/css' rel='stylesheet' href='" . $MyDomain . $DemoSite . "custom.css'>" . chr(13) . chr(10);
    echo "<meta name='viewport' content='width=device-width, initial-scale=1' />" . chr(13) . chr(10);

    echo "<style type='text/css'>" . chr(13) . chr(10);

    echo ".MyButton {background-color: #585858; color: #ffffff; border-style: solid; border-width: 3px; border-color: #2E2E2E; padding: 5px;}" . chr(13) . chr(10);
    echo "</style>" . chr(13) . chr(10);

    if ($QSdm == "Yes") {
        echo "<link type='text/css' rel='stylesheet' href='" . $MyDomain . $DemoSite . "mobile.css'>";
    }

    echo $FileContentH;

    echo "</head><body class='mobilebody p-2' onload='OpenLoginPopupM(window.location.href);'>" . chr(13) . chr(10);

    echo "<div id='divMain' class='RAccess" . $SMenu . "'>" . chr(13) . chr(10);
    echo "<script type='text/javascript' language='JavaScript'>start();</script>" . chr(13) . chr(10);

    //echo "<style type='text/css'>.pagebody {width:auto;}  .pageheading {width:auto;} </style>". chr(13).chr(10);

    if ($QSpop == "Y") {
        // echo "<style type='text/css'>img {height: auto !important; } body {width:95%;}  .pageheading {width:auto;} </style>". chr(13).chr(10);
    }


    if ($QSapp == "Y") {
        // echo "<style type='text/css'>.mobilebody{ margin-left:auto; margin-right:auto;} img {max-width:90vw !important; height: auto !important; } iframe {max-width: 90vw; max-height: auto;} body {width:95%;}  .pageheading {width:auto;} </style>". chr(13).chr(10);
    }

    if ($QSapp == "" and $QSpop == "") {
        //  echo "<style type='text/css'>img {max-width:180px !important; height: auto !important; } body {width:95%;}  .pageheading {width:auto;} </style>". chr(13).chr(10);
        echo "<div style='text-align:center;'><script type='text/javascript' language='JavaScript'>GetLogoM();</script></div>" . chr(13) . chr(10);
        echo "<div><script type='text/javascript' language='JavaScript'>AdGroup5();</script></div>" . chr(13) . chr(10);
    }

    if ($QSapp == "Y") {
        echo "<style>.opinionbutton{display:none;}</style><br>";
        $FileContentMain = str_replace("<script type='text/javascript' language='JavaScript'>GetAddThis();</script>", "", $FileContentMain);
    }


    echo $FileContentMain;


    if ($HttpHost == "thebradentontimes.com") {
        echo "<script>(function(d, s, id) {";
        echo "var js, fjs = d.getElementsByTagName(s)[0];";
        echo "if (d.getElementById(id)) return;";
        echo "js = d.createElement(s); js.id = id;";
        echo "js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3';";
        echo "fjs.parentNode.insertBefore(js, fjs);";
        echo "}(document, 'script', 'facebook-jssdk'));";
        echo "function GetFBComments(){ var blfburl= document.URL; document.write('<div class='fb-comments' data-href='' + blfburl + '' data-width='470' data-numposts='5'></div>');}";
        echo "</script>";
        echo "<script type='text/javascript' language='JavaScript'> GetFBComments();</script>";
    }


    if ($QSapp == "" and $QSpop == "") {
        echo "<br><div class='pageheading TDBGcolor'><center><div class='MobileButton'><a href=" . $MHomePage . " class='MyButton' id='MobileButton'><i id='left-arrow' class='fa fa-arrow-circle-left'></i>back</a></div></center><br><br></div></div>";
    }

    // echo "<div><span id='hcdiv' name='hcdiv' class='hitcounter'><script type='text/javascript' language='JavaScript'>LoadDoc('/get_sc.asp', 'hcdiv', '');</script></span></div>";

    echo "<script language='javascript'>GetGoogleAnalytics('MPAGE:" . $QSl . "');</script>";

    echo "<div id='divLoginStatus'></div></body></html>";
} else {

    echo "Either NO artile NO mobile version article exist.<br>Update this article to activate mobile version.";

    if ($QSapp == "Y") {
        echo "Contact Site Administrator.<br><br>";
        echo "<div class='pageruler'><span style='FONT-SIZE: 0pt;'>&nbsp;</span></div><div class='pageheading TDBGcolor'><center><a href='" . $MHomePage . "'><span class='MyButton'>&nbsp;&nbsp;&nbsp;&#8678&nbsp;&nbsp;&nbsp;back&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a></center><br><br></div></div>";
    }
}


if ($QSapp == "Y") {
    echo "<br><br><br><br><br><br>";
}
