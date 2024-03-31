<?php

$title = "Settings";

include "../inc/header.php";

include "../core/advanced_user.php";

echo @$_SESSION['error'];

?>

<div class="page container-fluid py-2 d-none">


    <form action="<?= htmlspecialchars(ROOT) ?>/setting/submit.php" method="POST" class="col-lg-12 offset-lg-0 bg-section shadow p-4 rounded position-relative shadow" autocomplete="off">

        <p class="responseData mb-0"><?php echo $error ?></p>

        <div class="row mx-0">

            <p class="text-white py-2 mt-2" style="background-color: var(--theme);">Company information</p>

            <div class="form-floating mb-3 col-lg-6 px-0 ps-lg-0 pe-lg-2">
                <input type="text" name="logo_text" value="<?= $settings->first()->logo_text ?>" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Logo (Text)</label>
            </div>
            
            <div class="form-floating mb-3 col-lg-6 px-0 px-lg-0">
                <input type="text" name="company_name" value="<?= $settings->first()->company_name ?>" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Company Name</label>
            </div>
            <div class="form-floating mb-3 col-lg-5 px-0 ps-lg-0 pe-lg-2">
                <input type="text" name="company_address" value="<?= $settings->first()->company_address ?>" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Company Address</label>
            </div>
            <div class="form-floating mb-3 col-lg-3 ps-lg-0 pe-lg-2">
                <input type="text" name="company_phone" value="<?= $settings->first()->company_phone ?>" class="form-control" placeholder="">
                <label class="form-label text-muted">Company Phone</label>
            </div>

            <div class="form-floating col-lg-4 mb-3 px-0">
                <input type="text" name="recipient_email" value="<?= $settings->first()->recipient_email ?>" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Company Email</label>
            </div>

            <p class="text-white py-2 mt-2" style="background-color: var(--theme);">General information</p>

            <div class="form-floating col-lg-4 mb-3 ps-lg-0 pe-lg-2">
                <select class="form-select" name="payment_voice" aria-label="Payment Voice">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <label class="form-label text-muted">Allow Voice (New Order Page)</label>
            </div>


            <div class="form-floating mb-3 col-lg-2 px-0 ps-lg-0 pe-lg-2">
                <input type="text" name="currency_symbol" value="<?= $settings->first()->currency_symbol ?>" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Currency Symbol</label>
            </div>
            <div class="form-floating mb-3 col-lg-4 px-0 ps-lg-0 pe-lg-2">
                <input type="text" name="region" value="<?= $settings->first()->region ?>" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Region</label>
            </div>
            <div class="form-floating mb-3 col-lg-2 px-0 ps-lg-0 pe-lg-2">
                <input type="number" name="tax" value="<?= $settings->first()->tax ?>" class="form-control" placeholder="">
                <label class="form-label text-muted">Tax</label>
            </div>
            <div class="form-floating mb-3 col-lg-2 ps-lg-0 pe-lg-2">
                <select class="form-select" name="tax_allow" aria-label="Allow Tax">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <label class="form-label text-muted">Allow Tax</label>
            </div>
            <div class="form-floating mb-3 col-lg-3 px-0">
                <input type="number" name="hide_delete_button_after" value="<?= $settings->first()->hide_delete_button_after ?>" class="form-control" placeholder="">
                <label class="form-label text-muted">Hide Delete Button After(Minutes)</label>
            </div>

            <p class="text-white py-2 mt-2" style="background-color: var(--theme);">Email Setting</p>

            <div class="form-floating mb-3 col-lg-3 ps-lg-0 pe-lg-2">
                <select class="form-select" name="allow_email_send" aria-label="Allow Sending Email">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <label class="form-label text-muted">Allow Sending Email</label>
            </div>

            <div class="form-floating col-lg-5 ps-lg-0 pe-lg-2 mb-3">
                <input type="text" name="sender_email" value="<?= $settings->first()->sender_email ?>" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Sender Email</label>
            </div>

            <div class="form-floating col-lg-4 ps-lg-0 pe-lg-0 mb-3">
                <input type="text" name="sender_password" value="<?= $settings->first()->sender_password ?>" class="form-control" placeholder="" required>
                <label class="form-label text-muted">Sender Password(Encrypted)</label>
            </div>

        </div>

        <center>
            <button type="submit" name="submit" class="submit btn btn-success w-auto py-2 px-4 mt-3">Submit</button>
            <span class="cancel btn btn-danger w-auto py-2 px-4 mt-3 ms-3" onclick="window.history.back()">Cancel</span>
        </center>

    </form>

</div>

<script>
    // status selection
    document.querySelector("select[name='payment_voice']").value = "<?= $settings->first()->payment_voice ?>";
    document.querySelector("select[name='allow_email_send']").value = "<?= $settings->first()->allow_email_send ?>";
    document.querySelector("select[name='tax_allow']").value = "<?= $settings->first()->tax_allow ?>";
</script>



<?php include("../inc/footer.php"); ?>
