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
                <input type="date" name="date1" class="form-control" placeholder="" value="<?= date("Y-m-d", time()) ?>" required>
                <label class="form-label text-muted">Starting Date</label>
            </div>
            <div class="form-floating mb-3 mb-lg-0 col-lg-5 px-0">
                <input type="date" name="date2" class="form-control" placeholder="" value="<?= date("Y-m-d", time()) ?>" required>
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
                <div class="col-lg-8 mt-4 ps-lg-0 pe-lg-1">

                    <div class="w-100 bg-section p-2 p-lg-3 rounded position-relative shadow printDiv">

                        <p class="fw-bold mb-2 border-bottom pb-2 d-flex justify-content-between">
                            <span>All Orders</span>
                            <span class="btn btn-outline-secondary fw-normal cursor-pointer no-print d-none" onclick="printDiv(this.closest('.printDiv'))">Print <?= $printIcon ?></span>
                        </p>

                        <div class="table-responsive">
                            <table class="table table-striped table-hover table-borderless mb-0" style="white-space: nowraap;">
                                <thead>
                                    <tr class="text-theme">
                                        <th>Invoice #</th>
                                        <th>Items</th>
                                        <th>Flavour</th>
                                        <th>Add-On</th>
                                        <th>Comment</th>
                                        <th class="text-end">Amount</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <?php foreach ($orders->get_list_by_date_range($_POST['date1'], $_POST['date2']) as $item) : ?>
                                    <tr>
                                        <td><?= $item->order_id . "-" . $item->order_number ?></td>
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
                                        <td><?= $item->order_comment ?></td>
                                        <td class="amounts text-end"><?= $item->order_amount ?></td>
                                        <td class="datex"><?= date("d/m <b>h:i A</b>", strtotime($item->date_timestamp)) ?></td>
                                    </tr>
                                <?php endforeach ?>
                                <tfoot style="background: var(--color2)">
                                    <th colspan="3" style="border-top: 3px solid tranparent">Grand Total</th>
                                    <th class="total_addon text-center" style="border-top: 3px solid var(--color6);"></th>
                                    <th style="border-top: 3px solid tranparent"></th>
                                    <th class="total_amount text-end" style="border-top: 3px solid var(--color6);"></th>
                                    <th style="border-top: 3px solid tranparent"></th>
                                </tfoot>
                            </table>
                            <script>
                                // total amount
                                let total_amount = 0;
                                document.querySelectorAll(".amounts").forEach(a => {
                                    total_amount += Number(a.innerHTML);
                                });
                                document.querySelector(".total_amount").innerHTML = localNumber(total_amount);

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
                                document.querySelector(".total_addon").innerHTML = localNumber(total_addon);
                                var tc = 0;
                                "Cheese (₹10)<br>Cheese (₹10)".split("₹").forEach(c => {
                                    if (c.split(")").length > 1) {
                                        tc += Number(c.split(")")[0]);
                                        // console.log(c);
                                    }
                                });
                            </script>
                        </div>
                    </div>
                </div>

                <!-- Summary -->
                <div class="col-lg-4 mt-4 ps-lg-1 pe-lg-0">

                    <!-- Summary by Categories-->
                    <div class="w-100 bg-section p-2 p-lg-3 mb-2 rounded position-relative shadow printDiv">
                        <p class="fw-bold mb-2 border-bottom pb-2 d-flex justify-content-between">
                            <span>Summary by Categories</span>
                            <span class="btn btn-outline-secondary fw-normal cursor-pointer no-print" onclick="printDiv(this.closest('.printDiv'))">Print <?= $printIcon ?></span>
                        </p>

                        <div class="table-responsive">
                            <table class="table table-striped table-hover table-borderless mb-0" style="white-space: nowrap;">
                                <thead>
                                    <tr class="text-theme">
                                        <th>Category</th>
                                        <th class="text-end">Qty</th>
                                        <th class="text-end">Total</th>
                                    </tr>
                                </thead>
                                <?php foreach ($orders->get_category_summary_by_date($_POST['date1'], $_POST['date2']) as $item) : ?>
                                    <tr>
                                        <td><?= $item->category ?></td>
                                        <td class="quantities2 text-end" data-quantity="<?= $item->quantity ?>"><?= moneyFormatIndia($item->quantity) ?></td>
                                        <td class="s_amounts2 text-end" data-amount="<?= $item->amount ?>"><?= moneyFormatIndia($item->amount) ?></td>
                                    </tr>
                                <?php endforeach ?>
                                <tfoot style="background: var(--color2)">
                                    <th style="border-top: 3px solid var(--color6);">Grand Total</th>
                                    <th class="total_summary_quantity2 text-end" style="border-top: 3px solid var(--color6);"></th>
                                    <th class="total_summary_amount2 text-end" style="border-top: 3px solid var(--color6);"></th>
                                </tfoot>
                            </table>
                            <script>
                                // total amount (summary)
                                let total_s_amount2 = 0;
                                document.querySelectorAll(".s_amounts2").forEach(a => {
                                    total_s_amount2 += Number(a.getAttribute('data-amount'));
                                });
                                document.querySelector(".total_summary_amount2").innerHTML = localNumber(total_s_amount2);

                                // total quantity (summary)
                                let total_s_quantity2 = 0;
                                document.querySelectorAll(".quantities2").forEach(a => {
                                    total_s_quantity2 += Number(a.getAttribute('data-quantity'));
                                });
                                document.querySelector(".total_summary_quantity2").innerHTML = localNumber(total_s_quantity2);
                            </script>
                        </div>
                    </div>

                    <!-- Summary by Items -->
                    <div class="w-100 bg-section p-2 p-lg-3 rounded position-relative shadow printDiv">
                        <p class="fw-bold mb-2 border-bottom pb-2 d-flex justify-content-between">
                            <span>Summary by Items</span>
                            <span class="btn btn-outline-secondary fw-normal cursor-pointer no-print" onclick="printDiv(this.closest('.printDiv'))">Print <?= $printIcon ?></span>
                        </p>

                        <div class="table-responsive">
                            <table class="table table-striped table-hover table-borderless mb-0" style="white-space: nowrap;">
                                <thead>
                                    <tr class="text-theme">
                                        <td class="fw-bold bb">Items</td>
                                        <td class="fw-bold text-end bb">Qty</td>
                                        <!-- <td class="fw-bold text-end bb"></td> -->
                                        <td class="fw-bold text-end bb">Total</td>
                                        <!-- <td class="fw-bold text-end bb"></td> -->
                                    </tr>
                                </thead>
                                <?php foreach ($orders->get_order_summary_by_date($_POST['date1'], $_POST['date2']) as $item) : ?>
                                    <tr data-category="<?= $item->category_name ?>" data-subqty="0" data-subamount="0">
                                        <td><?= $item->menu ?></td>
                                        <td class="quantities text-end" data-quantity="<?= $item->quantity ?>" data-category="<?= $item->category_name ?>"><?= moneyFormatIndia($item->quantity) ?></td>
                                        <!-- <td class="sub-qty fs-7" style="font-style: italic;"></td> -->
                                        <td class="s_amounts text-end" data-amount="<?= $item->amount ?>" data-category="<?= $item->category_name ?>"><?= moneyFormatIndia($item->amount) ?></td>
                                        <!-- <td class="sub-amount fs-7" style="font-style: italic;"></td> -->
                                    </tr>
                                <?php endforeach ?>
                                <tfoot style="background: var(--color2)">
                                    <th style="border-top: 3px solid var(--color6);">Grand Total</th>
                                    <th class="total_summary_quantity text-end" style="border-top: 3px solid var(--color6);"></th>
                                    <!-- <th></th> -->
                                    <th class="total_summary_amount text-end" style="border-top: 3px solid var(--color6);"></th>
                                    <!-- <th></th> -->
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <script>
                        // total amount (summary)
                        let total_s_amount = 0;
                        document.querySelectorAll(".s_amounts").forEach(a => {
                            total_s_amount += Number(a.getAttribute('data-amount'));
                        });
                        document.querySelector(".total_summary_amount").innerHTML = localNumber(total_s_amount);

                        // total quantity (summary)
                        let total_s_quantity = 0;
                        document.querySelectorAll(".quantities").forEach(a => {
                            total_s_quantity += Number(a.getAttribute('data-quantity'));
                        });
                        document.querySelector(".total_summary_quantity").innerHTML = localNumber(total_s_quantity);

                        // sub-quantity
                        document.querySelectorAll('.quantities').forEach(q => {
                            let currentCat = q.getAttribute('data-category');
                            let parentCat = q.parentElement.getAttribute('data-category');
                            let parentsubQ = q.parentElement.getAttribute('data-subqty');
                            let currentQ = q.getAttribute('data-quantity');
                            if (currentCat == parentCat) {
                                q.parentElement.setAttribute('data-subqty', Number(parentsubQ) + Number(currentQ));
                            }
                        });
                        document.querySelectorAll('tr[data-category]').forEach(c => {
                            if (c.previousElementSibling) {
                                if (c.getAttribute('data-category') == c.previousElementSibling.getAttribute('data-category')) {
                                    let current = Number(c.getAttribute('data-subqty'));
                                    let prev = Number(c.previousElementSibling.getAttribute('data-subqty'));
                                    let total = current + prev;
                                    c.setAttribute('data-subqty', total);
                                } else {
                                    c.previousElementSibling.querySelectorAll('td').forEach(t => {
                                        t.style.borderBottom = '0px dashed';
                                        t.closest('tr').classList.add('separator');
                                    });
                                }
                            }
                            if (!c.nextElementSibling) {
                                c.querySelectorAll('td').forEach(t => {
                                    t.style.borderBottom = '0px dashed';
                                });
                                c.classList.add('separator');

                            }
                        });

                        // sub-total
                        document.querySelectorAll('.s_amounts').forEach(q => {
                            let currentCat = q.getAttribute('data-category');
                            let parentCat = q.parentElement.getAttribute('data-category');
                            let parentsubAmt = q.parentElement.getAttribute('data-subamount');
                            let currentAmt = q.getAttribute('data-amount');
                            if (currentCat == parentCat) {
                                q.parentElement.setAttribute('data-subamount', Number(parentsubAmt) + Number(currentAmt));
                            }
                        });
                        document.querySelectorAll('tr[data-category]').forEach(c => {
                            if (c.previousElementSibling) {
                                if (c.getAttribute('data-category') == c.previousElementSibling.getAttribute('data-category')) {
                                    let current = Number(c.getAttribute('data-subamount'));
                                    let prev = Number(c.previousElementSibling.getAttribute('data-subamount'));
                                    let total = current + prev;
                                    c.setAttribute('data-subamount', total);
                                }
                            }
                        });

                        // add separator
                        document.querySelectorAll(".separator").forEach(s => {
                            s.insertAdjacentHTML(`afterend`, `
                            <tr>
                                <td class="fw-bold">Subtotal</td>
                                <td class="text-end fw-bold">${localNumber(Number(s.getAttribute('data-subqty')))}</td>
                                <td class="text-end fw-bold">${localNumber(Number(s.getAttribute('data-subamount')))}</td>
                            <tr>
                            `);
                        });
                    </script>

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