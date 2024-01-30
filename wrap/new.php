<?php

$title = "New Order";
include "../inc/header.php";

// instances
$orders = new Orders;

// get order & invice numbers
$order_number = 1;
$order_invoice = 1;
$orders_last_record = $orders->first([], [], 'order_id');

if ($orders_last_record) {
    $order_invoice = intval($orders_last_record->order_id) + 1;
    $order_number = intval($orders_last_record->order_number) + 1;
}


// current time
$timeNow = time();
$timeNowDate = date("D\, jS M h:i:s A");


// pending orders
$pendingSql = $conn->prepare("SELECT * FROM orders WHERE order_pending_status = :p");
$pendingSql->execute([':p' => 'Pending']);
$pendingRes = $pendingSql->fetchAll();
$pendingOrders = count($pendingRes);

?>
<!-- print customer -->
<div class="modal fade" id="checkModal" tabindex="-1" aria-labelledby="checkModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
        <div class="modal-content w-auto">
            <div class="modal-header d-none">
                <h1 class="modal-title fs-6 w-100 text-center text-dark fw-bold" id="checkModalLabel">Check Items Before Print</h1>
                <button type="button" class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="order_modal modal-body pb-0 d-flex justify-content-center">

            </div>
            <div class="modal-footer pt-0 border-0 d-flex justify-content-center">
                <button type="button" class="submitCustomer btn btn-dark px-4" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="orderDiv orderDivCustomer row rounded bg-body p-3 shadow" style="width: 80mm;display:none;">
    <div class="crrentOrders printme border-0 text-black p-lg-0 px-0">
        <p class="printShow text-center mb-0 justify-content-center align-items-center">
            <span class="fw-bold d-block OrderCompanyName"><?= $company_logo ?></span>
            <span class="OrderCompanyAddress d-block"><?= $address ?></span>
        </p>
        <p class="printShow text-center pt-0 mb-0 justify-content-center align-items-center" style="border-top: 1px dashed;border-bottom: 1px dashed;display:flex;">
            <span class="orderNumText fs-6">Order</span>:<span class="or_number ms-2 fw-bold" style="font-size:3rem !important;line-height: 3.3rem;"><?= $order_number ?></span>
        </p>
        <p class="printShow float-start w-100 mb-0" style="line-height: 1.3rem !important;border-bottom: 1px dashed;">
            <span class="orderInvoice float-start">INV# <inv><?= $order_invoice ?></inv></span>
            <span class="OrderTime float-end"><?= $timeNowDate ?></span>
        </p>
        <div class="position-relative mt-0 mb-1 w-100">
            <table class="table fs-p">
                <thead>
                    <tr>
                        <th scope="col" class="text-center" style="width:50px;">Qty</th>
                        <th scope="col">Item</th>
                        <th scope="col" class="text-end">Amt</th>
                    </tr>
                </thead>
                <tbody class="crrentOrdersList">
                </tbody>
            </table>
            <div class="w-100 fw-bold text-end pt-4 fs-6 totalLine">
                <span class="pe-2 totalText">TOTAL</span>
                <span class="totalAmountLine">
                    <gray><?= $currency ?></gray> <b class="totalAmount">0</b>
                </span>
            </div>
        </div>
    </div>
</div>
<!-- print customer-->

<!-- print kitchen -->
<div class="orderDivKitchen row rounded bg-body p-3 shadow" style="width: 80mm;display:none;">
    <div class="crrentOrdersKitchen printme border-2 text-black p-lg-0 px-0">
        <div class="printShow text-center pt-0 mb-0 d-flex justify-content-between align-items-end" style="border-bottom: 1px dashed;display:flex;">
            <div class="d-flex align-items-center"><span class="orderNumText fs-6">Order</span>:<span class="or_number ms-2 fw-bold" style="font-size:3rem !important;line-height: 3.3rem;"><?= $order_number ?></span></div>
            <div class="d-inline-block">
                <span class="orderInvoice d-block text-end" style="line-height: 1.1rem;">INV# <inv><?= $order_invoice ?></inv></span>
                <span class="OrderTime d-block text-end"><?= $timeNowDate ?></span>
            </div>
        </div>
        <div class="position-relative mt-0 mb-1 w-100">
            <table class="table fs-5">
                <thead class="d-none">
                    <tr>
                        <th scope="col" class="text-center" style="width:80px;">Qty</th>
                        <th scope="col">Item</th>
                    </tr>
                </thead>
                <tbody class="crrentOrdersListKitchen fw-bold caption">
                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- print kitchen-->

<!-- print options -->
<div class="modal fade no-print" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
        <div class="modal-content w-100">
            <div class="modal-header">
                <h1 class="modal-title fs-6 w-100 text-center text-dark fw-bold" id="exampleModalLabel">Select Print Option</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-none"></div>
            <div class="modal-footer d-flex justify-content-center">
                <button type="button" class="printCustomer btn btn-warning me-3">For Customer (<bl>C</bl>)</button>
                <button type="button" class="printKitchen btn btn-dark">For Kitchen (<bl>V</bl>)</button>
            </div>
        </div>
    </div>
</div>
<!-- /print options -->


<!-- order code copy -->
<div class="orderCopy d-none"></div>
<!-- order code copy -->

