<?php
$title = "Dashboard";

require "inc/header.php";
require "core/advanced_user.php";

// instances 
$orders = new Orders;
$order_details = new Order_details;
$menus = new Menus;
$submenus = new Submenus;
$categories = new Categories;
$users = new Users;

?>

<div class="row">
    <div class="col-6 col-lg-4">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-1">Orders</p>
            <div class="d-flex justify-content-evenly">
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Today</b><br>
                    <?= is_array($orders->where_interval([], [], 'date_timestamp', '1 DAY')) ? count($orders->where_interval([], [], 'date_timestamp', '1 DAY')) : 0 ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">This week</b><br>
                    <?= is_array($orders->where_interval([], [], 'date_timestamp', '1 WEEK')) ? count($orders->where_interval([], [], 'date_timestamp', '1 WEEK')) : 0 ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Overall</b><br>
                    <?= count($orders->find_all()) ?>
                </span>
            </div>
        </div>
    </div>

    <div class="col-6 col-lg-5">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-1">Earnings</span></p>
            <div class="d-flex justify-content-evenly">
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Today</b><br>
                    <?php
                    $totalEarning = 0;
                    foreach ($orders->where_interval([], [], 'date_timestamp', '1 DAY') as $order) :
                        $totalEarning += floatval($order->order_total_amount);
                    endforeach;
                    echo "<gray>" . $currency . "</gray> " . number_format($totalEarning);
                    ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">This week</b><br>
                    <?php
                    $totalEarning = 0;
                    foreach ($orders->where_interval([], [], 'date_timestamp', '1 WEEK') as $order) :
                        $totalEarning += floatval($order->order_total_amount);
                    endforeach;
                    echo "<gray>" . $currency . "</gray> " . number_format($totalEarning);
                    ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">This month</b><br>
                    <?php
                    $totalEarning = 0;
                    foreach ($orders->where_interval([], [], 'date_timestamp', '1 MONTH') as $order) :
                        $totalEarning += floatval($order->order_total_amount);
                    endforeach;
                    echo "<gray>" . $currency . "</gray> " . number_format($totalEarning);
                    ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Overall</b><br>
                    <?php
                    $totalEarning = 0;
                    foreach ($orders->find_all() as $order) :
                        $totalEarning += floatval($order->order_total_amount);
                    endforeach;
                    echo "<gray>" . $currency . "</gray> " . number_format($totalEarning);
                    ?>
                </span>
            </div>
        </div>
    </div>

    <div class="col-6 col-lg-3">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-1"><span class="tMenu">Categories</span></p>
            <div class="d-flex justify-content-evenly">
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Bases</b><br>
                    <?= count($menus->count_column('menu_name', 'DESC', [], ['category_id' => '3'])) ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Flavours</b><br>
                    <?= count($submenus->count_column('submenu_name')) ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Drinks</b><br>
                    <?= count($menus->count_column('menu_name', 'DESC', ['category_id' => 3])) ?>
                </span>
            </div>
        </div>
    </div>

    <div class="col-6 col-lg-4">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-1">Quantity</span></p>
            <div class="d-flex justify-content-evenly">
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Today</b><br>
                    <?= $orders->where_interval_quantity('1 DAY') != '' ? $orders->where_interval_quantity('1 DAY') : 0  ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">This week</b><br>
                    <?= $orders->where_interval_quantity('1 WEEK') != '' ? $orders->where_interval_quantity('1 WEEK') : 0  ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">This month</b><br>
                    <?= $orders->where_interval_quantity('1 MONTH') != '' ? $orders->where_interval_quantity('1 MONTH') : 0  ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Overall</b><br>
                    <?= $order_details->total('order_quantity',[],[])  ?>
                </span>
            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-1"><span class="tMenu">Payment Stats</span></p>
            <div class="d-flex justify-content-evenly">
                <?php
                $cash = (count($orders->where(['order_payment_method' => 'Cash'])) / count($orders->find_all())) * 100;
                $online = (count($orders->where(['order_payment_method' => 'Online'])) / count($orders->find_all())) * 100;
                ?>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Cash</b><br>
                    <per class="<?= $cash > $online ? 'text-success' : 'text-danger' ?>"><?= number_format((count($orders->where(['order_payment_method' => 'Cash'])) / count($orders->find_all())) * 100, "2", ".") . "%" ?></per>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Online</b><br>
                    <per class="<?= $cash < $online ? 'text-success' : 'text-danger' ?>"><?= number_format((count($orders->where(['order_payment_method' => 'Online'])) / count($orders->find_all())) * 100, "2", ".") . "%" ?></per>
                </span>
            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-1"><span class="tMenu">Pickup / Dine-In Stats</span></p>
            <div class="d-flex justify-content-evenly">
                <?php
                $pickup = (count($order_details->where(['order_parcel_status' => 'Yes'])) / count($order_details->find_all())) * 100;
                $dine = (count($order_details->where(['order_parcel_status' => 'No'])) / count($order_details->find_all())) * 100;
                ?>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Pick-Up</b><br>
                    <per class="<?= $pickup > $dine ? 'text-success' : 'text-danger' ?>"><?= number_format((count($order_details->where(['order_parcel_status' => 'Yes'])) / count($order_details->find_all())) * 100, "2", ".") . "%" ?></per>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Dine-In</b><br>
                    <per class="<?= $pickup < $dine ? 'text-success' : 'text-danger' ?>"><?= number_format((count($order_details->where(['order_parcel_status' => 'No'])) / count($order_details->find_all())) * 100, "2", ".") . "%" ?></per>
                </span>
            </div>
        </div>
    </div>

    <div class="col-6 col-lg-2 offset-lg-2 d-none">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-1"><span class="tMenu">Users</span></p>
            <div class="d-flex justify-content-evenly">
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Total</b><br>
                    <?= count($users->count_column('user_id', 'DESC', ['user_status' => 'Yes'])) ?>
                </span>
            </div>
        </div>
    </div>


    <div class="col-lg-5">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom d-flex justify-content-between align-items-end pb-2 mb-1 position-relative">
                <span class="tMenu">Latest Orders</span>
                <span class="btn btn-dark py-1 fs-7 position-absolute end-0" onclick="window.open('order/list','_self');" style="bottom: 0.5rem;">View All</span>
            </p>
            <div class="table-responsive">
                <table class="table orderTable table-hover table-borderless">
                    <thead>
                        <tr class="text-muted">
                            <th scope="col" class="fw-normal">Order #</th>
                            <th scope="col" class="fw-normal">Time</th>
                            <th scope="col" class="fw-normal text-end">Amount</th>
                            <th scope="col" class="fw-normal text-center">Payment</th>
                            <th scope="col" class="fw-normal text-center">Status</th>
                        </tr>
                        <tr>
                    </thead>
                    <tbody>
                        <?php

                        foreach ($orders->find_all_limit([], [], 8, 0, 'order_id') as $row) : ?>
                            <tr>
                                <td class="fw-bold text-center"><?= $row->order_number ?></td>
                                <td><?= date("h:i:s A", $row->order_timestamp) ?></td>
                                <td class="text-end"><?= "<gray>" . $currency . "</gray> " . $row->order_total_amount ?></td>
                                <td class="text-center"><?= $row->order_payment_method ?></td>
                                <td class="text-center"><?= $row->order_pending_status == "" ? "<st class='st-success'>Done<st>" : "<st class='st-warning'>" . $row->order_pending_status . "</st>" ?></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>



    <div class="col-lg-4">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-1"><span class="tMenu">Order Stats</span></p>
            <div class="w-100 d-block" id="chart"></div>
            <script src="js/chart.js"></script>
            <script>
                var options = {
                    chart: {
                        height: 350,
                        type: 'radialBar',
                    },
                    series: [<?= number_format(count($orders->where(['order_pending_status' => ''])) * 100 / count($orders->find_all()), 2, ".") ?>],
                    labels: ['Completed'],
                }
                var chart = new ApexCharts(document.querySelector("#chart"), options);
                chart.render();
            </script>
            <div class="d-flex justify-content-evenly">
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Completed</b><br>
                    <?= count($orders->where(['order_pending_status' => ''])) ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Pending</b><br>
                    <?= count($orders->where([], ['order_pending_status' => ''])) ?>
                </span>
            </div>
        </div>


    </div>

    <div class="col-lg-3">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-1"><span class="tMenu">Customer Repeat</span></p>
            <div class="d-flex justify-content-evenly">
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">This week</b><br>
                    <?= is_array($orders->where_interval(['customer_repeat' => 'on'], [], 'date_timestamp', '1 WEEK')) ? count($orders->where_interval(['customer_repeat' => 'on'], [], 'date_timestamp', '1 WEEK')) : 0 ?>
                </span>
                <span class="text-center fw-bold fs-4">
                    <b class="text-muted fw-normal fs-6">Overall</b><br>
                    <?= count($orders->where(['customer_repeat' => 'on'])) ?>
                </span>
            </div>
        </div>
    </div>

    <div class="col-lg-6">
        <div class="row mx-lg-0">
            <div class="col-12 row mx-0 bg-section p-3 mb-4 rounded shadow">
                <p class="text-theme fw-bold border-bottom pb-2 mb-3 ps-0"><span class="tMenu">Wraps</span></p>
                <div class="col-lg-6 ps-0 pe-4 border-end">
                    <div class="w-100 ">
                        <p class="text-muted fw-normal fs-6 mb-3"><span class="tMenu">Top Bases</span></p>
                        <div class="row totalMenusHead">
                            <?php
                            $total_orders = count($order_details->where(['category' => 'Wraps'], ['menu' => '']));
                            $i = 1;
                            foreach ($order_details->count_column('menu', "DESC", ['category' => 'Wraps'], ['menu' => '']) as $row) :
                                if ($i <= 6) :
                            ?>
                                    <div class="col-12 pt-2 pb-3 div-hover rounded position-relative">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span><?= $row->menu ?></span>
                                            <span><?= number_format(($row->count * 100) / $total_orders, 2, ".") . "%" ?></span>
                                        </p>
                                        <p class="progress_bar_p mb-0">
                                            <span class="progress_bar" style="background-color: #f57676; width: <?= ($row->count * 100) / $total_orders ?>%"></span>
                                        </p>
                                    </div>
                            <?php $i++;
                                endif;
                            endforeach; ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pe-0 ps-4">
                    <div class="w-100w">
                        <p class="text-muted fw-normal fs-6 mb-3"><span class="tMenu">Top Flavours</span></p>
                        <div class="row totalMenusHead">
                            <?php
                            $total_orders = count($order_details->where(['category' => 'Wraps'], ['submenu' => '']));
                            $i = 1;
                            foreach ($order_details->count_column('submenu', "DESC", ['category' => 'Wraps'], ['submenu' => '']) as $row) :
                                if ($i <= 6) :
                            ?>
                                    <div class="col-12 pt-2 pb-3 div-hover rounded position-relative">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span><?= $row->submenu ?></span>
                                            <span><?= number_format(($row->count * 100) / $total_orders, 2, ".") . "%" ?></span>
                                        </p>
                                        <p class="progress_bar_p mb-0">
                                            <span class="progress_bar" style="background-color: #f57676; width: <?= ($row->count * 100) / $total_orders ?>%"></span>
                                        </p>
                                    </div>
                            <?php $i++;
                                endif;
                            endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>

    <div class="col-lg-6">
        <div class="row mx-lg-0">
            <div class="col-12 row mx-0 bg-section p-3 mb-4 rounded shadow">
                <p class="text-theme fw-bold border-bottom pb-2 mb-3 ps-0"><span class="tMenu">Cheezzas</span></p>
                <div class="col-lg-6 ps-0 pe-4 border-end">
                    <div class="w-100 ">
                        <p class="text-muted fw-normal fs-6 mb-3"><span class="tMenu">Top Bases</span></p>
                        <div class="row totalMenusHead">
                            <?php
                            $total_orders = count($order_details->where(['category' => 'Cheezzas'], ['menu' => '']));
                            $i = 1;
                            foreach ($order_details->count_column('menu', "DESC", ['category' => 'Cheezzas'], ['menu' => '']) as $row) :
                                if ($i <= 6) :
                            ?>
                                    <div class="col-12 pt-2 pb-3 div-hover rounded position-relative">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span><?= $row->menu ?></span>
                                            <span><?= number_format(($row->count * 100) / $total_orders, 2, ".") . "%" ?></span>
                                        </p>
                                        <p class="progress_bar_p mb-0">
                                            <span class="progress_bar" style="background-color: #f57676; width: <?= ($row->count * 100) / $total_orders ?>%"></span>
                                        </p>
                                    </div>
                            <?php $i++;
                                endif;
                            endforeach; ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pe-0 ps-4">
                    <div class="w-100w">
                        <p class="text-muted fw-normal fs-6 mb-3"><span class="tMenu">Top Flavours</span></p>
                        <div class="row totalMenusHead">
                            <?php
                            $total_orders = count($order_details->where(['category' => 'Cheezzas'], ['submenu' => '']));
                            $i = 1;
                            foreach ($order_details->count_column('submenu', "DESC", ['category' => 'Cheezzas'], ['submenu' => '']) as $row) :
                                if ($i <= 6) :
                            ?>
                                    <div class="col-12 pt-2 pb-3 div-hover rounded position-relative">
                                        <p class="d-flex justify-content-between mb-0">
                                            <span><?= $row->submenu ?></span>
                                            <span><?= number_format(($row->count * 100) / $total_orders, 2, ".") . "%" ?></span>
                                        </p>
                                        <p class="progress_bar_p mb-0">
                                            <span class="progress_bar" style="background-color: #f57676; width: <?= ($row->count * 100) / $total_orders ?>%"></span>
                                        </p>
                                    </div>
                            <?php $i++;
                                endif;
                            endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>


    <div class="col-lg-3">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-0"><span class="tMenu">Special Wraps</span></p>
            <div class="row totalMenusHead">
                <?php
                $total_orders = count($order_details->where(['category' => 'Special Wraps'], ['menu' => '']));
                $i = 1;
                foreach ($order_details->count_column('menu', "DESC", ['category' => 'Special Wraps'], ['menu' => '']) as $row) :
                    if ($i <= 6) :
                ?>
                        <div class="col-12 pt-2 pb-3 div-hover rounded position-relative">
                            <p class="d-flex justify-content-between mb-0">
                                <span><?= $row->menu ?></span>
                                <span><?= number_format(($row->count * 100) / $total_orders, 2, ".") . "%" ?></span>
                            </p>
                            <p class="progress_bar_p mb-0">
                                <span class="progress_bar" style="background-color: #f57676; width: <?= ($row->count * 100) / $total_orders ?>%"></span>
                            </p>
                        </div>
                <?php $i++;
                    endif;
                endforeach; ?>
            </div>
        </div>
    </div>


    <div class="col-lg-3">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-0"><span class="tMenu">Drinks</span></p>
            <div class="row totalMenusHead">
                <?php
                $total_orders = count($order_details->where(['category' => 'Drinks'], ['menu' => '']));
                $i = 1;
                foreach ($order_details->count_column('menu', "DESC", ['category' => 'Drinks'], ['menu' => '']) as $row) :
                    if ($i <= 6) :
                ?>
                        <div class="col-12 pt-2 pb-3 div-hover rounded position-relative">
                            <p class="d-flex justify-content-between mb-0">
                                <span><?= $row->menu ?></span>
                                <span><?= number_format(($row->count * 100) / $total_orders, 2, ".") . "%" ?></span>
                            </p>
                            <p class="progress_bar_p mb-0">
                                <span class="progress_bar" style="background-color: #f57676; width: <?= ($row->count * 100) / $total_orders ?>%"></span>
                            </p>
                        </div>
                <?php $i++;
                    endif;
                endforeach; ?>
            </div>
        </div>
    </div>

    <div class="col-lg-6">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom pb-2 mb-0"><span class="tMenu">Last 7 days Earnings</span></p>
            <div class="row mx-lg-0 my-2 fs-7 align-items-end">
                <?php

                $days = 7;
                $last_x_day_total = 0;

                foreach ($orders->where_interval([], [], 'date_timestamp', '10 DAY') as $row) {
                    $last_x_day_total += $row->order_total_amount;
                }

                for ($i = $days; $i >= 1; $i--) {
                    $j = $i + 1;
                    ${"day_$i"} = $orders->where_interval_specific_total("order_total_amount", [], [], "date_timestamp", "$j  DAY", "$i DAY") ?? 0;
                    ${"day_p$i"} = toFixed((${"day_$i"} / $last_x_day_total) * 100);
                ?>
                    <div class="col px-0 graph_col position-relative">
                        <div style="height: 295px;" class="graph_value d-flex align-items-end">
                            <div class="last_days_graph position-relative" style="height: <?= ${"day_p$i"} . "%" ?>;">
                                <span class="graph_amount text-center fw-bold py-2 fs-6 position-absolute" style="top:-40px"><?= $currency_gray . " " . toFixed(${"day_$i"}) ?></span>
                            </div>
                        </div>
                        <span class='text-center w-100 d-block border-top border-secondary border-1'>
                            <?= date('D', strtotime(" -" . $i . "day")) ?><br>
                            <?= date('d/m', strtotime(" -" . $i . "day")) ?>
                        </span>
                    </div>

                <?php } ?>

            </div>
        </div>
    </div>

</div>

<div class="w-100 text-center text-secondary mt-5 border-top pt-2">
    { Powered by <b><?= $settings->first()->company_text; ?></b> }
</div>

<script>
    // alert message after login
    if (new URL(location.href).searchParams.get('success')) {
        window.history.replaceState({}, document.title, "?");
        <?php $loginUser = ucfirst($_SESSION['user']) ?>
        alert("<?= $loginUser ?>, Welcome to <b><?= $company_logo ?></b>");
    }
</script>

<?php include("inc/footer.php"); ?>