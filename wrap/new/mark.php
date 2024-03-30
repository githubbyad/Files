<?php

include "../core/init.php";

$settings = new Settings;

// set time zone
$region = $settings->first()->region;
date_default_timezone_set($region);


if (isset($_GET['id'])) {

    $id = $_GET['id'];

    // check id in "orders" table
    $orderSql = $conn->prepare("SELECT * FROM orders WHERE order_id = :id");

    try {

        $orderSql->execute([':id' => $id]);
        $orderObj = $orderSql->fetchAll();

        if (count($orderObj)) {

            $id = $orderObj[0]->order_id;
            $start_time = $orderObj[0]->date_timestamp;
            $endtime = date("Y-m-d H:i:s", time());

            // if id available, proceed to clear "pending" status            
            $orderDeleteSql = $conn->prepare("UPDATE orders SET order_pending_status = '', date_timestamp = '{$endtime}' WHERE order_id = :id");

            try {

                $orderDeleteSql->execute([':id' => $id]);
                echo "Success";
            } catch (PDOException $e) {

                $conn->rollBack();
                echo $errorMessageStart . "<b>Error: Failed to mark as Done</b><br>" . $e->getMessage() . $errorMessageEnd;
                exit();
            }
        } else {

            // if id not available
            echo $errorMessageStart . "Requested Order is not available." . $errorMessageEnd;
        }
    } catch (PDOException $e) {

        echo $errorMessageStart . $e->getMessage() . $errorMessageEnd;
        exit();
    }
} else {

    echo $errorMessageStart . "Requested Order is not available." . $errorMessageEnd;
}