<form id="orderForm" action="" method="POST" class="position-relative no-print" style="box-shadow: none;">

    <input type="hidden" name="order_number" value="<?= $order_number ?>" class="order_number_value">
    <input type="hidden" name="order_id" value="<?= $order_invoice ?>" class="order_id_value">
    <!-- <input type="hidden" name="invoice" value="<?= $order_invoice ?>" class="invoice"> -->
    <input type="hidden" name="order_timestamp" value="<?= $timeNow ?>" class="order_timestamp_value">
    <input type="hidden" name="order_date" value="<?= $timeNowDate ?>" class="order_date_value">
    <input type="hidden" name="staff" value="<?= $_SESSION['user'] ?>" class="staff_value">
    <input type="hidden" name="order_amount" value="" class="order_amount_value">

    <div class="row mx-0">
        <div class="col-lg-12 bg-section p-3 mb-0 rounded shadow">
            <div class="table-responsive">
                <table class="table orderTable table-hover">
                    <thead>
                        <tr class="text-theme">
                            <th scope="col"></th>
                            <th scope="col">Category</th>
                            <th scope="col">Menu</th>
                            <th scope="col">Flavour</th>
                            <th scope="col">Add-On</th>
                            <th scope="col" class="text-center total_quantity">Quantity<b></b></th>
                            <th scope="col">Parcel</th>
                            <th scope="col" style="width:180px;">Comment</th>
                            <th scope="col" class="text-end">Amount</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider text-theme">
                        <tr class="align-middle">
                            <td title="Delete Order"><?= $deleteIcon; ?></td>
                            <td class="tdCategory">
                                <select class="selectCategory form-select border border-theme blankValueCheck">
                                    <option selected disabled value="">Category</option>
                                    <?php
                                    $categoryResult = $conn->prepare("SELECT * from categories WHERE status = :status ORDER BY category_order");
                                    $categoryResult->execute([':status' => 'Yes']);
                                    $categoryObj = $categoryResult->fetchAll();
                                    if (count($categoryObj)) {
                                        foreach ($categoryObj as $row) {
                                            echo "<option 
                                                data-category-id='{$row->category_id}' 
                                                data-category-name='{$row->category_name}' 
                                                value='{$row->category_name}'>{$row->category_name}
                                            </option>";
                                        }
                                    }
                                    ?>
                                </select>
                                <input type="hidden" name="category[]" class="category">
                            </td>
                            <td class="tdMenu">
                                <select class="selectMenu form-select border border-theme blankValueCheck" disabled>
                                    <option selected disabled value="">Select Menu</option>
                                    <?php
                                    $menuResult = $conn->prepare("SELECT * from menus WHERE menu_active_status = :status ORDER BY menu_display_name");
                                    $menuResult->execute([':status' => 'Yes']);
                                    $menuObj = $menuResult->fetchAll();
                                    if (count($menuObj)) {
                                        foreach ($menuObj as $row) {
                                            echo "<option 
                                                data-category-id='{$row->category_id}' 
                                                data-menu-id='{$row->menu_id}' 
                                                data-menu-name='{$row->menu_display_name}' 
                                                data-menu-amount='{$row->menu_amount}' 
                                                data-currency='{$currency}'
                                                value='{$row->menu_display_name}'
                                                class='d-none'>
                                                    {$row->menu_display_name}
                                            </option>";
                                        }
                                    }
                                    ?>
                                </select>
                                <input type="hidden" name="menu[]" class="menu">
                            </td>
                            <td class="tdSubMenu">
                                <select class="selectSubMenu text-dark form-select border border-theme blankValueCheck" disabled>
                                    <option selected disabled>Select Flavour</option>
                                    <?php
                                    $submenuResult = $conn->prepare("SELECT * from submenus WHERE submenu_active_status = :status ORDER BY submenu_display_name");
                                    $submenuResult->execute([':status' => 'Yes']);
                                    $submenuObj = $submenuResult->fetchAll();
                                    if (count($submenuObj)) {
                                        foreach ($submenuObj as $row) {
                                            echo "<option 
                                                data-category-id='{$row->category_id}' 
                                                data-submenu-id='{$row->submenu_id}' 
                                                data-submenu-name='{$row->submenu_display_name}' 
                                                data-submenu-amount='{$row->submenu_amount}' 
                                                data-currency='{$currency}'
                                                value='{$row->submenu_display_name}'
                                                class='d-none'>
                                                    {$row->submenu_display_name}
                                            </option>";
                                        }
                                    }
                                    ?>
                                </select>
                                <input type="hidden" name="submenu[]" class="submenu">
                            </td>
                            <td class="tdAddOn">
                                <?php
                                $addonResult = $conn->prepare("SELECT * from addons WHERE addon_active_status = :status ORDER BY addon_order");
                                $addonResult->execute([':status' => 'Yes']);
                                $addonObj = $addonResult->fetchAll();
                                if (count($addonObj)) {
                                    foreach ($addonObj as $row) {
                                        echo "<div class='form-check user-select-none d-none'>
                                            <input class='selectAddOn form-check-input' type='checkbox' value='' id='check_{$row->addon_id}' data-category-id='{$row->category_id}' data-addon-id='{$row->addon_id}' data-addon-name='{$row->addon_display_name}' data-addon-amount='{$row->addon_amount}' disabled>
                                            <label class='form-check-label cursor-pointer text-dark' for='check_{$row->addon_id}'>
                                                {$row->addon_display_name} <gray>{$currency}</gray>{$row->addon_amount}
                                            </label>
                                            <input type='hidden' name='addon[]' class='addon'>
                                        </div>";
                                    }
                                }
                                ?>
                                <input type='hidden' name='addonMerge[]' class='addonMerge'>
                            </td>
                            <td class="tdQuantity">
                                <p class="quantityParent mb-0 user-select-none disabledBox">
                                    <?= $minusIcon; ?>
                                    <span class="currentQuantity text-dark mx-2 fw-bold">1</span>
                                    <?= $plusIcon; ?>
                                </p>
                                <input type="hidden" name="order_quantity[]" class="order_quantity" value="1">
                            </td>
                            <td class="tdParcel">
                                <select class="selectParcel text-dark form-select border border-theme" disabled>
                                    <option value="Yes">Yes</option>
                                    <option value="No" selected>No</option>
                                </select>
                                <input type='hidden' name='order_parcel_status[]' class='order_parcel_status'>
                            </td>
                            <td class="tdComment" style="width:180px;">
                                <input type="text" class="selectComment form-control disabledBox" placeholder="Write Comment" list="commentList" disabled>
                                <datalist id="commentList">
                                    <?php
                                    $commSql = $conn->prepare("SELECT * FROM comments WHERE status = 'Yes'");
                                    $commSql->execute();
                                    $commRes = $commSql->fetchAll();
                                    if (count($commRes)) {
                                        foreach ($commRes as $row) {
                                            echo "<option value='{$row->text}'>{$row->text}</option>";
                                        }
                                    } ?>
                                </datalist>
                                <input type="hidden" name="order_comment[]" class="order_comment">
                            </td>
                            <td class="tdAmount text-end fw-bold">
                                <span class="order_amount_display fs-5">0</span>
                                <input type="hidden" name="order_amount[]" class="order_amount">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row my-2">
                <div class="col-12 text-black d-flex justify-content-between position-relative">
                    <div>
                        <span class="addMore btn btn-dark fw-normal fs-6 py-2 px-3 mb-0 d-inline-block me-3 me-lg-0 ms-0 ms-lg-3 float-start"><?= $newOrderIcon ?> Add More</span>
                    </div>
                    <div class="d-flex flex-column align-items-end mb-0 fw-bold fs-4 pe-1 w-50">
                        <table class="subAmountTable" data-discount="0">
                            <tr>
                                <td class="ps-5 pe-3">Subtotal:</td>
                                <td class="subTotalAmount fw-bold"></td>
                            </tr>
                            <tr>
                                <td class="ps-5 pe-3">Discount <span class="discountPercentageShow"></span>:</td>
                                <td class="discountFieldValue fw-bold"></td>
                            </tr>
                        </table>
                        <input type="hidden" name="sub_total" value="0" class="sub_total_amount">
                        <input type="hidden" name="discount" value="0" class="discount_amount">

                        <!-- <p class="subTotalText text-end" data-discount="0">
                            <span>Sub Total</span>
                            <span class="subTotalAmount ms-4"></span>
                            <input type="hidden" name="sub_total" value="0" class="sub_total_amount">
                        </p>
                        <p class="discountText text-end" data-discount="0">
                            <span>Discount</span>
                            <span class="discountPercentageShow"></span>
                            <span class="discountFieldValue ms-4"></span>
                            <input type="hidden" name="discount" value="0" class="discount_amount">
                        </p> -->

                        <p class="mb-0 text-end">
                            <span class="totalAllText">Total</span>
                            <gray class="ms-1"><?= $currency ?></gray>
                            <span class="totalAmountAll">0</span>
                            <input type="hidden" class="order_total_amount" name="order_total_amount">
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 offset-lg-6">
                    <div class="responseData"></div>
                </div>
            </div>
            <div class="row paymentRow bg-white layoutBar shadow" style="z-index: 2;">
                <div class="submitBox col-12 text-center my-2">

                    <span class="pendingOrder updatePending btn btn-danger fw-normal fs-6 py-2 px-3 d-inline-block me-4" onclick="window.open('pending','_self');" data-pending="<?= $pendingOrders ?>"><?= $waitIcon ?>Pending <b><?= $pendingOrders ?></b></span>
                    <script>
                        document.querySelector(".new-order-top").insertAdjacentElement("beforebegin", document.querySelector(".pendingOrder"));
                    </script>

                    <span class="print btn btn-warning fw-normal fs-6 py-2 px-3 me-3 mb-3 mb-lg-0 d-inline-block ms-3 float-end disabledBox d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"><?= $printIcon ?> Print</span>

                    <button type="submit" class="submit btn btn-primary fw-normal fs-6 py-2 me-3 px-3 mb-3 mb-lg-0 d-inline-block float-end disabledBox" data-total-amount=""><?= $placeOrderIcon ?> Submit</button>

                    <div class="payByBox d-inline-block border bg-body rounded user-select-none px-3 py-2 float-end me-3">
                        <span class="float-start fw-bold text-black me-2">Pay By:</span>
                        <div class="d-inline-block">
                            <div class="form-check d-inline-block w-auto payment_select">
                                <input class="form-check-input order_payment_checkbox" type="radio" name="order_payment_checkbox" data-method="Cash" id="payment1">
                                <label class="form-check-label text-black cursor-pointer px-2" for="payment1">Cash</label>
                            </div>
                            <div class="form-check d-inline-block w-auto ms-2 payment_select">
                                <input class="form-check-input order_payment_checkbox" type="radio" name="order_payment_checkbox" data-method="Online" id="payment2">
                                <label class="form-check-label text-black cursor-pointer px-2" for="payment2">Online</label>
                            </div>
                        </div>
                        <input type="hidden" class="order_payment_method" name="order_payment_method">
                    </div>
                    <span class="parcel_toggle btn btn-light float-end fw-normal me-3 px-3 py-2"><?= $parcel_icon ?> All Parcel<b></b></span>
                    <span class="check_items btn btn-light float-end fw-normal me-3 px-3 py-2" data-bs-toggle="modal" data-bs-target="#checkModal"><?= $check_items_icon ?> Items</span>
                    <span class="btn btn-light float-end fw-normal me-3 px-3 py-2" data-bs-toggle="modal" data-bs-target="#customerModal"><?= $new_customer_icon ?> Customer</span>
                    <span class="btn btn-light float-end fw-normal me-3 px-3 py-2" data-bs-toggle="modal" data-bs-target="#discountModal"><?= $percentage_icon  ?> Discount</span>
                    <span class="btn btn-danger float-end fw-normal fst-italic me-3 px-3 py-2 online_order">Zomato</span>
                    <span class="btn btn-danger float-end fw-normal me-3 px-3 py-2 online_order" style="background-color:#f58926;border-color:#f58926;">Swiggy</span>
                </div>
            </div>
        </div>

        <!-- customer details -->
        <div class="modal fade" id="customerModal" tabindex="-1" aria-labelledby="customerModalLabel" data-bs-backdrop="static" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
                <div class="modal-content w-100">
                    <div class="modal-header">
                        <h1 class="modal-title fs-6 w-100 text-center text-dark fw-bold" id="customerModalLabel">Customer Information</h1>
                        <button type="button" class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating mb-3 px-0">
                            <input type="text" name="customer_name" class="form-control" placeholder="" list="customerList" autocomplete="off">
                            <datalist id="customerList">
                                <option value="Zomato">Zomato</option>
                                <option value="Swiggy">Swiggy</option>
                            </datalist>
                            <label class="form-label text-muted">Name</label>
                        </div>
                        <div class="form-floating mb-3 px-0">
                            <input type="text" name="customer_phone" class="form-control" <?php echo $onlyNumber ?> placeholder="" autocomplete="off">
                            <label class="form-label text-muted">Phone</label>
                        </div>
                        <div class="form-check user-select-none">
                            <input class="form-check-input" name="customer_repeat" type="checkbox" id="customer_repeat">

                            <label class="form-check-label cursor-pointer" for="customer_repeat">
                                Customer Repeated
                            </label>
                        </div>

                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="submitCustomer btn btn-dark me-3 px-4" data-bs-dismiss="modal">Save</button>
                        <button type="button" class="cancelCustomer btn btn-danger px-3" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- discount details -->
        <div class="modal fade" id="discountModal" tabindex="-1" aria-labelledby="discountModalLabel" data-bs-backdrop="static" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
                <div class="modal-content w-100">
                    <div class="modal-header">
                        <h1 class="modal-title fs-6 w-100 text-center text-dark fw-bold" id="discountModalLabel">Discount Details</h1>
                        <button type="button" class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="form-check user-select-none mb-2">
                            <input class="form-check-input" type="radio" name="discountRadio" id="percentageRadio">
                            <label class="form-check-label cursor-pointer" for="percentageRadio">
                                (%) Pecentage
                            </label>
                        </div>
                        <p class="text-muted mb-1 ps-4">OR</p>
                        <div class="form-check user-select-none mb-3">
                            <input class="form-check-input" type="radio" name="discountRadio" id="fixedAmountRadio">
                            <label class="form-check-label cursor-pointer" for="fixedAmountRadio">
                                (<?= $currency ?>) Fixed Amount
                            </label>
                        </div>
                        <div class="by_percentage form-floating mb-3 px-0 d-none">
                            <input type="text" name="by_percentage" min="0" max="100" value="0" class="form-control" <?php echo $onlyNumber ?> placeholder="" autocomplete="off">
                            <label class="form-label text-muted">(%) Percentage</label>
                            <p class="mb-0">
                                <span>5</span>
                                <span>10</span>
                                <span>15</span>
                                <span>20</span>
                                <span>25</span>
                                <span>30</span>
                                <span>50</span>
                                <span>100</span>
                            </p>
                        </div>
                        <div class="by_amount form-floating mb-3 px-0 d-none">
                            <input type="text" name="by_amount" value="0" class="form-control" <?php echo $onlyNumber ?> placeholder="" autocomplete="off">
                            <label class="form-label text-muted">(<?= $currency ?>) Fixed Amount</label>
                        </div>

                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        <button type="button" class="submitDiscount btn btn-dark me-3 px-4" data-discount-mode="" data-bs-dismiss="modal">Save</button>
                        <button type="button" class="cancelDiscount btn btn-danger px-3" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</form>
