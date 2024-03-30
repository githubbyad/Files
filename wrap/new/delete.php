<?php

include "../core/init.php";

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
                    echo "Success";                    

                } catch(PDOException $e) {

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
