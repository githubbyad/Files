<?php

class Settings

{

    use Model;

    protected $table = "settings";

    protected $allowedColumns = [
        'logo_text',
        'logo_img',
        'company_name',
        'hide_delete_button_after',
        'company_address',
        'company_phone',
        'currency_symbol',
        'region',
        'tax',
        'tax_allow',
        'payment_voice'
    ];
}