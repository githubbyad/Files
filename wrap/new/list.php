<?php

$title = "All Orders";
include "../inc/header.php";

?>

<div class="row mx-0">

    <div class="col-lg-12 offset-lg-0 bg-section p-4 rounded position-relative">

        <p class="responseData mb-0"></p>

        <div class="table-responsive">
            <table class="table orderTable table-hover">
                <thead>
                    <tr class="text-theme">
                        <th scope="col">Invoice #</th>
                        <th scope="col">Order #</th>
                        <th scope="col">Items</th>
                        <th scope="col" class="text-end">Amount</th>
                        <th scope="col" class="text-center">Payment</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col" class="text-center">Status</th>
                        <th scope="col" class="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody class="text-gray">
                    <?php

                    $limit = 10;
                    $current_page = $_GET['page'] ?? 1;
                    $offset = (abs($current_page) - 1) * $limit;

                    $orderSql = $conn->prepare("SELECT o.order_id as id, 
                                                    o.order_number,
                                                    o.order_total_amount, 
                                                    o.order_date, 
                                                    o.order_pending_status,
                                                    o.order_payment_method,
                                                    GROUP_CONCAT(DISTINCT d.menu SEPARATOR '<br>') as m                                                  
                                                    FROM orders o 
                                                    JOIN order_details d 
                                                    ON o.order_id = d.order_id 
                                                    WHERE o.order_delete = ''
                                                    GROUP BY id
                                                    ORDER BY o.order_timestamp DESC
                                                    LIMIT {$offset}, {$limit}");
                    $orderSql->execute();
                    $orderObj = $orderSql->fetchAll();

                    if (count($orderObj)) {
                        foreach ($orderObj as $row) {

                            $pendingStatus = $row->order_pending_status == "" ? "<st class='st-success'>Done<st>" : "<st class='st-warning'>" . $row->order_pending_status . "</st>";
                            $tableData = "<tr class='text-dark'>
                                <td class='fw-bold'>{$row->id}</td>
                                <td class='fw-bold text-start'>{$row->order_number}</td>
                                <td>{$row->m}</td>
                                <td class='text-end'>{$currency_gray}{$row->order_total_amount}</td>
                                <td class='text-center'>{$row->order_payment_method}</td>
                                <td class='text-start'>{$row->order_date}</td>
                                <td class='text-center'>$pendingStatus</td>
                                <td class='text-center'>
                                    <button data-id='{$row->id}' class='viewItem btn btn-dark me-1'>View</button> ";
                            if ($user_level == 2) {
                                $tableData .= "                                                                       
                                    <button data-id='{$row->id}' data-order='{$row->order_number}' class='deleteItem btn btn-danger'>Delete</button>                                    
                                ";
                            }

                            $tableData .=  "</td></tr>";

                            echo $tableData;
                        }
                    } else {
                        echo "<td colspan='5'><h2 class='text-center fs-6 my-4 alert alert-danger'>No Orders Found</h2>";
                        echo "<p class='text-center'>Come back again after adding new ordes.</p></td>";
                    }
                    ?>
                </tbody>
            </table>

            <!-- Pagination -->
            <?php
            $pagination_table = "orders";
            include "../inc/pagination.php";
            ?>

        </div>

    </div>

</div>

<script>
    // view item
    document.querySelectorAll(".viewItem").forEach(v => {
        v.addEventListener("click", () => {
            const id = v.getAttribute('data-id');
            window.location.href = `view?id=${id}`;
        })
    });

    // delete item
    function deleteConfirmed(id) {

        const deleteData = async () => {
            const response = await fetch(`delete.php?id=${id}`);
            const data = await response.text();
            document.querySelector(".responseData").innerHTML = data;
            document.querySelector("body").scrollIntoView();
            if (data == "Success") {
                document.querySelector(".responseData").innerHTML = "<?php echo $successMessageStart ?>Deleted Successfully<?php echo $successMessageEnd ?>";
                document.querySelector(`.deleteItem[data-id='${id}']`).closest('tr').classList.add('d-none');
            }
        };
        deleteData();
    }
    // click on "Delete" button
    document.querySelectorAll(".deleteItem").forEach(d => {
        d.addEventListener("click", () => {
            document.querySelector(".responseData").innerHTML = "";
            const id = d.getAttribute('data-id');
            const order = d.getAttribute('data-order');
            confirmdelete(`Do you want to delete order# <b>${order}</b>`, id);
        })
    });
</script>

<?php include("../inc/footer.php"); ?>