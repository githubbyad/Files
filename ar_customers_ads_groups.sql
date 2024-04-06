DECLARE @json NVARCHAR(MAX);

SET @json = N'
[
   {
      "website_id": null,
      "group_id": 1,
      "name": "AdGroup1",
      "description": "AdGroup1",
      "stack": "Vertical",
      "random_flag": "None",
      "random_flag_time": 3,
      "space_between_ads": 8,
      "active": "Yes",
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
        
        website_id int Null,
        group_id int Null,
        name nvarchar (50) Null,
        description nvarchar (50) Null,
        stack nvarchar (50) Null,
        random_flag nvarchar (25) Null,
        random_flag_time int Null,
        space_between_ads int Null,
        active nvarchar (3) Null
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
    INSERT (website_id, group_id, name, description, stack, random_flag, random_flag_time, space_between_ads, active)
    VALUES (source.website_id, source.group_id, source.name, source.description, source.stack, source.random_flag, source.random_flag_time, source.space_between_ads, source.active);
