<?php

$title = "FAQs";
include "../inc/header.php";

?>

<div class="row mx-0">

    <div class="col-lg-12 offset-lg-0 bg-section p-4 rounded position-relative shadow">

        <p class="text-theme text-start border-bottom pb-2 mb-3 fw-bold">FAQs</p>

        <!--question-->
        <div class="question p-3 border border-1 rounded mb-3">

            <p class="que user-select-none cursor-pointer text-dark fw-bold mb-0" onclick="this.nextElementSibling.classList.toggle('d-none')">How to access this Application on other devices?</p>

            <div class="ans mt-3 d-none text-dark ps-2 border-start border-2 border-primary">
                You need to get IPV4 address from main device by following the below sptes:

                <ul class="mt-2">
                    <li class="mb-3">Right click on "window" icon from left bottom side.
                    <br><br><img src="<?= ROOT ?>/images/faq_001.png" class="img-fluid ms-2 p-2 bg-white shadow-lg rounded"><br>
                    </li>
                    <li class="mb-3">Click on "Run" from the list.
                    <br><br><img src="<?= ROOT ?>/images/faq_002.png" class="img-fluid ms-2 p-2 bg-white shadow-lg rounded"><br>
                    </li>
                    <li class="mb-3">Type "cmd" and press "OK".
                    <br><br><img src="<?= ROOT ?>/images/faq_003.png" class="img-fluid ms-2 p-2 bg-white shadow-lg rounded"><br>
                    </li>
                    <li class="mb-3">A black and white window will open where you will type "ipconfig" and press "Enter" key.
                    <br><br><img src="<?= ROOT ?>/images/faq_004.png" class="img-fluid ms-2 p-2 bg-white shadow-lg rounded"><br>
                    </li>
                    <li class="mb-3">Look for "IPV4 Address" from bottom side.
                    <br><br><img src="<?= ROOT ?>/images/faq_005.png" class="img-fluid ms-2 p-2 bg-white shadow-lg rounded"><br>
                    </li>
                    <li class="mb-3">Now, visit the following URL in other device's browser and replace <b class="text-danger">IP_Address</b> with IP address that is showing as IPV4 address (see previous screenshot).
                        <br><br><span class="ms-2"></span>http://<b class="text-danger">IP_Address</b>/pos
                    </li>
                </ul>
            </div>
        </div>

        <!--question-->
        <div class="question p-3 border border-1 rounded mb-3 d-none">

            <p class="que user-select-none cursor-pointer text-dark fw-bold mb-0" onclick="this.nextElementSibling.classList.toggle('d-none')">Question</p>

            <div class="ans mt-3 d-none text-dark ps-2 border-start border-2 border-primary">
                Answer
            </div>
        </div>




    </div>

</div>


<?php include("../inc/footer.php"); ?>