<script>
    // amount calculation on each row
    const trAmount = () => {
        document.querySelectorAll(".orderTable .tdAmount").forEach(t => {
            const menu_amount = t.closest("tr").querySelector(".tdMenu .menu").getAttribute("data-menu-amount");
            const submenu_amount = t.closest("tr").querySelector(".tdSubMenu .submenu").getAttribute("data-submenu-amount");
            const quantity = t.closest("tr").querySelector(".tdQuantity .currentQuantity").innerHTML;
            let addon = 0;
            t.closest("tr").querySelectorAll(".tdAddOn .addon").forEach(a => (addon += Number(a.getAttribute("data-addon-amount"))));
            let totalAmountPerItem = (Number(menu_amount) + Number(submenu_amount) + Number(addon)) * Number(quantity);
            t.querySelector(".order_amount_display").innerHTML = totalAmountPerItem;
            t.querySelector(".order_amount").value = totalAmountPerItem;
        });
        let totalMerge = 0;
        document.querySelectorAll(".orderTable .tdAmount .order_amount_display").forEach(a => {
            totalMerge += Number(a.innerHTML);
        });
        document.querySelector(".sub_total_amount").value = totalMerge;

        // discount
        let discountCalc = 0;
        let discountCheck = document.querySelector(".submitDiscount").getAttribute("data-discount-mode");
        if (totalMerge == 0) {
            document.querySelector(".subTotalAmount").innerHTML = totalMerge;
        }
        if (discountCheck != "" && totalMerge != 0) {
            document.querySelector(".subTotalAmount").innerHTML = totalMerge;
            if (discountCheck == "percentageRadio") {
                discountCalc = (Number(document.querySelector(".by_percentage input").value) / 100) * totalMerge;
            } else if (discountCheck == "fixedAmountRadio") {
                discountCalc = Number(document.querySelector(".by_amount input").value)
            }
            totalMerge = totalMerge - discountCalc;

            // discount field value
            if (discountCalc - Math.floor(discountCalc) !== 0) {
                discountCalc = discountCalc.toFixed(2);
            }
            document.querySelector(".discount_amount").value = discountCalc;
            document.querySelector(".discountFieldValue").innerHTML = `- ${discountCalc}`;
            document.querySelector(".subAmountTable").setAttribute("data-discount", discountCalc);
            // document.querySelector(".discountText").setAttribute("data-discount", discountCalc);
        }

        // checking decimal points
        if (totalMerge - Math.floor(totalMerge) !== 0) {
            totalMerge = totalMerge.toFixed(2);
        }

        // set value to all places
        document.querySelector(".totalAmountAll").innerHTML = totalMerge;
        document.querySelector(".totalAmount").innerHTML = totalMerge;
        document.querySelector(".order_total_amount").value = totalMerge;

        // quanity calculation
        let all_quantity = 0;
        document.querySelectorAll(".currentQuantity").forEach(c => {
            all_quantity += Number(c.innerHTML);
        });
        document.querySelector(".total_quantity b").innerHTML = all_quantity;
    };

    // quantity plus
    const plusClicked = p => {
        let q = Number(p.parentElement.querySelector(".currentQuantity").innerHTML) + 1;
        p.parentElement.querySelector(".currentQuantity").innerHTML = q;
        p.parentElement.parentElement.querySelector(".order_quantity").value = q;
        p.parentElement.querySelector(".minusIcon").style.opacity = (p.parentElement.querySelector(".currentQuantity").innerHTML != 1) ? 1 : 0;
        trAmount(); // amount calculation
    }

    // quantity minus
    const minusClicked = p => {
        if (p.parentElement.querySelector(".currentQuantity").innerHTML != 1) {
            p.parentElement.querySelector(".currentQuantity").innerHTML = Number(p.parentElement.querySelector(".currentQuantity").innerHTML) - 1;
            p.parentElement.parentElement.querySelector(".order_quantity").value = p.parentElement.querySelector(".currentQuantity").innerHTML;
            p.parentElement.querySelector(".minusIcon").style.opacity = (p.parentElement.querySelector(".currentQuantity").innerHTML != 1) ? 1 : 0;
            trAmount(); // amount calculation
        }
    }


    // load all scripts
    const loadScript = () => {

        // disable enter key
        var el = window;
        el.addEventListener("keypress", event => {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });

        // menu and submenu - show amount if its added
        let currn = "<?= $currency ?>";
        document.querySelectorAll(".selectMenu option").forEach(s => {
            if (s.getAttribute("data-menu-amount") > 0 && !s.innerHTML.includes(currn)) {
                s.innerHTML += `<gray>${s.getAttribute('data-currency')}</gray> ${s.getAttribute('data-menu-amount')}`;
            }
        });
        document.querySelectorAll(".selectSubMenu option").forEach(s => {
            if (s.getAttribute("data-submenu-amount") > 0 && !s.innerHTML.includes(currn)) {
                s.innerHTML += `<gray>${s.getAttribute('data-currency')}</gray> ${s.getAttribute('data-submenu-amount')}`;
            }
        });


        // addon id and for
        document.querySelectorAll(".tdAddOn").forEach((s, i) => {
            s.querySelectorAll(".selectAddOn").forEach(j => j.setAttribute("id", `${j.getAttribute("id")}_${i}`));
            s.querySelectorAll(".form-check-label").forEach(k => k.setAttribute("for", `${k.getAttribute("for")}_${i}`));
        });


        // select category
        // auto-select first category
        document.addEventListener("DOMContentLoaded", () => {
            //document.querySelector('.selectCategory') && (document.querySelectorAll('.selectCategory option').selectedIndex = 2);
        });
        document.querySelectorAll(".selectCategory").forEach(c => {
            c.addEventListener("change", e => {
                c.parentElement.querySelector(".category").value = e.target.options[e.target.selectedIndex].getAttribute("data-category-name");
                const selectedCategoryId = e.target.options[e.target.selectedIndex].getAttribute("data-category-id");
                c.classList.remove("blankValueCheck");
                c.classList.remove("blankValue");


                // effect on menu
                c.closest("tr").querySelectorAll(".tdMenu .selectMenu option").forEach((m, i) => {
                    m.parentElement.disabled = false;
                    if (i > 0) {
                        m.parentElement.value = "";
                        m.classList.add("d-none");
                        m.getAttribute("data-category-id") == selectedCategoryId && m.classList.remove("d-none");
                    }
                    m.parentElement.querySelector("option").selected = true;
                });
                c.closest("tr").querySelector(".tdMenu .menu").value = "";
                c.closest("tr").querySelector(".tdMenu .menu").setAttribute("data-menu-name", "");
                c.closest("tr").querySelector(".tdMenu .menu").setAttribute("data-menu-amount", 0);

                // effect on submenu
                c.closest("tr").querySelectorAll(".tdSubMenu .selectSubMenu option").forEach((m, i) => {
                    m.parentElement.disabled = true;
                    if (i > 0) {
                        m.parentElement.value = "";
                        m.classList.add("d-none");
                        m.getAttribute("data-category-id") == selectedCategoryId && m.classList.remove("d-none");
                    }
                    m.parentElement.querySelector("option").selected = true;
                });
                c.closest("tr").querySelector(".tdSubMenu .submenu").value = "";
                c.closest("tr").querySelector(".tdSubMenu .submenu").setAttribute("data-submenu-name", "");
                c.closest("tr").querySelector(".tdSubMenu .submenu").setAttribute("data-submenu-amount", 0);

                // effect on addon
                c.closest("tr").querySelectorAll(".tdAddOn .selectAddOn").forEach(m => {
                    m.checked = false;
                    m.disabled = true;
                    m.classList.remove("d-none");
                    m.parentElement.classList.add("d-none");
                    if (m.getAttribute("data-category-id") == selectedCategoryId) {
                        m.parentElement.classList.remove("d-none");
                        m.classList.remove("d-none");
                        //m.disabled = false;
                    }
                });
                c.closest("tr").querySelectorAll(".tdAddOn .addon").forEach(t => {
                    t.value = "";
                    t.setAttribute("data-addon-name", "");
                    t.setAttribute("data-addon-id", "");
                    t.setAttribute("data-addon-amount", 0);
                });
                c.closest("tr").querySelectorAll(".tdAddOn .addonMerge").forEach(t => {
                    t.value = "";
                    t.setAttribute("data-addons", "");
                });

                // effect on quantity
                c.closest("tr").querySelector(".tdQuantity .currentQuantity").innerHTML = 1;
                c.closest("tr").querySelector(".tdQuantity .minusIcon").style.opacity = 0;
                c.closest("tr").querySelector(".tdQuantity .order_quantity").value = 1;
                c.closest("tr").querySelector(".tdQuantity .quantityParent").classList.add("disabledBox");

                // effect on parcel
                c.closest("tr").querySelector(".tdParcel .selectParcel").value = document.querySelector(".selectParcel").value;
                c.closest("tr").querySelector(".tdParcel .order_parcel_status").value = document.querySelector(".selectParcel").value;
                c.closest("tr").querySelector(".tdParcel .selectParcel").disabled = true;


                // effect on comment
                c.closest("tr").querySelector(".tdComment .selectComment").value = "";
                c.closest("tr").querySelector(".tdComment .order_comment").value = "";
                c.closest("tr").querySelector(".tdComment .selectComment").disabled = true;
                c.closest("tr").querySelector(".tdComment .selectComment").classList.add("disabledBox");

                // effect on amount
                trAmount();

            });
        });

        // select menu
        document.querySelectorAll(".selectMenu").forEach(c => {
            c.addEventListener("change", e => {
                c.parentElement.querySelector(".menu").value = e.target.options[e.target.selectedIndex].getAttribute("data-menu-name");
                c.parentElement.querySelector(".menu").setAttribute("data-menu-name", e.target.options[e.target.selectedIndex].getAttribute("data-menu-name"));
                c.parentElement.querySelector(".menu").setAttribute("data-menu-amount", e.target.options[e.target.selectedIndex].getAttribute("data-menu-amount"));
                const selectedCategoryId = e.target.options[e.target.selectedIndex].getAttribute("data-category-id");
                c.classList.remove("blankValueCheck");
                c.classList.remove("blankValue");

                // effect on submenu
                c.closest("tr").querySelectorAll(".tdSubMenu .selectSubMenu option").forEach((m, i) => {
                    m.parentElement.disabled = false;
                    if (i > 0) { // ignore first field "Select SubMenu"
                        m.parentElement.value = "";
                        m.classList.add("d-none");
                        if (m.getAttribute("data-category-id") == selectedCategoryId) {
                            m.classList.remove("d-none");
                        }
                    }
                    m.parentElement.querySelector("option").selected = true;
                });
                if (c.closest("tr").querySelectorAll(".selectSubMenu option[class=''][data-category-id]").length == 0) {
                    c.closest("tr").querySelector(".selectSubMenu").disabled = true;
                } else {
                    c.closest("tr").querySelector(".selectSubMenu").disabled = false;
                }
                c.closest("tr").querySelector(".tdSubMenu .submenu").value = "";
                c.closest("tr").querySelector(".tdSubMenu .submenu").setAttribute("data-submenu-name", "");
                c.closest("tr").querySelector(".tdSubMenu .submenu").setAttribute("data-submenu-amount", 0);
                c.closest("tr").querySelector(".tdSubMenu .selectSubMenu").classList.add("blankValueCheck");

                // effect on addon
                c.closest("tr").querySelectorAll(".tdAddOn .selectAddOn").forEach(m => {
                    m.checked = false;
                    m.disabled = true;
                    m.classList.remove("d-none");
                    m.parentElement.classList.add("d-none");
                    if (m.getAttribute("data-category-id") == selectedCategoryId) {
                        m.parentElement.classList.remove("d-none");
                        m.classList.remove("d-none");
                        m.disabled = false;
                    }
                });
                c.closest("tr").querySelectorAll(".tdAddOn .addon").forEach(t => {
                    t.value = "";
                    t.setAttribute("data-addon-name", "");
                    t.setAttribute("data-addon-id", "");
                    t.setAttribute("data-addon-amount", 0);
                });
                c.closest("tr").querySelectorAll(".tdAddOn .addonMerge").forEach(t => {
                    t.value = "";
                    t.setAttribute("data-addons", "");
                });

                // effect on quantity
                c.closest("tr").querySelector(".tdQuantity .quantityParent").classList.remove("disabledBox");

                // effect on parcel
                c.closest("tr").querySelector(".tdParcel .selectParcel").disabled = false;

                // effect on comment
                c.closest("tr").querySelector(".tdComment .selectComment").disabled = false;
                c.closest("tr").querySelector(".tdComment .selectComment").classList.remove("disabledBox");

                // amount calculation
                trAmount();
            });
        });

        // select submenu
        document.querySelectorAll(".selectSubMenu").forEach(c => {
            c.addEventListener("change", e => {
                c.parentElement.querySelector(".submenu").value = e.target.options[e.target.selectedIndex].getAttribute("data-submenu-name");
                c.parentElement.querySelector(".submenu").setAttribute("data-submenu-name", e.target.options[e.target.selectedIndex].getAttribute("data-submenu-name"));
                c.parentElement.querySelector(".submenu").setAttribute("data-submenu-amount", e.target.options[e.target.selectedIndex].getAttribute("data-submenu-amount"));
                const selectedCategoryId = e.target.options[e.target.selectedIndex].getAttribute("data-category-id");
                c.classList.remove("blankValueCheck");
                c.classList.remove("blankValue");

                // amount calculation
                trAmount();
            });
        });

        // select addon
        document.querySelectorAll(".selectAddOn").forEach(c => {
            c.addEventListener("change", e => {
                c.parentElement.querySelector(".addon").value = "";
                c.parentElement.querySelector(".addon").setAttribute("data-addon-name", "");
                c.parentElement.querySelector(".addon").setAttribute("data-addon-id", "");
                c.parentElement.querySelector(".addon").setAttribute("data-addon-amount", 0);
                if (e.target.checked) {
                    c.parentElement.querySelector(".addon").value = e.target.getAttribute("data-addon-name");
                    c.parentElement.querySelector(".addon").setAttribute("data-addon-name", e.target.getAttribute("data-addon-name"));
                    c.parentElement.querySelector(".addon").setAttribute("data-addon-id", e.target.getAttribute("data-addon-id"));
                    c.parentElement.querySelector(".addon").setAttribute("data-addon-amount", e.target.getAttribute("data-addon-amount"));
                }
                let aMerge = "";
                c.parentElement.parentElement.querySelector(".addonMerge").value = "";
                c.parentElement.parentElement.querySelectorAll(".addon").forEach(a => (a.value != "") && (aMerge += `<${a.value}@${a.getAttribute('data-addon-amount')}>,`));
                c.parentElement.parentElement.querySelector(".addonMerge").value = `[${aMerge.substring(0, (aMerge.length-1))}]`;
                let bMerge = "";
                c.parentElement.parentElement.querySelectorAll(".addon").forEach(b => (b.value != "") && (bMerge += `${b.value},`));
                c.parentElement.parentElement.querySelector(".addonMerge").setAttribute("data-addons", "");
                c.parentElement.parentElement.querySelector(".addonMerge").setAttribute("data-addons", bMerge.slice(0, -1));
                const selectedCategoryId = e.target.getAttribute("data-category-id");

                // amount calculation
                trAmount();
            });
        });

        // select quantity

        // select parcel
        document.querySelectorAll(".selectParcel").forEach(c => {
            c.addEventListener("change", e => {
                c.parentElement.querySelector(".order_parcel_status").value = e.target.options[e.target.selectedIndex].value;
            });
        });

        // add comment
        document.querySelectorAll(".selectComment").forEach(c => {
            c.addEventListener("input", e => {
                c.parentElement.querySelector(".order_comment").value = e.target.value;
            });
        });

        // delete order
        document.querySelectorAll(".deleteIcon").forEach(d => {
            d.addEventListener("click", () => {
                d.closest("tr").remove();
                trAmount();
                if (document.querySelector(".orderTable tbody").childElementCount == 0) {
                    addMoreOrder();
                }
            });
        });


    };
    loadScript();

    // copy order
    document.querySelector(".orderCopy").innerHTML = `<!--${document.querySelector(".orderTable tbody tr").outerHTML}-->`;

    // add more order
    const addMoreOrder = () => {
        let orderCopy = document.querySelector(".orderCopy").innerHTML.replace("<!--", "").replace("-->", "");
        document.querySelector(".orderTable tbody").insertAdjacentHTML("beforeend", orderCopy);
        loadScript();
    };
    document.querySelector(".addMore").addEventListener("click", addMoreOrder);

    // payment method
    document.querySelectorAll(".order_payment_checkbox").forEach(c => {
        c.addEventListener("change", () => {
            document.querySelector(".submit").classList.remove("disabledBox");
            document.querySelector(".order_payment_method").value = c.getAttribute("data-method");
        });
    });

    // insert orders in print table
    setInterval(() => {
        // customer
        let customerMerge = "";
        document.querySelectorAll(".orderTable tbody tr").forEach(t => {
            customerMerge += `<tr data-amount="${t.querySelector(".order_amount_display").innerHTML}">
                    <td class="text-center" style="width:50px;">${t.querySelector(".order_quantity").value}</td>
                    <td>
                        ${t.querySelector(".order_parcel_status").value == "Yes" ? "P - " : ""}
                        ${t.querySelector(".menu").value}
                        ${t.querySelector(".submenu").value == ""? "" : " - " + t.querySelector(".submenu").value}
                        ${t.querySelector(".addonMerge").value == ""? "" : t.querySelector(".addonMerge").value
                            .replace(/</g,"")
                            .replace(/>/g,")")
                            .replace(/\[/g," - ")
                            .replace(/\]/g,"")
                            .replace(/,/g," - ")
                            .replace(/@/g, "<?= ' (' . $currency ?>")}
                        ${t.querySelector(".order_comment").value.trim() == "" ? "" : "<br>[" + t.querySelector(".order_comment").value + "]"}
                    </td>
                    <td class="text-end">${t.querySelector(".order_amount_display").innerHTML}</td>
                </tr>`;
        });
        document.querySelector(".orderDiv tbody").innerHTML = customerMerge;

        // kitchen
        let kitchenMerge = "";
        document.querySelectorAll(".orderTable tbody tr").forEach(t => {
            kitchenMerge += `<tr data-amount="${t.querySelector(".order_amount_display").innerHTML}">
                    <td class="text-center" style="width:80px;">${t.querySelector(".order_quantity").value}</td>
                    <td>
                        ${t.querySelector(".order_parcel_status").value == "Yes" ? "P - " : ""}
                        ${t.querySelector(".menu").value}
                        ${t.querySelector(".submenu").value == ""? "" : " - " + t.querySelector(".submenu").value}
                        ${t.querySelector(".addonMerge").getAttribute("data-addons") == "" || t.querySelector(".addonMerge").getAttribute("data-addons") == undefined ? "" : " - " + t.querySelector(".addonMerge").getAttribute("data-addons")
                            .replace(/,/g," - ")}                            
                        ${t.querySelector(".order_comment").value.trim() == "" ? "" : "<br>(" + t.querySelector(".order_comment").value + ")"}
                    </td> 
                    <td class="text-end">${t.querySelector(".order_amount_display").innerHTML}</td>                   
                </tr>`;
        });
        document.querySelector(".orderDivKitchen tbody").innerHTML = kitchenMerge;

    }, 200);
    if (document.querySelector(".orderDivKitchen .OrderTime")) { // showing only time 
        let kot_date = document.querySelector(".orderDivKitchen .OrderTime").innerHTML.split(" ");
        document.querySelector(".orderDivKitchen .OrderTime").innerHTML = kot_date[3] + " " + kot_date[4];
    }

    // check items
    document.querySelector(".check_items").addEventListener("click", () => {
        document.querySelector(".order_modal").innerHTML = document.querySelector(".orderDiv .table").outerHTML;
    });

    // print customer
    document.querySelector(".printCustomer").addEventListener("click", () => {
        document.body.classList.remove("printKitchenActive");
        document.body.classList.add("printCustomerActive");
        window.print();
    });

    // print kitchen
    document.querySelector(".printKitchen").addEventListener("click", () => {
        document.body.classList.add("printKitchenActive");
        document.body.classList.remove("printCustomerActive");
        window.print();
    });

    // print keyboard shorts
    window.addEventListener("keydown", e => {
        if (document.querySelector("#exampleModal[style*='block']")) {
            (e.key == "c") && document.querySelector(".printCustomer").click();
            (e.key == "v") && document.querySelector(".printKitchen").click();
        }
    });

    // discounts
    document.querySelectorAll("input[name='discountRadio']").forEach(r => {
        r.addEventListener("change", e => {
            document.querySelector(".submitDiscount").setAttribute("data-discount-mode", e.target.id);
            if (e.target.id == "percentageRadio") {
                document.querySelector(".by_percentage").classList.remove("d-none");
                document.querySelector(".by_amount").classList.add("d-none");
            } else {
                document.querySelector(".by_percentage").classList.add("d-none");
                document.querySelector(".by_amount").classList.remove("d-none");
            }
        });
    });
    // restricting percentge value under 100
    let amount = document.querySelector('.by_percentage input');
    amount.addEventListener('input', function(e) {
        document.querySelectorAll(".by_percentage p span").forEach(c => c.classList.remove("percentage-selected"));
        if (amount.value <= 100) {
            amount.value = amount.value;
        } else if (amount.value > 100) {
            amount.value = amount.value.slice(0, 2);
        }
    });
    // selecting percentage amount from pre-defined value
    document.querySelectorAll(".by_percentage p span").forEach(p => {
        p.addEventListener("click", e => {
            document.querySelectorAll(".by_percentage p span").forEach(c => c.classList.remove("percentage-selected"));
            p.classList.add("percentage-selected");
            document.querySelector('.by_percentage input').value = Number(p.innerHTML);
        });
    });
    // submitting discount page
    document.querySelector(".submitDiscount").addEventListener("click", () => {
        let discountValue = 0;
        let check = 0;
        if (!document.querySelector(".by_percentage").classList.contains("d-none")) {
            discountValue = document.querySelector(".by_percentage input").value;
            if (discountValue != "") {
                check = 1;
                discountValue = `${document.querySelector(".by_percentage input").value}%`;
            }
        }
        if (!document.querySelector(".by_amount").classList.contains("d-none")) {
            discountValue = document.querySelector(".by_amount input").value;
            if (discountValue != "") {
                check = 1;
                discountValue = `<?= $currency ?> ${document.querySelector(".by_amount input").value}`;
            }
        }
        if (check == 1) {
            document.querySelector(".discountPercentageShow").innerHTML = discountValue;
            document.querySelector(".discountPercentageShow").setAttribute("data-discount-full", discountValue);
            //document.querySelector(".discountText").setAttribute("data-discount", discountValue);
            setTimeout(() => alert(`<p class="text-center my-3"><?= $success_alert_icon ?></p><b>${discountValue}</b> discount is applied.`), 300);
            // document.querySelector(".subTotalText").setAttribute("data-sub", discountValue);
            trAmount();
        }
    });

    // online order
    document.querySelectorAll(".online_order").forEach(o => {
        o.addEventListener("click", () => {
            document.querySelectorAll(".online_order").forEach(p => p.classList.remove("online_selected"));
            o.classList.add("online_selected");
            document.querySelector("input[name='customer_name']").value = `Online | ${o.innerHTML}`;
            // changes on kitchen bill
            $online_text =  `<b class="fst-italic rounded px-1 d-inline-block" style="border:1px solid black;">${o.innerHTML}</b>`;
            document.querySelector(".orderDivKitchen .orderNumText").innerHTML = $online_text; 
            document.querySelector(".orderDivCustomer .orderNumText").innerHTML = $online_text; 
            
        });
    });

    // payment select
    document.querySelectorAll(".payment_select").forEach(p => {
        p.addEventListener("click", () => {
            document.querySelectorAll(".payment_select label").forEach(s => s.classList.remove("payment_selected"));
            p.querySelector('label').classList.add("payment_selected");
        });
    });

    // parcel toggle
    document.querySelector(".parcel_toggle").addEventListener("click", () => {
        document.querySelectorAll(".selectParcel").forEach(s => {
            s.value = (s.value == "Yes") ? "No" : "Yes";
            s.parentElement.querySelector(".order_parcel_status").value = s.options[s.selectedIndex].value;
        });
    });

    // response from server
    const date_timestamp = (d) => {
        console.log(d);
    }

    // form submit
    const form = document.querySelector("#orderForm");
    const postData = async (formattedFormData) => {
        const response = await fetch('submit.php', {
            method: 'POST',
            body: formattedFormData
        });
        const data = await response.text();
        document.querySelector(".responseData").innerHTML = data;
        document.querySelector(".print").classList.remove("disabledBox");
        // increase pending order after success
        if (data.includes("submit-success") && document.querySelector(".pendingOrder.updatePending")) {

            let pendingAdd = Number(document.querySelector(".pendingOrder.updatePending b").innerHTML) + 1;
            document.querySelector(".pendingOrder.updatePending b").innerHTML = pendingAdd;
            document.querySelector(".pendingOrder.updatePending b").classList.add("blink");
            document.querySelector(".pendingOrder.updatePending").setAttribute("data-pending", pendingAdd);
            document.querySelector(".pendingOrder.updatePending").classList.remove("updatePending");

        }
        if (data.includes("update-success") || data.includes("submit-success")) {            

            // update date
            let order_date = document.querySelector(".response_data").innerHTML;
            let order_timestamp = document.querySelector(".response_data").getAttribute('data-timestamp');
            let order_invoice = document.querySelector(".response_data").getAttribute('data-invoice');

            document.querySelector(".orderDivKitchen .OrderTime").innerHTML = order_date.split(" ")[3] + " " + order_date.split(" ")[4];
            document.querySelector(".orderDivCustomer .OrderTime").innerHTML = order_date;
            document.querySelector(".order_date_value").value = order_date;
            document.querySelector(".order_timestamp_value").value = order_timestamp;
            document.querySelector(".orderDivCustomer .orderInvoice inv").innerHTML = order_invoice;
            document.querySelector(".orderDivCustomer .orderInvoice inv").innerHTML = order_invoice;

            <?php if ($settings->first()->payment_voice == "Yes") : ?>
                startVoice(`Your total Amount is ${document.querySelector(".totalAmountAll").innerHTML}.`);
            <?php endif ?>

            // auto-click on print button
            //document.querySelector(".print").click();
            // direct print button instead of manual keyboard clicks
            document.querySelector(".printCustomer").click();
            document.querySelector(".printKitchen").click();
            
        }
    };
    document.querySelector(".submit").addEventListener("click", e => {
        e.preventDefault(); // disable form submit
        if (document.querySelectorAll(".blankValueCheck:not([disabled])").length > 0) { // check for blank fields
            document.querySelector(".blankValueCheck").classList.add("blankValue");
            alert("<p><?= $warningIcon ?></p><b class='text-danger'>Please fill out all required fields</b>");
        } else {
            document.querySelector(".responseData").innerHTML = ""; // clear server response
            const formattedFormData = new FormData(form); // get form data
            postData(formattedFormData); // post data to server
        }
    });
</script>
<?php include("../inc/footer.php"); ?>