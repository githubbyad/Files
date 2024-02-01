<?php

$title = "New Order";
include "../inc/header.php";

// instances
$orders = new Orders;
$category = new Categories;
$menus = new Menus;
$submenus = new Submenus;
$addons = new Addons;
$comments = new Comments;

// get order & invice numbers
$order_number = 1;
$order_invoice = 1;
$orders_last_record = $orders->first([], [], 'order_id');

if ($orders_last_record) {
    $order_invoice = intval($orders_last_record->order_id) + 1;
    if (date("j", $orders_last_record->order_timestamp) == date("j", time())) {
        $order_number = intval($orders_last_record->order_number) + 1;
    }
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

<form id="orderForm" action="" method="POST" class="position-relative no-print mb-5" style="box-shadow: none;">

    <input type="hidden" name="order_number" value="<?= $order_number ?>" class="order_number_value">
    <input type="hidden" name="order_id" value="<?= $order_invoice ?>" class="order_id_value">
    <!-- <input type="hidden" name="invoice" value="<?= $order_invoice ?>" class="invoice"> -->
    <input type="hidden" name="order_timestamp" value="<?= $timeNow ?>" class="order_timestamp_value">
    <input type="hidden" name="order_date" value="<?= $timeNowDate ?>" class="order_date_value">
    <input type="hidden" name="staff" value="<?= $_SESSION['user'] ?>" class="staff_value">
    <input type="hidden" name="order_amount" value="" class="order_amount_value">

    <div class="row mx-0">
        <div class="col-lg-12 bg-section p-3 mb-3 rounded shadow-sm">
            <div class="table-responsive">
                <table class="table orderTable table-hover mb-0">
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
                        <tr class="align-middle order_row">
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
                                    <option value="Yes" data-parcel-id="1">Yes</option>
                                    <option value="No" selected data-parcel-id="2">No</option>
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
        <div class="col-lg-12 px-lg-0 mb-5">
            <div class="row my-2">
                <div class="col-12 text-black d-flex justify-content-between position-relative">
                    <div class="w-50 text-end">
                        <span class="addMore btn btn-dark fw-normal fs-6 py-2 px-3 mb-0 d-inline-block me-3 me-lg-0 ms-0 ms-lg-3" data-bs-toggle="modal" data-bs-target="#order_modal"><?= $newOrderIcon ?> Add Order</span>
                    </div>
                    <div class="d-flex flex-column align-items-end mb-0 fw-bold fs-4 p-4 bg-white rounded shadow-sm w-auto">
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

                        <p class="mb-0 text-end">
                            <span class="totalAllText">Total</span>
                            <gray class="ms-1"><?= $currency ?></gray>
                            <span class="totalAmountAll">0</span>
                            <input type="hidden" class="order_total_amount" name="order_total_amount">
                        </p>
                    </div>
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

<!-- order popup -->
<div class="modal fade" id="order_modal" tabindex="-1" aria-labelledby="order_popup" aria-hidden="true" data-bs-backdrop="static" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered d-flex justify-content-center" style="--bs-modal-width: 80%;">
        <div class="modal-content w-100">
            <div class="modal-header d-none">
                <h1 class="modal-title fs-6 w-100 text-center text-dark fw-bold" id="order_popup">Select Order</h1>
                <button type="button" class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="order_show modal-body p-2 d-flex justify-content-center rounded" style="background-color:var(--color4);">
                <div class="container user-select-none">
                    <div class="row justify-content-start">

                        <!-- category -->
                        <div class="modal_category_wrap col-12 bg-gray border border-secondary rounded p-2 pb-0 mb-3 position-relative">
                            <p class="fw-bold ps-2 mb-2" style="color: var(--color5);"><span class="">Category</span></p>
                            <div class="row mx-0">
                                <?php foreach ($category->find_all_limit(['status' => 'Yes'], [], 30, 0, 'category_order', 'ASC') as $row) : ?>
                                    <div class="modal_category modal_box col-2 col-lg-3 px-1" data-category-id="<?= $row->category_id ?>">
                                        <p class="bg-light fw-bold text-center text-dark shadow p-2 rounded cursor-pointer"><?= $row->category_name ?></p>
                                    </div>
                                <?php endforeach ?>
                            </div>
                        </div>

                        <!-- menu -->
                        <div class="modal_menu_wrap col-12 bg-gray border border-secondary rounded p-2 pb-0 mb-3">
                            <p class="fw-bold ps-2 mb-2" style="color: var(--color5);">Base</p>
                            <div class="row mx-0">
                                <?php foreach ($menus->find_all_limit(['menu_active_status' => 'Yes'], [], 100, 0, 'menu_name', 'ASC') as $row) : ?>
                                    <div class="modal_menu modal_box col-4 col-lg-2 px-1 d-none" data-category-id="<?= $row->category_id ?>" data-menu-id="<?= $row->menu_id ?>" onclick="startVoice('<?= $row->menu_display_name ?>')">
                                        <p class="bg-light fw-bold text-dark shadow text-center p-2 rounded cursor-pointer">
                                            <span class="d-block"><?= $row->menu_display_name ?></span>
                                            <span class="d-block text-muted"><?= $currency_gray . $row->menu_amount ?></span>
                                        </p>
                                    </div>
                                <?php endforeach ?>
                            </div>
                        </div>

                        <!-- submenu -->
                        <div class="modal_submenu_wrap col-12 bg-gray border border-secondary rounded p-2 pb-0 mb-3">
                            <p class="fw-bold ps-2 mb-2" style="color: var(--color5);">Flavour</p>
                            <div class="row mx-0">
                                <?php foreach ($submenus->find_all_limit(['submenu_active_status' => 'Yes'], [], 100, 0, 'submenu_name', 'ASC') as $row) : ?>
                                    <div class="modal_submenu modal_box col-4 col-lg-2 px-1 d-none" data-category-id="<?= $row->category_id ?>" data-submenu-id="<?= $row->submenu_id ?>" onclick="startVoice('<?= $row->submenu_display_name ?>')">
                                        <p class="bg-light fw-bold text-center text-dark mb-2 shadow p-2 rounded cursor-pointer"><?= $row->submenu_display_name ?></p>
                                    </div>
                                <?php endforeach ?>
                            </div>
                        </div>

                        <!-- add-on -->
                        <div class="modal_addon_wrap col-12 col-lg-3 mb-3 ps-lg-0 pe-lg-3">
                            <div class="w-100 bg-gray border border-secondary rounded p-2 pb-0">
                                <p class="fw-bold ps-2 mb-2" style="color: var(--color5);">Add-On</p>
                                <div class="row mx-0">
                                    <?php foreach ($addons->find_all_limit(['addon_active_status' => 'Yes'], [], 100, 0, 'addon_name', 'ASC') as $row) : ?>
                                        <div class="modal_addon modal_box col-4 col-lg-12 px-1 d-none" data-category-id="<?= $row->category_id ?>" data-addon-id="<?= $row->addon_id ?>" onclick="startVoice('with <?= $row->addon_display_name ?>')">
                                            <p class="bg-light fw-bold text-dark text-center shadow p-2 rounded cursor-pointer">
                                                <span class="d-block d-lg-inline me-lg-2"><?= $row->addon_display_name ?></span>
                                                <span class="d-block d-lg-inline text-muted"><?= $currency_gray . $row->addon_amount ?></span>
                                            </p>
                                        </div>
                                    <?php endforeach ?>
                                </div>
                            </div>
                        </div>

                        <!-- parcel -->
                        <div class="modal_parcel_wrap col-12 col-lg-3 mb-3 ps-lg-0 pe-lg-2">
                            <div class="w-100 bg-gray border border-secondary rounded p-2 pb-0">
                                <p class="fw-bold ps-2 mb-2" style="color: var(--color5);">Parcel</p>
                                <div class="row mx-0">
                                    <div class="modal_parcel modal_box col-2 col-lg-6 px-1" data-parcel-id="1" onclick="startVoice('Parcel Yes.')">
                                        <p class="bg-light fw-bold text-dark shadow text-center p-2 rounded cursor-pointer">Yes</p>
                                    </div>
                                    <div class="modal_parcel modal_box col-2 col-lg-6 px-1 modal_parcel_selected" data-parcel-id="2">
                                        <p class="bg-light fw-bold text-dark shadow text-center p-2 rounded cursor-pointer">No</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- quantity -->
                        <div class="modal_quantity_wrap col-12 col-lg-3 mb-3 px-lg-2">
                            <div class="w-100 bg-gray border border-secondary rounded p-2 pb-0">
                                <p class="fw-bold ps-2 mb-2" style="color: var(--color5);">Quantity</p>
                                <div class="row mx-0">
                                    <div class="col-12 d-flex mb-3 justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" onclick="minusClicked(document.querySelectorAll('.minusIcon')[document.querySelectorAll('.minusIcon').length-1])" width="35" height="35" fill="#000" class="modal_minusIcon bi bi-dash-circle cursor-pointer" viewBox="0 0 16 16" style="opacity: 1;">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"></path>
                                        </svg>
                                        <span class="modal_quantity d-inline-block bg-light px-4 py-2 rounded text-dark mx-2 fw-bold">1</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" onclick="plusClicked(document.querySelectorAll('.minusIcon')[document.querySelectorAll('.plusIcon').length-1])" width="35" height="35" fill="#000" class="modal_plusIcon bi bi-plus-circle cursor-pointer" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- comment -->
                        <div class="modal_comment_wrap col-12 col-lg-3 mb-3 ps-lg-2 pe-lg-0">
                            <div class="w-100 bg-gray border border-secondary rounded p-2 pb-0">
                                <p class="fw-bold ps-2 mb-2" style="color: var(--color5);">Comment</p>
                                <div class="row mx-0">
                                    <div class="modal_comment col-12 mb-3">
                                        <input type="text" class="modal_comment_select form-control py-2" placeholder="Write Comment" list="commentList2">
                                        <datalist id="commentList2">
                                            <?php foreach ($comments->find_all_limit(['status' => 'Yes'], [], 25, 0, 'text', 'ASC') as $row) : ?>
                                                <option value="<?= $row->text ?>"></option>;
                                            <?php endforeach ?>
                                        </datalist>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer pt-0 border-0 d-flex justify-content-center mt-2 mb-2">
                <button type="button" class="btn btn-success px-5 py-2 d-none" onclick="setTimeout(() => document.querySelector('.addMore').click(),500);" data-bs-dismiss="modal">Save & Add Order</button>
                <span>
                    <button type="button" class="save_order btn btn-primary px-5 py-2 me-3" data-bs-dismiss="modal">Save</button>
                    <button type="button" class="btn btn-light px-5 border border-dark py-2" onclick="delete_order(document.querySelectorAll('.deleteIcon')[document.querySelectorAll('.deleteIcon').length - 1]);" data-bs-dismiss="modal">Cancel</button>
                </span>
            </div>
        </div>
    </div>
</div>

<script>
    // php values
    const currency_symbol = "<?= $currency ?>";
    const success_alert_icon = '<?= $success_alert_icon ?>';
    const payment_voice = "<?= $settings->first()->payment_voice ?>";
    const warningIcon = "<?= $warningIcon ?>";
</script>

<script src="order_script.js"></script>

<?php include("../inc/footer.php"); ?>