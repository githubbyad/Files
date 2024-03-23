<?php

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function redirect_page($page)
{
    echo "<script>window.location.href='{$page}'</script>";
    exit();
}

function redirect_page_header($page)
{
    header("Location: $page");
    exit();
}

function redirect_back()
{
    echo "<script>window.history.back();</script>";
    exit();
}


function uf_getLastDir($sUrl)
{
    $sPath = parse_url($sUrl, PHP_URL_PATH);   // parse URL and return only path component 
    $aPath = explode('/', trim($sPath, '/'));  // remove surrounding "/" and return parts into array
    end($aPath);                               // last element of array
    if (is_dir($sPath))                        // if path points to dir
        return current($aPath);                // return last element of array
    if (is_file($sPath))                       // if path points to file
        return prev($aPath);                   // return second to last element of array
    return false;                              // or return false
}

function show($str)
{
    echo '<pre>';
    print_r($str);
    echo '</pre>';
}

function is_decimal($val)
{
    return is_numeric($val) && floor($val) != $val;
}

function toFixed($number)
{

    if (is_decimal($number)) {
        return number_format($number, 2, ".");
    }
    return $number;
}

function moneyFormatIndia($num)
{
    $explrestunits = "";
    if (strlen($num) > 3) {
        $lastthree = substr($num, strlen($num) - 3, strlen($num));
        $restunits = substr($num, 0, strlen($num) - 3); // extracts the last three digits
        $restunits = (strlen($restunits) % 2 == 1) ? "0" . $restunits : $restunits; // explodes the remaining digits in 2's formats, adds a zero in the beginning to maintain the 2's grouping.
        $expunit = str_split($restunits, 2);
        for ($i = 0; $i < sizeof($expunit); $i++) {
            // creates each of the 2's group and adds a comma to the end
            if ($i == 0) {
                $explrestunits .= (int)$expunit[$i] . ","; // if is first value , convert into integer
            } else {
                $explrestunits .= $expunit[$i] . ",";
            }
        }
        $thecash = $explrestunits . $lastthree;
    } else {
        $thecash = $num;
    }
    return $thecash; // writes the final format where $currency is the currency symbol.
}