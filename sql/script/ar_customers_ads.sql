DECLARE @json NVARCHAR(MAX) = N'
[
   {
    "website_id": 6688,
    "ar_customers_ads_id": 70,
    "group_id": 15,
    "group_name": "AdGroup15",
    "ad_description": "Lander University",
    "starting_date": "2020-09-24 00:00:00.000",
    "ad_image": "29-11-2021-04-02-35-pm-9658107.jpg",
    "big_ad_image": "",
    "big_ad_image_window": "New",
    "adlink": "",
    "menu": "-- ALL --",
    "menu_link": null,
    "menu_multiple": null,
    "order_sequence": 0,
    "new_window_flag": "Yes",
    "iframe_flag": "No",
    "peelerad_position": "Top-Right",
    "anchor_text": null,
    "active": "Yes"
   }
]';

MERGE INTO ar_customers_ads
USING (
    SELECT *
    FROM OPENJSON(@json)
    WITH (
        website_id INT,
        ar_customers_ads_id INT,
        group_id INT,
        group_name NVARCHAR(MAX),
        ad_description NVARCHAR(MAX),
        starting_date DATETIME,
        ad_image NVARCHAR(MAX),
        big_ad_image NVARCHAR(MAX),
        big_ad_image_window NVARCHAR(MAX),
        adlink NVARCHAR(MAX),
        menu NVARCHAR(MAX),
        menu_link NVARCHAR(MAX),
        menu_multiple NVARCHAR(MAX),
        order_sequence INT,
        new_window_flag NVARCHAR(MAX),
        iframe_flag NVARCHAR(MAX),
        peelerad_position NVARCHAR(MAX),
        anchor_text NVARCHAR(MAX),
        active NVARCHAR(MAX)
    )
) AS source ON ar_customers_ads.ar_customers_ads_id = source.ar_customers_ads_id
WHEN MATCHED THEN
    UPDATE SET
        website_id = source.website_id,
        group_id = source.group_id,
        group_name = source.group_name,
        ad_description = source.ad_description,
        starting_date = source.starting_date,
        ad_image = source.ad_image,
        big_ad_image = source.big_ad_image,
        big_ad_image_window = source.big_ad_image_window,
        adlink = source.adlink,
        menu = source.menu,
        menu_link = source.menu_link,
        menu_multiple = source.menu_multiple,
        order_sequence = source.order_sequence,
        new_window_flag = source.new_window_flag,
        iframe_flag = source.iframe_flag,
        peelerad_position = source.peelerad_position,
        anchor_text = source.anchor_text,
        active = source.active
WHEN NOT MATCHED THEN
    INSERT (
        website_id,
        ar_customers_ads_id,
        group_id,
        group_name,
        ad_description,
        starting_date,
        ad_image,
        big_ad_image,
        big_ad_image_window,
        adlink,
        menu,
        menu_link,
        menu_multiple,
        order_sequence,
        new_window_flag,
        iframe_flag,
        peelerad_position,
        anchor_text,
        active
    )
    VALUES (
        source.website_id,
        source.ar_customers_ads_id,
        source.group_id,
        source.group_name,
        source.ad_description,
        source.starting_date,
        source.ad_image,
        source.big_ad_image,
        source.big_ad_image_window,
        source.adlink,
        source.menu,
        source.menu_link,
        source.menu_multiple,
        source.order_sequence,
        source.new_window_flag,
        source.iframe_flag,
        source.peelerad_position,
        source.anchor_text,
        source.active
    );
