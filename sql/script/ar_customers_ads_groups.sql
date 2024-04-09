DECLARE @json NVARCHAR(MAX);

SET @json = N'
[
   {
      "website_id": 6688,
      "group_id": 1,
      "name": "AdGroup1",
      "description": "AdGroup1",
      "stack": "Horizontal",
      "random_flag": "None",
      "random_flag_time": 3,
      "space_between_ads": 8,
      "active": "Yes"
   }
]
';

MERGE INTO ar_customers_ads_groups AS target
USING (
    SELECT 
        website_id,
        group_id,
        name,
        description,
        stack,
        random_flag,
        random_flag_time,
        space_between_ads,
        active
    FROM OPENJSON(@json) 
    WITH (
        website_id int,
        group_id int,
        name nvarchar(50),
        description nvarchar(50),
        stack nvarchar(50),
        random_flag nvarchar(25),
        random_flag_time int,
        space_between_ads int,
        active nvarchar(3)
    )
) AS source ON target.group_id = source.group_id
WHEN MATCHED THEN
    UPDATE SET
        target.website_id = source.website_id,
        target.name = source.name,
        target.description = source.description,
        target.stack = source.stack,
        target.random_flag = source.random_flag,
        target.random_flag_time = source.random_flag_time,
        target.space_between_ads = source.space_between_ads,
        target.active = source.active
WHEN NOT MATCHED BY TARGET THEN
    INSERT (
        website_id,
        group_id,
        name,
        description,
        stack,
        random_flag,
        random_flag_time,
        space_between_ads,
        active
    )
    VALUES (
        source.website_id,
        source.group_id,
        source.name,
        source.description,
        source.stack,
        source.random_flag,
        source.random_flag_time,
        source.space_between_ads,
        source.active
    );
