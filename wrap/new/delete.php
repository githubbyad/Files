<?php

include "../core/init.php";
include "../mail/email.php";

// instances
$settings = new Settings;
$orders = new Orders;
$orders_detail = new Order_details;

//include "../core/advanced_user.php";

if (isset($_GET['id'])) {

    $id = $_GET['id'];

    // check id in "orders" table
    $orderSql = $conn->prepare("SELECT * FROM orders WHERE order_id = :id");

    try {

        $orderSql->execute([':id' => $id]);
        $orderObj = $orderSql->fetchAll();

        if (count($orderObj)) {

            $deleteId = $orderObj[0]->order_id;

            // if id available, proceed to set delete = Y
            //$orderDeleteSql = $conn->prepare("DELETE FROM orders WHERE order_id = :did");
            $orderUpdateSql = $conn->prepare("UPDATE orders SET order_delete = 'Y', order_pending_status = 'Deleted' WHERE order_id = :did");

            try {

                $orderUpdateSql->execute([':did' => $deleteId]);

                // set 'order_delete' to order_details table
                $detailUpdateSql = $conn->prepare("UPDATE order_details SET order_delete = 'Y' WHERE order_id = :ddid");

                try {

                    $detailUpdateSql->execute([':ddid' => $deleteId]);

                    // send email
                    if ($settings->first()->allow_email_send == 'Yes') {

                        // get details of deleted orders
                        $order_deleted = $orders->first(['order_id' => $deleteId]);
                        $order_detail_deleted = $orders_detail->where(['order_id' => $deleteId]);
                        $detail_email = "<table border='1' cellspacing='0' cellpadding='5'><thead><th>Items</th><th>Qty</th><th>Amt</th></thead><tbody>";
                        foreach($order_detail_deleted as $item) {

                            // addon
                            $addons = "";
                            if (!empty($item->addons)) {
                                $filtered = str_replace("<", "", $item->addons);
                                $filtered = str_replace(">", "", $filtered);
                                $filtered = str_replace(",", ") - ", $filtered);
                                $filtered = str_replace("[", " - ", $filtered);
                                $filtered = str_replace("]", ")", $filtered);
                                $filtered = str_replace('@', " ({$currency}", $filtered);
                                $addons = $filtered;
                            }

                            $detail_email .= "<tr><td>$item->menu $item->submenu $addons</td><td>$item->order_quantity</td><td>$item->order_amount</td></tr>";
                        }
                        $detail_email .= "<tfoot><th colspan='2'>Total</th><th>$order_deleted->order_total_amount</th></tfoot></tbody></table>";

                        $mail->Subject =  "{$settings->first()->logo_text} - Order# {$order_deleted->order_number} has been deleted on {$order_deleted->order_date}";
                        $mail->Body    = "<b>Order#:</b> {$order_deleted->order_number}<br><b>Invoice#:</b> {$order_deleted->order_id}<br><br>{$detail_email}";
                        $mail->send();
                    }

                    // success message to redirect back to 'new' page
                    echo "Success";
                } catch (PDOException $e) {

                    $conn->rollBack();
                    echo $errorMessageStart . "<b>Error: Failed to set delete (order_details)</b><br>" . $e->getMessage() . $errorMessageEnd;
                    exit();
                }
                //echo "Success"; 

            } catch (PDOException $e) {

                $conn->rollBack();
                echo $errorMessageStart . "<b>Error: Failed to delete(orders)</b><br>" . $e->getMessage() . $errorMessageEnd;
                exit();
            }
            //echo $errorMessageStart . "Order No = " . $orderObj[0]->order_number . $errorMessageEnd;

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
