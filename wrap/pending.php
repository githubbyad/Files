<?php

$title = "Pending Orders";
include "../inc/header.php";

// pending orders
$pendingSql = $conn->prepare("SELECT * FROM orders WHERE order_pending_status = :p");
$pendingSql->execute([':p' => 'Pending']);
$pendingRes = $pendingSql->fetchAll();
$pendingOrders = count($pendingRes);

// instances
$orders = new Orders;

?>

<div class="row mx-0">

    <div class="col-lg-12 pending_div position-relative">

        <p class="responseData mb-0"></p>

        <dir class="row px-0">
            <?php
            $orderSql = $conn->prepare("SELECT * FROM orders WHERE order_pending_status = :status ORDER BY order_timestamp DESC");
            $orderSql->execute([':status' => 'Pending']);
            $orderObj = $orderSql->fetchAll();

            if (count($orderObj)) {
                foreach ($orderObj as $row) {

                    // get time difference
                    $datetime_1 = date("m/d/Y h:i:s A T");
                    $datetime_2 = date("m/d/Y h:i:s A T", $row->order_timestamp);
                    $start_datetime = new DateTime($datetime_1);
                    $diff = $start_datetime->diff(new DateTime($datetime_2));

                    if ($diff->h == 0) {
                        if ($diff->i == 0) {
                            $timeDiff = "{$diff->s} seconds ago";
                        } else {
                            $timeDiff = "{$diff->i} minutes ago";
                        }
                    } else {
                        $timeDiff = "{$diff->h} hour ago";
                    }

                    $tableData = "<div class='pendingDiv col-6 col-lg-2' data-time='{$timeDiff}'>
                                    <div class='orderWrap w-100 p-2 mb-3 bg-body rounded shadow text-center'>
                                        <p class='orderNum fw-bold display-1 lh-pending'>{$row->order_number}</p>                                                                        
                                        <p class='fw-normal fs-6 text-gray'>{$timeAgoIcon}{$timeDiff}</p>
                                        <p class='fw-normal fs-6 mb-2'><button data-id='{$row->order_id}' data-order='{$row->order_number}' class='markDone btn btn-warning w-100'>{$mark_icon}Done</button></p>
                                        <p class='text-center row mx-0 mb-1'>
                                            <button data-id='{$row->order_id}' class='viewItem col btn btn-dark me-1'>View</button><button data-id='{$row->order_id}' data-order='{$row->order_number}' class='deleteItem col btn btn-danger'>Delete</button>
                                        </p>
                                    </div>
                                </div>";
                    echo $tableData;
                }
            } else {
                echo "<div class='col-12 rounded p-3 bg-body shadow'>
                            <p class='text-success text-center'>{$smileIcon}</p>
                            <h2 class='text-center fs-6 my-4 alert alert-success'>No Pending orders.</h2>
                            <p class='text-center text-gray'>Come back again after adding new order.</p>
                        </div>";
            }
            ?>
        </dir>
    </div>

    <div class="col-lg-12 mt-4 px-0">
        <div class="w-100 bg-section p-3 mb-4 rounded shadow">
            <p class="text-theme fw-bold border-bottom d-flex justify-content-between align-items-end pb-2 mb-1 position-relative">
                <span class="tMenu">Latest Orders</span>
                <span class="tMenu text-dark">Average Time Taken: <b class="avg_time text-primary"></b> </span>
            </p>
            <div class="table-responsive">
                <table class="table orderTable table-hover table-borderless">
                    <thead>
                        <tr class="text-muted">
                            <th scope="col" class="fw-normal text-center">Order #</th>
                            <th scope="col" class="fw-normal">Start Time</th>
                            <th scope="col" class="fw-normal">End Time</th>
                            <th scope="col" class="fw-normal">Taken</th>
                            <th scope="col" class="fw-normal">Delivery</th>
                            <th scope="col" class="fw-normal text-end">Amount</th>
                            <th scope="col" class="fw-normal text-center">Payment</th>
                            <th scope="col" class="fw-normal text-center">Status</th>
                            <th scope="col" class="fw-normal text-center">View</th>
                        </tr>
                        <tr>
                    </thead>
                    <tbody>
                        <?php

                        foreach ($orders->find_all_limit([], [], 20, 0, 'order_id') as $row) :

                            // get time difference
                            $datetime_1 = date("m/d/Y h:i:s A T", $row->order_timestamp);
                            $datetime_2 = date("m/d/Y h:i:s A T", strtotime($row->date_timestamp));
                            $start_datetime = new DateTime($datetime_1);
                            $diff = $start_datetime->diff(new DateTime($datetime_2));

                            $time_hr = $diff->h < 10 ? "0" . $diff->h : $diff->h;
                            $time_min = $diff->i < 10 ? "0" . $diff->i : $diff->i;
                            $time_sec = $diff->s < 10 ? "0" . $diff->s : $diff->s;

                            $timeDiff = "$time_hr:$time_min:$time_sec";



                            // delivery                             
                            $time_limit = 10; // 10 minutes
                            if ($diff->h > 0 || ($diff->h == 0 && $diff->i > $time_limit)) {
                                $delivery = "<st class='st-danger'>Delayed<st>";
                            }
                            if ($diff->h == 0 && $diff->i <= $time_limit) {
                                $delivery = "<st class='st-secondary'>Ontime<st>";
                            }

                            // start & end time
                            if ($row->order_pending_status == "Pending") {
                                $end_time = "";
                                $timeDiff = "";
                                $delivery = "";
                            } else {
                                $end_time = date("h:i:s A", strtotime($row->date_timestamp));
                            }
                            $start_time = date("h:i:s A", $row->order_timestamp);

                        ?>

                            <tr>
                                <td class="fw-bold text-center"><?= $row->order_number ?></td>
                                <td><?= $start_time ?></td>
                                <td> <?= $end_time ?></td>
                                <td class="time_taken"><?= $timeDiff ?></td>
                                <td><?= $delivery ?></td>
                                <td class="text-end"><?= "<gray>" . $currency . "</gray> " . $row->order_total_amount ?></td>
                                <td class="text-center"><?= $row->order_payment_method ?></td>
                                <td class="text-center"><?= $row->order_pending_status == "" ? "<st class='st-success'>Done<st>" : "<st class='st-warning'>" . $row->order_pending_status . "</st>" ?></td>
                                <td class="text-center"><a class="btn btn-dark py-0 fs-7" href="view?id=<?= $row->order_id ?>">View</a></td>
                            </tr>
                        <?php endforeach ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<script>
    // penidng counter
    document.querySelector(".subpage b").innerHTML = ` <ord><?= $pendingOrders ?></ord>`;
    // view item
    document.querySelectorAll(".viewItem").forEach(v => {
        v.addEventListener("click", () => {
            const id = v.getAttribute('data-id');
            window.location.href = `view?id=${id}`;
        })
    });

    // play voice


    // marke as Done
    const markDone = async (id, order) => {
        const response = await fetch(`mark.php?id=${id}`);
        const data = await response.text();
        document.querySelector(".responseData").innerHTML = data;
        if (data == "Success") {
            //startVoice(`Order Number, ${order}.`);            
            document.querySelector(".responseData").innerHTML = "";
            document.querySelector('ord').innerHTML = Number(document.querySelector('ord').innerHTML) - 1;
            document.querySelector(`.markDone[data-id='${id}']`).closest('.pendingDiv').classList.add('clear-order');
            setTimeout(() => document.querySelector(`.markDone[data-id='${id}']`).closest('.pendingDiv').classList.add('d-none'), 800);
            if (document.querySelector('ord').innerHTML == 0) {
                window.location.reload();
            }
        }
    };
    document.querySelectorAll(".markDone").forEach(m => {
        m.addEventListener("click", () => {
            document.querySelector(".responseData").innerHTML = "";
            const id = m.getAttribute('data-id');
            const order = m.getAttribute('data-order');
            markDone(id, order);
        });
    });

    // delete item
    function deleteConfirmed(id) {

        const deleteData = async () => {
            const response = await fetch(`delete.php?id=${id}`);
            const data = await response.text();
            document.querySelector(".responseData").innerHTML = data;
            if (data == "Success") {
                document.querySelector('ord').innerHTML = Number(document.querySelector('ord').innerHTML) - 1;
                document.querySelector(".responseData").innerHTML = "<?= $successMessageStart ?>Deleted Successfully<?= $successMessageEnd ?>";
                document.querySelector(`.deleteItem[data-id='${id}']`).closest('.pendingDiv').classList.add('d-none');
                if (document.querySelector('ord').innerHTML == 0) {
                    window.location.reload();
                }
            }
        };
        deleteData();
    }
    document.querySelectorAll(".deleteItem").forEach(d => {
        d.addEventListener("click", () => {
            document.querySelector(".responseData").innerHTML = "";
            const id = d.getAttribute('data-id');
            const order = d.getAttribute('data-order');
            confirmdelete(`Do you want to delete order# <b>${order}</b>`, id);
        })
    });

    // auto refresh 30 seconds
    setInterval(() => {
        window.location.reload();
    }, 30000);

    // average time taken
    function secondsToTime(e) {
        const h = Math.floor(e / 3600).toString().padStart(2, '0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
            s = Math.floor(e % 60).toString().padStart(2, '0');

        return h + ':' + m + ':' + s;
    }

    let total_taken = 0;
    let i = 0;
    document.querySelectorAll(".time_taken").forEach(t => {
        if (t.innerHTML != 0) {
            let seconds = (Number(t.innerHTML.split(":")[0]) * 3600) + (Number(t.innerHTML.split(":")[1]) * 60) + Number(t.innerHTML.split(":")[2]);
            total_taken += seconds;
            i++;
        }
    });
    document.querySelector(".avg_time").innerHTML = secondsToTime(total_taken / i);
</script>


<?php include("../inc/footer.php"); ?>