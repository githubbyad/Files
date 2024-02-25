<?php

$title = "Quantity by Date";

include "../inc/header.php";
include "../core/advanced_user.php";

// instances
$menus = new Menus;
$orders = new Orders;
?>

<div class="row mx-0">

    <form action="" method="POST" class="col-lg-8 offset-lg-2 bg-section p-4 rounded position-relative shadow" autocomplete="off">

        <div class="row mx-0">

            <div class="form-floating mb-3 col-lg-6 px-0 ps-lg-0 pe-lg-2">
                <select class="form-select" name="menu" aria-label="Default select example">
                    <option disabled value="" selected>Select Menu</option>
                    <?php foreach ($menus->find_all_order_by('category_id', 'ASC') as $menu) : ?>
                        <option value="<?= $menu->menu_display_name ?>"><?= $menu->menu_display_name ?></option>
                    <?php endforeach ?>
                </select>
                <label class="form-label text-muted">
                    <star></star>Menu
                </label>
            </div>

            <div class="form-floating mb-3 col-lg-6 px-0">
                <input type="date" name="date" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Select Date</label>
            </div>
            <?php if ($_SERVER['REQUEST_METHOD'] == 'POST') : ?>
                <div class="fw-bold p-2 rounded position-relative my-2">
                    <p class="text-center text-secondary fw-lighter mb-0 fs-4">Quantity: <b class="text-black"><?= $orders->get_order_quantity_by_date($_POST['menu'], $_POST['date']) ?></b></p>
                </div>

                <script>
                    document.querySelector("select[name='menu']").value = "<?= $_POST['menu'] ?>";
                    document.querySelector("input[name='date']").value = "<?= $_POST['date'] ?>";
                </script>
            <?php endif ?>
            <center>
                <button type="submit" name="submit" class="submit btn btn-theme w-auto py-2 px-4 mt-3">Submit</button>
                <span class="cancel btn btn-danger w-auto py-2 px-4 mt-3 ms-3" onclick="window.history.back()">Cancel</span>
            </center>
    </form>


</div>
</div>


<?php include("../inc/footer.php"); ?>