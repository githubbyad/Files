<?php

$title = "Order Summary";

include "../inc/header.php";
include "../core/advanced_user.php";

// instances
$menus = new Menus;
$orders = new Orders;
?>

<div class="row mx-0">

    <form action="" method="POST" class="col-lg-8 offset-lg-2 bg-section p-4 rounded position-relative shadow" autocomplete="off">

        <div class="row mx-0 justify-content-center">

            <p class="ps-0 text-muted">Select Starting & Ending Dates to get order summary.</p>
            <div class="form-floating mb-3 mb-lg-0 col-lg-5 px-0 ps-lg-0 pe-lg-2">
                <input type="date" name="date1" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Starting Date</label>
            </div>
            <div class="form-floating mb-3 mb-lg-0 col-lg-5 px-0">
                <input type="date" name="date2" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Ending Date</label>
            </div>
            <div class="mb-3 mb-lg-0 col-lg-2 ps-2 px-0">
                <center>
                    <button type="submit" name="submit" class="submit btn btn-dark w-100 py-3 px-4 mt-3 mt-lg-0">Submit</button>
                    <!-- <span class="cancel btn btn-danger w-auto py-2 px-4 mt-3 ms-3" onclick="window.history.back()">Cancel</span> -->
                </center>
            </div>
        </div>
    </form>

    <?php if ($_SERVER['REQUEST_METHOD'] == 'POST') : ?>

        <script>
            // show old date in date fields
            document.querySelector("input[name='date1']").value = "<?= $_POST['date1'] ?>";
            document.querySelector("input[name='date2']").value = "<?= $_POST['date2'] ?>";
        </script>

        <?php if (!is_array($orders->get_list_by_date_range($_POST['date1'], $_POST['date2']))) : ?>
            <div class="alert alert-danger mt-4 row col-lg-6 offset-lg-3">No order found. Please select another dates.</div>
        <?php else : ?>

            <div class="row mx-lg-0 px-lg-0">
                <!-- All order list -->
                <div class="col-lg-9 mt-4 ps-lg-0 pe-lg-1">

                    <div class="w-100 bg-section p-2 p-lg-3 rounded position-relative shadow">

                        <p class="fw-bold mb-2 border-bottom pb-2">All Orders</p>

                        <div class="table-responsive">
                            <table class="table table-striped table-hover table-borderless mb-0" style="white-space: nowraap;">
                                <thead>
                                    <tr class="text-theme">
                                        <th>Invoice #</th>
                                        <th>Items</th>
                                        <th>Flavour</th>
                                        <th>Add-On</th>
                                        <th class="text-end">Amount</th>
                                        <th>Comment</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <?php foreach ($orders->get_list_by_date_range($_POST['date1'], $_POST['date2']) as $item) : ?>
                                    <tr>
                                        <td><?= $item->order_id ?></td>
                                        <td><?= $item->menu ?></td>
                                        <td><?= $item->submenu ?></td>
                                        <td class="addons">
                                            <?php // addon
                                            $addons = "";
                                            if (!empty($item->addons)) {
                                                // [<Cheese@10>,<Red Cheese@15>]                        
                                                $filtered = str_replace("/[]", "", $item->addons);
                                                $filtered = str_replace("<", "", $item->addons);
                                                $filtered = str_replace(">", "", $filtered);
                                                $filtered = str_replace(",", ") - ", $filtered);
                                                $filtered = str_replace("[", "", $filtered);
                                                $filtered = str_replace("]", ")", $filtered);
                                                $filtered = str_replace(") - ", ")<br>", $filtered);
                                                $filtered = str_replace('@', " ({$currency}", $filtered);
                                                echo $addons = trim($filtered, ' - ');
                                            }
                                            ?>
                                        </td>
                                        <td class="amounts text-end"><?= $item->order_amount ?></td>
                                        <td><?= $item->order_comment ?></td>
                                        <td class="datex"><?= date("d/m <b>h:i A</b>", strtotime($item->date_timestamp)) ?></td>
                                    </tr>
                                <?php endforeach ?>
                                <tfoot style="background: var(--color2)">
                                    <th colspan="3">Total</th>
                                    <th class="total_addon text-center"></th>
                                    <th class="total_amount text-end"></th>
                                    <th colspan="2"></th>
                                </tfoot>
                            </table>
                            <script>
                                // total amount
                                let total_amount = 0;
                                document.querySelectorAll(".amounts").forEach(a => {
                                    total_amount += Number(a.innerHTML);
                                });
                                document.querySelector(".total_amount").innerHTML = total_amount;

                                // total add-ons
                                let total_addon = 0;
                                document.querySelectorAll(".addons").forEach(a => {
                                    let tc = 0;
                                    a.innerHTML.split("₹").forEach(c => {
                                        if (c.split(")").length > 1) {
                                            tc += Number(c.split(")")[0]);
                                        }
                                    });
                                    total_addon += tc;
                                });
                                document.querySelector(".total_addon").innerHTML = total_addon;
                                var tc = 0;
                                "Cheese (₹10)<br>Cheese (₹10)".split("₹").forEach(c => {
                                    if (c.split(")").length > 1) {
                                        tc += Number(c.split(")")[0]);
                                        console.log(c);
                                    }
                                });
                            </script>
                        </div>
                    </div>
                </div>

                <!-- Summary -->
                <div class="col-lg-3 mt-4 ps-lg-1 pe-lg-0">

                    <div class="w-100 bg-section p-2 p-lg-3 rounded position-relative shadow">
                        <p class="fw-bold mb-2 border-bottom pb-2">Summary</p>

                        <div class="table-responsive">
                            <table class="table table-striped table-hover table-borderless mb-0" style="white-space: nowrap;">
                                <thead>
                                    <tr class="text-theme">
                                        <th>Items</th>
                                        <th class="text-end">Quantity</th>
                                        <th class="text-end">Total</th>
                                    </tr>
                                </thead>
                                <?php foreach ($orders->get_order_summary_by_date($_POST['date1'], $_POST['date2']) as $item) : ?>
                                    <tr>
                                        <td><?= $item->menu ?></td>
                                        <td class="quantities text-end"><?= $item->quantity ?></td>
                                        <td class="s_amounts text-end"><?= $item->amount ?></td>
                                    </tr>
                                <?php endforeach ?>
                                <tfoot style="background: var(--color2)">
                                    <th>Total</th>
                                    <th class="total_summary_quantity text-end"></th>
                                    <th class="total_summary_amount text-end"></th>
                                </tfoot>
                            </table>
                            <script>
                                // total amount (summary)
                                let total_s_amount = 0;
                                document.querySelectorAll(".s_amounts").forEach(a => {
                                    total_s_amount += Number(a.innerHTML);
                                });
                                document.querySelector(".total_summary_amount").innerHTML = total_s_amount;

                                // total quantity (summary)
                                let total_s_quantity = 0;
                                document.querySelectorAll(".quantities").forEach(a => {
                                    total_s_quantity += Number(a.innerHTML);
                                });
                                document.querySelector(".total_summary_quantity").innerHTML = total_s_quantity;
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif ?>
    <?php endif ?>

    <?php
    //show($orders->get_list_by_date_range())
    ?>
    <style>
        .datex b {
            font-weight: normal;
            color: #6c6868;
            font-style: italic;
        }
    </style>
</div>


<?php include("../inc/footer.php"); ?>