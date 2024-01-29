<?php

include "../core/init.php";

$orders_ins = new Orders;

$settings = new Settings;

// set time zone
$region = $settings->first()->region;
date_default_timezone_set($region);

// set time and timestamp
$order_timestamp = time();
$order_time = date("D\, jS M h:i:s A", $order_timestamp);


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // checking for blank "category"
    $checkBlankRecord = 0;
    $totalCategory = count($_POST['category']);
    $countBlank = 0;
    for ($c = 0; $c < $totalCategory; $c++) {
        if ($_POST['category'][$c] == "" || $_POST['menu'][$c] == "") {
            $checkBlankRecord = 1;
            $countBlank++;
        }
    }

    // proceed to insert/update/delete record 
    if ($checkBlankRecord == 0) {

        // check all values before procedding further
        $lastUpdated = 0;
        $lastOrderNumber = $_POST["order_number"];
        $lastOrderDate = $_POST["order_date"];
        //$lastOrderId = $_POST["order_id"];
        $checkOrdersNumberSql = "SELECT order_number, order_date, order_id FROM orders WHERE order_number = '{$lastOrderNumber}' AND order_date  = '{$lastOrderDate}'";
        $checkOrdersNumberResult = $conn->prepare($checkOrdersNumberSql);
        $checkOrdersNumberResult->execute();
        $checkOrdersNumberFetch = $checkOrdersNumberResult->fetchAll();

        // delete if found record as we have updated that order
        if (count($checkOrdersNumberFetch)) {

            $orderID = $checkOrdersNumberFetch[0]->order_id;

            // delete from "orders" table
            $deleteLastOrder = $conn->prepare("DELETE FROM orders WHERE order_number = '{$lastOrderNumber}' AND order_date  = '{$lastOrderDate}'");
            $deleteLastOrder->execute();

            // delete from "order_details" table            
            $deleteLastOrderDetails = $conn->prepare("DELETE FROM order_details WHERE order_id = '{$orderID}'");
            $deleteLastOrderDetails->execute();

            $lastUpdated = 1;
            echo '<div class="alert update-success alert-success alert-dismissible fade show" role="alert">
                    Updated last order.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>';
            echo "<p class='response_data update-success d-none' data-timestamp='" . $order_timestamp . "' data-invoice='".$invoice_number."'>" . $order_time . "</p>";
        }


        // Inserting into "orders" table values
        $ordersStatus = 0;        

        $ordersValue = [
            'order_number' => $_POST["order_number"],
            'order_date' => $order_time,
            'invoice' => $_POST["invoice"],
            'order_timestamp' => $order_timestamp,
            'staff' => $_POST["staff"],
            'sub_total' => $_POST["sub_total"],
            'discount' => $_POST["discount"],
            'order_total_amount' => $_POST["order_total_amount"],
            'order_payment_method' => $_POST["order_payment_method"],
            'customer_name' => $_POST["customer_name"],
            'customer_phone' => $_POST["customer_phone"],
            'customer_repeat' => $_POST["customer_repeat"],
        ];



        $ordersSql = "INSERT INTO orders(order_number,order_date,invoice,order_timestamp,staff,sub_total,discount,order_total_amount, order_payment_method, customer_name,customer_phone,customer_repeat) VALUES ";
        $ordersSql .= '("' . implode('","', $ordersValue) . '")';
        $ordersResult = $conn->prepare($ordersSql);
        try {
            $ordersResult->execute();
            $ordersStatus = 1;
            $ordersID = $conn->lastInsertId();
        } catch (PDOException $e) {
            $conn->rollBack();
            echo "Error('orders' table): " . $e->getMessage();
        }

        // Inserting into "order_details" table values
        if ($ordersStatus == 1) { // if orders table inserted
            $ordersDetailsStatus = 0;
            $totalOrders = count($_POST['category']);
            for ($i = 0; $i < $totalOrders; $i++) {

                $ordersDetailValue = [
                    'order_id' => $ordersID,
                    'category' => $_POST["category"][$i],
                    'menu' => $_POST["menu"][$i],
                    'submenu' => $_POST["submenu"][$i],
                    'addons' => $_POST["addonMerge"][$i],
                    'order_parcel_status' => $_POST["order_parcel_status"][$i],
                    'order_quantity' => $_POST["order_quantity"][$i],
                    'order_comment' => $_POST["order_comment"][$i],
                    'order_amount' => $_POST["order_amount"][$i],
                ];

                $ordersDetailSql = "INSERT INTO order_details(order_id, category, menu, submenu, addons, order_parcel_status, order_quantity, order_comment,order_amount) VALUES ";
                $ordersDetailSql .= '("' . implode('","', $ordersDetailValue) . '")';
                $ordersDetailResult = $conn->prepare($ordersDetailSql);

                try {
                    $ordersDetailResult->execute();
                    $ordersDetailsStatus = 1;
                    $ordersDetailID = $conn->lastInsertId();
                } catch (PDOException $e) {
                    $conn->rollBack();
                    echo "Error('order_details' table): " . $e->getMessage();
                }
            }
            if ($ordersDetailsStatus == 1 && $lastUpdated == 0) {
                echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
                    Order submitted successfully.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>';

                // send date-time to client

                echo "<p class='response_data submit-success d-none' data-timestamp='" . $order_timestamp . "' data-invoice='".$invoice_number."'>" . $order_time . "</p>";
            }
        }

        // "order_addon_details" table values
        // for now we have added array in "order_details" table and we can use that ids
    } else {
        $more = "";
        if ($countBlank > 1) {
            $more = "s";
        }
        echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>                                         
                    Submission of the order is denied due to <b>{$countBlank} empty record{$more}.</b>
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
                </div>";
    }
}
