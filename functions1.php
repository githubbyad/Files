<?php

// Mobile - Auto Redirect to "/m.htm" page
$mobile = '{{PutMobileValueFromSetting}}';
if($mobile = 'Yes') {
    include ('/m_htm.php');
}

?>
