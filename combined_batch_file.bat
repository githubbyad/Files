@echo off
if x"%1" == x"" Goto Usage
if x"%2" == x"" Goto Usage
if x"%3" == x"" Goto Usage
if x"%4" == x"" Goto Usage

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4422.sql -o Data4422.sql.txt
echo Batch complete Data4422.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4438.sql -o Data4438.sql.txt
echo Batch complete Data4438.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4441.sql -o Data4441.sql.txt
echo Batch complete Data4441.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4443.sql -o Data4443.sql.txt
echo Batch complete Data4443.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4448.sql -o Data4448.sql.txt
echo Batch complete Data4448.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4459.sql -o Data4459.sql.txt
echo Batch complete Data4459.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4467.sql -o Data4467.sql.txt
echo Batch complete Data4467.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4472.sql -o Data4472.sql.txt
echo Batch complete Data4472.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4475.sql -o Data4475.sql.txt
echo Batch complete Data4475.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4484.sql -o Data4484.sql.txt
echo Batch complete Data4484.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4488.sql -o Data4488.sql.txt
echo Batch complete Data4488.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4489.sql -o Data4489.sql.txt
echo Batch complete Data4489.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4492.sql -o Data4492.sql.txt
echo Batch complete Data4492.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4496.sql -o Data4496.sql.txt
echo Batch complete Data4496.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4500.sql -o Data4500.sql.txt
echo Batch complete Data4500.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4501.sql -o Data4501.sql.txt
echo Batch complete Data4501.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4511.sql -o Data4511.sql.txt
echo Batch complete Data4511.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4515.sql -o Data4515.sql.txt
echo Batch complete Data4515.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4534.sql -o Data4534.sql.txt
echo Batch complete Data4534.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4536.sql -o Data4536.sql.txt
echo Batch complete Data4536.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4544.sql -o Data4544.sql.txt
echo Batch complete Data4544.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4547.sql -o Data4547.sql.txt
echo Batch complete Data4547.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4553.sql -o Data4553.sql.txt
echo Batch complete Data4553.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4562.sql -o Data4562.sql.txt
echo Batch complete Data4562.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4564.sql -o Data4564.sql.txt
echo Batch complete Data4564.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4565.sql -o Data4565.sql.txt
echo Batch complete Data4565.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4566.sql -o Data4566.sql.txt
echo Batch complete Data4566.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4581.sql -o Data4581.sql.txt
echo Batch complete Data4581.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4584.sql -o Data4584.sql.txt
echo Batch complete Data4584.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4585.sql -o Data4585.sql.txt
echo Batch complete Data4585.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4587.sql -o Data4587.sql.txt
echo Batch complete Data4587.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4588.sql -o Data4588.sql.txt
echo Batch complete Data4588.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4589.sql -o Data4589.sql.txt
echo Batch complete Data4589.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4592.sql -o Data4592.sql.txt
echo Batch complete Data4592.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4594.sql -o Data4594.sql.txt
echo Batch complete Data4594.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4611.sql -o Data4611.sql.txt
echo Batch complete Data4611.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4628.sql -o Data4628.sql.txt
echo Batch complete Data4628.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4638.sql -o Data4638.sql.txt
echo Batch complete Data4638.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4651.sql -o Data4651.sql.txt
echo Batch complete Data4651.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4652.sql -o Data4652.sql.txt
echo Batch complete Data4652.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4659.sql -o Data4659.sql.txt
echo Batch complete Data4659.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4686.sql -o Data4686.sql.txt
echo Batch complete Data4686.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4687.sql -o Data4687.sql.txt
echo Batch complete Data4687.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4695.sql -o Data4695.sql.txt
echo Batch complete Data4695.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4702.sql -o Data4702.sql.txt
echo Batch complete Data4702.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4741.sql -o Data4741.sql.txt
echo Batch complete Data4741.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4773.sql -o Data4773.sql.txt
echo Batch complete Data4773.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4777.sql -o Data4777.sql.txt
echo Batch complete Data4777.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4790.sql -o Data4790.sql.txt
echo Batch complete Data4790.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4792.sql -o Data4792.sql.txt
echo Batch complete Data4792.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4805.sql -o Data4805.sql.txt
echo Batch complete Data4805.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4821.sql -o Data4821.sql.txt
echo Batch complete Data4821.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4822.sql -o Data4822.sql.txt
echo Batch complete Data4822.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4839.sql -o Data4839.sql.txt
echo Batch complete Data4839.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4851.sql -o Data4851.sql.txt
echo Batch complete Data4851.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4859.sql -o Data4859.sql.txt
echo Batch complete Data4859.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4862.sql -o Data4862.sql.txt
echo Batch complete Data4862.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4870.sql -o Data4870.sql.txt
echo Batch complete Data4870.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4886.sql -o Data4886.sql.txt
echo Batch complete Data4886.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4887.sql -o Data4887.sql.txt
echo Batch complete Data4887.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4891.sql -o Data4891.sql.txt
echo Batch complete Data4891.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4899.sql -o Data4899.sql.txt
echo Batch complete Data4899.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4909.sql -o Data4909.sql.txt
echo Batch complete Data4909.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4914.sql -o Data4914.sql.txt
echo Batch complete Data4914.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4917.sql -o Data4917.sql.txt
echo Batch complete Data4917.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4920.sql -o Data4920.sql.txt
echo Batch complete Data4920.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4921.sql -o Data4921.sql.txt
echo Batch complete Data4921.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4935.sql -o Data4935.sql.txt
echo Batch complete Data4935.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4938.sql -o Data4938.sql.txt
echo Batch complete Data4938.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4939.sql -o Data4939.sql.txt
echo Batch complete Data4939.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4944.sql -o Data4944.sql.txt
echo Batch complete Data4944.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4946.sql -o Data4946.sql.txt
echo Batch complete Data4946.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4961.sql -o Data4961.sql.txt
echo Batch complete Data4961.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4971.sql -o Data4971.sql.txt
echo Batch complete Data4971.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4972.sql -o Data4972.sql.txt
echo Batch complete Data4972.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4973.sql -o Data4973.sql.txt
echo Batch complete Data4973.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4974.sql -o Data4974.sql.txt
echo Batch complete Data4974.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4975.sql -o Data4975.sql.txt
echo Batch complete Data4975.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4977.sql -o Data4977.sql.txt
echo Batch complete Data4977.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4981.sql -o Data4981.sql.txt
echo Batch complete Data4981.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4983.sql -o Data4983.sql.txt
echo Batch complete Data4983.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4984.sql -o Data4984.sql.txt
echo Batch complete Data4984.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4992.sql -o Data4992.sql.txt
echo Batch complete Data4992.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4994.sql -o Data4994.sql.txt
echo Batch complete Data4994.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4995.sql -o Data4995.sql.txt
echo Batch complete Data4995.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4996.sql -o Data4996.sql.txt
echo Batch complete Data4996.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4997.sql -o Data4997.sql.txt
echo Batch complete Data4997.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4998.sql -o Data4998.sql.txt
echo Batch complete Data4998.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data4999.sql -o Data4999.sql.txt
echo Batch complete Data4999.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5000.sql -o Data5000.sql.txt
echo Batch complete Data5000.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5001.sql -o Data5001.sql.txt
echo Batch complete Data5001.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5002.sql -o Data5002.sql.txt
echo Batch complete Data5002.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5018.sql -o Data5018.sql.txt
echo Batch complete Data5018.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5021.sql -o Data5021.sql.txt
echo Batch complete Data5021.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5022.sql -o Data5022.sql.txt
echo Batch complete Data5022.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5023.sql -o Data5023.sql.txt
echo Batch complete Data5023.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5027.sql -o Data5027.sql.txt
echo Batch complete Data5027.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5028.sql -o Data5028.sql.txt
echo Batch complete Data5028.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5029.sql -o Data5029.sql.txt
echo Batch complete Data5029.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5030.sql -o Data5030.sql.txt
echo Batch complete Data5030.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5038.sql -o Data5038.sql.txt
echo Batch complete Data5038.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5044.sql -o Data5044.sql.txt
echo Batch complete Data5044.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5049.sql -o Data5049.sql.txt
echo Batch complete Data5049.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5056.sql -o Data5056.sql.txt
echo Batch complete Data5056.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5071.sql -o Data5071.sql.txt
echo Batch complete Data5071.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5073.sql -o Data5073.sql.txt
echo Batch complete Data5073.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5097.sql -o Data5097.sql.txt
echo Batch complete Data5097.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5098.sql -o Data5098.sql.txt
echo Batch complete Data5098.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5099.sql -o Data5099.sql.txt
echo Batch complete Data5099.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5100.sql -o Data5100.sql.txt
echo Batch complete Data5100.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5106.sql -o Data5106.sql.txt
echo Batch complete Data5106.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5113.sql -o Data5113.sql.txt
echo Batch complete Data5113.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5118.sql -o Data5118.sql.txt
echo Batch complete Data5118.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5125.sql -o Data5125.sql.txt
echo Batch complete Data5125.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5126.sql -o Data5126.sql.txt
echo Batch complete Data5126.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5127.sql -o Data5127.sql.txt
echo Batch complete Data5127.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5132.sql -o Data5132.sql.txt
echo Batch complete Data5132.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5133.sql -o Data5133.sql.txt
echo Batch complete Data5133.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5138.sql -o Data5138.sql.txt
echo Batch complete Data5138.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5139.sql -o Data5139.sql.txt
echo Batch complete Data5139.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5140.sql -o Data5140.sql.txt
echo Batch complete Data5140.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5150.sql -o Data5150.sql.txt
echo Batch complete Data5150.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5154.sql -o Data5154.sql.txt
echo Batch complete Data5154.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5168.sql -o Data5168.sql.txt
echo Batch complete Data5168.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5170.sql -o Data5170.sql.txt
echo Batch complete Data5170.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5174.sql -o Data5174.sql.txt
echo Batch complete Data5174.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5175.sql -o Data5175.sql.txt
echo Batch complete Data5175.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5178.sql -o Data5178.sql.txt
echo Batch complete Data5178.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5183.sql -o Data5183.sql.txt
echo Batch complete Data5183.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5197.sql -o Data5197.sql.txt
echo Batch complete Data5197.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5214.sql -o Data5214.sql.txt
echo Batch complete Data5214.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5215.sql -o Data5215.sql.txt
echo Batch complete Data5215.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5219.sql -o Data5219.sql.txt
echo Batch complete Data5219.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5223.sql -o Data5223.sql.txt
echo Batch complete Data5223.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5233.sql -o Data5233.sql.txt
echo Batch complete Data5233.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5234.sql -o Data5234.sql.txt
echo Batch complete Data5234.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5235.sql -o Data5235.sql.txt
echo Batch complete Data5235.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5236.sql -o Data5236.sql.txt
echo Batch complete Data5236.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5238.sql -o Data5238.sql.txt
echo Batch complete Data5238.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5240.sql -o Data5240.sql.txt
echo Batch complete Data5240.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5250.sql -o Data5250.sql.txt
echo Batch complete Data5250.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5252.sql -o Data5252.sql.txt
echo Batch complete Data5252.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5256.sql -o Data5256.sql.txt
echo Batch complete Data5256.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5257.sql -o Data5257.sql.txt
echo Batch complete Data5257.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5258.sql -o Data5258.sql.txt
echo Batch complete Data5258.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5259.sql -o Data5259.sql.txt
echo Batch complete Data5259.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5260.sql -o Data5260.sql.txt
echo Batch complete Data5260.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5261.sql -o Data5261.sql.txt
echo Batch complete Data5261.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5264.sql -o Data5264.sql.txt
echo Batch complete Data5264.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5285.sql -o Data5285.sql.txt
echo Batch complete Data5285.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5286.sql -o Data5286.sql.txt
echo Batch complete Data5286.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5287.sql -o Data5287.sql.txt
echo Batch complete Data5287.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5289.sql -o Data5289.sql.txt
echo Batch complete Data5289.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5296.sql -o Data5296.sql.txt
echo Batch complete Data5296.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5320.sql -o Data5320.sql.txt
echo Batch complete Data5320.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5343.sql -o Data5343.sql.txt
echo Batch complete Data5343.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5351.sql -o Data5351.sql.txt
echo Batch complete Data5351.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5360.sql -o Data5360.sql.txt
echo Batch complete Data5360.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5361.sql -o Data5361.sql.txt
echo Batch complete Data5361.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5363.sql -o Data5363.sql.txt
echo Batch complete Data5363.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5364.sql -o Data5364.sql.txt
echo Batch complete Data5364.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5368.sql -o Data5368.sql.txt
echo Batch complete Data5368.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5370.sql -o Data5370.sql.txt
echo Batch complete Data5370.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5374.sql -o Data5374.sql.txt
echo Batch complete Data5374.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5375.sql -o Data5375.sql.txt
echo Batch complete Data5375.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5381.sql -o Data5381.sql.txt
echo Batch complete Data5381.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5389.sql -o Data5389.sql.txt
echo Batch complete Data5389.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5397.sql -o Data5397.sql.txt
echo Batch complete Data5397.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5409.sql -o Data5409.sql.txt
echo Batch complete Data5409.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5410.sql -o Data5410.sql.txt
echo Batch complete Data5410.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5411.sql -o Data5411.sql.txt
echo Batch complete Data5411.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5415.sql -o Data5415.sql.txt
echo Batch complete Data5415.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5417.sql -o Data5417.sql.txt
echo Batch complete Data5417.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5420.sql -o Data5420.sql.txt
echo Batch complete Data5420.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5424.sql -o Data5424.sql.txt
echo Batch complete Data5424.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5428.sql -o Data5428.sql.txt
echo Batch complete Data5428.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5429.sql -o Data5429.sql.txt
echo Batch complete Data5429.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5430.sql -o Data5430.sql.txt
echo Batch complete Data5430.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5445.sql -o Data5445.sql.txt
echo Batch complete Data5445.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5447.sql -o Data5447.sql.txt
echo Batch complete Data5447.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5455.sql -o Data5455.sql.txt
echo Batch complete Data5455.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5458.sql -o Data5458.sql.txt
echo Batch complete Data5458.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5470.sql -o Data5470.sql.txt
echo Batch complete Data5470.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5483.sql -o Data5483.sql.txt
echo Batch complete Data5483.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5484.sql -o Data5484.sql.txt
echo Batch complete Data5484.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5491.sql -o Data5491.sql.txt
echo Batch complete Data5491.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5492.sql -o Data5492.sql.txt
echo Batch complete Data5492.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5495.sql -o Data5495.sql.txt
echo Batch complete Data5495.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5502.sql -o Data5502.sql.txt
echo Batch complete Data5502.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5506.sql -o Data5506.sql.txt
echo Batch complete Data5506.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5528.sql -o Data5528.sql.txt
echo Batch complete Data5528.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5540.sql -o Data5540.sql.txt
echo Batch complete Data5540.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5544.sql -o Data5544.sql.txt
echo Batch complete Data5544.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5565.sql -o Data5565.sql.txt
echo Batch complete Data5565.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5577.sql -o Data5577.sql.txt
echo Batch complete Data5577.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5592.sql -o Data5592.sql.txt
echo Batch complete Data5592.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5610.sql -o Data5610.sql.txt
echo Batch complete Data5610.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5611.sql -o Data5611.sql.txt
echo Batch complete Data5611.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5632.sql -o Data5632.sql.txt
echo Batch complete Data5632.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5658.sql -o Data5658.sql.txt
echo Batch complete Data5658.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5662.sql -o Data5662.sql.txt
echo Batch complete Data5662.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5664.sql -o Data5664.sql.txt
echo Batch complete Data5664.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5665.sql -o Data5665.sql.txt
echo Batch complete Data5665.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5677.sql -o Data5677.sql.txt
echo Batch complete Data5677.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5686.sql -o Data5686.sql.txt
echo Batch complete Data5686.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5687.sql -o Data5687.sql.txt
echo Batch complete Data5687.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5697.sql -o Data5697.sql.txt
echo Batch complete Data5697.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5707.sql -o Data5707.sql.txt
echo Batch complete Data5707.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5713.sql -o Data5713.sql.txt
echo Batch complete Data5713.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5726.sql -o Data5726.sql.txt
echo Batch complete Data5726.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5731.sql -o Data5731.sql.txt
echo Batch complete Data5731.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5735.sql -o Data5735.sql.txt
echo Batch complete Data5735.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5743.sql -o Data5743.sql.txt
echo Batch complete Data5743.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5749.sql -o Data5749.sql.txt
echo Batch complete Data5749.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5752.sql -o Data5752.sql.txt
echo Batch complete Data5752.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5759.sql -o Data5759.sql.txt
echo Batch complete Data5759.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5763.sql -o Data5763.sql.txt
echo Batch complete Data5763.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5772.sql -o Data5772.sql.txt
echo Batch complete Data5772.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5800.sql -o Data5800.sql.txt
echo Batch complete Data5800.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5803.sql -o Data5803.sql.txt
echo Batch complete Data5803.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5813.sql -o Data5813.sql.txt
echo Batch complete Data5813.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5828.sql -o Data5828.sql.txt
echo Batch complete Data5828.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5834.sql -o Data5834.sql.txt
echo Batch complete Data5834.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5846.sql -o Data5846.sql.txt
echo Batch complete Data5846.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5852.sql -o Data5852.sql.txt
echo Batch complete Data5852.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5861.sql -o Data5861.sql.txt
echo Batch complete Data5861.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5873.sql -o Data5873.sql.txt
echo Batch complete Data5873.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5880.sql -o Data5880.sql.txt
echo Batch complete Data5880.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5881.sql -o Data5881.sql.txt
echo Batch complete Data5881.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5898.sql -o Data5898.sql.txt
echo Batch complete Data5898.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5908.sql -o Data5908.sql.txt
echo Batch complete Data5908.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5914.sql -o Data5914.sql.txt
echo Batch complete Data5914.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5922.sql -o Data5922.sql.txt
echo Batch complete Data5922.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5929.sql -o Data5929.sql.txt
echo Batch complete Data5929.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5930.sql -o Data5930.sql.txt
echo Batch complete Data5930.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5934.sql -o Data5934.sql.txt
echo Batch complete Data5934.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5942.sql -o Data5942.sql.txt
echo Batch complete Data5942.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5954.sql -o Data5954.sql.txt
echo Batch complete Data5954.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5956.sql -o Data5956.sql.txt
echo Batch complete Data5956.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5966.sql -o Data5966.sql.txt
echo Batch complete Data5966.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5974.sql -o Data5974.sql.txt
echo Batch complete Data5974.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5979.sql -o Data5979.sql.txt
echo Batch complete Data5979.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5985.sql -o Data5985.sql.txt
echo Batch complete Data5985.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data5986.sql -o Data5986.sql.txt
echo Batch complete Data5986.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6018.sql -o Data6018.sql.txt
echo Batch complete Data6018.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6019.sql -o Data6019.sql.txt
echo Batch complete Data6019.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6024.sql -o Data6024.sql.txt
echo Batch complete Data6024.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6026.sql -o Data6026.sql.txt
echo Batch complete Data6026.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6048.sql -o Data6048.sql.txt
echo Batch complete Data6048.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6053.sql -o Data6053.sql.txt
echo Batch complete Data6053.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6060.sql -o Data6060.sql.txt
echo Batch complete Data6060.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6064.sql -o Data6064.sql.txt
echo Batch complete Data6064.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6068.sql -o Data6068.sql.txt
echo Batch complete Data6068.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6074.sql -o Data6074.sql.txt
echo Batch complete Data6074.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6093.sql -o Data6093.sql.txt
echo Batch complete Data6093.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6106.sql -o Data6106.sql.txt
echo Batch complete Data6106.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6109.sql -o Data6109.sql.txt
echo Batch complete Data6109.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6139.sql -o Data6139.sql.txt
echo Batch complete Data6139.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6149.sql -o Data6149.sql.txt
echo Batch complete Data6149.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6157.sql -o Data6157.sql.txt
echo Batch complete Data6157.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6161.sql -o Data6161.sql.txt
echo Batch complete Data6161.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6166.sql -o Data6166.sql.txt
echo Batch complete Data6166.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6179.sql -o Data6179.sql.txt
echo Batch complete Data6179.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6189.sql -o Data6189.sql.txt
echo Batch complete Data6189.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6190.sql -o Data6190.sql.txt
echo Batch complete Data6190.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6195.sql -o Data6195.sql.txt
echo Batch complete Data6195.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6204.sql -o Data6204.sql.txt
echo Batch complete Data6204.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6206.sql -o Data6206.sql.txt
echo Batch complete Data6206.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6207.sql -o Data6207.sql.txt
echo Batch complete Data6207.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6211.sql -o Data6211.sql.txt
echo Batch complete Data6211.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6212.sql -o Data6212.sql.txt
echo Batch complete Data6212.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6216.sql -o Data6216.sql.txt
echo Batch complete Data6216.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6219.sql -o Data6219.sql.txt
echo Batch complete Data6219.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6220.sql -o Data6220.sql.txt
echo Batch complete Data6220.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6222.sql -o Data6222.sql.txt
echo Batch complete Data6222.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6228.sql -o Data6228.sql.txt
echo Batch complete Data6228.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6229.sql -o Data6229.sql.txt
echo Batch complete Data6229.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6237.sql -o Data6237.sql.txt
echo Batch complete Data6237.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6243.sql -o Data6243.sql.txt
echo Batch complete Data6243.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6265.sql -o Data6265.sql.txt
echo Batch complete Data6265.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6267.sql -o Data6267.sql.txt
echo Batch complete Data6267.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6268.sql -o Data6268.sql.txt
echo Batch complete Data6268.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6276.sql -o Data6276.sql.txt
echo Batch complete Data6276.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6282.sql -o Data6282.sql.txt
echo Batch complete Data6282.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6283.sql -o Data6283.sql.txt
echo Batch complete Data6283.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6285.sql -o Data6285.sql.txt
echo Batch complete Data6285.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6287.sql -o Data6287.sql.txt
echo Batch complete Data6287.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6289.sql -o Data6289.sql.txt
echo Batch complete Data6289.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6290.sql -o Data6290.sql.txt
echo Batch complete Data6290.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6306.sql -o Data6306.sql.txt
echo Batch complete Data6306.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6307.sql -o Data6307.sql.txt
echo Batch complete Data6307.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6308.sql -o Data6308.sql.txt
echo Batch complete Data6308.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6318.sql -o Data6318.sql.txt
echo Batch complete Data6318.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6320.sql -o Data6320.sql.txt
echo Batch complete Data6320.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6322.sql -o Data6322.sql.txt
echo Batch complete Data6322.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6326.sql -o Data6326.sql.txt
echo Batch complete Data6326.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6327.sql -o Data6327.sql.txt
echo Batch complete Data6327.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6339.sql -o Data6339.sql.txt
echo Batch complete Data6339.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6340.sql -o Data6340.sql.txt
echo Batch complete Data6340.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6341.sql -o Data6341.sql.txt
echo Batch complete Data6341.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6346.sql -o Data6346.sql.txt
echo Batch complete Data6346.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6357.sql -o Data6357.sql.txt
echo Batch complete Data6357.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6360.sql -o Data6360.sql.txt
echo Batch complete Data6360.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6361.sql -o Data6361.sql.txt
echo Batch complete Data6361.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6362.sql -o Data6362.sql.txt
echo Batch complete Data6362.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6363.sql -o Data6363.sql.txt
echo Batch complete Data6363.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6364.sql -o Data6364.sql.txt
echo Batch complete Data6364.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6365.sql -o Data6365.sql.txt
echo Batch complete Data6365.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6367.sql -o Data6367.sql.txt
echo Batch complete Data6367.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6368.sql -o Data6368.sql.txt
echo Batch complete Data6368.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6370.sql -o Data6370.sql.txt
echo Batch complete Data6370.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6372.sql -o Data6372.sql.txt
echo Batch complete Data6372.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6389.sql -o Data6389.sql.txt
echo Batch complete Data6389.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6391.sql -o Data6391.sql.txt
echo Batch complete Data6391.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6393.sql -o Data6393.sql.txt
echo Batch complete Data6393.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6394.sql -o Data6394.sql.txt
echo Batch complete Data6394.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6396.sql -o Data6396.sql.txt
echo Batch complete Data6396.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6399.sql -o Data6399.sql.txt
echo Batch complete Data6399.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6400.sql -o Data6400.sql.txt
echo Batch complete Data6400.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6401.sql -o Data6401.sql.txt
echo Batch complete Data6401.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6403.sql -o Data6403.sql.txt
echo Batch complete Data6403.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6412.sql -o Data6412.sql.txt
echo Batch complete Data6412.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6418.sql -o Data6418.sql.txt
echo Batch complete Data6418.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6421.sql -o Data6421.sql.txt
echo Batch complete Data6421.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6426.sql -o Data6426.sql.txt
echo Batch complete Data6426.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6441.sql -o Data6441.sql.txt
echo Batch complete Data6441.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6454.sql -o Data6454.sql.txt
echo Batch complete Data6454.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6458.sql -o Data6458.sql.txt
echo Batch complete Data6458.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6461.sql -o Data6461.sql.txt
echo Batch complete Data6461.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6466.sql -o Data6466.sql.txt
echo Batch complete Data6466.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6479.sql -o Data6479.sql.txt
echo Batch complete Data6479.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6497.sql -o Data6497.sql.txt
echo Batch complete Data6497.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6501.sql -o Data6501.sql.txt
echo Batch complete Data6501.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6508.sql -o Data6508.sql.txt
echo Batch complete Data6508.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6510.sql -o Data6510.sql.txt
echo Batch complete Data6510.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6529.sql -o Data6529.sql.txt
echo Batch complete Data6529.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6530.sql -o Data6530.sql.txt
echo Batch complete Data6530.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6531.sql -o Data6531.sql.txt
echo Batch complete Data6531.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6532.sql -o Data6532.sql.txt
echo Batch complete Data6532.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6562.sql -o Data6562.sql.txt
echo Batch complete Data6562.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6564.sql -o Data6564.sql.txt
echo Batch complete Data6564.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6569.sql -o Data6569.sql.txt
echo Batch complete Data6569.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6570.sql -o Data6570.sql.txt
echo Batch complete Data6570.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6571.sql -o Data6571.sql.txt
echo Batch complete Data6571.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6574.sql -o Data6574.sql.txt
echo Batch complete Data6574.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6579.sql -o Data6579.sql.txt
echo Batch complete Data6579.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6580.sql -o Data6580.sql.txt
echo Batch complete Data6580.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6581.sql -o Data6581.sql.txt
echo Batch complete Data6581.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6675.sql -o Data6675.sql.txt
echo Batch complete Data6675.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6682.sql -o Data6682.sql.txt
echo Batch complete Data6682.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6696.sql -o Data6696.sql.txt
echo Batch complete Data6696.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6712.sql -o Data6712.sql.txt
echo Batch complete Data6712.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6719.sql -o Data6719.sql.txt
echo Batch complete Data6719.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6722.sql -o Data6722.sql.txt
echo Batch complete Data6722.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6723.sql -o Data6723.sql.txt
echo Batch complete Data6723.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6725.sql -o Data6725.sql.txt
echo Batch complete Data6725.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6726.sql -o Data6726.sql.txt
echo Batch complete Data6726.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6730.sql -o Data6730.sql.txt
echo Batch complete Data6730.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6731.sql -o Data6731.sql.txt
echo Batch complete Data6731.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6748.sql -o Data6748.sql.txt
echo Batch complete Data6748.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6759.sql -o Data6759.sql.txt
echo Batch complete Data6759.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6766.sql -o Data6766.sql.txt
echo Batch complete Data6766.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6770.sql -o Data6770.sql.txt
echo Batch complete Data6770.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6771.sql -o Data6771.sql.txt
echo Batch complete Data6771.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6773.sql -o Data6773.sql.txt
echo Batch complete Data6773.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6774.sql -o Data6774.sql.txt
echo Batch complete Data6774.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6784.sql -o Data6784.sql.txt
echo Batch complete Data6784.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6786.sql -o Data6786.sql.txt
echo Batch complete Data6786.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6790.sql -o Data6790.sql.txt
echo Batch complete Data6790.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6793.sql -o Data6793.sql.txt
echo Batch complete Data6793.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6807.sql -o Data6807.sql.txt
echo Batch complete Data6807.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6811.sql -o Data6811.sql.txt
echo Batch complete Data6811.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6813.sql -o Data6813.sql.txt
echo Batch complete Data6813.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6821.sql -o Data6821.sql.txt
echo Batch complete Data6821.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6826.sql -o Data6826.sql.txt
echo Batch complete Data6826.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6829.sql -o Data6829.sql.txt
echo Batch complete Data6829.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6831.sql -o Data6831.sql.txt
echo Batch complete Data6831.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6832.sql -o Data6832.sql.txt
echo Batch complete Data6832.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6835.sql -o Data6835.sql.txt
echo Batch complete Data6835.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6839.sql -o Data6839.sql.txt
echo Batch complete Data6839.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6841.sql -o Data6841.sql.txt
echo Batch complete Data6841.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6845.sql -o Data6845.sql.txt
echo Batch complete Data6845.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6855.sql -o Data6855.sql.txt
echo Batch complete Data6855.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6858.sql -o Data6858.sql.txt
echo Batch complete Data6858.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6860.sql -o Data6860.sql.txt
echo Batch complete Data6860.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6869.sql -o Data6869.sql.txt
echo Batch complete Data6869.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6870.sql -o Data6870.sql.txt
echo Batch complete Data6870.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6880.sql -o Data6880.sql.txt
echo Batch complete Data6880.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6881.sql -o Data6881.sql.txt
echo Batch complete Data6881.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6885.sql -o Data6885.sql.txt
echo Batch complete Data6885.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6886.sql -o Data6886.sql.txt
echo Batch complete Data6886.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6893.sql -o Data6893.sql.txt
echo Batch complete Data6893.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6894.sql -o Data6894.sql.txt
echo Batch complete Data6894.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6898.sql -o Data6898.sql.txt
echo Batch complete Data6898.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6900.sql -o Data6900.sql.txt
echo Batch complete Data6900.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6904.sql -o Data6904.sql.txt
echo Batch complete Data6904.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6905.sql -o Data6905.sql.txt
echo Batch complete Data6905.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6906.sql -o Data6906.sql.txt
echo Batch complete Data6906.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6907.sql -o Data6907.sql.txt
echo Batch complete Data6907.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6910.sql -o Data6910.sql.txt
echo Batch complete Data6910.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6911.sql -o Data6911.sql.txt
echo Batch complete Data6911.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6912.sql -o Data6912.sql.txt
echo Batch complete Data6912.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6919.sql -o Data6919.sql.txt
echo Batch complete Data6919.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6923.sql -o Data6923.sql.txt
echo Batch complete Data6923.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6925.sql -o Data6925.sql.txt
echo Batch complete Data6925.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6933.sql -o Data6933.sql.txt
echo Batch complete Data6933.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6939.sql -o Data6939.sql.txt
echo Batch complete Data6939.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6940.sql -o Data6940.sql.txt
echo Batch complete Data6940.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6941.sql -o Data6941.sql.txt
echo Batch complete Data6941.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6942.sql -o Data6942.sql.txt
echo Batch complete Data6942.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6944.sql -o Data6944.sql.txt
echo Batch complete Data6944.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6947.sql -o Data6947.sql.txt
echo Batch complete Data6947.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6953.sql -o Data6953.sql.txt
echo Batch complete Data6953.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6957.sql -o Data6957.sql.txt
echo Batch complete Data6957.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6965.sql -o Data6965.sql.txt
echo Batch complete Data6965.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6966.sql -o Data6966.sql.txt
echo Batch complete Data6966.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6973.sql -o Data6973.sql.txt
echo Batch complete Data6973.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6974.sql -o Data6974.sql.txt
echo Batch complete Data6974.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6985.sql -o Data6985.sql.txt
echo Batch complete Data6985.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6989.sql -o Data6989.sql.txt
echo Batch complete Data6989.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6990.sql -o Data6990.sql.txt
echo Batch complete Data6990.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6992.sql -o Data6992.sql.txt
echo Batch complete Data6992.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6996.sql -o Data6996.sql.txt
echo Batch complete Data6996.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data6998.sql -o Data6998.sql.txt
echo Batch complete Data6998.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7000.sql -o Data7000.sql.txt
echo Batch complete Data7000.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7004.sql -o Data7004.sql.txt
echo Batch complete Data7004.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7005.sql -o Data7005.sql.txt
echo Batch complete Data7005.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7011.sql -o Data7011.sql.txt
echo Batch complete Data7011.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7012.sql -o Data7012.sql.txt
echo Batch complete Data7012.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7013.sql -o Data7013.sql.txt
echo Batch complete Data7013.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7029.sql -o Data7029.sql.txt
echo Batch complete Data7029.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7031.sql -o Data7031.sql.txt
echo Batch complete Data7031.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7032.sql -o Data7032.sql.txt
echo Batch complete Data7032.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7033.sql -o Data7033.sql.txt
echo Batch complete Data7033.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7039.sql -o Data7039.sql.txt
echo Batch complete Data7039.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7046.sql -o Data7046.sql.txt
echo Batch complete Data7046.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7052.sql -o Data7052.sql.txt
echo Batch complete Data7052.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7085.sql -o Data7085.sql.txt
echo Batch complete Data7085.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7094.sql -o Data7094.sql.txt
echo Batch complete Data7094.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7101.sql -o Data7101.sql.txt
echo Batch complete Data7101.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7103.sql -o Data7103.sql.txt
echo Batch complete Data7103.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7134.sql -o Data7134.sql.txt
echo Batch complete Data7134.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7139.sql -o Data7139.sql.txt
echo Batch complete Data7139.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7142.sql -o Data7142.sql.txt
echo Batch complete Data7142.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7148.sql -o Data7148.sql.txt
echo Batch complete Data7148.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7155.sql -o Data7155.sql.txt
echo Batch complete Data7155.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7162.sql -o Data7162.sql.txt
echo Batch complete Data7162.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7165.sql -o Data7165.sql.txt
echo Batch complete Data7165.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7173.sql -o Data7173.sql.txt
echo Batch complete Data7173.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7176.sql -o Data7176.sql.txt
echo Batch complete Data7176.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7181.sql -o Data7181.sql.txt
echo Batch complete Data7181.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7187.sql -o Data7187.sql.txt
echo Batch complete Data7187.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7191.sql -o Data7191.sql.txt
echo Batch complete Data7191.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7195.sql -o Data7195.sql.txt
echo Batch complete Data7195.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7196.sql -o Data7196.sql.txt
echo Batch complete Data7196.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7198.sql -o Data7198.sql.txt
echo Batch complete Data7198.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7199.sql -o Data7199.sql.txt
echo Batch complete Data7199.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7211.sql -o Data7211.sql.txt
echo Batch complete Data7211.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7212.sql -o Data7212.sql.txt
echo Batch complete Data7212.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7214.sql -o Data7214.sql.txt
echo Batch complete Data7214.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7225.sql -o Data7225.sql.txt
echo Batch complete Data7225.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7226.sql -o Data7226.sql.txt
echo Batch complete Data7226.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7227.sql -o Data7227.sql.txt
echo Batch complete Data7227.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7231.sql -o Data7231.sql.txt
echo Batch complete Data7231.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7233.sql -o Data7233.sql.txt
echo Batch complete Data7233.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7235.sql -o Data7235.sql.txt
echo Batch complete Data7235.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7236.sql -o Data7236.sql.txt
echo Batch complete Data7236.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7240.sql -o Data7240.sql.txt
echo Batch complete Data7240.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7245.sql -o Data7245.sql.txt
echo Batch complete Data7245.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7253.sql -o Data7253.sql.txt
echo Batch complete Data7253.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7255.sql -o Data7255.sql.txt
echo Batch complete Data7255.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7257.sql -o Data7257.sql.txt
echo Batch complete Data7257.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7258.sql -o Data7258.sql.txt
echo Batch complete Data7258.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7264.sql -o Data7264.sql.txt
echo Batch complete Data7264.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7265.sql -o Data7265.sql.txt
echo Batch complete Data7265.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7268.sql -o Data7268.sql.txt
echo Batch complete Data7268.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7293.sql -o Data7293.sql.txt
echo Batch complete Data7293.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7300.sql -o Data7300.sql.txt
echo Batch complete Data7300.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7313.sql -o Data7313.sql.txt
echo Batch complete Data7313.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7316.sql -o Data7316.sql.txt
echo Batch complete Data7316.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7317.sql -o Data7317.sql.txt
echo Batch complete Data7317.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7321.sql -o Data7321.sql.txt
echo Batch complete Data7321.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7324.sql -o Data7324.sql.txt
echo Batch complete Data7324.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7328.sql -o Data7328.sql.txt
echo Batch complete Data7328.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7337.sql -o Data7337.sql.txt
echo Batch complete Data7337.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7339.sql -o Data7339.sql.txt
echo Batch complete Data7339.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7347.sql -o Data7347.sql.txt
echo Batch complete Data7347.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7350.sql -o Data7350.sql.txt
echo Batch complete Data7350.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7356.sql -o Data7356.sql.txt
echo Batch complete Data7356.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7357.sql -o Data7357.sql.txt
echo Batch complete Data7357.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7362.sql -o Data7362.sql.txt
echo Batch complete Data7362.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7374.sql -o Data7374.sql.txt
echo Batch complete Data7374.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7375.sql -o Data7375.sql.txt
echo Batch complete Data7375.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7376.sql -o Data7376.sql.txt
echo Batch complete Data7376.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7381.sql -o Data7381.sql.txt
echo Batch complete Data7381.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7390.sql -o Data7390.sql.txt
echo Batch complete Data7390.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7399.sql -o Data7399.sql.txt
echo Batch complete Data7399.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7403.sql -o Data7403.sql.txt
echo Batch complete Data7403.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7404.sql -o Data7404.sql.txt
echo Batch complete Data7404.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7405.sql -o Data7405.sql.txt
echo Batch complete Data7405.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7408.sql -o Data7408.sql.txt
echo Batch complete Data7408.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7417.sql -o Data7417.sql.txt
echo Batch complete Data7417.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7418.sql -o Data7418.sql.txt
echo Batch complete Data7418.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7423.sql -o Data7423.sql.txt
echo Batch complete Data7423.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7428.sql -o Data7428.sql.txt
echo Batch complete Data7428.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7434.sql -o Data7434.sql.txt
echo Batch complete Data7434.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7439.sql -o Data7439.sql.txt
echo Batch complete Data7439.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7441.sql -o Data7441.sql.txt
echo Batch complete Data7441.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7442.sql -o Data7442.sql.txt
echo Batch complete Data7442.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7445.sql -o Data7445.sql.txt
echo Batch complete Data7445.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7454.sql -o Data7454.sql.txt
echo Batch complete Data7454.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7455.sql -o Data7455.sql.txt
echo Batch complete Data7455.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7461.sql -o Data7461.sql.txt
echo Batch complete Data7461.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7462.sql -o Data7462.sql.txt
echo Batch complete Data7462.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7464.sql -o Data7464.sql.txt
echo Batch complete Data7464.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7465.sql -o Data7465.sql.txt
echo Batch complete Data7465.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7467.sql -o Data7467.sql.txt
echo Batch complete Data7467.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7470.sql -o Data7470.sql.txt
echo Batch complete Data7470.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7472.sql -o Data7472.sql.txt
echo Batch complete Data7472.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7478.sql -o Data7478.sql.txt
echo Batch complete Data7478.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7479.sql -o Data7479.sql.txt
echo Batch complete Data7479.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7481.sql -o Data7481.sql.txt
echo Batch complete Data7481.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7482.sql -o Data7482.sql.txt
echo Batch complete Data7482.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7495.sql -o Data7495.sql.txt
echo Batch complete Data7495.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7497.sql -o Data7497.sql.txt
echo Batch complete Data7497.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7498.sql -o Data7498.sql.txt
echo Batch complete Data7498.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7499.sql -o Data7499.sql.txt
echo Batch complete Data7499.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7500.sql -o Data7500.sql.txt
echo Batch complete Data7500.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7502.sql -o Data7502.sql.txt
echo Batch complete Data7502.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7508.sql -o Data7508.sql.txt
echo Batch complete Data7508.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7509.sql -o Data7509.sql.txt
echo Batch complete Data7509.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7510.sql -o Data7510.sql.txt
echo Batch complete Data7510.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7512.sql -o Data7512.sql.txt
echo Batch complete Data7512.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7513.sql -o Data7513.sql.txt
echo Batch complete Data7513.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7515.sql -o Data7515.sql.txt
echo Batch complete Data7515.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7520.sql -o Data7520.sql.txt
echo Batch complete Data7520.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7522.sql -o Data7522.sql.txt
echo Batch complete Data7522.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7523.sql -o Data7523.sql.txt
echo Batch complete Data7523.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7526.sql -o Data7526.sql.txt
echo Batch complete Data7526.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7531.sql -o Data7531.sql.txt
echo Batch complete Data7531.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7539.sql -o Data7539.sql.txt
echo Batch complete Data7539.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7541.sql -o Data7541.sql.txt
echo Batch complete Data7541.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7542.sql -o Data7542.sql.txt
echo Batch complete Data7542.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7543.sql -o Data7543.sql.txt
echo Batch complete Data7543.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7544.sql -o Data7544.sql.txt
echo Batch complete Data7544.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7547.sql -o Data7547.sql.txt
echo Batch complete Data7547.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7548.sql -o Data7548.sql.txt
echo Batch complete Data7548.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7551.sql -o Data7551.sql.txt
echo Batch complete Data7551.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7552.sql -o Data7552.sql.txt
echo Batch complete Data7552.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7556.sql -o Data7556.sql.txt
echo Batch complete Data7556.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7559.sql -o Data7559.sql.txt
echo Batch complete Data7559.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7563.sql -o Data7563.sql.txt
echo Batch complete Data7563.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7567.sql -o Data7567.sql.txt
echo Batch complete Data7567.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7569.sql -o Data7569.sql.txt
echo Batch complete Data7569.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7572.sql -o Data7572.sql.txt
echo Batch complete Data7572.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7573.sql -o Data7573.sql.txt
echo Batch complete Data7573.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7574.sql -o Data7574.sql.txt
echo Batch complete Data7574.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7575.sql -o Data7575.sql.txt
echo Batch complete Data7575.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7579.sql -o Data7579.sql.txt
echo Batch complete Data7579.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7582.sql -o Data7582.sql.txt
echo Batch complete Data7582.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7594.sql -o Data7594.sql.txt
echo Batch complete Data7594.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7606.sql -o Data7606.sql.txt
echo Batch complete Data7606.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7608.sql -o Data7608.sql.txt
echo Batch complete Data7608.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7609.sql -o Data7609.sql.txt
echo Batch complete Data7609.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7613.sql -o Data7613.sql.txt
echo Batch complete Data7613.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7614.sql -o Data7614.sql.txt
echo Batch complete Data7614.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7624.sql -o Data7624.sql.txt
echo Batch complete Data7624.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7628.sql -o Data7628.sql.txt
echo Batch complete Data7628.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7631.sql -o Data7631.sql.txt
echo Batch complete Data7631.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7633.sql -o Data7633.sql.txt
echo Batch complete Data7633.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7635.sql -o Data7635.sql.txt
echo Batch complete Data7635.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7639.sql -o Data7639.sql.txt
echo Batch complete Data7639.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7640.sql -o Data7640.sql.txt
echo Batch complete Data7640.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7649.sql -o Data7649.sql.txt
echo Batch complete Data7649.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7655.sql -o Data7655.sql.txt
echo Batch complete Data7655.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7656.sql -o Data7656.sql.txt
echo Batch complete Data7656.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7657.sql -o Data7657.sql.txt
echo Batch complete Data7657.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7662.sql -o Data7662.sql.txt
echo Batch complete Data7662.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7673.sql -o Data7673.sql.txt
echo Batch complete Data7673.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7679.sql -o Data7679.sql.txt
echo Batch complete Data7679.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7680.sql -o Data7680.sql.txt
echo Batch complete Data7680.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7695.sql -o Data7695.sql.txt
echo Batch complete Data7695.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7698.sql -o Data7698.sql.txt
echo Batch complete Data7698.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7719.sql -o Data7719.sql.txt
echo Batch complete Data7719.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7723.sql -o Data7723.sql.txt
echo Batch complete Data7723.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7724.sql -o Data7724.sql.txt
echo Batch complete Data7724.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7726.sql -o Data7726.sql.txt
echo Batch complete Data7726.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7728.sql -o Data7728.sql.txt
echo Batch complete Data7728.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7730.sql -o Data7730.sql.txt
echo Batch complete Data7730.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7737.sql -o Data7737.sql.txt
echo Batch complete Data7737.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7739.sql -o Data7739.sql.txt
echo Batch complete Data7739.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7741.sql -o Data7741.sql.txt
echo Batch complete Data7741.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7743.sql -o Data7743.sql.txt
echo Batch complete Data7743.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7744.sql -o Data7744.sql.txt
echo Batch complete Data7744.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7751.sql -o Data7751.sql.txt
echo Batch complete Data7751.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7757.sql -o Data7757.sql.txt
echo Batch complete Data7757.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7759.sql -o Data7759.sql.txt
echo Batch complete Data7759.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7762.sql -o Data7762.sql.txt
echo Batch complete Data7762.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7763.sql -o Data7763.sql.txt
echo Batch complete Data7763.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7766.sql -o Data7766.sql.txt
echo Batch complete Data7766.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7768.sql -o Data7768.sql.txt
echo Batch complete Data7768.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7772.sql -o Data7772.sql.txt
echo Batch complete Data7772.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7776.sql -o Data7776.sql.txt
echo Batch complete Data7776.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7780.sql -o Data7780.sql.txt
echo Batch complete Data7780.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7781.sql -o Data7781.sql.txt
echo Batch complete Data7781.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7782.sql -o Data7782.sql.txt
echo Batch complete Data7782.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7788.sql -o Data7788.sql.txt
echo Batch complete Data7788.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7790.sql -o Data7790.sql.txt
echo Batch complete Data7790.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7792.sql -o Data7792.sql.txt
echo Batch complete Data7792.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7793.sql -o Data7793.sql.txt
echo Batch complete Data7793.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7796.sql -o Data7796.sql.txt
echo Batch complete Data7796.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7797.sql -o Data7797.sql.txt
echo Batch complete Data7797.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7798.sql -o Data7798.sql.txt
echo Batch complete Data7798.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7802.sql -o Data7802.sql.txt
echo Batch complete Data7802.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7809.sql -o Data7809.sql.txt
echo Batch complete Data7809.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7815.sql -o Data7815.sql.txt
echo Batch complete Data7815.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7819.sql -o Data7819.sql.txt
echo Batch complete Data7819.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7821.sql -o Data7821.sql.txt
echo Batch complete Data7821.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7826.sql -o Data7826.sql.txt
echo Batch complete Data7826.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7829.sql -o Data7829.sql.txt
echo Batch complete Data7829.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7830.sql -o Data7830.sql.txt
echo Batch complete Data7830.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7841.sql -o Data7841.sql.txt
echo Batch complete Data7841.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7845.sql -o Data7845.sql.txt
echo Batch complete Data7845.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7846.sql -o Data7846.sql.txt
echo Batch complete Data7846.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7847.sql -o Data7847.sql.txt
echo Batch complete Data7847.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7850.sql -o Data7850.sql.txt
echo Batch complete Data7850.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7853.sql -o Data7853.sql.txt
echo Batch complete Data7853.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7854.sql -o Data7854.sql.txt
echo Batch complete Data7854.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7863.sql -o Data7863.sql.txt
echo Batch complete Data7863.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7868.sql -o Data7868.sql.txt
echo Batch complete Data7868.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7875.sql -o Data7875.sql.txt
echo Batch complete Data7875.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7878.sql -o Data7878.sql.txt
echo Batch complete Data7878.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7879.sql -o Data7879.sql.txt
echo Batch complete Data7879.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7885.sql -o Data7885.sql.txt
echo Batch complete Data7885.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7887.sql -o Data7887.sql.txt
echo Batch complete Data7887.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7890.sql -o Data7890.sql.txt
echo Batch complete Data7890.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7891.sql -o Data7891.sql.txt
echo Batch complete Data7891.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7905.sql -o Data7905.sql.txt
echo Batch complete Data7905.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7918.sql -o Data7918.sql.txt
echo Batch complete Data7918.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7929.sql -o Data7929.sql.txt
echo Batch complete Data7929.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7939.sql -o Data7939.sql.txt
echo Batch complete Data7939.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7944.sql -o Data7944.sql.txt
echo Batch complete Data7944.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7951.sql -o Data7951.sql.txt
echo Batch complete Data7951.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7952.sql -o Data7952.sql.txt
echo Batch complete Data7952.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7956.sql -o Data7956.sql.txt
echo Batch complete Data7956.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7963.sql -o Data7963.sql.txt
echo Batch complete Data7963.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7971.sql -o Data7971.sql.txt
echo Batch complete Data7971.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7983.sql -o Data7983.sql.txt
echo Batch complete Data7983.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data7990.sql -o Data7990.sql.txt
echo Batch complete Data7990.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8014.sql -o Data8014.sql.txt
echo Batch complete Data8014.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8015.sql -o Data8015.sql.txt
echo Batch complete Data8015.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8021.sql -o Data8021.sql.txt
echo Batch complete Data8021.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8026.sql -o Data8026.sql.txt
echo Batch complete Data8026.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8027.sql -o Data8027.sql.txt
echo Batch complete Data8027.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8031.sql -o Data8031.sql.txt
echo Batch complete Data8031.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8032.sql -o Data8032.sql.txt
echo Batch complete Data8032.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8036.sql -o Data8036.sql.txt
echo Batch complete Data8036.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8037.sql -o Data8037.sql.txt
echo Batch complete Data8037.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8038.sql -o Data8038.sql.txt
echo Batch complete Data8038.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8042.sql -o Data8042.sql.txt
echo Batch complete Data8042.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8051.sql -o Data8051.sql.txt
echo Batch complete Data8051.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8055.sql -o Data8055.sql.txt
echo Batch complete Data8055.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8062.sql -o Data8062.sql.txt
echo Batch complete Data8062.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8069.sql -o Data8069.sql.txt
echo Batch complete Data8069.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8070.sql -o Data8070.sql.txt
echo Batch complete Data8070.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8074.sql -o Data8074.sql.txt
echo Batch complete Data8074.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8080.sql -o Data8080.sql.txt
echo Batch complete Data8080.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8081.sql -o Data8081.sql.txt
echo Batch complete Data8081.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8082.sql -o Data8082.sql.txt
echo Batch complete Data8082.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8088.sql -o Data8088.sql.txt
echo Batch complete Data8088.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8096.sql -o Data8096.sql.txt
echo Batch complete Data8096.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8102.sql -o Data8102.sql.txt
echo Batch complete Data8102.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8108.sql -o Data8108.sql.txt
echo Batch complete Data8108.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8135.sql -o Data8135.sql.txt
echo Batch complete Data8135.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8155.sql -o Data8155.sql.txt
echo Batch complete Data8155.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8163.sql -o Data8163.sql.txt
echo Batch complete Data8163.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8170.sql -o Data8170.sql.txt
echo Batch complete Data8170.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8178.sql -o Data8178.sql.txt
echo Batch complete Data8178.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8192.sql -o Data8192.sql.txt
echo Batch complete Data8192.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8207.sql -o Data8207.sql.txt
echo Batch complete Data8207.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8211.sql -o Data8211.sql.txt
echo Batch complete Data8211.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8225.sql -o Data8225.sql.txt
echo Batch complete Data8225.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8228.sql -o Data8228.sql.txt
echo Batch complete Data8228.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8229.sql -o Data8229.sql.txt
echo Batch complete Data8229.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8231.sql -o Data8231.sql.txt
echo Batch complete Data8231.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8232.sql -o Data8232.sql.txt
echo Batch complete Data8232.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8233.sql -o Data8233.sql.txt
echo Batch complete Data8233.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8235.sql -o Data8235.sql.txt
echo Batch complete Data8235.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8249.sql -o Data8249.sql.txt
echo Batch complete Data8249.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8255.sql -o Data8255.sql.txt
echo Batch complete Data8255.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8259.sql -o Data8259.sql.txt
echo Batch complete Data8259.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8260.sql -o Data8260.sql.txt
echo Batch complete Data8260.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8261.sql -o Data8261.sql.txt
echo Batch complete Data8261.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8273.sql -o Data8273.sql.txt
echo Batch complete Data8273.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8276.sql -o Data8276.sql.txt
echo Batch complete Data8276.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8278.sql -o Data8278.sql.txt
echo Batch complete Data8278.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8280.sql -o Data8280.sql.txt
echo Batch complete Data8280.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8281.sql -o Data8281.sql.txt
echo Batch complete Data8281.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8282.sql -o Data8282.sql.txt
echo Batch complete Data8282.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8289.sql -o Data8289.sql.txt
echo Batch complete Data8289.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8290.sql -o Data8290.sql.txt
echo Batch complete Data8290.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8291.sql -o Data8291.sql.txt
echo Batch complete Data8291.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8294.sql -o Data8294.sql.txt
echo Batch complete Data8294.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8295.sql -o Data8295.sql.txt
echo Batch complete Data8295.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8296.sql -o Data8296.sql.txt
echo Batch complete Data8296.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8298.sql -o Data8298.sql.txt
echo Batch complete Data8298.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8300.sql -o Data8300.sql.txt
echo Batch complete Data8300.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8303.sql -o Data8303.sql.txt
echo Batch complete Data8303.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8305.sql -o Data8305.sql.txt
echo Batch complete Data8305.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8312.sql -o Data8312.sql.txt
echo Batch complete Data8312.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8313.sql -o Data8313.sql.txt
echo Batch complete Data8313.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8315.sql -o Data8315.sql.txt
echo Batch complete Data8315.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8316.sql -o Data8316.sql.txt
echo Batch complete Data8316.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8320.sql -o Data8320.sql.txt
echo Batch complete Data8320.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8329.sql -o Data8329.sql.txt
echo Batch complete Data8329.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8340.sql -o Data8340.sql.txt
echo Batch complete Data8340.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8347.sql -o Data8347.sql.txt
echo Batch complete Data8347.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8348.sql -o Data8348.sql.txt
echo Batch complete Data8348.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8351.sql -o Data8351.sql.txt
echo Batch complete Data8351.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8354.sql -o Data8354.sql.txt
echo Batch complete Data8354.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8358.sql -o Data8358.sql.txt
echo Batch complete Data8358.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8365.sql -o Data8365.sql.txt
echo Batch complete Data8365.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8376.sql -o Data8376.sql.txt
echo Batch complete Data8376.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8378.sql -o Data8378.sql.txt
echo Batch complete Data8378.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8381.sql -o Data8381.sql.txt
echo Batch complete Data8381.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8383.sql -o Data8383.sql.txt
echo Batch complete Data8383.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8384.sql -o Data8384.sql.txt
echo Batch complete Data8384.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8391.sql -o Data8391.sql.txt
echo Batch complete Data8391.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8392.sql -o Data8392.sql.txt
echo Batch complete Data8392.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8413.sql -o Data8413.sql.txt
echo Batch complete Data8413.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8420.sql -o Data8420.sql.txt
echo Batch complete Data8420.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8431.sql -o Data8431.sql.txt
echo Batch complete Data8431.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8432.sql -o Data8432.sql.txt
echo Batch complete Data8432.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8436.sql -o Data8436.sql.txt
echo Batch complete Data8436.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8438.sql -o Data8438.sql.txt
echo Batch complete Data8438.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8460.sql -o Data8460.sql.txt
echo Batch complete Data8460.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8463.sql -o Data8463.sql.txt
echo Batch complete Data8463.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8480.sql -o Data8480.sql.txt
echo Batch complete Data8480.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8481.sql -o Data8481.sql.txt
echo Batch complete Data8481.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8490.sql -o Data8490.sql.txt
echo Batch complete Data8490.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8494.sql -o Data8494.sql.txt
echo Batch complete Data8494.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8495.sql -o Data8495.sql.txt
echo Batch complete Data8495.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8496.sql -o Data8496.sql.txt
echo Batch complete Data8496.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8497.sql -o Data8497.sql.txt
echo Batch complete Data8497.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8500.sql -o Data8500.sql.txt
echo Batch complete Data8500.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8502.sql -o Data8502.sql.txt
echo Batch complete Data8502.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8504.sql -o Data8504.sql.txt
echo Batch complete Data8504.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8505.sql -o Data8505.sql.txt
echo Batch complete Data8505.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8506.sql -o Data8506.sql.txt
echo Batch complete Data8506.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8510.sql -o Data8510.sql.txt
echo Batch complete Data8510.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8511.sql -o Data8511.sql.txt
echo Batch complete Data8511.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8512.sql -o Data8512.sql.txt
echo Batch complete Data8512.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8513.sql -o Data8513.sql.txt
echo Batch complete Data8513.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8514.sql -o Data8514.sql.txt
echo Batch complete Data8514.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8518.sql -o Data8518.sql.txt
echo Batch complete Data8518.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8520.sql -o Data8520.sql.txt
echo Batch complete Data8520.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8524.sql -o Data8524.sql.txt
echo Batch complete Data8524.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8531.sql -o Data8531.sql.txt
echo Batch complete Data8531.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8535.sql -o Data8535.sql.txt
echo Batch complete Data8535.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8539.sql -o Data8539.sql.txt
echo Batch complete Data8539.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8546.sql -o Data8546.sql.txt
echo Batch complete Data8546.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8550.sql -o Data8550.sql.txt
echo Batch complete Data8550.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8559.sql -o Data8559.sql.txt
echo Batch complete Data8559.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8560.sql -o Data8560.sql.txt
echo Batch complete Data8560.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8561.sql -o Data8561.sql.txt
echo Batch complete Data8561.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8562.sql -o Data8562.sql.txt
echo Batch complete Data8562.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8564.sql -o Data8564.sql.txt
echo Batch complete Data8564.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8565.sql -o Data8565.sql.txt
echo Batch complete Data8565.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8566.sql -o Data8566.sql.txt
echo Batch complete Data8566.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8568.sql -o Data8568.sql.txt
echo Batch complete Data8568.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8579.sql -o Data8579.sql.txt
echo Batch complete Data8579.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8580.sql -o Data8580.sql.txt
echo Batch complete Data8580.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8588.sql -o Data8588.sql.txt
echo Batch complete Data8588.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8590.sql -o Data8590.sql.txt
echo Batch complete Data8590.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8592.sql -o Data8592.sql.txt
echo Batch complete Data8592.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8593.sql -o Data8593.sql.txt
echo Batch complete Data8593.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8595.sql -o Data8595.sql.txt
echo Batch complete Data8595.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8598.sql -o Data8598.sql.txt
echo Batch complete Data8598.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8599.sql -o Data8599.sql.txt
echo Batch complete Data8599.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8604.sql -o Data8604.sql.txt
echo Batch complete Data8604.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8609.sql -o Data8609.sql.txt
echo Batch complete Data8609.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8611.sql -o Data8611.sql.txt
echo Batch complete Data8611.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8620.sql -o Data8620.sql.txt
echo Batch complete Data8620.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8621.sql -o Data8621.sql.txt
echo Batch complete Data8621.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8627.sql -o Data8627.sql.txt
echo Batch complete Data8627.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8628.sql -o Data8628.sql.txt
echo Batch complete Data8628.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8630.sql -o Data8630.sql.txt
echo Batch complete Data8630.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8631.sql -o Data8631.sql.txt
echo Batch complete Data8631.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8632.sql -o Data8632.sql.txt
echo Batch complete Data8632.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8633.sql -o Data8633.sql.txt
echo Batch complete Data8633.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8634.sql -o Data8634.sql.txt
echo Batch complete Data8634.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8637.sql -o Data8637.sql.txt
echo Batch complete Data8637.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8650.sql -o Data8650.sql.txt
echo Batch complete Data8650.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8652.sql -o Data8652.sql.txt
echo Batch complete Data8652.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8654.sql -o Data8654.sql.txt
echo Batch complete Data8654.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8664.sql -o Data8664.sql.txt
echo Batch complete Data8664.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8668.sql -o Data8668.sql.txt
echo Batch complete Data8668.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8670.sql -o Data8670.sql.txt
echo Batch complete Data8670.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8674.sql -o Data8674.sql.txt
echo Batch complete Data8674.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8681.sql -o Data8681.sql.txt
echo Batch complete Data8681.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8694.sql -o Data8694.sql.txt
echo Batch complete Data8694.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8711.sql -o Data8711.sql.txt
echo Batch complete Data8711.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8712.sql -o Data8712.sql.txt
echo Batch complete Data8712.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8713.sql -o Data8713.sql.txt
echo Batch complete Data8713.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8717.sql -o Data8717.sql.txt
echo Batch complete Data8717.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8721.sql -o Data8721.sql.txt
echo Batch complete Data8721.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8729.sql -o Data8729.sql.txt
echo Batch complete Data8729.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8730.sql -o Data8730.sql.txt
echo Batch complete Data8730.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8736.sql -o Data8736.sql.txt
echo Batch complete Data8736.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8754.sql -o Data8754.sql.txt
echo Batch complete Data8754.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8757.sql -o Data8757.sql.txt
echo Batch complete Data8757.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8758.sql -o Data8758.sql.txt
echo Batch complete Data8758.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8759.sql -o Data8759.sql.txt
echo Batch complete Data8759.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8760.sql -o Data8760.sql.txt
echo Batch complete Data8760.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8768.sql -o Data8768.sql.txt
echo Batch complete Data8768.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8774.sql -o Data8774.sql.txt
echo Batch complete Data8774.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8780.sql -o Data8780.sql.txt
echo Batch complete Data8780.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8781.sql -o Data8781.sql.txt
echo Batch complete Data8781.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8782.sql -o Data8782.sql.txt
echo Batch complete Data8782.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8783.sql -o Data8783.sql.txt
echo Batch complete Data8783.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8784.sql -o Data8784.sql.txt
echo Batch complete Data8784.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8785.sql -o Data8785.sql.txt
echo Batch complete Data8785.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8791.sql -o Data8791.sql.txt
echo Batch complete Data8791.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8792.sql -o Data8792.sql.txt
echo Batch complete Data8792.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8794.sql -o Data8794.sql.txt
echo Batch complete Data8794.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8799.sql -o Data8799.sql.txt
echo Batch complete Data8799.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8803.sql -o Data8803.sql.txt
echo Batch complete Data8803.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8807.sql -o Data8807.sql.txt
echo Batch complete Data8807.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8812.sql -o Data8812.sql.txt
echo Batch complete Data8812.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8816.sql -o Data8816.sql.txt
echo Batch complete Data8816.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8827.sql -o Data8827.sql.txt
echo Batch complete Data8827.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8836.sql -o Data8836.sql.txt
echo Batch complete Data8836.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8837.sql -o Data8837.sql.txt
echo Batch complete Data8837.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8841.sql -o Data8841.sql.txt
echo Batch complete Data8841.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8845.sql -o Data8845.sql.txt
echo Batch complete Data8845.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8849.sql -o Data8849.sql.txt
echo Batch complete Data8849.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8850.sql -o Data8850.sql.txt
echo Batch complete Data8850.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8852.sql -o Data8852.sql.txt
echo Batch complete Data8852.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8853.sql -o Data8853.sql.txt
echo Batch complete Data8853.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8854.sql -o Data8854.sql.txt
echo Batch complete Data8854.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8855.sql -o Data8855.sql.txt
echo Batch complete Data8855.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8857.sql -o Data8857.sql.txt
echo Batch complete Data8857.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8858.sql -o Data8858.sql.txt
echo Batch complete Data8858.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8861.sql -o Data8861.sql.txt
echo Batch complete Data8861.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8874.sql -o Data8874.sql.txt
echo Batch complete Data8874.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8887.sql -o Data8887.sql.txt
echo Batch complete Data8887.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8891.sql -o Data8891.sql.txt
echo Batch complete Data8891.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8894.sql -o Data8894.sql.txt
echo Batch complete Data8894.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8903.sql -o Data8903.sql.txt
echo Batch complete Data8903.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8904.sql -o Data8904.sql.txt
echo Batch complete Data8904.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8905.sql -o Data8905.sql.txt
echo Batch complete Data8905.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8910.sql -o Data8910.sql.txt
echo Batch complete Data8910.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8911.sql -o Data8911.sql.txt
echo Batch complete Data8911.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8912.sql -o Data8912.sql.txt
echo Batch complete Data8912.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8915.sql -o Data8915.sql.txt
echo Batch complete Data8915.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8918.sql -o Data8918.sql.txt
echo Batch complete Data8918.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8921.sql -o Data8921.sql.txt
echo Batch complete Data8921.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8922.sql -o Data8922.sql.txt
echo Batch complete Data8922.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8924.sql -o Data8924.sql.txt
echo Batch complete Data8924.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8926.sql -o Data8926.sql.txt
echo Batch complete Data8926.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8929.sql -o Data8929.sql.txt
echo Batch complete Data8929.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8930.sql -o Data8930.sql.txt
echo Batch complete Data8930.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8931.sql -o Data8931.sql.txt
echo Batch complete Data8931.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8933.sql -o Data8933.sql.txt
echo Batch complete Data8933.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8934.sql -o Data8934.sql.txt
echo Batch complete Data8934.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8938.sql -o Data8938.sql.txt
echo Batch complete Data8938.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8939.sql -o Data8939.sql.txt
echo Batch complete Data8939.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8942.sql -o Data8942.sql.txt
echo Batch complete Data8942.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8946.sql -o Data8946.sql.txt
echo Batch complete Data8946.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8948.sql -o Data8948.sql.txt
echo Batch complete Data8948.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8950.sql -o Data8950.sql.txt
echo Batch complete Data8950.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8951.sql -o Data8951.sql.txt
echo Batch complete Data8951.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8957.sql -o Data8957.sql.txt
echo Batch complete Data8957.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8961.sql -o Data8961.sql.txt
echo Batch complete Data8961.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8963.sql -o Data8963.sql.txt
echo Batch complete Data8963.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8966.sql -o Data8966.sql.txt
echo Batch complete Data8966.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8979.sql -o Data8979.sql.txt
echo Batch complete Data8979.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8980.sql -o Data8980.sql.txt
echo Batch complete Data8980.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8985.sql -o Data8985.sql.txt
echo Batch complete Data8985.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8987.sql -o Data8987.sql.txt
echo Batch complete Data8987.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data8995.sql -o Data8995.sql.txt
echo Batch complete Data8995.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9010.sql -o Data9010.sql.txt
echo Batch complete Data9010.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9036.sql -o Data9036.sql.txt
echo Batch complete Data9036.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9037.sql -o Data9037.sql.txt
echo Batch complete Data9037.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9042.sql -o Data9042.sql.txt
echo Batch complete Data9042.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9057.sql -o Data9057.sql.txt
echo Batch complete Data9057.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9065.sql -o Data9065.sql.txt
echo Batch complete Data9065.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9068.sql -o Data9068.sql.txt
echo Batch complete Data9068.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9075.sql -o Data9075.sql.txt
echo Batch complete Data9075.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9079.sql -o Data9079.sql.txt
echo Batch complete Data9079.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9085.sql -o Data9085.sql.txt
echo Batch complete Data9085.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9104.sql -o Data9104.sql.txt
echo Batch complete Data9104.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9107.sql -o Data9107.sql.txt
echo Batch complete Data9107.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9108.sql -o Data9108.sql.txt
echo Batch complete Data9108.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9109.sql -o Data9109.sql.txt
echo Batch complete Data9109.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9121.sql -o Data9121.sql.txt
echo Batch complete Data9121.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9122.sql -o Data9122.sql.txt
echo Batch complete Data9122.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9128.sql -o Data9128.sql.txt
echo Batch complete Data9128.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9132.sql -o Data9132.sql.txt
echo Batch complete Data9132.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9137.sql -o Data9137.sql.txt
echo Batch complete Data9137.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9142.sql -o Data9142.sql.txt
echo Batch complete Data9142.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9143.sql -o Data9143.sql.txt
echo Batch complete Data9143.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9149.sql -o Data9149.sql.txt
echo Batch complete Data9149.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9150.sql -o Data9150.sql.txt
echo Batch complete Data9150.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9153.sql -o Data9153.sql.txt
echo Batch complete Data9153.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9154.sql -o Data9154.sql.txt
echo Batch complete Data9154.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9162.sql -o Data9162.sql.txt
echo Batch complete Data9162.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9168.sql -o Data9168.sql.txt
echo Batch complete Data9168.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9177.sql -o Data9177.sql.txt
echo Batch complete Data9177.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9182.sql -o Data9182.sql.txt
echo Batch complete Data9182.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9185.sql -o Data9185.sql.txt
echo Batch complete Data9185.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9189.sql -o Data9189.sql.txt
echo Batch complete Data9189.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9190.sql -o Data9190.sql.txt
echo Batch complete Data9190.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9193.sql -o Data9193.sql.txt
echo Batch complete Data9193.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9194.sql -o Data9194.sql.txt
echo Batch complete Data9194.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9195.sql -o Data9195.sql.txt
echo Batch complete Data9195.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9198.sql -o Data9198.sql.txt
echo Batch complete Data9198.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9200.sql -o Data9200.sql.txt
echo Batch complete Data9200.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9214.sql -o Data9214.sql.txt
echo Batch complete Data9214.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9215.sql -o Data9215.sql.txt
echo Batch complete Data9215.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9227.sql -o Data9227.sql.txt
echo Batch complete Data9227.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9228.sql -o Data9228.sql.txt
echo Batch complete Data9228.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9235.sql -o Data9235.sql.txt
echo Batch complete Data9235.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9238.sql -o Data9238.sql.txt
echo Batch complete Data9238.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9239.sql -o Data9239.sql.txt
echo Batch complete Data9239.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9241.sql -o Data9241.sql.txt
echo Batch complete Data9241.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9253.sql -o Data9253.sql.txt
echo Batch complete Data9253.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9254.sql -o Data9254.sql.txt
echo Batch complete Data9254.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9269.sql -o Data9269.sql.txt
echo Batch complete Data9269.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9274.sql -o Data9274.sql.txt
echo Batch complete Data9274.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9281.sql -o Data9281.sql.txt
echo Batch complete Data9281.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9288.sql -o Data9288.sql.txt
echo Batch complete Data9288.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9289.sql -o Data9289.sql.txt
echo Batch complete Data9289.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9291.sql -o Data9291.sql.txt
echo Batch complete Data9291.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9305.sql -o Data9305.sql.txt
echo Batch complete Data9305.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9307.sql -o Data9307.sql.txt
echo Batch complete Data9307.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9309.sql -o Data9309.sql.txt
echo Batch complete Data9309.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9313.sql -o Data9313.sql.txt
echo Batch complete Data9313.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9317.sql -o Data9317.sql.txt
echo Batch complete Data9317.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9324.sql -o Data9324.sql.txt
echo Batch complete Data9324.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9331.sql -o Data9331.sql.txt
echo Batch complete Data9331.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9335.sql -o Data9335.sql.txt
echo Batch complete Data9335.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9340.sql -o Data9340.sql.txt
echo Batch complete Data9340.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9346.sql -o Data9346.sql.txt
echo Batch complete Data9346.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9352.sql -o Data9352.sql.txt
echo Batch complete Data9352.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9354.sql -o Data9354.sql.txt
echo Batch complete Data9354.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9356.sql -o Data9356.sql.txt
echo Batch complete Data9356.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9358.sql -o Data9358.sql.txt
echo Batch complete Data9358.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9359.sql -o Data9359.sql.txt
echo Batch complete Data9359.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9366.sql -o Data9366.sql.txt
echo Batch complete Data9366.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9368.sql -o Data9368.sql.txt
echo Batch complete Data9368.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9369.sql -o Data9369.sql.txt
echo Batch complete Data9369.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9382.sql -o Data9382.sql.txt
echo Batch complete Data9382.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9388.sql -o Data9388.sql.txt
echo Batch complete Data9388.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9389.sql -o Data9389.sql.txt
echo Batch complete Data9389.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9393.sql -o Data9393.sql.txt
echo Batch complete Data9393.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9398.sql -o Data9398.sql.txt
echo Batch complete Data9398.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9401.sql -o Data9401.sql.txt
echo Batch complete Data9401.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9403.sql -o Data9403.sql.txt
echo Batch complete Data9403.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9416.sql -o Data9416.sql.txt
echo Batch complete Data9416.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9423.sql -o Data9423.sql.txt
echo Batch complete Data9423.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9429.sql -o Data9429.sql.txt
echo Batch complete Data9429.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9435.sql -o Data9435.sql.txt
echo Batch complete Data9435.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9437.sql -o Data9437.sql.txt
echo Batch complete Data9437.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9441.sql -o Data9441.sql.txt
echo Batch complete Data9441.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9445.sql -o Data9445.sql.txt
echo Batch complete Data9445.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9447.sql -o Data9447.sql.txt
echo Batch complete Data9447.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9448.sql -o Data9448.sql.txt
echo Batch complete Data9448.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9449.sql -o Data9449.sql.txt
echo Batch complete Data9449.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9450.sql -o Data9450.sql.txt
echo Batch complete Data9450.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9456.sql -o Data9456.sql.txt
echo Batch complete Data9456.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9457.sql -o Data9457.sql.txt
echo Batch complete Data9457.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9458.sql -o Data9458.sql.txt
echo Batch complete Data9458.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9462.sql -o Data9462.sql.txt
echo Batch complete Data9462.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9469.sql -o Data9469.sql.txt
echo Batch complete Data9469.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9472.sql -o Data9472.sql.txt
echo Batch complete Data9472.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9473.sql -o Data9473.sql.txt
echo Batch complete Data9473.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9482.sql -o Data9482.sql.txt
echo Batch complete Data9482.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9485.sql -o Data9485.sql.txt
echo Batch complete Data9485.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9505.sql -o Data9505.sql.txt
echo Batch complete Data9505.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9510.sql -o Data9510.sql.txt
echo Batch complete Data9510.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9512.sql -o Data9512.sql.txt
echo Batch complete Data9512.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9519.sql -o Data9519.sql.txt
echo Batch complete Data9519.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9520.sql -o Data9520.sql.txt
echo Batch complete Data9520.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9522.sql -o Data9522.sql.txt
echo Batch complete Data9522.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9531.sql -o Data9531.sql.txt
echo Batch complete Data9531.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9533.sql -o Data9533.sql.txt
echo Batch complete Data9533.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9535.sql -o Data9535.sql.txt
echo Batch complete Data9535.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9537.sql -o Data9537.sql.txt
echo Batch complete Data9537.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9538.sql -o Data9538.sql.txt
echo Batch complete Data9538.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9540.sql -o Data9540.sql.txt
echo Batch complete Data9540.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9542.sql -o Data9542.sql.txt
echo Batch complete Data9542.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9544.sql -o Data9544.sql.txt
echo Batch complete Data9544.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9556.sql -o Data9556.sql.txt
echo Batch complete Data9556.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9557.sql -o Data9557.sql.txt
echo Batch complete Data9557.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9561.sql -o Data9561.sql.txt
echo Batch complete Data9561.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9562.sql -o Data9562.sql.txt
echo Batch complete Data9562.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9563.sql -o Data9563.sql.txt
echo Batch complete Data9563.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9567.sql -o Data9567.sql.txt
echo Batch complete Data9567.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9569.sql -o Data9569.sql.txt
echo Batch complete Data9569.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9571.sql -o Data9571.sql.txt
echo Batch complete Data9571.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9572.sql -o Data9572.sql.txt
echo Batch complete Data9572.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9573.sql -o Data9573.sql.txt
echo Batch complete Data9573.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9574.sql -o Data9574.sql.txt
echo Batch complete Data9574.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9575.sql -o Data9575.sql.txt
echo Batch complete Data9575.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9576.sql -o Data9576.sql.txt
echo Batch complete Data9576.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9578.sql -o Data9578.sql.txt
echo Batch complete Data9578.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9579.sql -o Data9579.sql.txt
echo Batch complete Data9579.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9584.sql -o Data9584.sql.txt
echo Batch complete Data9584.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9585.sql -o Data9585.sql.txt
echo Batch complete Data9585.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9592.sql -o Data9592.sql.txt
echo Batch complete Data9592.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9593.sql -o Data9593.sql.txt
echo Batch complete Data9593.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9594.sql -o Data9594.sql.txt
echo Batch complete Data9594.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9597.sql -o Data9597.sql.txt
echo Batch complete Data9597.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9601.sql -o Data9601.sql.txt
echo Batch complete Data9601.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9602.sql -o Data9602.sql.txt
echo Batch complete Data9602.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9603.sql -o Data9603.sql.txt
echo Batch complete Data9603.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9604.sql -o Data9604.sql.txt
echo Batch complete Data9604.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9605.sql -o Data9605.sql.txt
echo Batch complete Data9605.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9611.sql -o Data9611.sql.txt
echo Batch complete Data9611.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9613.sql -o Data9613.sql.txt
echo Batch complete Data9613.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9614.sql -o Data9614.sql.txt
echo Batch complete Data9614.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9615.sql -o Data9615.sql.txt
echo Batch complete Data9615.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9617.sql -o Data9617.sql.txt
echo Batch complete Data9617.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9618.sql -o Data9618.sql.txt
echo Batch complete Data9618.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9619.sql -o Data9619.sql.txt
echo Batch complete Data9619.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9620.sql -o Data9620.sql.txt
echo Batch complete Data9620.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9621.sql -o Data9621.sql.txt
echo Batch complete Data9621.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9622.sql -o Data9622.sql.txt
echo Batch complete Data9622.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9623.sql -o Data9623.sql.txt
echo Batch complete Data9623.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9625.sql -o Data9625.sql.txt
echo Batch complete Data9625.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9626.sql -o Data9626.sql.txt
echo Batch complete Data9626.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9631.sql -o Data9631.sql.txt
echo Batch complete Data9631.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9633.sql -o Data9633.sql.txt
echo Batch complete Data9633.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9639.sql -o Data9639.sql.txt
echo Batch complete Data9639.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9643.sql -o Data9643.sql.txt
echo Batch complete Data9643.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9645.sql -o Data9645.sql.txt
echo Batch complete Data9645.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9646.sql -o Data9646.sql.txt
echo Batch complete Data9646.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9649.sql -o Data9649.sql.txt
echo Batch complete Data9649.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9652.sql -o Data9652.sql.txt
echo Batch complete Data9652.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9655.sql -o Data9655.sql.txt
echo Batch complete Data9655.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9657.sql -o Data9657.sql.txt
echo Batch complete Data9657.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9658.sql -o Data9658.sql.txt
echo Batch complete Data9658.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9660.sql -o Data9660.sql.txt
echo Batch complete Data9660.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9662.sql -o Data9662.sql.txt
echo Batch complete Data9662.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9664.sql -o Data9664.sql.txt
echo Batch complete Data9664.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9665.sql -o Data9665.sql.txt
echo Batch complete Data9665.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9667.sql -o Data9667.sql.txt
echo Batch complete Data9667.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9668.sql -o Data9668.sql.txt
echo Batch complete Data9668.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9669.sql -o Data9669.sql.txt
echo Batch complete Data9669.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9682.sql -o Data9682.sql.txt
echo Batch complete Data9682.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9686.sql -o Data9686.sql.txt
echo Batch complete Data9686.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9692.sql -o Data9692.sql.txt
echo Batch complete Data9692.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9694.sql -o Data9694.sql.txt
echo Batch complete Data9694.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9695.sql -o Data9695.sql.txt
echo Batch complete Data9695.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9699.sql -o Data9699.sql.txt
echo Batch complete Data9699.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9702.sql -o Data9702.sql.txt
echo Batch complete Data9702.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9717.sql -o Data9717.sql.txt
echo Batch complete Data9717.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9720.sql -o Data9720.sql.txt
echo Batch complete Data9720.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9735.sql -o Data9735.sql.txt
echo Batch complete Data9735.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9736.sql -o Data9736.sql.txt
echo Batch complete Data9736.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9740.sql -o Data9740.sql.txt
echo Batch complete Data9740.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9741.sql -o Data9741.sql.txt
echo Batch complete Data9741.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9742.sql -o Data9742.sql.txt
echo Batch complete Data9742.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9743.sql -o Data9743.sql.txt
echo Batch complete Data9743.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9751.sql -o Data9751.sql.txt
echo Batch complete Data9751.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9752.sql -o Data9752.sql.txt
echo Batch complete Data9752.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9756.sql -o Data9756.sql.txt
echo Batch complete Data9756.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9757.sql -o Data9757.sql.txt
echo Batch complete Data9757.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9759.sql -o Data9759.sql.txt
echo Batch complete Data9759.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9761.sql -o Data9761.sql.txt
echo Batch complete Data9761.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9771.sql -o Data9771.sql.txt
echo Batch complete Data9771.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9778.sql -o Data9778.sql.txt
echo Batch complete Data9778.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9785.sql -o Data9785.sql.txt
echo Batch complete Data9785.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9787.sql -o Data9787.sql.txt
echo Batch complete Data9787.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9790.sql -o Data9790.sql.txt
echo Batch complete Data9790.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9800.sql -o Data9800.sql.txt
echo Batch complete Data9800.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9809.sql -o Data9809.sql.txt
echo Batch complete Data9809.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9810.sql -o Data9810.sql.txt
echo Batch complete Data9810.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9815.sql -o Data9815.sql.txt
echo Batch complete Data9815.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9827.sql -o Data9827.sql.txt
echo Batch complete Data9827.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9829.sql -o Data9829.sql.txt
echo Batch complete Data9829.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9835.sql -o Data9835.sql.txt
echo Batch complete Data9835.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9843.sql -o Data9843.sql.txt
echo Batch complete Data9843.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9849.sql -o Data9849.sql.txt
echo Batch complete Data9849.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9850.sql -o Data9850.sql.txt
echo Batch complete Data9850.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9852.sql -o Data9852.sql.txt
echo Batch complete Data9852.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9853.sql -o Data9853.sql.txt
echo Batch complete Data9853.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9868.sql -o Data9868.sql.txt
echo Batch complete Data9868.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9877.sql -o Data9877.sql.txt
echo Batch complete Data9877.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9882.sql -o Data9882.sql.txt
echo Batch complete Data9882.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9896.sql -o Data9896.sql.txt
echo Batch complete Data9896.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9897.sql -o Data9897.sql.txt
echo Batch complete Data9897.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9899.sql -o Data9899.sql.txt
echo Batch complete Data9899.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9902.sql -o Data9902.sql.txt
echo Batch complete Data9902.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9908.sql -o Data9908.sql.txt
echo Batch complete Data9908.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9909.sql -o Data9909.sql.txt
echo Batch complete Data9909.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9910.sql -o Data9910.sql.txt
echo Batch complete Data9910.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9911.sql -o Data9911.sql.txt
echo Batch complete Data9911.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9912.sql -o Data9912.sql.txt
echo Batch complete Data9912.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9913.sql -o Data9913.sql.txt
echo Batch complete Data9913.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9914.sql -o Data9914.sql.txt
echo Batch complete Data9914.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9924.sql -o Data9924.sql.txt
echo Batch complete Data9924.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9929.sql -o Data9929.sql.txt
echo Batch complete Data9929.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9930.sql -o Data9930.sql.txt
echo Batch complete Data9930.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9933.sql -o Data9933.sql.txt
echo Batch complete Data9933.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9935.sql -o Data9935.sql.txt
echo Batch complete Data9935.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9938.sql -o Data9938.sql.txt
echo Batch complete Data9938.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9941.sql -o Data9941.sql.txt
echo Batch complete Data9941.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9945.sql -o Data9945.sql.txt
echo Batch complete Data9945.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9947.sql -o Data9947.sql.txt
echo Batch complete Data9947.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9962.sql -o Data9962.sql.txt
echo Batch complete Data9962.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9968.sql -o Data9968.sql.txt
echo Batch complete Data9968.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9977.sql -o Data9977.sql.txt
echo Batch complete Data9977.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data9983.sql -o Data9983.sql.txt
echo Batch complete Data9983.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10014.sql -o Data10014.sql.txt
echo Batch complete Data10014.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10015.sql -o Data10015.sql.txt
echo Batch complete Data10015.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10019.sql -o Data10019.sql.txt
echo Batch complete Data10019.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10023.sql -o Data10023.sql.txt
echo Batch complete Data10023.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10024.sql -o Data10024.sql.txt
echo Batch complete Data10024.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10028.sql -o Data10028.sql.txt
echo Batch complete Data10028.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10036.sql -o Data10036.sql.txt
echo Batch complete Data10036.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10043.sql -o Data10043.sql.txt
echo Batch complete Data10043.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10045.sql -o Data10045.sql.txt
echo Batch complete Data10045.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10057.sql -o Data10057.sql.txt
echo Batch complete Data10057.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10058.sql -o Data10058.sql.txt
echo Batch complete Data10058.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10061.sql -o Data10061.sql.txt
echo Batch complete Data10061.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10065.sql -o Data10065.sql.txt
echo Batch complete Data10065.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10074.sql -o Data10074.sql.txt
echo Batch complete Data10074.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10075.sql -o Data10075.sql.txt
echo Batch complete Data10075.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10082.sql -o Data10082.sql.txt
echo Batch complete Data10082.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10092.sql -o Data10092.sql.txt
echo Batch complete Data10092.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10099.sql -o Data10099.sql.txt
echo Batch complete Data10099.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10103.sql -o Data10103.sql.txt
echo Batch complete Data10103.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10112.sql -o Data10112.sql.txt
echo Batch complete Data10112.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10119.sql -o Data10119.sql.txt
echo Batch complete Data10119.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10123.sql -o Data10123.sql.txt
echo Batch complete Data10123.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10126.sql -o Data10126.sql.txt
echo Batch complete Data10126.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10131.sql -o Data10131.sql.txt
echo Batch complete Data10131.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10134.sql -o Data10134.sql.txt
echo Batch complete Data10134.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10151.sql -o Data10151.sql.txt
echo Batch complete Data10151.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10155.sql -o Data10155.sql.txt
echo Batch complete Data10155.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10160.sql -o Data10160.sql.txt
echo Batch complete Data10160.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10163.sql -o Data10163.sql.txt
echo Batch complete Data10163.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10167.sql -o Data10167.sql.txt
echo Batch complete Data10167.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10170.sql -o Data10170.sql.txt
echo Batch complete Data10170.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10172.sql -o Data10172.sql.txt
echo Batch complete Data10172.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10173.sql -o Data10173.sql.txt
echo Batch complete Data10173.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10176.sql -o Data10176.sql.txt
echo Batch complete Data10176.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10187.sql -o Data10187.sql.txt
echo Batch complete Data10187.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10189.sql -o Data10189.sql.txt
echo Batch complete Data10189.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10201.sql -o Data10201.sql.txt
echo Batch complete Data10201.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10220.sql -o Data10220.sql.txt
echo Batch complete Data10220.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10225.sql -o Data10225.sql.txt
echo Batch complete Data10225.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10233.sql -o Data10233.sql.txt
echo Batch complete Data10233.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10235.sql -o Data10235.sql.txt
echo Batch complete Data10235.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10242.sql -o Data10242.sql.txt
echo Batch complete Data10242.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10243.sql -o Data10243.sql.txt
echo Batch complete Data10243.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10244.sql -o Data10244.sql.txt
echo Batch complete Data10244.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10254.sql -o Data10254.sql.txt
echo Batch complete Data10254.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10255.sql -o Data10255.sql.txt
echo Batch complete Data10255.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10279.sql -o Data10279.sql.txt
echo Batch complete Data10279.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10282.sql -o Data10282.sql.txt
echo Batch complete Data10282.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10290.sql -o Data10290.sql.txt
echo Batch complete Data10290.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10291.sql -o Data10291.sql.txt
echo Batch complete Data10291.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10293.sql -o Data10293.sql.txt
echo Batch complete Data10293.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10296.sql -o Data10296.sql.txt
echo Batch complete Data10296.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10299.sql -o Data10299.sql.txt
echo Batch complete Data10299.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10306.sql -o Data10306.sql.txt
echo Batch complete Data10306.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10309.sql -o Data10309.sql.txt
echo Batch complete Data10309.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10316.sql -o Data10316.sql.txt
echo Batch complete Data10316.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10324.sql -o Data10324.sql.txt
echo Batch complete Data10324.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10343.sql -o Data10343.sql.txt
echo Batch complete Data10343.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10345.sql -o Data10345.sql.txt
echo Batch complete Data10345.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10347.sql -o Data10347.sql.txt
echo Batch complete Data10347.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10349.sql -o Data10349.sql.txt
echo Batch complete Data10349.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10350.sql -o Data10350.sql.txt
echo Batch complete Data10350.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10351.sql -o Data10351.sql.txt
echo Batch complete Data10351.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10352.sql -o Data10352.sql.txt
echo Batch complete Data10352.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10356.sql -o Data10356.sql.txt
echo Batch complete Data10356.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10363.sql -o Data10363.sql.txt
echo Batch complete Data10363.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10388.sql -o Data10388.sql.txt
echo Batch complete Data10388.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10392.sql -o Data10392.sql.txt
echo Batch complete Data10392.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10398.sql -o Data10398.sql.txt
echo Batch complete Data10398.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10400.sql -o Data10400.sql.txt
echo Batch complete Data10400.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10405.sql -o Data10405.sql.txt
echo Batch complete Data10405.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10413.sql -o Data10413.sql.txt
echo Batch complete Data10413.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10416.sql -o Data10416.sql.txt
echo Batch complete Data10416.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10418.sql -o Data10418.sql.txt
echo Batch complete Data10418.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10427.sql -o Data10427.sql.txt
echo Batch complete Data10427.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10429.sql -o Data10429.sql.txt
echo Batch complete Data10429.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10430.sql -o Data10430.sql.txt
echo Batch complete Data10430.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10437.sql -o Data10437.sql.txt
echo Batch complete Data10437.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10441.sql -o Data10441.sql.txt
echo Batch complete Data10441.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10464.sql -o Data10464.sql.txt
echo Batch complete Data10464.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10470.sql -o Data10470.sql.txt
echo Batch complete Data10470.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10474.sql -o Data10474.sql.txt
echo Batch complete Data10474.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10486.sql -o Data10486.sql.txt
echo Batch complete Data10486.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10487.sql -o Data10487.sql.txt
echo Batch complete Data10487.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10491.sql -o Data10491.sql.txt
echo Batch complete Data10491.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10492.sql -o Data10492.sql.txt
echo Batch complete Data10492.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10496.sql -o Data10496.sql.txt
echo Batch complete Data10496.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10498.sql -o Data10498.sql.txt
echo Batch complete Data10498.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10499.sql -o Data10499.sql.txt
echo Batch complete Data10499.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10500.sql -o Data10500.sql.txt
echo Batch complete Data10500.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10503.sql -o Data10503.sql.txt
echo Batch complete Data10503.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10515.sql -o Data10515.sql.txt
echo Batch complete Data10515.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10520.sql -o Data10520.sql.txt
echo Batch complete Data10520.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10524.sql -o Data10524.sql.txt
echo Batch complete Data10524.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10525.sql -o Data10525.sql.txt
echo Batch complete Data10525.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10526.sql -o Data10526.sql.txt
echo Batch complete Data10526.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10527.sql -o Data10527.sql.txt
echo Batch complete Data10527.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10529.sql -o Data10529.sql.txt
echo Batch complete Data10529.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10531.sql -o Data10531.sql.txt
echo Batch complete Data10531.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10540.sql -o Data10540.sql.txt
echo Batch complete Data10540.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10541.sql -o Data10541.sql.txt
echo Batch complete Data10541.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10546.sql -o Data10546.sql.txt
echo Batch complete Data10546.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10547.sql -o Data10547.sql.txt
echo Batch complete Data10547.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10548.sql -o Data10548.sql.txt
echo Batch complete Data10548.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10549.sql -o Data10549.sql.txt
echo Batch complete Data10549.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10551.sql -o Data10551.sql.txt
echo Batch complete Data10551.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10552.sql -o Data10552.sql.txt
echo Batch complete Data10552.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10553.sql -o Data10553.sql.txt
echo Batch complete Data10553.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10556.sql -o Data10556.sql.txt
echo Batch complete Data10556.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10562.sql -o Data10562.sql.txt
echo Batch complete Data10562.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10564.sql -o Data10564.sql.txt
echo Batch complete Data10564.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10570.sql -o Data10570.sql.txt
echo Batch complete Data10570.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10572.sql -o Data10572.sql.txt
echo Batch complete Data10572.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10573.sql -o Data10573.sql.txt
echo Batch complete Data10573.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10577.sql -o Data10577.sql.txt
echo Batch complete Data10577.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10579.sql -o Data10579.sql.txt
echo Batch complete Data10579.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10582.sql -o Data10582.sql.txt
echo Batch complete Data10582.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10584.sql -o Data10584.sql.txt
echo Batch complete Data10584.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10587.sql -o Data10587.sql.txt
echo Batch complete Data10587.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10588.sql -o Data10588.sql.txt
echo Batch complete Data10588.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10589.sql -o Data10589.sql.txt
echo Batch complete Data10589.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10594.sql -o Data10594.sql.txt
echo Batch complete Data10594.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10595.sql -o Data10595.sql.txt
echo Batch complete Data10595.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10598.sql -o Data10598.sql.txt
echo Batch complete Data10598.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10599.sql -o Data10599.sql.txt
echo Batch complete Data10599.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10602.sql -o Data10602.sql.txt
echo Batch complete Data10602.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10610.sql -o Data10610.sql.txt
echo Batch complete Data10610.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10622.sql -o Data10622.sql.txt
echo Batch complete Data10622.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10632.sql -o Data10632.sql.txt
echo Batch complete Data10632.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10633.sql -o Data10633.sql.txt
echo Batch complete Data10633.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10635.sql -o Data10635.sql.txt
echo Batch complete Data10635.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10636.sql -o Data10636.sql.txt
echo Batch complete Data10636.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10639.sql -o Data10639.sql.txt
echo Batch complete Data10639.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10642.sql -o Data10642.sql.txt
echo Batch complete Data10642.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10644.sql -o Data10644.sql.txt
echo Batch complete Data10644.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10646.sql -o Data10646.sql.txt
echo Batch complete Data10646.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10648.sql -o Data10648.sql.txt
echo Batch complete Data10648.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10649.sql -o Data10649.sql.txt
echo Batch complete Data10649.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10651.sql -o Data10651.sql.txt
echo Batch complete Data10651.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10653.sql -o Data10653.sql.txt
echo Batch complete Data10653.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10654.sql -o Data10654.sql.txt
echo Batch complete Data10654.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10658.sql -o Data10658.sql.txt
echo Batch complete Data10658.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10661.sql -o Data10661.sql.txt
echo Batch complete Data10661.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10681.sql -o Data10681.sql.txt
echo Batch complete Data10681.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10682.sql -o Data10682.sql.txt
echo Batch complete Data10682.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10687.sql -o Data10687.sql.txt
echo Batch complete Data10687.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10690.sql -o Data10690.sql.txt
echo Batch complete Data10690.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10693.sql -o Data10693.sql.txt
echo Batch complete Data10693.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10695.sql -o Data10695.sql.txt
echo Batch complete Data10695.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10696.sql -o Data10696.sql.txt
echo Batch complete Data10696.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10700.sql -o Data10700.sql.txt
echo Batch complete Data10700.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10702.sql -o Data10702.sql.txt
echo Batch complete Data10702.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10703.sql -o Data10703.sql.txt
echo Batch complete Data10703.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10707.sql -o Data10707.sql.txt
echo Batch complete Data10707.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10712.sql -o Data10712.sql.txt
echo Batch complete Data10712.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10713.sql -o Data10713.sql.txt
echo Batch complete Data10713.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10716.sql -o Data10716.sql.txt
echo Batch complete Data10716.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10718.sql -o Data10718.sql.txt
echo Batch complete Data10718.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10720.sql -o Data10720.sql.txt
echo Batch complete Data10720.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10721.sql -o Data10721.sql.txt
echo Batch complete Data10721.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10723.sql -o Data10723.sql.txt
echo Batch complete Data10723.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10724.sql -o Data10724.sql.txt
echo Batch complete Data10724.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10726.sql -o Data10726.sql.txt
echo Batch complete Data10726.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10752.sql -o Data10752.sql.txt
echo Batch complete Data10752.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10756.sql -o Data10756.sql.txt
echo Batch complete Data10756.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10759.sql -o Data10759.sql.txt
echo Batch complete Data10759.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10760.sql -o Data10760.sql.txt
echo Batch complete Data10760.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10761.sql -o Data10761.sql.txt
echo Batch complete Data10761.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10762.sql -o Data10762.sql.txt
echo Batch complete Data10762.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10765.sql -o Data10765.sql.txt
echo Batch complete Data10765.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10766.sql -o Data10766.sql.txt
echo Batch complete Data10766.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10767.sql -o Data10767.sql.txt
echo Batch complete Data10767.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10769.sql -o Data10769.sql.txt
echo Batch complete Data10769.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10770.sql -o Data10770.sql.txt
echo Batch complete Data10770.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10772.sql -o Data10772.sql.txt
echo Batch complete Data10772.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10779.sql -o Data10779.sql.txt
echo Batch complete Data10779.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10780.sql -o Data10780.sql.txt
echo Batch complete Data10780.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10781.sql -o Data10781.sql.txt
echo Batch complete Data10781.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10782.sql -o Data10782.sql.txt
echo Batch complete Data10782.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10793.sql -o Data10793.sql.txt
echo Batch complete Data10793.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10797.sql -o Data10797.sql.txt
echo Batch complete Data10797.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10808.sql -o Data10808.sql.txt
echo Batch complete Data10808.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10811.sql -o Data10811.sql.txt
echo Batch complete Data10811.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10819.sql -o Data10819.sql.txt
echo Batch complete Data10819.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10820.sql -o Data10820.sql.txt
echo Batch complete Data10820.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10824.sql -o Data10824.sql.txt
echo Batch complete Data10824.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10826.sql -o Data10826.sql.txt
echo Batch complete Data10826.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10828.sql -o Data10828.sql.txt
echo Batch complete Data10828.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10829.sql -o Data10829.sql.txt
echo Batch complete Data10829.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10830.sql -o Data10830.sql.txt
echo Batch complete Data10830.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10831.sql -o Data10831.sql.txt
echo Batch complete Data10831.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10833.sql -o Data10833.sql.txt
echo Batch complete Data10833.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10834.sql -o Data10834.sql.txt
echo Batch complete Data10834.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10837.sql -o Data10837.sql.txt
echo Batch complete Data10837.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10842.sql -o Data10842.sql.txt
echo Batch complete Data10842.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10844.sql -o Data10844.sql.txt
echo Batch complete Data10844.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10847.sql -o Data10847.sql.txt
echo Batch complete Data10847.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10849.sql -o Data10849.sql.txt
echo Batch complete Data10849.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10850.sql -o Data10850.sql.txt
echo Batch complete Data10850.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10851.sql -o Data10851.sql.txt
echo Batch complete Data10851.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10855.sql -o Data10855.sql.txt
echo Batch complete Data10855.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10857.sql -o Data10857.sql.txt
echo Batch complete Data10857.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10858.sql -o Data10858.sql.txt
echo Batch complete Data10858.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10859.sql -o Data10859.sql.txt
echo Batch complete Data10859.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10860.sql -o Data10860.sql.txt
echo Batch complete Data10860.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10861.sql -o Data10861.sql.txt
echo Batch complete Data10861.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10862.sql -o Data10862.sql.txt
echo Batch complete Data10862.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10863.sql -o Data10863.sql.txt
echo Batch complete Data10863.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10865.sql -o Data10865.sql.txt
echo Batch complete Data10865.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10866.sql -o Data10866.sql.txt
echo Batch complete Data10866.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10869.sql -o Data10869.sql.txt
echo Batch complete Data10869.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10872.sql -o Data10872.sql.txt
echo Batch complete Data10872.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10876.sql -o Data10876.sql.txt
echo Batch complete Data10876.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10877.sql -o Data10877.sql.txt
echo Batch complete Data10877.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10879.sql -o Data10879.sql.txt
echo Batch complete Data10879.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10880.sql -o Data10880.sql.txt
echo Batch complete Data10880.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10881.sql -o Data10881.sql.txt
echo Batch complete Data10881.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10883.sql -o Data10883.sql.txt
echo Batch complete Data10883.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10896.sql -o Data10896.sql.txt
echo Batch complete Data10896.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10897.sql -o Data10897.sql.txt
echo Batch complete Data10897.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10903.sql -o Data10903.sql.txt
echo Batch complete Data10903.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10909.sql -o Data10909.sql.txt
echo Batch complete Data10909.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10934.sql -o Data10934.sql.txt
echo Batch complete Data10934.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10950.sql -o Data10950.sql.txt
echo Batch complete Data10950.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10955.sql -o Data10955.sql.txt
echo Batch complete Data10955.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10956.sql -o Data10956.sql.txt
echo Batch complete Data10956.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10961.sql -o Data10961.sql.txt
echo Batch complete Data10961.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10962.sql -o Data10962.sql.txt
echo Batch complete Data10962.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10966.sql -o Data10966.sql.txt
echo Batch complete Data10966.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10968.sql -o Data10968.sql.txt
echo Batch complete Data10968.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10969.sql -o Data10969.sql.txt
echo Batch complete Data10969.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10970.sql -o Data10970.sql.txt
echo Batch complete Data10970.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10972.sql -o Data10972.sql.txt
echo Batch complete Data10972.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10973.sql -o Data10973.sql.txt
echo Batch complete Data10973.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10974.sql -o Data10974.sql.txt
echo Batch complete Data10974.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10975.sql -o Data10975.sql.txt
echo Batch complete Data10975.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10979.sql -o Data10979.sql.txt
echo Batch complete Data10979.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10980.sql -o Data10980.sql.txt
echo Batch complete Data10980.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10982.sql -o Data10982.sql.txt
echo Batch complete Data10982.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10983.sql -o Data10983.sql.txt
echo Batch complete Data10983.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10984.sql -o Data10984.sql.txt
echo Batch complete Data10984.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10985.sql -o Data10985.sql.txt
echo Batch complete Data10985.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10986.sql -o Data10986.sql.txt
echo Batch complete Data10986.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10989.sql -o Data10989.sql.txt
echo Batch complete Data10989.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data10993.sql -o Data10993.sql.txt
echo Batch complete Data10993.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11006.sql -o Data11006.sql.txt
echo Batch complete Data11006.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11013.sql -o Data11013.sql.txt
echo Batch complete Data11013.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11014.sql -o Data11014.sql.txt
echo Batch complete Data11014.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11017.sql -o Data11017.sql.txt
echo Batch complete Data11017.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11023.sql -o Data11023.sql.txt
echo Batch complete Data11023.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11025.sql -o Data11025.sql.txt
echo Batch complete Data11025.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11026.sql -o Data11026.sql.txt
echo Batch complete Data11026.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11036.sql -o Data11036.sql.txt
echo Batch complete Data11036.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11037.sql -o Data11037.sql.txt
echo Batch complete Data11037.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11038.sql -o Data11038.sql.txt
echo Batch complete Data11038.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11041.sql -o Data11041.sql.txt
echo Batch complete Data11041.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11042.sql -o Data11042.sql.txt
echo Batch complete Data11042.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11043.sql -o Data11043.sql.txt
echo Batch complete Data11043.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11044.sql -o Data11044.sql.txt
echo Batch complete Data11044.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11045.sql -o Data11045.sql.txt
echo Batch complete Data11045.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11048.sql -o Data11048.sql.txt
echo Batch complete Data11048.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11050.sql -o Data11050.sql.txt
echo Batch complete Data11050.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11052.sql -o Data11052.sql.txt
echo Batch complete Data11052.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11053.sql -o Data11053.sql.txt
echo Batch complete Data11053.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11056.sql -o Data11056.sql.txt
echo Batch complete Data11056.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11057.sql -o Data11057.sql.txt
echo Batch complete Data11057.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11060.sql -o Data11060.sql.txt
echo Batch complete Data11060.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11064.sql -o Data11064.sql.txt
echo Batch complete Data11064.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11066.sql -o Data11066.sql.txt
echo Batch complete Data11066.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11068.sql -o Data11068.sql.txt
echo Batch complete Data11068.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11073.sql -o Data11073.sql.txt
echo Batch complete Data11073.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11075.sql -o Data11075.sql.txt
echo Batch complete Data11075.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11088.sql -o Data11088.sql.txt
echo Batch complete Data11088.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11090.sql -o Data11090.sql.txt
echo Batch complete Data11090.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11096.sql -o Data11096.sql.txt
echo Batch complete Data11096.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11103.sql -o Data11103.sql.txt
echo Batch complete Data11103.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11107.sql -o Data11107.sql.txt
echo Batch complete Data11107.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11109.sql -o Data11109.sql.txt
echo Batch complete Data11109.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11119.sql -o Data11119.sql.txt
echo Batch complete Data11119.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11120.sql -o Data11120.sql.txt
echo Batch complete Data11120.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11121.sql -o Data11121.sql.txt
echo Batch complete Data11121.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11126.sql -o Data11126.sql.txt
echo Batch complete Data11126.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11127.sql -o Data11127.sql.txt
echo Batch complete Data11127.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11128.sql -o Data11128.sql.txt
echo Batch complete Data11128.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11130.sql -o Data11130.sql.txt
echo Batch complete Data11130.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11132.sql -o Data11132.sql.txt
echo Batch complete Data11132.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11142.sql -o Data11142.sql.txt
echo Batch complete Data11142.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11155.sql -o Data11155.sql.txt
echo Batch complete Data11155.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11159.sql -o Data11159.sql.txt
echo Batch complete Data11159.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11163.sql -o Data11163.sql.txt
echo Batch complete Data11163.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11164.sql -o Data11164.sql.txt
echo Batch complete Data11164.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11170.sql -o Data11170.sql.txt
echo Batch complete Data11170.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11172.sql -o Data11172.sql.txt
echo Batch complete Data11172.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11176.sql -o Data11176.sql.txt
echo Batch complete Data11176.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11177.sql -o Data11177.sql.txt
echo Batch complete Data11177.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11178.sql -o Data11178.sql.txt
echo Batch complete Data11178.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11181.sql -o Data11181.sql.txt
echo Batch complete Data11181.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11199.sql -o Data11199.sql.txt
echo Batch complete Data11199.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11204.sql -o Data11204.sql.txt
echo Batch complete Data11204.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11216.sql -o Data11216.sql.txt
echo Batch complete Data11216.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11225.sql -o Data11225.sql.txt
echo Batch complete Data11225.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11229.sql -o Data11229.sql.txt
echo Batch complete Data11229.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11235.sql -o Data11235.sql.txt
echo Batch complete Data11235.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11239.sql -o Data11239.sql.txt
echo Batch complete Data11239.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11246.sql -o Data11246.sql.txt
echo Batch complete Data11246.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11248.sql -o Data11248.sql.txt
echo Batch complete Data11248.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11249.sql -o Data11249.sql.txt
echo Batch complete Data11249.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11250.sql -o Data11250.sql.txt
echo Batch complete Data11250.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11256.sql -o Data11256.sql.txt
echo Batch complete Data11256.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11258.sql -o Data11258.sql.txt
echo Batch complete Data11258.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11278.sql -o Data11278.sql.txt
echo Batch complete Data11278.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11279.sql -o Data11279.sql.txt
echo Batch complete Data11279.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11281.sql -o Data11281.sql.txt
echo Batch complete Data11281.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11287.sql -o Data11287.sql.txt
echo Batch complete Data11287.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11288.sql -o Data11288.sql.txt
echo Batch complete Data11288.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11289.sql -o Data11289.sql.txt
echo Batch complete Data11289.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11293.sql -o Data11293.sql.txt
echo Batch complete Data11293.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11294.sql -o Data11294.sql.txt
echo Batch complete Data11294.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11296.sql -o Data11296.sql.txt
echo Batch complete Data11296.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11298.sql -o Data11298.sql.txt
echo Batch complete Data11298.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11300.sql -o Data11300.sql.txt
echo Batch complete Data11300.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11303.sql -o Data11303.sql.txt
echo Batch complete Data11303.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11308.sql -o Data11308.sql.txt
echo Batch complete Data11308.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11309.sql -o Data11309.sql.txt
echo Batch complete Data11309.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11313.sql -o Data11313.sql.txt
echo Batch complete Data11313.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11315.sql -o Data11315.sql.txt
echo Batch complete Data11315.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11316.sql -o Data11316.sql.txt
echo Batch complete Data11316.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11317.sql -o Data11317.sql.txt
echo Batch complete Data11317.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11318.sql -o Data11318.sql.txt
echo Batch complete Data11318.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11319.sql -o Data11319.sql.txt
echo Batch complete Data11319.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11320.sql -o Data11320.sql.txt
echo Batch complete Data11320.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11335.sql -o Data11335.sql.txt
echo Batch complete Data11335.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11337.sql -o Data11337.sql.txt
echo Batch complete Data11337.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11338.sql -o Data11338.sql.txt
echo Batch complete Data11338.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11339.sql -o Data11339.sql.txt
echo Batch complete Data11339.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11340.sql -o Data11340.sql.txt
echo Batch complete Data11340.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11341.sql -o Data11341.sql.txt
echo Batch complete Data11341.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11343.sql -o Data11343.sql.txt
echo Batch complete Data11343.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11344.sql -o Data11344.sql.txt
echo Batch complete Data11344.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11345.sql -o Data11345.sql.txt
echo Batch complete Data11345.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11346.sql -o Data11346.sql.txt
echo Batch complete Data11346.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11347.sql -o Data11347.sql.txt
echo Batch complete Data11347.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11350.sql -o Data11350.sql.txt
echo Batch complete Data11350.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11353.sql -o Data11353.sql.txt
echo Batch complete Data11353.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11354.sql -o Data11354.sql.txt
echo Batch complete Data11354.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11361.sql -o Data11361.sql.txt
echo Batch complete Data11361.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11363.sql -o Data11363.sql.txt
echo Batch complete Data11363.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11364.sql -o Data11364.sql.txt
echo Batch complete Data11364.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11367.sql -o Data11367.sql.txt
echo Batch complete Data11367.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11368.sql -o Data11368.sql.txt
echo Batch complete Data11368.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11369.sql -o Data11369.sql.txt
echo Batch complete Data11369.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11370.sql -o Data11370.sql.txt
echo Batch complete Data11370.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11374.sql -o Data11374.sql.txt
echo Batch complete Data11374.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11375.sql -o Data11375.sql.txt
echo Batch complete Data11375.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11376.sql -o Data11376.sql.txt
echo Batch complete Data11376.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11377.sql -o Data11377.sql.txt
echo Batch complete Data11377.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11378.sql -o Data11378.sql.txt
echo Batch complete Data11378.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11379.sql -o Data11379.sql.txt
echo Batch complete Data11379.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11381.sql -o Data11381.sql.txt
echo Batch complete Data11381.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11384.sql -o Data11384.sql.txt
echo Batch complete Data11384.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11385.sql -o Data11385.sql.txt
echo Batch complete Data11385.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11387.sql -o Data11387.sql.txt
echo Batch complete Data11387.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11389.sql -o Data11389.sql.txt
echo Batch complete Data11389.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11390.sql -o Data11390.sql.txt
echo Batch complete Data11390.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11391.sql -o Data11391.sql.txt
echo Batch complete Data11391.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11392.sql -o Data11392.sql.txt
echo Batch complete Data11392.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11394.sql -o Data11394.sql.txt
echo Batch complete Data11394.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11395.sql -o Data11395.sql.txt
echo Batch complete Data11395.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11396.sql -o Data11396.sql.txt
echo Batch complete Data11396.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11398.sql -o Data11398.sql.txt
echo Batch complete Data11398.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11399.sql -o Data11399.sql.txt
echo Batch complete Data11399.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11400.sql -o Data11400.sql.txt
echo Batch complete Data11400.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11401.sql -o Data11401.sql.txt
echo Batch complete Data11401.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11402.sql -o Data11402.sql.txt
echo Batch complete Data11402.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11403.sql -o Data11403.sql.txt
echo Batch complete Data11403.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11406.sql -o Data11406.sql.txt
echo Batch complete Data11406.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11412.sql -o Data11412.sql.txt
echo Batch complete Data11412.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11413.sql -o Data11413.sql.txt
echo Batch complete Data11413.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11415.sql -o Data11415.sql.txt
echo Batch complete Data11415.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11418.sql -o Data11418.sql.txt
echo Batch complete Data11418.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11421.sql -o Data11421.sql.txt
echo Batch complete Data11421.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11422.sql -o Data11422.sql.txt
echo Batch complete Data11422.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11423.sql -o Data11423.sql.txt
echo Batch complete Data11423.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11426.sql -o Data11426.sql.txt
echo Batch complete Data11426.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11427.sql -o Data11427.sql.txt
echo Batch complete Data11427.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11428.sql -o Data11428.sql.txt
echo Batch complete Data11428.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11431.sql -o Data11431.sql.txt
echo Batch complete Data11431.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11432.sql -o Data11432.sql.txt
echo Batch complete Data11432.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11437.sql -o Data11437.sql.txt
echo Batch complete Data11437.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11438.sql -o Data11438.sql.txt
echo Batch complete Data11438.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11439.sql -o Data11439.sql.txt
echo Batch complete Data11439.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11442.sql -o Data11442.sql.txt
echo Batch complete Data11442.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11443.sql -o Data11443.sql.txt
echo Batch complete Data11443.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11444.sql -o Data11444.sql.txt
echo Batch complete Data11444.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11445.sql -o Data11445.sql.txt
echo Batch complete Data11445.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11446.sql -o Data11446.sql.txt
echo Batch complete Data11446.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11448.sql -o Data11448.sql.txt
echo Batch complete Data11448.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11450.sql -o Data11450.sql.txt
echo Batch complete Data11450.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11451.sql -o Data11451.sql.txt
echo Batch complete Data11451.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11453.sql -o Data11453.sql.txt
echo Batch complete Data11453.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11457.sql -o Data11457.sql.txt
echo Batch complete Data11457.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11459.sql -o Data11459.sql.txt
echo Batch complete Data11459.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11464.sql -o Data11464.sql.txt
echo Batch complete Data11464.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11467.sql -o Data11467.sql.txt
echo Batch complete Data11467.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11468.sql -o Data11468.sql.txt
echo Batch complete Data11468.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11472.sql -o Data11472.sql.txt
echo Batch complete Data11472.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11486.sql -o Data11486.sql.txt
echo Batch complete Data11486.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11487.sql -o Data11487.sql.txt
echo Batch complete Data11487.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11488.sql -o Data11488.sql.txt
echo Batch complete Data11488.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11498.sql -o Data11498.sql.txt
echo Batch complete Data11498.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11500.sql -o Data11500.sql.txt
echo Batch complete Data11500.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11501.sql -o Data11501.sql.txt
echo Batch complete Data11501.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11504.sql -o Data11504.sql.txt
echo Batch complete Data11504.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11505.sql -o Data11505.sql.txt
echo Batch complete Data11505.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11506.sql -o Data11506.sql.txt
echo Batch complete Data11506.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11507.sql -o Data11507.sql.txt
echo Batch complete Data11507.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11510.sql -o Data11510.sql.txt
echo Batch complete Data11510.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11511.sql -o Data11511.sql.txt
echo Batch complete Data11511.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11512.sql -o Data11512.sql.txt
echo Batch complete Data11512.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11513.sql -o Data11513.sql.txt
echo Batch complete Data11513.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11514.sql -o Data11514.sql.txt
echo Batch complete Data11514.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11515.sql -o Data11515.sql.txt
echo Batch complete Data11515.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11516.sql -o Data11516.sql.txt
echo Batch complete Data11516.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11517.sql -o Data11517.sql.txt
echo Batch complete Data11517.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11518.sql -o Data11518.sql.txt
echo Batch complete Data11518.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11519.sql -o Data11519.sql.txt
echo Batch complete Data11519.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11523.sql -o Data11523.sql.txt
echo Batch complete Data11523.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11525.sql -o Data11525.sql.txt
echo Batch complete Data11525.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11526.sql -o Data11526.sql.txt
echo Batch complete Data11526.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11527.sql -o Data11527.sql.txt
echo Batch complete Data11527.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11531.sql -o Data11531.sql.txt
echo Batch complete Data11531.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11532.sql -o Data11532.sql.txt
echo Batch complete Data11532.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11533.sql -o Data11533.sql.txt
echo Batch complete Data11533.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11534.sql -o Data11534.sql.txt
echo Batch complete Data11534.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11540.sql -o Data11540.sql.txt
echo Batch complete Data11540.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11541.sql -o Data11541.sql.txt
echo Batch complete Data11541.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11542.sql -o Data11542.sql.txt
echo Batch complete Data11542.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11543.sql -o Data11543.sql.txt
echo Batch complete Data11543.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11544.sql -o Data11544.sql.txt
echo Batch complete Data11544.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11545.sql -o Data11545.sql.txt
echo Batch complete Data11545.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11546.sql -o Data11546.sql.txt
echo Batch complete Data11546.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11547.sql -o Data11547.sql.txt
echo Batch complete Data11547.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11548.sql -o Data11548.sql.txt
echo Batch complete Data11548.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11549.sql -o Data11549.sql.txt
echo Batch complete Data11549.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11550.sql -o Data11550.sql.txt
echo Batch complete Data11550.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11556.sql -o Data11556.sql.txt
echo Batch complete Data11556.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11559.sql -o Data11559.sql.txt
echo Batch complete Data11559.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11567.sql -o Data11567.sql.txt
echo Batch complete Data11567.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11573.sql -o Data11573.sql.txt
echo Batch complete Data11573.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11574.sql -o Data11574.sql.txt
echo Batch complete Data11574.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11576.sql -o Data11576.sql.txt
echo Batch complete Data11576.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11577.sql -o Data11577.sql.txt
echo Batch complete Data11577.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11581.sql -o Data11581.sql.txt
echo Batch complete Data11581.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11586.sql -o Data11586.sql.txt
echo Batch complete Data11586.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11601.sql -o Data11601.sql.txt
echo Batch complete Data11601.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11613.sql -o Data11613.sql.txt
echo Batch complete Data11613.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11614.sql -o Data11614.sql.txt
echo Batch complete Data11614.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11616.sql -o Data11616.sql.txt
echo Batch complete Data11616.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11617.sql -o Data11617.sql.txt
echo Batch complete Data11617.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11619.sql -o Data11619.sql.txt
echo Batch complete Data11619.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11620.sql -o Data11620.sql.txt
echo Batch complete Data11620.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11621.sql -o Data11621.sql.txt
echo Batch complete Data11621.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11623.sql -o Data11623.sql.txt
echo Batch complete Data11623.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11624.sql -o Data11624.sql.txt
echo Batch complete Data11624.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11625.sql -o Data11625.sql.txt
echo Batch complete Data11625.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11626.sql -o Data11626.sql.txt
echo Batch complete Data11626.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11631.sql -o Data11631.sql.txt
echo Batch complete Data11631.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11632.sql -o Data11632.sql.txt
echo Batch complete Data11632.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11633.sql -o Data11633.sql.txt
echo Batch complete Data11633.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11635.sql -o Data11635.sql.txt
echo Batch complete Data11635.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11638.sql -o Data11638.sql.txt
echo Batch complete Data11638.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11639.sql -o Data11639.sql.txt
echo Batch complete Data11639.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11642.sql -o Data11642.sql.txt
echo Batch complete Data11642.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11643.sql -o Data11643.sql.txt
echo Batch complete Data11643.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11644.sql -o Data11644.sql.txt
echo Batch complete Data11644.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11647.sql -o Data11647.sql.txt
echo Batch complete Data11647.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11648.sql -o Data11648.sql.txt
echo Batch complete Data11648.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11649.sql -o Data11649.sql.txt
echo Batch complete Data11649.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11651.sql -o Data11651.sql.txt
echo Batch complete Data11651.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11653.sql -o Data11653.sql.txt
echo Batch complete Data11653.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11654.sql -o Data11654.sql.txt
echo Batch complete Data11654.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11655.sql -o Data11655.sql.txt
echo Batch complete Data11655.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11656.sql -o Data11656.sql.txt
echo Batch complete Data11656.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11657.sql -o Data11657.sql.txt
echo Batch complete Data11657.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11658.sql -o Data11658.sql.txt
echo Batch complete Data11658.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11659.sql -o Data11659.sql.txt
echo Batch complete Data11659.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11660.sql -o Data11660.sql.txt
echo Batch complete Data11660.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11662.sql -o Data11662.sql.txt
echo Batch complete Data11662.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11664.sql -o Data11664.sql.txt
echo Batch complete Data11664.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11665.sql -o Data11665.sql.txt
echo Batch complete Data11665.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11666.sql -o Data11666.sql.txt
echo Batch complete Data11666.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11667.sql -o Data11667.sql.txt
echo Batch complete Data11667.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11669.sql -o Data11669.sql.txt
echo Batch complete Data11669.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11685.sql -o Data11685.sql.txt
echo Batch complete Data11685.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11691.sql -o Data11691.sql.txt
echo Batch complete Data11691.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11693.sql -o Data11693.sql.txt
echo Batch complete Data11693.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11694.sql -o Data11694.sql.txt
echo Batch complete Data11694.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11695.sql -o Data11695.sql.txt
echo Batch complete Data11695.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11697.sql -o Data11697.sql.txt
echo Batch complete Data11697.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11701.sql -o Data11701.sql.txt
echo Batch complete Data11701.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11703.sql -o Data11703.sql.txt
echo Batch complete Data11703.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11704.sql -o Data11704.sql.txt
echo Batch complete Data11704.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11705.sql -o Data11705.sql.txt
echo Batch complete Data11705.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11709.sql -o Data11709.sql.txt
echo Batch complete Data11709.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11710.sql -o Data11710.sql.txt
echo Batch complete Data11710.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11711.sql -o Data11711.sql.txt
echo Batch complete Data11711.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11715.sql -o Data11715.sql.txt
echo Batch complete Data11715.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11716.sql -o Data11716.sql.txt
echo Batch complete Data11716.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11717.sql -o Data11717.sql.txt
echo Batch complete Data11717.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11719.sql -o Data11719.sql.txt
echo Batch complete Data11719.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11720.sql -o Data11720.sql.txt
echo Batch complete Data11720.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11721.sql -o Data11721.sql.txt
echo Batch complete Data11721.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11722.sql -o Data11722.sql.txt
echo Batch complete Data11722.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11723.sql -o Data11723.sql.txt
echo Batch complete Data11723.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11728.sql -o Data11728.sql.txt
echo Batch complete Data11728.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11729.sql -o Data11729.sql.txt
echo Batch complete Data11729.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11731.sql -o Data11731.sql.txt
echo Batch complete Data11731.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11732.sql -o Data11732.sql.txt
echo Batch complete Data11732.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11743.sql -o Data11743.sql.txt
echo Batch complete Data11743.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11753.sql -o Data11753.sql.txt
echo Batch complete Data11753.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11754.sql -o Data11754.sql.txt
echo Batch complete Data11754.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11755.sql -o Data11755.sql.txt
echo Batch complete Data11755.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11761.sql -o Data11761.sql.txt
echo Batch complete Data11761.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11767.sql -o Data11767.sql.txt
echo Batch complete Data11767.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11768.sql -o Data11768.sql.txt
echo Batch complete Data11768.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11769.sql -o Data11769.sql.txt
echo Batch complete Data11769.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11774.sql -o Data11774.sql.txt
echo Batch complete Data11774.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11780.sql -o Data11780.sql.txt
echo Batch complete Data11780.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11782.sql -o Data11782.sql.txt
echo Batch complete Data11782.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11783.sql -o Data11783.sql.txt
echo Batch complete Data11783.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11784.sql -o Data11784.sql.txt
echo Batch complete Data11784.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11785.sql -o Data11785.sql.txt
echo Batch complete Data11785.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11787.sql -o Data11787.sql.txt
echo Batch complete Data11787.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11788.sql -o Data11788.sql.txt
echo Batch complete Data11788.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11789.sql -o Data11789.sql.txt
echo Batch complete Data11789.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11790.sql -o Data11790.sql.txt
echo Batch complete Data11790.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11791.sql -o Data11791.sql.txt
echo Batch complete Data11791.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11797.sql -o Data11797.sql.txt
echo Batch complete Data11797.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11798.sql -o Data11798.sql.txt
echo Batch complete Data11798.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11799.sql -o Data11799.sql.txt
echo Batch complete Data11799.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11800.sql -o Data11800.sql.txt
echo Batch complete Data11800.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11805.sql -o Data11805.sql.txt
echo Batch complete Data11805.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11808.sql -o Data11808.sql.txt
echo Batch complete Data11808.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11811.sql -o Data11811.sql.txt
echo Batch complete Data11811.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11812.sql -o Data11812.sql.txt
echo Batch complete Data11812.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11814.sql -o Data11814.sql.txt
echo Batch complete Data11814.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11820.sql -o Data11820.sql.txt
echo Batch complete Data11820.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11824.sql -o Data11824.sql.txt
echo Batch complete Data11824.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11826.sql -o Data11826.sql.txt
echo Batch complete Data11826.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11829.sql -o Data11829.sql.txt
echo Batch complete Data11829.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11830.sql -o Data11830.sql.txt
echo Batch complete Data11830.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11831.sql -o Data11831.sql.txt
echo Batch complete Data11831.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11834.sql -o Data11834.sql.txt
echo Batch complete Data11834.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11835.sql -o Data11835.sql.txt
echo Batch complete Data11835.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11836.sql -o Data11836.sql.txt
echo Batch complete Data11836.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11837.sql -o Data11837.sql.txt
echo Batch complete Data11837.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11840.sql -o Data11840.sql.txt
echo Batch complete Data11840.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11842.sql -o Data11842.sql.txt
echo Batch complete Data11842.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11844.sql -o Data11844.sql.txt
echo Batch complete Data11844.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11846.sql -o Data11846.sql.txt
echo Batch complete Data11846.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11848.sql -o Data11848.sql.txt
echo Batch complete Data11848.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11850.sql -o Data11850.sql.txt
echo Batch complete Data11850.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11851.sql -o Data11851.sql.txt
echo Batch complete Data11851.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11856.sql -o Data11856.sql.txt
echo Batch complete Data11856.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11858.sql -o Data11858.sql.txt
echo Batch complete Data11858.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11861.sql -o Data11861.sql.txt
echo Batch complete Data11861.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11862.sql -o Data11862.sql.txt
echo Batch complete Data11862.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11869.sql -o Data11869.sql.txt
echo Batch complete Data11869.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11881.sql -o Data11881.sql.txt
echo Batch complete Data11881.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11884.sql -o Data11884.sql.txt
echo Batch complete Data11884.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11886.sql -o Data11886.sql.txt
echo Batch complete Data11886.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11887.sql -o Data11887.sql.txt
echo Batch complete Data11887.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11892.sql -o Data11892.sql.txt
echo Batch complete Data11892.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11893.sql -o Data11893.sql.txt
echo Batch complete Data11893.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11897.sql -o Data11897.sql.txt
echo Batch complete Data11897.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11898.sql -o Data11898.sql.txt
echo Batch complete Data11898.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11899.sql -o Data11899.sql.txt
echo Batch complete Data11899.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11906.sql -o Data11906.sql.txt
echo Batch complete Data11906.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11908.sql -o Data11908.sql.txt
echo Batch complete Data11908.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11909.sql -o Data11909.sql.txt
echo Batch complete Data11909.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11910.sql -o Data11910.sql.txt
echo Batch complete Data11910.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11915.sql -o Data11915.sql.txt
echo Batch complete Data11915.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11916.sql -o Data11916.sql.txt
echo Batch complete Data11916.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11917.sql -o Data11917.sql.txt
echo Batch complete Data11917.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11918.sql -o Data11918.sql.txt
echo Batch complete Data11918.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11919.sql -o Data11919.sql.txt
echo Batch complete Data11919.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11920.sql -o Data11920.sql.txt
echo Batch complete Data11920.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11921.sql -o Data11921.sql.txt
echo Batch complete Data11921.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11923.sql -o Data11923.sql.txt
echo Batch complete Data11923.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11925.sql -o Data11925.sql.txt
echo Batch complete Data11925.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11928.sql -o Data11928.sql.txt
echo Batch complete Data11928.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11931.sql -o Data11931.sql.txt
echo Batch complete Data11931.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11932.sql -o Data11932.sql.txt
echo Batch complete Data11932.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11935.sql -o Data11935.sql.txt
echo Batch complete Data11935.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11937.sql -o Data11937.sql.txt
echo Batch complete Data11937.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11939.sql -o Data11939.sql.txt
echo Batch complete Data11939.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11940.sql -o Data11940.sql.txt
echo Batch complete Data11940.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11943.sql -o Data11943.sql.txt
echo Batch complete Data11943.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11947.sql -o Data11947.sql.txt
echo Batch complete Data11947.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11948.sql -o Data11948.sql.txt
echo Batch complete Data11948.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11949.sql -o Data11949.sql.txt
echo Batch complete Data11949.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11951.sql -o Data11951.sql.txt
echo Batch complete Data11951.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11952.sql -o Data11952.sql.txt
echo Batch complete Data11952.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11956.sql -o Data11956.sql.txt
echo Batch complete Data11956.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11957.sql -o Data11957.sql.txt
echo Batch complete Data11957.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11958.sql -o Data11958.sql.txt
echo Batch complete Data11958.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11959.sql -o Data11959.sql.txt
echo Batch complete Data11959.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11962.sql -o Data11962.sql.txt
echo Batch complete Data11962.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11973.sql -o Data11973.sql.txt
echo Batch complete Data11973.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11974.sql -o Data11974.sql.txt
echo Batch complete Data11974.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11978.sql -o Data11978.sql.txt
echo Batch complete Data11978.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11984.sql -o Data11984.sql.txt
echo Batch complete Data11984.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data11993.sql -o Data11993.sql.txt
echo Batch complete Data11993.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12007.sql -o Data12007.sql.txt
echo Batch complete Data12007.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12010.sql -o Data12010.sql.txt
echo Batch complete Data12010.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12012.sql -o Data12012.sql.txt
echo Batch complete Data12012.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12014.sql -o Data12014.sql.txt
echo Batch complete Data12014.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12016.sql -o Data12016.sql.txt
echo Batch complete Data12016.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12020.sql -o Data12020.sql.txt
echo Batch complete Data12020.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12021.sql -o Data12021.sql.txt
echo Batch complete Data12021.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12024.sql -o Data12024.sql.txt
echo Batch complete Data12024.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12028.sql -o Data12028.sql.txt
echo Batch complete Data12028.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12030.sql -o Data12030.sql.txt
echo Batch complete Data12030.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12031.sql -o Data12031.sql.txt
echo Batch complete Data12031.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12034.sql -o Data12034.sql.txt
echo Batch complete Data12034.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12037.sql -o Data12037.sql.txt
echo Batch complete Data12037.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12039.sql -o Data12039.sql.txt
echo Batch complete Data12039.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12041.sql -o Data12041.sql.txt
echo Batch complete Data12041.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12042.sql -o Data12042.sql.txt
echo Batch complete Data12042.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12045.sql -o Data12045.sql.txt
echo Batch complete Data12045.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12046.sql -o Data12046.sql.txt
echo Batch complete Data12046.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12048.sql -o Data12048.sql.txt
echo Batch complete Data12048.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12050.sql -o Data12050.sql.txt
echo Batch complete Data12050.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12051.sql -o Data12051.sql.txt
echo Batch complete Data12051.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12053.sql -o Data12053.sql.txt
echo Batch complete Data12053.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12054.sql -o Data12054.sql.txt
echo Batch complete Data12054.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12055.sql -o Data12055.sql.txt
echo Batch complete Data12055.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12057.sql -o Data12057.sql.txt
echo Batch complete Data12057.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12060.sql -o Data12060.sql.txt
echo Batch complete Data12060.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12061.sql -o Data12061.sql.txt
echo Batch complete Data12061.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12062.sql -o Data12062.sql.txt
echo Batch complete Data12062.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12064.sql -o Data12064.sql.txt
echo Batch complete Data12064.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12065.sql -o Data12065.sql.txt
echo Batch complete Data12065.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12066.sql -o Data12066.sql.txt
echo Batch complete Data12066.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12067.sql -o Data12067.sql.txt
echo Batch complete Data12067.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12068.sql -o Data12068.sql.txt
echo Batch complete Data12068.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12072.sql -o Data12072.sql.txt
echo Batch complete Data12072.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12073.sql -o Data12073.sql.txt
echo Batch complete Data12073.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12074.sql -o Data12074.sql.txt
echo Batch complete Data12074.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12075.sql -o Data12075.sql.txt
echo Batch complete Data12075.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12077.sql -o Data12077.sql.txt
echo Batch complete Data12077.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12078.sql -o Data12078.sql.txt
echo Batch complete Data12078.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12080.sql -o Data12080.sql.txt
echo Batch complete Data12080.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12082.sql -o Data12082.sql.txt
echo Batch complete Data12082.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12083.sql -o Data12083.sql.txt
echo Batch complete Data12083.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12084.sql -o Data12084.sql.txt
echo Batch complete Data12084.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12085.sql -o Data12085.sql.txt
echo Batch complete Data12085.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12087.sql -o Data12087.sql.txt
echo Batch complete Data12087.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12088.sql -o Data12088.sql.txt
echo Batch complete Data12088.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12093.sql -o Data12093.sql.txt
echo Batch complete Data12093.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12094.sql -o Data12094.sql.txt
echo Batch complete Data12094.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12096.sql -o Data12096.sql.txt
echo Batch complete Data12096.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12098.sql -o Data12098.sql.txt
echo Batch complete Data12098.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12099.sql -o Data12099.sql.txt
echo Batch complete Data12099.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12101.sql -o Data12101.sql.txt
echo Batch complete Data12101.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12102.sql -o Data12102.sql.txt
echo Batch complete Data12102.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12103.sql -o Data12103.sql.txt
echo Batch complete Data12103.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12104.sql -o Data12104.sql.txt
echo Batch complete Data12104.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12105.sql -o Data12105.sql.txt
echo Batch complete Data12105.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12106.sql -o Data12106.sql.txt
echo Batch complete Data12106.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12109.sql -o Data12109.sql.txt
echo Batch complete Data12109.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12111.sql -o Data12111.sql.txt
echo Batch complete Data12111.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12112.sql -o Data12112.sql.txt
echo Batch complete Data12112.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12113.sql -o Data12113.sql.txt
echo Batch complete Data12113.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12115.sql -o Data12115.sql.txt
echo Batch complete Data12115.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12116.sql -o Data12116.sql.txt
echo Batch complete Data12116.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12117.sql -o Data12117.sql.txt
echo Batch complete Data12117.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12123.sql -o Data12123.sql.txt
echo Batch complete Data12123.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12125.sql -o Data12125.sql.txt
echo Batch complete Data12125.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12126.sql -o Data12126.sql.txt
echo Batch complete Data12126.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12128.sql -o Data12128.sql.txt
echo Batch complete Data12128.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12129.sql -o Data12129.sql.txt
echo Batch complete Data12129.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12130.sql -o Data12130.sql.txt
echo Batch complete Data12130.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12131.sql -o Data12131.sql.txt
echo Batch complete Data12131.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12132.sql -o Data12132.sql.txt
echo Batch complete Data12132.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12135.sql -o Data12135.sql.txt
echo Batch complete Data12135.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12136.sql -o Data12136.sql.txt
echo Batch complete Data12136.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12137.sql -o Data12137.sql.txt
echo Batch complete Data12137.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12138.sql -o Data12138.sql.txt
echo Batch complete Data12138.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12140.sql -o Data12140.sql.txt
echo Batch complete Data12140.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12141.sql -o Data12141.sql.txt
echo Batch complete Data12141.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12142.sql -o Data12142.sql.txt
echo Batch complete Data12142.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12144.sql -o Data12144.sql.txt
echo Batch complete Data12144.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12146.sql -o Data12146.sql.txt
echo Batch complete Data12146.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12148.sql -o Data12148.sql.txt
echo Batch complete Data12148.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12149.sql -o Data12149.sql.txt
echo Batch complete Data12149.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12151.sql -o Data12151.sql.txt
echo Batch complete Data12151.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12152.sql -o Data12152.sql.txt
echo Batch complete Data12152.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12153.sql -o Data12153.sql.txt
echo Batch complete Data12153.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12154.sql -o Data12154.sql.txt
echo Batch complete Data12154.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12155.sql -o Data12155.sql.txt
echo Batch complete Data12155.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12156.sql -o Data12156.sql.txt
echo Batch complete Data12156.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12157.sql -o Data12157.sql.txt
echo Batch complete Data12157.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12158.sql -o Data12158.sql.txt
echo Batch complete Data12158.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12159.sql -o Data12159.sql.txt
echo Batch complete Data12159.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12160.sql -o Data12160.sql.txt
echo Batch complete Data12160.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12161.sql -o Data12161.sql.txt
echo Batch complete Data12161.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12163.sql -o Data12163.sql.txt
echo Batch complete Data12163.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12167.sql -o Data12167.sql.txt
echo Batch complete Data12167.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12168.sql -o Data12168.sql.txt
echo Batch complete Data12168.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12171.sql -o Data12171.sql.txt
echo Batch complete Data12171.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12181.sql -o Data12181.sql.txt
echo Batch complete Data12181.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12184.sql -o Data12184.sql.txt
echo Batch complete Data12184.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12185.sql -o Data12185.sql.txt
echo Batch complete Data12185.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12186.sql -o Data12186.sql.txt
echo Batch complete Data12186.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12187.sql -o Data12187.sql.txt
echo Batch complete Data12187.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12193.sql -o Data12193.sql.txt
echo Batch complete Data12193.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12194.sql -o Data12194.sql.txt
echo Batch complete Data12194.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12195.sql -o Data12195.sql.txt
echo Batch complete Data12195.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12197.sql -o Data12197.sql.txt
echo Batch complete Data12197.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12198.sql -o Data12198.sql.txt
echo Batch complete Data12198.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12199.sql -o Data12199.sql.txt
echo Batch complete Data12199.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12202.sql -o Data12202.sql.txt
echo Batch complete Data12202.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12204.sql -o Data12204.sql.txt
echo Batch complete Data12204.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12207.sql -o Data12207.sql.txt
echo Batch complete Data12207.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12208.sql -o Data12208.sql.txt
echo Batch complete Data12208.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12209.sql -o Data12209.sql.txt
echo Batch complete Data12209.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12210.sql -o Data12210.sql.txt
echo Batch complete Data12210.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12214.sql -o Data12214.sql.txt
echo Batch complete Data12214.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12215.sql -o Data12215.sql.txt
echo Batch complete Data12215.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12217.sql -o Data12217.sql.txt
echo Batch complete Data12217.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12222.sql -o Data12222.sql.txt
echo Batch complete Data12222.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12224.sql -o Data12224.sql.txt
echo Batch complete Data12224.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12225.sql -o Data12225.sql.txt
echo Batch complete Data12225.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12226.sql -o Data12226.sql.txt
echo Batch complete Data12226.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12227.sql -o Data12227.sql.txt
echo Batch complete Data12227.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12228.sql -o Data12228.sql.txt
echo Batch complete Data12228.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12229.sql -o Data12229.sql.txt
echo Batch complete Data12229.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12232.sql -o Data12232.sql.txt
echo Batch complete Data12232.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12234.sql -o Data12234.sql.txt
echo Batch complete Data12234.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12235.sql -o Data12235.sql.txt
echo Batch complete Data12235.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12236.sql -o Data12236.sql.txt
echo Batch complete Data12236.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12237.sql -o Data12237.sql.txt
echo Batch complete Data12237.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12238.sql -o Data12238.sql.txt
echo Batch complete Data12238.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12239.sql -o Data12239.sql.txt
echo Batch complete Data12239.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12240.sql -o Data12240.sql.txt
echo Batch complete Data12240.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12242.sql -o Data12242.sql.txt
echo Batch complete Data12242.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12245.sql -o Data12245.sql.txt
echo Batch complete Data12245.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12246.sql -o Data12246.sql.txt
echo Batch complete Data12246.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12247.sql -o Data12247.sql.txt
echo Batch complete Data12247.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12248.sql -o Data12248.sql.txt
echo Batch complete Data12248.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12249.sql -o Data12249.sql.txt
echo Batch complete Data12249.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12250.sql -o Data12250.sql.txt
echo Batch complete Data12250.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12252.sql -o Data12252.sql.txt
echo Batch complete Data12252.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12255.sql -o Data12255.sql.txt
echo Batch complete Data12255.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12258.sql -o Data12258.sql.txt
echo Batch complete Data12258.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12260.sql -o Data12260.sql.txt
echo Batch complete Data12260.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12261.sql -o Data12261.sql.txt
echo Batch complete Data12261.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12262.sql -o Data12262.sql.txt
echo Batch complete Data12262.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12264.sql -o Data12264.sql.txt
echo Batch complete Data12264.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12265.sql -o Data12265.sql.txt
echo Batch complete Data12265.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12270.sql -o Data12270.sql.txt
echo Batch complete Data12270.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12275.sql -o Data12275.sql.txt
echo Batch complete Data12275.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12276.sql -o Data12276.sql.txt
echo Batch complete Data12276.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12278.sql -o Data12278.sql.txt
echo Batch complete Data12278.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12279.sql -o Data12279.sql.txt
echo Batch complete Data12279.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12280.sql -o Data12280.sql.txt
echo Batch complete Data12280.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12281.sql -o Data12281.sql.txt
echo Batch complete Data12281.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12284.sql -o Data12284.sql.txt
echo Batch complete Data12284.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12285.sql -o Data12285.sql.txt
echo Batch complete Data12285.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12286.sql -o Data12286.sql.txt
echo Batch complete Data12286.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12288.sql -o Data12288.sql.txt
echo Batch complete Data12288.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12289.sql -o Data12289.sql.txt
echo Batch complete Data12289.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12291.sql -o Data12291.sql.txt
echo Batch complete Data12291.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12292.sql -o Data12292.sql.txt
echo Batch complete Data12292.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12293.sql -o Data12293.sql.txt
echo Batch complete Data12293.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12294.sql -o Data12294.sql.txt
echo Batch complete Data12294.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12295.sql -o Data12295.sql.txt
echo Batch complete Data12295.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12296.sql -o Data12296.sql.txt
echo Batch complete Data12296.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12297.sql -o Data12297.sql.txt
echo Batch complete Data12297.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12298.sql -o Data12298.sql.txt
echo Batch complete Data12298.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12300.sql -o Data12300.sql.txt
echo Batch complete Data12300.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12301.sql -o Data12301.sql.txt
echo Batch complete Data12301.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12302.sql -o Data12302.sql.txt
echo Batch complete Data12302.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12305.sql -o Data12305.sql.txt
echo Batch complete Data12305.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12306.sql -o Data12306.sql.txt
echo Batch complete Data12306.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12311.sql -o Data12311.sql.txt
echo Batch complete Data12311.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12312.sql -o Data12312.sql.txt
echo Batch complete Data12312.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12314.sql -o Data12314.sql.txt
echo Batch complete Data12314.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12315.sql -o Data12315.sql.txt
echo Batch complete Data12315.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12317.sql -o Data12317.sql.txt
echo Batch complete Data12317.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12318.sql -o Data12318.sql.txt
echo Batch complete Data12318.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12320.sql -o Data12320.sql.txt
echo Batch complete Data12320.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12321.sql -o Data12321.sql.txt
echo Batch complete Data12321.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12324.sql -o Data12324.sql.txt
echo Batch complete Data12324.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12325.sql -o Data12325.sql.txt
echo Batch complete Data12325.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12327.sql -o Data12327.sql.txt
echo Batch complete Data12327.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12330.sql -o Data12330.sql.txt
echo Batch complete Data12330.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12333.sql -o Data12333.sql.txt
echo Batch complete Data12333.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12335.sql -o Data12335.sql.txt
echo Batch complete Data12335.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12337.sql -o Data12337.sql.txt
echo Batch complete Data12337.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12338.sql -o Data12338.sql.txt
echo Batch complete Data12338.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12340.sql -o Data12340.sql.txt
echo Batch complete Data12340.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12341.sql -o Data12341.sql.txt
echo Batch complete Data12341.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12342.sql -o Data12342.sql.txt
echo Batch complete Data12342.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12343.sql -o Data12343.sql.txt
echo Batch complete Data12343.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12345.sql -o Data12345.sql.txt
echo Batch complete Data12345.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12346.sql -o Data12346.sql.txt
echo Batch complete Data12346.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12348.sql -o Data12348.sql.txt
echo Batch complete Data12348.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12351.sql -o Data12351.sql.txt
echo Batch complete Data12351.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12352.sql -o Data12352.sql.txt
echo Batch complete Data12352.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12354.sql -o Data12354.sql.txt
echo Batch complete Data12354.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12356.sql -o Data12356.sql.txt
echo Batch complete Data12356.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12357.sql -o Data12357.sql.txt
echo Batch complete Data12357.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12359.sql -o Data12359.sql.txt
echo Batch complete Data12359.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12360.sql -o Data12360.sql.txt
echo Batch complete Data12360.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12361.sql -o Data12361.sql.txt
echo Batch complete Data12361.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12362.sql -o Data12362.sql.txt
echo Batch complete Data12362.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12365.sql -o Data12365.sql.txt
echo Batch complete Data12365.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12366.sql -o Data12366.sql.txt
echo Batch complete Data12366.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12367.sql -o Data12367.sql.txt
echo Batch complete Data12367.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12372.sql -o Data12372.sql.txt
echo Batch complete Data12372.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12373.sql -o Data12373.sql.txt
echo Batch complete Data12373.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12375.sql -o Data12375.sql.txt
echo Batch complete Data12375.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12378.sql -o Data12378.sql.txt
echo Batch complete Data12378.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12381.sql -o Data12381.sql.txt
echo Batch complete Data12381.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12382.sql -o Data12382.sql.txt
echo Batch complete Data12382.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12385.sql -o Data12385.sql.txt
echo Batch complete Data12385.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12386.sql -o Data12386.sql.txt
echo Batch complete Data12386.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12390.sql -o Data12390.sql.txt
echo Batch complete Data12390.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12391.sql -o Data12391.sql.txt
echo Batch complete Data12391.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12392.sql -o Data12392.sql.txt
echo Batch complete Data12392.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12393.sql -o Data12393.sql.txt
echo Batch complete Data12393.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12399.sql -o Data12399.sql.txt
echo Batch complete Data12399.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12400.sql -o Data12400.sql.txt
echo Batch complete Data12400.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12401.sql -o Data12401.sql.txt
echo Batch complete Data12401.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12402.sql -o Data12402.sql.txt
echo Batch complete Data12402.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12403.sql -o Data12403.sql.txt
echo Batch complete Data12403.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12404.sql -o Data12404.sql.txt
echo Batch complete Data12404.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12405.sql -o Data12405.sql.txt
echo Batch complete Data12405.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12407.sql -o Data12407.sql.txt
echo Batch complete Data12407.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12409.sql -o Data12409.sql.txt
echo Batch complete Data12409.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12410.sql -o Data12410.sql.txt
echo Batch complete Data12410.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12416.sql -o Data12416.sql.txt
echo Batch complete Data12416.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12417.sql -o Data12417.sql.txt
echo Batch complete Data12417.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12418.sql -o Data12418.sql.txt
echo Batch complete Data12418.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12419.sql -o Data12419.sql.txt
echo Batch complete Data12419.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12422.sql -o Data12422.sql.txt
echo Batch complete Data12422.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12423.sql -o Data12423.sql.txt
echo Batch complete Data12423.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12424.sql -o Data12424.sql.txt
echo Batch complete Data12424.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12425.sql -o Data12425.sql.txt
echo Batch complete Data12425.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12431.sql -o Data12431.sql.txt
echo Batch complete Data12431.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12434.sql -o Data12434.sql.txt
echo Batch complete Data12434.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12436.sql -o Data12436.sql.txt
echo Batch complete Data12436.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12437.sql -o Data12437.sql.txt
echo Batch complete Data12437.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12438.sql -o Data12438.sql.txt
echo Batch complete Data12438.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12443.sql -o Data12443.sql.txt
echo Batch complete Data12443.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12445.sql -o Data12445.sql.txt
echo Batch complete Data12445.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12447.sql -o Data12447.sql.txt
echo Batch complete Data12447.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12448.sql -o Data12448.sql.txt
echo Batch complete Data12448.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12452.sql -o Data12452.sql.txt
echo Batch complete Data12452.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12453.sql -o Data12453.sql.txt
echo Batch complete Data12453.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12455.sql -o Data12455.sql.txt
echo Batch complete Data12455.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12457.sql -o Data12457.sql.txt
echo Batch complete Data12457.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12458.sql -o Data12458.sql.txt
echo Batch complete Data12458.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12460.sql -o Data12460.sql.txt
echo Batch complete Data12460.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12464.sql -o Data12464.sql.txt
echo Batch complete Data12464.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12467.sql -o Data12467.sql.txt
echo Batch complete Data12467.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12468.sql -o Data12468.sql.txt
echo Batch complete Data12468.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12469.sql -o Data12469.sql.txt
echo Batch complete Data12469.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12470.sql -o Data12470.sql.txt
echo Batch complete Data12470.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12471.sql -o Data12471.sql.txt
echo Batch complete Data12471.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12472.sql -o Data12472.sql.txt
echo Batch complete Data12472.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12474.sql -o Data12474.sql.txt
echo Batch complete Data12474.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12475.sql -o Data12475.sql.txt
echo Batch complete Data12475.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12476.sql -o Data12476.sql.txt
echo Batch complete Data12476.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12477.sql -o Data12477.sql.txt
echo Batch complete Data12477.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12478.sql -o Data12478.sql.txt
echo Batch complete Data12478.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12479.sql -o Data12479.sql.txt
echo Batch complete Data12479.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12481.sql -o Data12481.sql.txt
echo Batch complete Data12481.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12482.sql -o Data12482.sql.txt
echo Batch complete Data12482.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12483.sql -o Data12483.sql.txt
echo Batch complete Data12483.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12485.sql -o Data12485.sql.txt
echo Batch complete Data12485.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12486.sql -o Data12486.sql.txt
echo Batch complete Data12486.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12491.sql -o Data12491.sql.txt
echo Batch complete Data12491.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12494.sql -o Data12494.sql.txt
echo Batch complete Data12494.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12496.sql -o Data12496.sql.txt
echo Batch complete Data12496.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12497.sql -o Data12497.sql.txt
echo Batch complete Data12497.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12498.sql -o Data12498.sql.txt
echo Batch complete Data12498.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12504.sql -o Data12504.sql.txt
echo Batch complete Data12504.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12506.sql -o Data12506.sql.txt
echo Batch complete Data12506.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12512.sql -o Data12512.sql.txt
echo Batch complete Data12512.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12513.sql -o Data12513.sql.txt
echo Batch complete Data12513.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12514.sql -o Data12514.sql.txt
echo Batch complete Data12514.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12515.sql -o Data12515.sql.txt
echo Batch complete Data12515.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12516.sql -o Data12516.sql.txt
echo Batch complete Data12516.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12517.sql -o Data12517.sql.txt
echo Batch complete Data12517.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12522.sql -o Data12522.sql.txt
echo Batch complete Data12522.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12524.sql -o Data12524.sql.txt
echo Batch complete Data12524.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12525.sql -o Data12525.sql.txt
echo Batch complete Data12525.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12526.sql -o Data12526.sql.txt
echo Batch complete Data12526.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12527.sql -o Data12527.sql.txt
echo Batch complete Data12527.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12528.sql -o Data12528.sql.txt
echo Batch complete Data12528.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12530.sql -o Data12530.sql.txt
echo Batch complete Data12530.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12531.sql -o Data12531.sql.txt
echo Batch complete Data12531.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12532.sql -o Data12532.sql.txt
echo Batch complete Data12532.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12535.sql -o Data12535.sql.txt
echo Batch complete Data12535.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12537.sql -o Data12537.sql.txt
echo Batch complete Data12537.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12538.sql -o Data12538.sql.txt
echo Batch complete Data12538.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12539.sql -o Data12539.sql.txt
echo Batch complete Data12539.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12540.sql -o Data12540.sql.txt
echo Batch complete Data12540.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12541.sql -o Data12541.sql.txt
echo Batch complete Data12541.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12543.sql -o Data12543.sql.txt
echo Batch complete Data12543.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12545.sql -o Data12545.sql.txt
echo Batch complete Data12545.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12546.sql -o Data12546.sql.txt
echo Batch complete Data12546.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12548.sql -o Data12548.sql.txt
echo Batch complete Data12548.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12549.sql -o Data12549.sql.txt
echo Batch complete Data12549.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12551.sql -o Data12551.sql.txt
echo Batch complete Data12551.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12552.sql -o Data12552.sql.txt
echo Batch complete Data12552.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12553.sql -o Data12553.sql.txt
echo Batch complete Data12553.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12554.sql -o Data12554.sql.txt
echo Batch complete Data12554.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12555.sql -o Data12555.sql.txt
echo Batch complete Data12555.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12557.sql -o Data12557.sql.txt
echo Batch complete Data12557.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12558.sql -o Data12558.sql.txt
echo Batch complete Data12558.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12561.sql -o Data12561.sql.txt
echo Batch complete Data12561.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12562.sql -o Data12562.sql.txt
echo Batch complete Data12562.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12563.sql -o Data12563.sql.txt
echo Batch complete Data12563.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12565.sql -o Data12565.sql.txt
echo Batch complete Data12565.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12566.sql -o Data12566.sql.txt
echo Batch complete Data12566.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12567.sql -o Data12567.sql.txt
echo Batch complete Data12567.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12568.sql -o Data12568.sql.txt
echo Batch complete Data12568.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12570.sql -o Data12570.sql.txt
echo Batch complete Data12570.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12571.sql -o Data12571.sql.txt
echo Batch complete Data12571.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12573.sql -o Data12573.sql.txt
echo Batch complete Data12573.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12575.sql -o Data12575.sql.txt
echo Batch complete Data12575.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12577.sql -o Data12577.sql.txt
echo Batch complete Data12577.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12579.sql -o Data12579.sql.txt
echo Batch complete Data12579.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12580.sql -o Data12580.sql.txt
echo Batch complete Data12580.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12582.sql -o Data12582.sql.txt
echo Batch complete Data12582.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12583.sql -o Data12583.sql.txt
echo Batch complete Data12583.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12584.sql -o Data12584.sql.txt
echo Batch complete Data12584.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12585.sql -o Data12585.sql.txt
echo Batch complete Data12585.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12588.sql -o Data12588.sql.txt
echo Batch complete Data12588.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12590.sql -o Data12590.sql.txt
echo Batch complete Data12590.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12591.sql -o Data12591.sql.txt
echo Batch complete Data12591.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12592.sql -o Data12592.sql.txt
echo Batch complete Data12592.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12594.sql -o Data12594.sql.txt
echo Batch complete Data12594.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12595.sql -o Data12595.sql.txt
echo Batch complete Data12595.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12596.sql -o Data12596.sql.txt
echo Batch complete Data12596.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12597.sql -o Data12597.sql.txt
echo Batch complete Data12597.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12598.sql -o Data12598.sql.txt
echo Batch complete Data12598.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12601.sql -o Data12601.sql.txt
echo Batch complete Data12601.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12603.sql -o Data12603.sql.txt
echo Batch complete Data12603.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12604.sql -o Data12604.sql.txt
echo Batch complete Data12604.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12607.sql -o Data12607.sql.txt
echo Batch complete Data12607.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12608.sql -o Data12608.sql.txt
echo Batch complete Data12608.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12610.sql -o Data12610.sql.txt
echo Batch complete Data12610.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12611.sql -o Data12611.sql.txt
echo Batch complete Data12611.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12612.sql -o Data12612.sql.txt
echo Batch complete Data12612.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12614.sql -o Data12614.sql.txt
echo Batch complete Data12614.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12615.sql -o Data12615.sql.txt
echo Batch complete Data12615.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12620.sql -o Data12620.sql.txt
echo Batch complete Data12620.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12621.sql -o Data12621.sql.txt
echo Batch complete Data12621.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12622.sql -o Data12622.sql.txt
echo Batch complete Data12622.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12624.sql -o Data12624.sql.txt
echo Batch complete Data12624.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12625.sql -o Data12625.sql.txt
echo Batch complete Data12625.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12626.sql -o Data12626.sql.txt
echo Batch complete Data12626.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12627.sql -o Data12627.sql.txt
echo Batch complete Data12627.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12628.sql -o Data12628.sql.txt
echo Batch complete Data12628.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12629.sql -o Data12629.sql.txt
echo Batch complete Data12629.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12632.sql -o Data12632.sql.txt
echo Batch complete Data12632.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12633.sql -o Data12633.sql.txt
echo Batch complete Data12633.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12635.sql -o Data12635.sql.txt
echo Batch complete Data12635.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12636.sql -o Data12636.sql.txt
echo Batch complete Data12636.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12638.sql -o Data12638.sql.txt
echo Batch complete Data12638.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12639.sql -o Data12639.sql.txt
echo Batch complete Data12639.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12642.sql -o Data12642.sql.txt
echo Batch complete Data12642.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12648.sql -o Data12648.sql.txt
echo Batch complete Data12648.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12649.sql -o Data12649.sql.txt
echo Batch complete Data12649.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12652.sql -o Data12652.sql.txt
echo Batch complete Data12652.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12653.sql -o Data12653.sql.txt
echo Batch complete Data12653.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12656.sql -o Data12656.sql.txt
echo Batch complete Data12656.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12658.sql -o Data12658.sql.txt
echo Batch complete Data12658.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12659.sql -o Data12659.sql.txt
echo Batch complete Data12659.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12660.sql -o Data12660.sql.txt
echo Batch complete Data12660.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12662.sql -o Data12662.sql.txt
echo Batch complete Data12662.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12664.sql -o Data12664.sql.txt
echo Batch complete Data12664.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12667.sql -o Data12667.sql.txt
echo Batch complete Data12667.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12668.sql -o Data12668.sql.txt
echo Batch complete Data12668.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12670.sql -o Data12670.sql.txt
echo Batch complete Data12670.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12671.sql -o Data12671.sql.txt
echo Batch complete Data12671.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12675.sql -o Data12675.sql.txt
echo Batch complete Data12675.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12682.sql -o Data12682.sql.txt
echo Batch complete Data12682.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12684.sql -o Data12684.sql.txt
echo Batch complete Data12684.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12689.sql -o Data12689.sql.txt
echo Batch complete Data12689.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12691.sql -o Data12691.sql.txt
echo Batch complete Data12691.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12696.sql -o Data12696.sql.txt
echo Batch complete Data12696.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12697.sql -o Data12697.sql.txt
echo Batch complete Data12697.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12698.sql -o Data12698.sql.txt
echo Batch complete Data12698.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12699.sql -o Data12699.sql.txt
echo Batch complete Data12699.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12701.sql -o Data12701.sql.txt
echo Batch complete Data12701.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12702.sql -o Data12702.sql.txt
echo Batch complete Data12702.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12703.sql -o Data12703.sql.txt
echo Batch complete Data12703.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12707.sql -o Data12707.sql.txt
echo Batch complete Data12707.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12708.sql -o Data12708.sql.txt
echo Batch complete Data12708.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12709.sql -o Data12709.sql.txt
echo Batch complete Data12709.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12714.sql -o Data12714.sql.txt
echo Batch complete Data12714.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12715.sql -o Data12715.sql.txt
echo Batch complete Data12715.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12717.sql -o Data12717.sql.txt
echo Batch complete Data12717.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12718.sql -o Data12718.sql.txt
echo Batch complete Data12718.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12726.sql -o Data12726.sql.txt
echo Batch complete Data12726.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12729.sql -o Data12729.sql.txt
echo Batch complete Data12729.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12730.sql -o Data12730.sql.txt
echo Batch complete Data12730.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12735.sql -o Data12735.sql.txt
echo Batch complete Data12735.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12736.sql -o Data12736.sql.txt
echo Batch complete Data12736.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12739.sql -o Data12739.sql.txt
echo Batch complete Data12739.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12741.sql -o Data12741.sql.txt
echo Batch complete Data12741.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12744.sql -o Data12744.sql.txt
echo Batch complete Data12744.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12745.sql -o Data12745.sql.txt
echo Batch complete Data12745.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12751.sql -o Data12751.sql.txt
echo Batch complete Data12751.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12754.sql -o Data12754.sql.txt
echo Batch complete Data12754.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12758.sql -o Data12758.sql.txt
echo Batch complete Data12758.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12761.sql -o Data12761.sql.txt
echo Batch complete Data12761.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12762.sql -o Data12762.sql.txt
echo Batch complete Data12762.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12763.sql -o Data12763.sql.txt
echo Batch complete Data12763.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12764.sql -o Data12764.sql.txt
echo Batch complete Data12764.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12765.sql -o Data12765.sql.txt
echo Batch complete Data12765.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12766.sql -o Data12766.sql.txt
echo Batch complete Data12766.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12770.sql -o Data12770.sql.txt
echo Batch complete Data12770.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12771.sql -o Data12771.sql.txt
echo Batch complete Data12771.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12773.sql -o Data12773.sql.txt
echo Batch complete Data12773.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12774.sql -o Data12774.sql.txt
echo Batch complete Data12774.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12775.sql -o Data12775.sql.txt
echo Batch complete Data12775.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12777.sql -o Data12777.sql.txt
echo Batch complete Data12777.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12778.sql -o Data12778.sql.txt
echo Batch complete Data12778.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12780.sql -o Data12780.sql.txt
echo Batch complete Data12780.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12781.sql -o Data12781.sql.txt
echo Batch complete Data12781.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12783.sql -o Data12783.sql.txt
echo Batch complete Data12783.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12785.sql -o Data12785.sql.txt
echo Batch complete Data12785.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12786.sql -o Data12786.sql.txt
echo Batch complete Data12786.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12787.sql -o Data12787.sql.txt
echo Batch complete Data12787.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12788.sql -o Data12788.sql.txt
echo Batch complete Data12788.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12790.sql -o Data12790.sql.txt
echo Batch complete Data12790.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12791.sql -o Data12791.sql.txt
echo Batch complete Data12791.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12792.sql -o Data12792.sql.txt
echo Batch complete Data12792.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12793.sql -o Data12793.sql.txt
echo Batch complete Data12793.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12795.sql -o Data12795.sql.txt
echo Batch complete Data12795.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12796.sql -o Data12796.sql.txt
echo Batch complete Data12796.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12797.sql -o Data12797.sql.txt
echo Batch complete Data12797.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12799.sql -o Data12799.sql.txt
echo Batch complete Data12799.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12800.sql -o Data12800.sql.txt
echo Batch complete Data12800.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12801.sql -o Data12801.sql.txt
echo Batch complete Data12801.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12802.sql -o Data12802.sql.txt
echo Batch complete Data12802.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12808.sql -o Data12808.sql.txt
echo Batch complete Data12808.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12810.sql -o Data12810.sql.txt
echo Batch complete Data12810.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12811.sql -o Data12811.sql.txt
echo Batch complete Data12811.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12818.sql -o Data12818.sql.txt
echo Batch complete Data12818.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12819.sql -o Data12819.sql.txt
echo Batch complete Data12819.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12822.sql -o Data12822.sql.txt
echo Batch complete Data12822.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12823.sql -o Data12823.sql.txt
echo Batch complete Data12823.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12824.sql -o Data12824.sql.txt
echo Batch complete Data12824.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12826.sql -o Data12826.sql.txt
echo Batch complete Data12826.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12827.sql -o Data12827.sql.txt
echo Batch complete Data12827.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12830.sql -o Data12830.sql.txt
echo Batch complete Data12830.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12831.sql -o Data12831.sql.txt
echo Batch complete Data12831.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12833.sql -o Data12833.sql.txt
echo Batch complete Data12833.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12835.sql -o Data12835.sql.txt
echo Batch complete Data12835.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12836.sql -o Data12836.sql.txt
echo Batch complete Data12836.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12837.sql -o Data12837.sql.txt
echo Batch complete Data12837.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12839.sql -o Data12839.sql.txt
echo Batch complete Data12839.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12840.sql -o Data12840.sql.txt
echo Batch complete Data12840.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12841.sql -o Data12841.sql.txt
echo Batch complete Data12841.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12844.sql -o Data12844.sql.txt
echo Batch complete Data12844.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12846.sql -o Data12846.sql.txt
echo Batch complete Data12846.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12848.sql -o Data12848.sql.txt
echo Batch complete Data12848.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12849.sql -o Data12849.sql.txt
echo Batch complete Data12849.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12850.sql -o Data12850.sql.txt
echo Batch complete Data12850.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12851.sql -o Data12851.sql.txt
echo Batch complete Data12851.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12852.sql -o Data12852.sql.txt
echo Batch complete Data12852.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12853.sql -o Data12853.sql.txt
echo Batch complete Data12853.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12855.sql -o Data12855.sql.txt
echo Batch complete Data12855.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12857.sql -o Data12857.sql.txt
echo Batch complete Data12857.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12861.sql -o Data12861.sql.txt
echo Batch complete Data12861.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12865.sql -o Data12865.sql.txt
echo Batch complete Data12865.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12868.sql -o Data12868.sql.txt
echo Batch complete Data12868.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12876.sql -o Data12876.sql.txt
echo Batch complete Data12876.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12879.sql -o Data12879.sql.txt
echo Batch complete Data12879.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12892.sql -o Data12892.sql.txt
echo Batch complete Data12892.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12896.sql -o Data12896.sql.txt
echo Batch complete Data12896.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12926.sql -o Data12926.sql.txt
echo Batch complete Data12926.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12931.sql -o Data12931.sql.txt
echo Batch complete Data12931.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12933.sql -o Data12933.sql.txt
echo Batch complete Data12933.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12934.sql -o Data12934.sql.txt
echo Batch complete Data12934.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12936.sql -o Data12936.sql.txt
echo Batch complete Data12936.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12939.sql -o Data12939.sql.txt
echo Batch complete Data12939.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12941.sql -o Data12941.sql.txt
echo Batch complete Data12941.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12942.sql -o Data12942.sql.txt
echo Batch complete Data12942.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12944.sql -o Data12944.sql.txt
echo Batch complete Data12944.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12945.sql -o Data12945.sql.txt
echo Batch complete Data12945.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12946.sql -o Data12946.sql.txt
echo Batch complete Data12946.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12949.sql -o Data12949.sql.txt
echo Batch complete Data12949.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12950.sql -o Data12950.sql.txt
echo Batch complete Data12950.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12952.sql -o Data12952.sql.txt
echo Batch complete Data12952.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12953.sql -o Data12953.sql.txt
echo Batch complete Data12953.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12954.sql -o Data12954.sql.txt
echo Batch complete Data12954.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12957.sql -o Data12957.sql.txt
echo Batch complete Data12957.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12959.sql -o Data12959.sql.txt
echo Batch complete Data12959.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12960.sql -o Data12960.sql.txt
echo Batch complete Data12960.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12961.sql -o Data12961.sql.txt
echo Batch complete Data12961.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12962.sql -o Data12962.sql.txt
echo Batch complete Data12962.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12964.sql -o Data12964.sql.txt
echo Batch complete Data12964.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12968.sql -o Data12968.sql.txt
echo Batch complete Data12968.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12969.sql -o Data12969.sql.txt
echo Batch complete Data12969.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12970.sql -o Data12970.sql.txt
echo Batch complete Data12970.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12971.sql -o Data12971.sql.txt
echo Batch complete Data12971.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12972.sql -o Data12972.sql.txt
echo Batch complete Data12972.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12973.sql -o Data12973.sql.txt
echo Batch complete Data12973.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12974.sql -o Data12974.sql.txt
echo Batch complete Data12974.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12975.sql -o Data12975.sql.txt
echo Batch complete Data12975.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12976.sql -o Data12976.sql.txt
echo Batch complete Data12976.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12978.sql -o Data12978.sql.txt
echo Batch complete Data12978.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12979.sql -o Data12979.sql.txt
echo Batch complete Data12979.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12980.sql -o Data12980.sql.txt
echo Batch complete Data12980.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12981.sql -o Data12981.sql.txt
echo Batch complete Data12981.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12983.sql -o Data12983.sql.txt
echo Batch complete Data12983.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12984.sql -o Data12984.sql.txt
echo Batch complete Data12984.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12985.sql -o Data12985.sql.txt
echo Batch complete Data12985.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12986.sql -o Data12986.sql.txt
echo Batch complete Data12986.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12989.sql -o Data12989.sql.txt
echo Batch complete Data12989.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12990.sql -o Data12990.sql.txt
echo Batch complete Data12990.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12991.sql -o Data12991.sql.txt
echo Batch complete Data12991.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12994.sql -o Data12994.sql.txt
echo Batch complete Data12994.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12995.sql -o Data12995.sql.txt
echo Batch complete Data12995.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12996.sql -o Data12996.sql.txt
echo Batch complete Data12996.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12997.sql -o Data12997.sql.txt
echo Batch complete Data12997.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data12998.sql -o Data12998.sql.txt
echo Batch complete Data12998.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13000.sql -o Data13000.sql.txt
echo Batch complete Data13000.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13001.sql -o Data13001.sql.txt
echo Batch complete Data13001.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13003.sql -o Data13003.sql.txt
echo Batch complete Data13003.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13007.sql -o Data13007.sql.txt
echo Batch complete Data13007.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13010.sql -o Data13010.sql.txt
echo Batch complete Data13010.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13012.sql -o Data13012.sql.txt
echo Batch complete Data13012.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13013.sql -o Data13013.sql.txt
echo Batch complete Data13013.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13014.sql -o Data13014.sql.txt
echo Batch complete Data13014.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13015.sql -o Data13015.sql.txt
echo Batch complete Data13015.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13016.sql -o Data13016.sql.txt
echo Batch complete Data13016.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13018.sql -o Data13018.sql.txt
echo Batch complete Data13018.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13019.sql -o Data13019.sql.txt
echo Batch complete Data13019.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13020.sql -o Data13020.sql.txt
echo Batch complete Data13020.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13021.sql -o Data13021.sql.txt
echo Batch complete Data13021.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13026.sql -o Data13026.sql.txt
echo Batch complete Data13026.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13027.sql -o Data13027.sql.txt
echo Batch complete Data13027.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13030.sql -o Data13030.sql.txt
echo Batch complete Data13030.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13031.sql -o Data13031.sql.txt
echo Batch complete Data13031.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13032.sql -o Data13032.sql.txt
echo Batch complete Data13032.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13033.sql -o Data13033.sql.txt
echo Batch complete Data13033.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13034.sql -o Data13034.sql.txt
echo Batch complete Data13034.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13035.sql -o Data13035.sql.txt
echo Batch complete Data13035.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13036.sql -o Data13036.sql.txt
echo Batch complete Data13036.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13037.sql -o Data13037.sql.txt
echo Batch complete Data13037.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13038.sql -o Data13038.sql.txt
echo Batch complete Data13038.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13040.sql -o Data13040.sql.txt
echo Batch complete Data13040.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13041.sql -o Data13041.sql.txt
echo Batch complete Data13041.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13042.sql -o Data13042.sql.txt
echo Batch complete Data13042.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13047.sql -o Data13047.sql.txt
echo Batch complete Data13047.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13051.sql -o Data13051.sql.txt
echo Batch complete Data13051.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13053.sql -o Data13053.sql.txt
echo Batch complete Data13053.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13054.sql -o Data13054.sql.txt
echo Batch complete Data13054.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13055.sql -o Data13055.sql.txt
echo Batch complete Data13055.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13056.sql -o Data13056.sql.txt
echo Batch complete Data13056.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13058.sql -o Data13058.sql.txt
echo Batch complete Data13058.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13059.sql -o Data13059.sql.txt
echo Batch complete Data13059.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13060.sql -o Data13060.sql.txt
echo Batch complete Data13060.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13061.sql -o Data13061.sql.txt
echo Batch complete Data13061.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13066.sql -o Data13066.sql.txt
echo Batch complete Data13066.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13068.sql -o Data13068.sql.txt
echo Batch complete Data13068.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13069.sql -o Data13069.sql.txt
echo Batch complete Data13069.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13073.sql -o Data13073.sql.txt
echo Batch complete Data13073.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13074.sql -o Data13074.sql.txt
echo Batch complete Data13074.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13077.sql -o Data13077.sql.txt
echo Batch complete Data13077.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13078.sql -o Data13078.sql.txt
echo Batch complete Data13078.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13081.sql -o Data13081.sql.txt
echo Batch complete Data13081.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13082.sql -o Data13082.sql.txt
echo Batch complete Data13082.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13083.sql -o Data13083.sql.txt
echo Batch complete Data13083.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13084.sql -o Data13084.sql.txt
echo Batch complete Data13084.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13087.sql -o Data13087.sql.txt
echo Batch complete Data13087.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13088.sql -o Data13088.sql.txt
echo Batch complete Data13088.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13092.sql -o Data13092.sql.txt
echo Batch complete Data13092.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13093.sql -o Data13093.sql.txt
echo Batch complete Data13093.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13095.sql -o Data13095.sql.txt
echo Batch complete Data13095.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13096.sql -o Data13096.sql.txt
echo Batch complete Data13096.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13098.sql -o Data13098.sql.txt
echo Batch complete Data13098.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13104.sql -o Data13104.sql.txt
echo Batch complete Data13104.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13106.sql -o Data13106.sql.txt
echo Batch complete Data13106.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13107.sql -o Data13107.sql.txt
echo Batch complete Data13107.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13108.sql -o Data13108.sql.txt
echo Batch complete Data13108.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13109.sql -o Data13109.sql.txt
echo Batch complete Data13109.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13111.sql -o Data13111.sql.txt
echo Batch complete Data13111.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13112.sql -o Data13112.sql.txt
echo Batch complete Data13112.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13115.sql -o Data13115.sql.txt
echo Batch complete Data13115.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13120.sql -o Data13120.sql.txt
echo Batch complete Data13120.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13121.sql -o Data13121.sql.txt
echo Batch complete Data13121.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13124.sql -o Data13124.sql.txt
echo Batch complete Data13124.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13125.sql -o Data13125.sql.txt
echo Batch complete Data13125.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13127.sql -o Data13127.sql.txt
echo Batch complete Data13127.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13128.sql -o Data13128.sql.txt
echo Batch complete Data13128.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13131.sql -o Data13131.sql.txt
echo Batch complete Data13131.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13134.sql -o Data13134.sql.txt
echo Batch complete Data13134.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13137.sql -o Data13137.sql.txt
echo Batch complete Data13137.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13138.sql -o Data13138.sql.txt
echo Batch complete Data13138.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13146.sql -o Data13146.sql.txt
echo Batch complete Data13146.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13147.sql -o Data13147.sql.txt
echo Batch complete Data13147.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13157.sql -o Data13157.sql.txt
echo Batch complete Data13157.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13158.sql -o Data13158.sql.txt
echo Batch complete Data13158.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13159.sql -o Data13159.sql.txt
echo Batch complete Data13159.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13160.sql -o Data13160.sql.txt
echo Batch complete Data13160.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13161.sql -o Data13161.sql.txt
echo Batch complete Data13161.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13162.sql -o Data13162.sql.txt
echo Batch complete Data13162.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13165.sql -o Data13165.sql.txt
echo Batch complete Data13165.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13167.sql -o Data13167.sql.txt
echo Batch complete Data13167.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13170.sql -o Data13170.sql.txt
echo Batch complete Data13170.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13183.sql -o Data13183.sql.txt
echo Batch complete Data13183.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13184.sql -o Data13184.sql.txt
echo Batch complete Data13184.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13194.sql -o Data13194.sql.txt
echo Batch complete Data13194.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13199.sql -o Data13199.sql.txt
echo Batch complete Data13199.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13200.sql -o Data13200.sql.txt
echo Batch complete Data13200.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13201.sql -o Data13201.sql.txt
echo Batch complete Data13201.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13202.sql -o Data13202.sql.txt
echo Batch complete Data13202.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13204.sql -o Data13204.sql.txt
echo Batch complete Data13204.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13206.sql -o Data13206.sql.txt
echo Batch complete Data13206.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13208.sql -o Data13208.sql.txt
echo Batch complete Data13208.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13209.sql -o Data13209.sql.txt
echo Batch complete Data13209.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13210.sql -o Data13210.sql.txt
echo Batch complete Data13210.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13211.sql -o Data13211.sql.txt
echo Batch complete Data13211.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13212.sql -o Data13212.sql.txt
echo Batch complete Data13212.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13213.sql -o Data13213.sql.txt
echo Batch complete Data13213.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13215.sql -o Data13215.sql.txt
echo Batch complete Data13215.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13216.sql -o Data13216.sql.txt
echo Batch complete Data13216.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13219.sql -o Data13219.sql.txt
echo Batch complete Data13219.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13220.sql -o Data13220.sql.txt
echo Batch complete Data13220.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13221.sql -o Data13221.sql.txt
echo Batch complete Data13221.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13222.sql -o Data13222.sql.txt
echo Batch complete Data13222.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13223.sql -o Data13223.sql.txt
echo Batch complete Data13223.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13225.sql -o Data13225.sql.txt
echo Batch complete Data13225.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13226.sql -o Data13226.sql.txt
echo Batch complete Data13226.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13227.sql -o Data13227.sql.txt
echo Batch complete Data13227.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13228.sql -o Data13228.sql.txt
echo Batch complete Data13228.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13229.sql -o Data13229.sql.txt
echo Batch complete Data13229.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13230.sql -o Data13230.sql.txt
echo Batch complete Data13230.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13231.sql -o Data13231.sql.txt
echo Batch complete Data13231.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13233.sql -o Data13233.sql.txt
echo Batch complete Data13233.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13234.sql -o Data13234.sql.txt
echo Batch complete Data13234.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13236.sql -o Data13236.sql.txt
echo Batch complete Data13236.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13238.sql -o Data13238.sql.txt
echo Batch complete Data13238.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13241.sql -o Data13241.sql.txt
echo Batch complete Data13241.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13243.sql -o Data13243.sql.txt
echo Batch complete Data13243.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13244.sql -o Data13244.sql.txt
echo Batch complete Data13244.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13246.sql -o Data13246.sql.txt
echo Batch complete Data13246.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13258.sql -o Data13258.sql.txt
echo Batch complete Data13258.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13259.sql -o Data13259.sql.txt
echo Batch complete Data13259.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13260.sql -o Data13260.sql.txt
echo Batch complete Data13260.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13262.sql -o Data13262.sql.txt
echo Batch complete Data13262.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13263.sql -o Data13263.sql.txt
echo Batch complete Data13263.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13264.sql -o Data13264.sql.txt
echo Batch complete Data13264.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13266.sql -o Data13266.sql.txt
echo Batch complete Data13266.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13269.sql -o Data13269.sql.txt
echo Batch complete Data13269.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13270.sql -o Data13270.sql.txt
echo Batch complete Data13270.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13273.sql -o Data13273.sql.txt
echo Batch complete Data13273.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13274.sql -o Data13274.sql.txt
echo Batch complete Data13274.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13276.sql -o Data13276.sql.txt
echo Batch complete Data13276.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13278.sql -o Data13278.sql.txt
echo Batch complete Data13278.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13279.sql -o Data13279.sql.txt
echo Batch complete Data13279.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13280.sql -o Data13280.sql.txt
echo Batch complete Data13280.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13281.sql -o Data13281.sql.txt
echo Batch complete Data13281.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13282.sql -o Data13282.sql.txt
echo Batch complete Data13282.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13284.sql -o Data13284.sql.txt
echo Batch complete Data13284.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13285.sql -o Data13285.sql.txt
echo Batch complete Data13285.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13288.sql -o Data13288.sql.txt
echo Batch complete Data13288.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13289.sql -o Data13289.sql.txt
echo Batch complete Data13289.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13292.sql -o Data13292.sql.txt
echo Batch complete Data13292.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13294.sql -o Data13294.sql.txt
echo Batch complete Data13294.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13295.sql -o Data13295.sql.txt
echo Batch complete Data13295.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13297.sql -o Data13297.sql.txt
echo Batch complete Data13297.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13299.sql -o Data13299.sql.txt
echo Batch complete Data13299.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13300.sql -o Data13300.sql.txt
echo Batch complete Data13300.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13302.sql -o Data13302.sql.txt
echo Batch complete Data13302.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13303.sql -o Data13303.sql.txt
echo Batch complete Data13303.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13304.sql -o Data13304.sql.txt
echo Batch complete Data13304.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13305.sql -o Data13305.sql.txt
echo Batch complete Data13305.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13308.sql -o Data13308.sql.txt
echo Batch complete Data13308.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13310.sql -o Data13310.sql.txt
echo Batch complete Data13310.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13313.sql -o Data13313.sql.txt
echo Batch complete Data13313.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13314.sql -o Data13314.sql.txt
echo Batch complete Data13314.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13320.sql -o Data13320.sql.txt
echo Batch complete Data13320.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13321.sql -o Data13321.sql.txt
echo Batch complete Data13321.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13326.sql -o Data13326.sql.txt
echo Batch complete Data13326.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13330.sql -o Data13330.sql.txt
echo Batch complete Data13330.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13331.sql -o Data13331.sql.txt
echo Batch complete Data13331.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13332.sql -o Data13332.sql.txt
echo Batch complete Data13332.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13334.sql -o Data13334.sql.txt
echo Batch complete Data13334.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13335.sql -o Data13335.sql.txt
echo Batch complete Data13335.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13336.sql -o Data13336.sql.txt
echo Batch complete Data13336.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13338.sql -o Data13338.sql.txt
echo Batch complete Data13338.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13339.sql -o Data13339.sql.txt
echo Batch complete Data13339.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13340.sql -o Data13340.sql.txt
echo Batch complete Data13340.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13341.sql -o Data13341.sql.txt
echo Batch complete Data13341.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13342.sql -o Data13342.sql.txt
echo Batch complete Data13342.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13343.sql -o Data13343.sql.txt
echo Batch complete Data13343.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13344.sql -o Data13344.sql.txt
echo Batch complete Data13344.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13345.sql -o Data13345.sql.txt
echo Batch complete Data13345.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13346.sql -o Data13346.sql.txt
echo Batch complete Data13346.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13347.sql -o Data13347.sql.txt
echo Batch complete Data13347.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13350.sql -o Data13350.sql.txt
echo Batch complete Data13350.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13351.sql -o Data13351.sql.txt
echo Batch complete Data13351.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13352.sql -o Data13352.sql.txt
echo Batch complete Data13352.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13354.sql -o Data13354.sql.txt
echo Batch complete Data13354.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13355.sql -o Data13355.sql.txt
echo Batch complete Data13355.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13357.sql -o Data13357.sql.txt
echo Batch complete Data13357.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13361.sql -o Data13361.sql.txt
echo Batch complete Data13361.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13362.sql -o Data13362.sql.txt
echo Batch complete Data13362.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13363.sql -o Data13363.sql.txt
echo Batch complete Data13363.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13364.sql -o Data13364.sql.txt
echo Batch complete Data13364.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13366.sql -o Data13366.sql.txt
echo Batch complete Data13366.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13367.sql -o Data13367.sql.txt
echo Batch complete Data13367.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13370.sql -o Data13370.sql.txt
echo Batch complete Data13370.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13373.sql -o Data13373.sql.txt
echo Batch complete Data13373.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13374.sql -o Data13374.sql.txt
echo Batch complete Data13374.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13375.sql -o Data13375.sql.txt
echo Batch complete Data13375.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13377.sql -o Data13377.sql.txt
echo Batch complete Data13377.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13381.sql -o Data13381.sql.txt
echo Batch complete Data13381.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13384.sql -o Data13384.sql.txt
echo Batch complete Data13384.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13385.sql -o Data13385.sql.txt
echo Batch complete Data13385.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13386.sql -o Data13386.sql.txt
echo Batch complete Data13386.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13387.sql -o Data13387.sql.txt
echo Batch complete Data13387.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13390.sql -o Data13390.sql.txt
echo Batch complete Data13390.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13392.sql -o Data13392.sql.txt
echo Batch complete Data13392.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13393.sql -o Data13393.sql.txt
echo Batch complete Data13393.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13395.sql -o Data13395.sql.txt
echo Batch complete Data13395.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13396.sql -o Data13396.sql.txt
echo Batch complete Data13396.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13397.sql -o Data13397.sql.txt
echo Batch complete Data13397.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13401.sql -o Data13401.sql.txt
echo Batch complete Data13401.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13402.sql -o Data13402.sql.txt
echo Batch complete Data13402.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13404.sql -o Data13404.sql.txt
echo Batch complete Data13404.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13406.sql -o Data13406.sql.txt
echo Batch complete Data13406.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13407.sql -o Data13407.sql.txt
echo Batch complete Data13407.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13408.sql -o Data13408.sql.txt
echo Batch complete Data13408.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13409.sql -o Data13409.sql.txt
echo Batch complete Data13409.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13410.sql -o Data13410.sql.txt
echo Batch complete Data13410.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13411.sql -o Data13411.sql.txt
echo Batch complete Data13411.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13413.sql -o Data13413.sql.txt
echo Batch complete Data13413.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13414.sql -o Data13414.sql.txt
echo Batch complete Data13414.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13416.sql -o Data13416.sql.txt
echo Batch complete Data13416.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13418.sql -o Data13418.sql.txt
echo Batch complete Data13418.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13421.sql -o Data13421.sql.txt
echo Batch complete Data13421.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13425.sql -o Data13425.sql.txt
echo Batch complete Data13425.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13426.sql -o Data13426.sql.txt
echo Batch complete Data13426.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13427.sql -o Data13427.sql.txt
echo Batch complete Data13427.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13428.sql -o Data13428.sql.txt
echo Batch complete Data13428.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13430.sql -o Data13430.sql.txt
echo Batch complete Data13430.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13432.sql -o Data13432.sql.txt
echo Batch complete Data13432.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13435.sql -o Data13435.sql.txt
echo Batch complete Data13435.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13437.sql -o Data13437.sql.txt
echo Batch complete Data13437.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13438.sql -o Data13438.sql.txt
echo Batch complete Data13438.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13441.sql -o Data13441.sql.txt
echo Batch complete Data13441.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13443.sql -o Data13443.sql.txt
echo Batch complete Data13443.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13444.sql -o Data13444.sql.txt
echo Batch complete Data13444.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13445.sql -o Data13445.sql.txt
echo Batch complete Data13445.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13446.sql -o Data13446.sql.txt
echo Batch complete Data13446.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13450.sql -o Data13450.sql.txt
echo Batch complete Data13450.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13451.sql -o Data13451.sql.txt
echo Batch complete Data13451.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13452.sql -o Data13452.sql.txt
echo Batch complete Data13452.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13453.sql -o Data13453.sql.txt
echo Batch complete Data13453.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13459.sql -o Data13459.sql.txt
echo Batch complete Data13459.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13461.sql -o Data13461.sql.txt
echo Batch complete Data13461.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13463.sql -o Data13463.sql.txt
echo Batch complete Data13463.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13464.sql -o Data13464.sql.txt
echo Batch complete Data13464.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13465.sql -o Data13465.sql.txt
echo Batch complete Data13465.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13466.sql -o Data13466.sql.txt
echo Batch complete Data13466.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13468.sql -o Data13468.sql.txt
echo Batch complete Data13468.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13469.sql -o Data13469.sql.txt
echo Batch complete Data13469.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13473.sql -o Data13473.sql.txt
echo Batch complete Data13473.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13474.sql -o Data13474.sql.txt
echo Batch complete Data13474.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13476.sql -o Data13476.sql.txt
echo Batch complete Data13476.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13478.sql -o Data13478.sql.txt
echo Batch complete Data13478.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13480.sql -o Data13480.sql.txt
echo Batch complete Data13480.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13482.sql -o Data13482.sql.txt
echo Batch complete Data13482.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13483.sql -o Data13483.sql.txt
echo Batch complete Data13483.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13489.sql -o Data13489.sql.txt
echo Batch complete Data13489.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13492.sql -o Data13492.sql.txt
echo Batch complete Data13492.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13495.sql -o Data13495.sql.txt
echo Batch complete Data13495.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13497.sql -o Data13497.sql.txt
echo Batch complete Data13497.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13498.sql -o Data13498.sql.txt
echo Batch complete Data13498.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13501.sql -o Data13501.sql.txt
echo Batch complete Data13501.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13503.sql -o Data13503.sql.txt
echo Batch complete Data13503.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13508.sql -o Data13508.sql.txt
echo Batch complete Data13508.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13514.sql -o Data13514.sql.txt
echo Batch complete Data13514.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13515.sql -o Data13515.sql.txt
echo Batch complete Data13515.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13516.sql -o Data13516.sql.txt
echo Batch complete Data13516.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13517.sql -o Data13517.sql.txt
echo Batch complete Data13517.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13519.sql -o Data13519.sql.txt
echo Batch complete Data13519.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13520.sql -o Data13520.sql.txt
echo Batch complete Data13520.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13521.sql -o Data13521.sql.txt
echo Batch complete Data13521.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13522.sql -o Data13522.sql.txt
echo Batch complete Data13522.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13523.sql -o Data13523.sql.txt
echo Batch complete Data13523.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13526.sql -o Data13526.sql.txt
echo Batch complete Data13526.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13531.sql -o Data13531.sql.txt
echo Batch complete Data13531.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13532.sql -o Data13532.sql.txt
echo Batch complete Data13532.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13538.sql -o Data13538.sql.txt
echo Batch complete Data13538.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13539.sql -o Data13539.sql.txt
echo Batch complete Data13539.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13540.sql -o Data13540.sql.txt
echo Batch complete Data13540.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13541.sql -o Data13541.sql.txt
echo Batch complete Data13541.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13542.sql -o Data13542.sql.txt
echo Batch complete Data13542.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13545.sql -o Data13545.sql.txt
echo Batch complete Data13545.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13546.sql -o Data13546.sql.txt
echo Batch complete Data13546.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13547.sql -o Data13547.sql.txt
echo Batch complete Data13547.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13548.sql -o Data13548.sql.txt
echo Batch complete Data13548.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13549.sql -o Data13549.sql.txt
echo Batch complete Data13549.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13550.sql -o Data13550.sql.txt
echo Batch complete Data13550.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13551.sql -o Data13551.sql.txt
echo Batch complete Data13551.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13554.sql -o Data13554.sql.txt
echo Batch complete Data13554.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13556.sql -o Data13556.sql.txt
echo Batch complete Data13556.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13559.sql -o Data13559.sql.txt
echo Batch complete Data13559.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13560.sql -o Data13560.sql.txt
echo Batch complete Data13560.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13563.sql -o Data13563.sql.txt
echo Batch complete Data13563.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13564.sql -o Data13564.sql.txt
echo Batch complete Data13564.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13568.sql -o Data13568.sql.txt
echo Batch complete Data13568.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13569.sql -o Data13569.sql.txt
echo Batch complete Data13569.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13570.sql -o Data13570.sql.txt
echo Batch complete Data13570.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13571.sql -o Data13571.sql.txt
echo Batch complete Data13571.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13572.sql -o Data13572.sql.txt
echo Batch complete Data13572.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13575.sql -o Data13575.sql.txt
echo Batch complete Data13575.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13579.sql -o Data13579.sql.txt
echo Batch complete Data13579.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13580.sql -o Data13580.sql.txt
echo Batch complete Data13580.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13584.sql -o Data13584.sql.txt
echo Batch complete Data13584.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13586.sql -o Data13586.sql.txt
echo Batch complete Data13586.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13587.sql -o Data13587.sql.txt
echo Batch complete Data13587.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13588.sql -o Data13588.sql.txt
echo Batch complete Data13588.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13589.sql -o Data13589.sql.txt
echo Batch complete Data13589.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13590.sql -o Data13590.sql.txt
echo Batch complete Data13590.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13591.sql -o Data13591.sql.txt
echo Batch complete Data13591.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13592.sql -o Data13592.sql.txt
echo Batch complete Data13592.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13593.sql -o Data13593.sql.txt
echo Batch complete Data13593.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13594.sql -o Data13594.sql.txt
echo Batch complete Data13594.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13595.sql -o Data13595.sql.txt
echo Batch complete Data13595.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13596.sql -o Data13596.sql.txt
echo Batch complete Data13596.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13597.sql -o Data13597.sql.txt
echo Batch complete Data13597.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13599.sql -o Data13599.sql.txt
echo Batch complete Data13599.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13600.sql -o Data13600.sql.txt
echo Batch complete Data13600.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13601.sql -o Data13601.sql.txt
echo Batch complete Data13601.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13605.sql -o Data13605.sql.txt
echo Batch complete Data13605.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13606.sql -o Data13606.sql.txt
echo Batch complete Data13606.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13608.sql -o Data13608.sql.txt
echo Batch complete Data13608.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13609.sql -o Data13609.sql.txt
echo Batch complete Data13609.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13611.sql -o Data13611.sql.txt
echo Batch complete Data13611.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13613.sql -o Data13613.sql.txt
echo Batch complete Data13613.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13615.sql -o Data13615.sql.txt
echo Batch complete Data13615.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13618.sql -o Data13618.sql.txt
echo Batch complete Data13618.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13619.sql -o Data13619.sql.txt
echo Batch complete Data13619.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13623.sql -o Data13623.sql.txt
echo Batch complete Data13623.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13625.sql -o Data13625.sql.txt
echo Batch complete Data13625.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13626.sql -o Data13626.sql.txt
echo Batch complete Data13626.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13628.sql -o Data13628.sql.txt
echo Batch complete Data13628.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13629.sql -o Data13629.sql.txt
echo Batch complete Data13629.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13630.sql -o Data13630.sql.txt
echo Batch complete Data13630.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13631.sql -o Data13631.sql.txt
echo Batch complete Data13631.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13632.sql -o Data13632.sql.txt
echo Batch complete Data13632.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13635.sql -o Data13635.sql.txt
echo Batch complete Data13635.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13637.sql -o Data13637.sql.txt
echo Batch complete Data13637.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13640.sql -o Data13640.sql.txt
echo Batch complete Data13640.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13641.sql -o Data13641.sql.txt
echo Batch complete Data13641.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13643.sql -o Data13643.sql.txt
echo Batch complete Data13643.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13644.sql -o Data13644.sql.txt
echo Batch complete Data13644.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13647.sql -o Data13647.sql.txt
echo Batch complete Data13647.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13648.sql -o Data13648.sql.txt
echo Batch complete Data13648.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13649.sql -o Data13649.sql.txt
echo Batch complete Data13649.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13654.sql -o Data13654.sql.txt
echo Batch complete Data13654.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13657.sql -o Data13657.sql.txt
echo Batch complete Data13657.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13659.sql -o Data13659.sql.txt
echo Batch complete Data13659.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13662.sql -o Data13662.sql.txt
echo Batch complete Data13662.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13666.sql -o Data13666.sql.txt
echo Batch complete Data13666.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13667.sql -o Data13667.sql.txt
echo Batch complete Data13667.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13673.sql -o Data13673.sql.txt
echo Batch complete Data13673.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13674.sql -o Data13674.sql.txt
echo Batch complete Data13674.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13675.sql -o Data13675.sql.txt
echo Batch complete Data13675.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13676.sql -o Data13676.sql.txt
echo Batch complete Data13676.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13677.sql -o Data13677.sql.txt
echo Batch complete Data13677.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13678.sql -o Data13678.sql.txt
echo Batch complete Data13678.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13679.sql -o Data13679.sql.txt
echo Batch complete Data13679.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13681.sql -o Data13681.sql.txt
echo Batch complete Data13681.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13684.sql -o Data13684.sql.txt
echo Batch complete Data13684.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13685.sql -o Data13685.sql.txt
echo Batch complete Data13685.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13687.sql -o Data13687.sql.txt
echo Batch complete Data13687.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13689.sql -o Data13689.sql.txt
echo Batch complete Data13689.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13691.sql -o Data13691.sql.txt
echo Batch complete Data13691.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13692.sql -o Data13692.sql.txt
echo Batch complete Data13692.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13694.sql -o Data13694.sql.txt
echo Batch complete Data13694.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13696.sql -o Data13696.sql.txt
echo Batch complete Data13696.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13697.sql -o Data13697.sql.txt
echo Batch complete Data13697.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13700.sql -o Data13700.sql.txt
echo Batch complete Data13700.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13701.sql -o Data13701.sql.txt
echo Batch complete Data13701.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13702.sql -o Data13702.sql.txt
echo Batch complete Data13702.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13703.sql -o Data13703.sql.txt
echo Batch complete Data13703.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13704.sql -o Data13704.sql.txt
echo Batch complete Data13704.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13707.sql -o Data13707.sql.txt
echo Batch complete Data13707.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13708.sql -o Data13708.sql.txt
echo Batch complete Data13708.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13709.sql -o Data13709.sql.txt
echo Batch complete Data13709.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13710.sql -o Data13710.sql.txt
echo Batch complete Data13710.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13712.sql -o Data13712.sql.txt
echo Batch complete Data13712.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13713.sql -o Data13713.sql.txt
echo Batch complete Data13713.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13714.sql -o Data13714.sql.txt
echo Batch complete Data13714.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13715.sql -o Data13715.sql.txt
echo Batch complete Data13715.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13716.sql -o Data13716.sql.txt
echo Batch complete Data13716.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13718.sql -o Data13718.sql.txt
echo Batch complete Data13718.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13719.sql -o Data13719.sql.txt
echo Batch complete Data13719.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13721.sql -o Data13721.sql.txt
echo Batch complete Data13721.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13722.sql -o Data13722.sql.txt
echo Batch complete Data13722.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13723.sql -o Data13723.sql.txt
echo Batch complete Data13723.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13724.sql -o Data13724.sql.txt
echo Batch complete Data13724.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13726.sql -o Data13726.sql.txt
echo Batch complete Data13726.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13727.sql -o Data13727.sql.txt
echo Batch complete Data13727.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13729.sql -o Data13729.sql.txt
echo Batch complete Data13729.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13731.sql -o Data13731.sql.txt
echo Batch complete Data13731.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13732.sql -o Data13732.sql.txt
echo Batch complete Data13732.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13736.sql -o Data13736.sql.txt
echo Batch complete Data13736.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13741.sql -o Data13741.sql.txt
echo Batch complete Data13741.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13742.sql -o Data13742.sql.txt
echo Batch complete Data13742.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13743.sql -o Data13743.sql.txt
echo Batch complete Data13743.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13744.sql -o Data13744.sql.txt
echo Batch complete Data13744.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13745.sql -o Data13745.sql.txt
echo Batch complete Data13745.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13746.sql -o Data13746.sql.txt
echo Batch complete Data13746.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13748.sql -o Data13748.sql.txt
echo Batch complete Data13748.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13749.sql -o Data13749.sql.txt
echo Batch complete Data13749.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13752.sql -o Data13752.sql.txt
echo Batch complete Data13752.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13753.sql -o Data13753.sql.txt
echo Batch complete Data13753.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13755.sql -o Data13755.sql.txt
echo Batch complete Data13755.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13756.sql -o Data13756.sql.txt
echo Batch complete Data13756.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13757.sql -o Data13757.sql.txt
echo Batch complete Data13757.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13759.sql -o Data13759.sql.txt
echo Batch complete Data13759.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13760.sql -o Data13760.sql.txt
echo Batch complete Data13760.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13762.sql -o Data13762.sql.txt
echo Batch complete Data13762.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13764.sql -o Data13764.sql.txt
echo Batch complete Data13764.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13765.sql -o Data13765.sql.txt
echo Batch complete Data13765.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13767.sql -o Data13767.sql.txt
echo Batch complete Data13767.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13769.sql -o Data13769.sql.txt
echo Batch complete Data13769.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13770.sql -o Data13770.sql.txt
echo Batch complete Data13770.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13772.sql -o Data13772.sql.txt
echo Batch complete Data13772.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13774.sql -o Data13774.sql.txt
echo Batch complete Data13774.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13775.sql -o Data13775.sql.txt
echo Batch complete Data13775.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13778.sql -o Data13778.sql.txt
echo Batch complete Data13778.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13780.sql -o Data13780.sql.txt
echo Batch complete Data13780.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13782.sql -o Data13782.sql.txt
echo Batch complete Data13782.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13783.sql -o Data13783.sql.txt
echo Batch complete Data13783.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13784.sql -o Data13784.sql.txt
echo Batch complete Data13784.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13785.sql -o Data13785.sql.txt
echo Batch complete Data13785.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13786.sql -o Data13786.sql.txt
echo Batch complete Data13786.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13787.sql -o Data13787.sql.txt
echo Batch complete Data13787.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13788.sql -o Data13788.sql.txt
echo Batch complete Data13788.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13789.sql -o Data13789.sql.txt
echo Batch complete Data13789.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13790.sql -o Data13790.sql.txt
echo Batch complete Data13790.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13793.sql -o Data13793.sql.txt
echo Batch complete Data13793.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13794.sql -o Data13794.sql.txt
echo Batch complete Data13794.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13796.sql -o Data13796.sql.txt
echo Batch complete Data13796.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13797.sql -o Data13797.sql.txt
echo Batch complete Data13797.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13798.sql -o Data13798.sql.txt
echo Batch complete Data13798.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13799.sql -o Data13799.sql.txt
echo Batch complete Data13799.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13800.sql -o Data13800.sql.txt
echo Batch complete Data13800.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13801.sql -o Data13801.sql.txt
echo Batch complete Data13801.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13802.sql -o Data13802.sql.txt
echo Batch complete Data13802.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13804.sql -o Data13804.sql.txt
echo Batch complete Data13804.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13805.sql -o Data13805.sql.txt
echo Batch complete Data13805.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13807.sql -o Data13807.sql.txt
echo Batch complete Data13807.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13809.sql -o Data13809.sql.txt
echo Batch complete Data13809.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13811.sql -o Data13811.sql.txt
echo Batch complete Data13811.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13812.sql -o Data13812.sql.txt
echo Batch complete Data13812.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13813.sql -o Data13813.sql.txt
echo Batch complete Data13813.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13814.sql -o Data13814.sql.txt
echo Batch complete Data13814.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13815.sql -o Data13815.sql.txt
echo Batch complete Data13815.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13816.sql -o Data13816.sql.txt
echo Batch complete Data13816.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13817.sql -o Data13817.sql.txt
echo Batch complete Data13817.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13821.sql -o Data13821.sql.txt
echo Batch complete Data13821.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13822.sql -o Data13822.sql.txt
echo Batch complete Data13822.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13823.sql -o Data13823.sql.txt
echo Batch complete Data13823.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13824.sql -o Data13824.sql.txt
echo Batch complete Data13824.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13827.sql -o Data13827.sql.txt
echo Batch complete Data13827.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13828.sql -o Data13828.sql.txt
echo Batch complete Data13828.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13829.sql -o Data13829.sql.txt
echo Batch complete Data13829.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13830.sql -o Data13830.sql.txt
echo Batch complete Data13830.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13831.sql -o Data13831.sql.txt
echo Batch complete Data13831.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13832.sql -o Data13832.sql.txt
echo Batch complete Data13832.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13835.sql -o Data13835.sql.txt
echo Batch complete Data13835.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13837.sql -o Data13837.sql.txt
echo Batch complete Data13837.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13838.sql -o Data13838.sql.txt
echo Batch complete Data13838.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13842.sql -o Data13842.sql.txt
echo Batch complete Data13842.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13843.sql -o Data13843.sql.txt
echo Batch complete Data13843.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13844.sql -o Data13844.sql.txt
echo Batch complete Data13844.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13846.sql -o Data13846.sql.txt
echo Batch complete Data13846.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13847.sql -o Data13847.sql.txt
echo Batch complete Data13847.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13850.sql -o Data13850.sql.txt
echo Batch complete Data13850.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13852.sql -o Data13852.sql.txt
echo Batch complete Data13852.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13853.sql -o Data13853.sql.txt
echo Batch complete Data13853.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13854.sql -o Data13854.sql.txt
echo Batch complete Data13854.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13857.sql -o Data13857.sql.txt
echo Batch complete Data13857.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13859.sql -o Data13859.sql.txt
echo Batch complete Data13859.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13860.sql -o Data13860.sql.txt
echo Batch complete Data13860.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13865.sql -o Data13865.sql.txt
echo Batch complete Data13865.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13866.sql -o Data13866.sql.txt
echo Batch complete Data13866.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13868.sql -o Data13868.sql.txt
echo Batch complete Data13868.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13871.sql -o Data13871.sql.txt
echo Batch complete Data13871.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13873.sql -o Data13873.sql.txt
echo Batch complete Data13873.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13874.sql -o Data13874.sql.txt
echo Batch complete Data13874.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13875.sql -o Data13875.sql.txt
echo Batch complete Data13875.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13877.sql -o Data13877.sql.txt
echo Batch complete Data13877.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13878.sql -o Data13878.sql.txt
echo Batch complete Data13878.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13879.sql -o Data13879.sql.txt
echo Batch complete Data13879.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13880.sql -o Data13880.sql.txt
echo Batch complete Data13880.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13881.sql -o Data13881.sql.txt
echo Batch complete Data13881.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13882.sql -o Data13882.sql.txt
echo Batch complete Data13882.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13885.sql -o Data13885.sql.txt
echo Batch complete Data13885.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13886.sql -o Data13886.sql.txt
echo Batch complete Data13886.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13887.sql -o Data13887.sql.txt
echo Batch complete Data13887.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13888.sql -o Data13888.sql.txt
echo Batch complete Data13888.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13889.sql -o Data13889.sql.txt
echo Batch complete Data13889.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13890.sql -o Data13890.sql.txt
echo Batch complete Data13890.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13891.sql -o Data13891.sql.txt
echo Batch complete Data13891.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13892.sql -o Data13892.sql.txt
echo Batch complete Data13892.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13895.sql -o Data13895.sql.txt
echo Batch complete Data13895.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13896.sql -o Data13896.sql.txt
echo Batch complete Data13896.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13897.sql -o Data13897.sql.txt
echo Batch complete Data13897.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13899.sql -o Data13899.sql.txt
echo Batch complete Data13899.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13901.sql -o Data13901.sql.txt
echo Batch complete Data13901.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13902.sql -o Data13902.sql.txt
echo Batch complete Data13902.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13903.sql -o Data13903.sql.txt
echo Batch complete Data13903.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13904.sql -o Data13904.sql.txt
echo Batch complete Data13904.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13905.sql -o Data13905.sql.txt
echo Batch complete Data13905.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13906.sql -o Data13906.sql.txt
echo Batch complete Data13906.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13907.sql -o Data13907.sql.txt
echo Batch complete Data13907.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13909.sql -o Data13909.sql.txt
echo Batch complete Data13909.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13912.sql -o Data13912.sql.txt
echo Batch complete Data13912.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13913.sql -o Data13913.sql.txt
echo Batch complete Data13913.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13914.sql -o Data13914.sql.txt
echo Batch complete Data13914.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13915.sql -o Data13915.sql.txt
echo Batch complete Data13915.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13916.sql -o Data13916.sql.txt
echo Batch complete Data13916.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13918.sql -o Data13918.sql.txt
echo Batch complete Data13918.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13921.sql -o Data13921.sql.txt
echo Batch complete Data13921.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13922.sql -o Data13922.sql.txt
echo Batch complete Data13922.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13924.sql -o Data13924.sql.txt
echo Batch complete Data13924.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13928.sql -o Data13928.sql.txt
echo Batch complete Data13928.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13930.sql -o Data13930.sql.txt
echo Batch complete Data13930.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13931.sql -o Data13931.sql.txt
echo Batch complete Data13931.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13932.sql -o Data13932.sql.txt
echo Batch complete Data13932.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13934.sql -o Data13934.sql.txt
echo Batch complete Data13934.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13936.sql -o Data13936.sql.txt
echo Batch complete Data13936.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13938.sql -o Data13938.sql.txt
echo Batch complete Data13938.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13940.sql -o Data13940.sql.txt
echo Batch complete Data13940.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13942.sql -o Data13942.sql.txt
echo Batch complete Data13942.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13943.sql -o Data13943.sql.txt
echo Batch complete Data13943.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13944.sql -o Data13944.sql.txt
echo Batch complete Data13944.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13950.sql -o Data13950.sql.txt
echo Batch complete Data13950.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13951.sql -o Data13951.sql.txt
echo Batch complete Data13951.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13954.sql -o Data13954.sql.txt
echo Batch complete Data13954.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13955.sql -o Data13955.sql.txt
echo Batch complete Data13955.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13957.sql -o Data13957.sql.txt
echo Batch complete Data13957.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13958.sql -o Data13958.sql.txt
echo Batch complete Data13958.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13959.sql -o Data13959.sql.txt
echo Batch complete Data13959.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13960.sql -o Data13960.sql.txt
echo Batch complete Data13960.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13962.sql -o Data13962.sql.txt
echo Batch complete Data13962.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13963.sql -o Data13963.sql.txt
echo Batch complete Data13963.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13965.sql -o Data13965.sql.txt
echo Batch complete Data13965.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13967.sql -o Data13967.sql.txt
echo Batch complete Data13967.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13968.sql -o Data13968.sql.txt
echo Batch complete Data13968.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13969.sql -o Data13969.sql.txt
echo Batch complete Data13969.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13970.sql -o Data13970.sql.txt
echo Batch complete Data13970.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13971.sql -o Data13971.sql.txt
echo Batch complete Data13971.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13973.sql -o Data13973.sql.txt
echo Batch complete Data13973.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13975.sql -o Data13975.sql.txt
echo Batch complete Data13975.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13976.sql -o Data13976.sql.txt
echo Batch complete Data13976.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13977.sql -o Data13977.sql.txt
echo Batch complete Data13977.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13979.sql -o Data13979.sql.txt
echo Batch complete Data13979.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13983.sql -o Data13983.sql.txt
echo Batch complete Data13983.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13986.sql -o Data13986.sql.txt
echo Batch complete Data13986.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13989.sql -o Data13989.sql.txt
echo Batch complete Data13989.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13990.sql -o Data13990.sql.txt
echo Batch complete Data13990.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13992.sql -o Data13992.sql.txt
echo Batch complete Data13992.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13993.sql -o Data13993.sql.txt
echo Batch complete Data13993.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13994.sql -o Data13994.sql.txt
echo Batch complete Data13994.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13997.sql -o Data13997.sql.txt
echo Batch complete Data13997.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13998.sql -o Data13998.sql.txt
echo Batch complete Data13998.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data13999.sql -o Data13999.sql.txt
echo Batch complete Data13999.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14004.sql -o Data14004.sql.txt
echo Batch complete Data14004.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14005.sql -o Data14005.sql.txt
echo Batch complete Data14005.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14006.sql -o Data14006.sql.txt
echo Batch complete Data14006.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14008.sql -o Data14008.sql.txt
echo Batch complete Data14008.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14009.sql -o Data14009.sql.txt
echo Batch complete Data14009.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14010.sql -o Data14010.sql.txt
echo Batch complete Data14010.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14012.sql -o Data14012.sql.txt
echo Batch complete Data14012.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14016.sql -o Data14016.sql.txt
echo Batch complete Data14016.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14017.sql -o Data14017.sql.txt
echo Batch complete Data14017.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14018.sql -o Data14018.sql.txt
echo Batch complete Data14018.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14021.sql -o Data14021.sql.txt
echo Batch complete Data14021.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14023.sql -o Data14023.sql.txt
echo Batch complete Data14023.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14024.sql -o Data14024.sql.txt
echo Batch complete Data14024.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14025.sql -o Data14025.sql.txt
echo Batch complete Data14025.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14027.sql -o Data14027.sql.txt
echo Batch complete Data14027.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14028.sql -o Data14028.sql.txt
echo Batch complete Data14028.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14029.sql -o Data14029.sql.txt
echo Batch complete Data14029.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14030.sql -o Data14030.sql.txt
echo Batch complete Data14030.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14031.sql -o Data14031.sql.txt
echo Batch complete Data14031.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14032.sql -o Data14032.sql.txt
echo Batch complete Data14032.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14033.sql -o Data14033.sql.txt
echo Batch complete Data14033.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14036.sql -o Data14036.sql.txt
echo Batch complete Data14036.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14037.sql -o Data14037.sql.txt
echo Batch complete Data14037.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14039.sql -o Data14039.sql.txt
echo Batch complete Data14039.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14041.sql -o Data14041.sql.txt
echo Batch complete Data14041.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14048.sql -o Data14048.sql.txt
echo Batch complete Data14048.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14049.sql -o Data14049.sql.txt
echo Batch complete Data14049.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14051.sql -o Data14051.sql.txt
echo Batch complete Data14051.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14052.sql -o Data14052.sql.txt
echo Batch complete Data14052.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14053.sql -o Data14053.sql.txt
echo Batch complete Data14053.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14055.sql -o Data14055.sql.txt
echo Batch complete Data14055.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14060.sql -o Data14060.sql.txt
echo Batch complete Data14060.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14061.sql -o Data14061.sql.txt
echo Batch complete Data14061.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14069.sql -o Data14069.sql.txt
echo Batch complete Data14069.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14070.sql -o Data14070.sql.txt
echo Batch complete Data14070.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14071.sql -o Data14071.sql.txt
echo Batch complete Data14071.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14073.sql -o Data14073.sql.txt
echo Batch complete Data14073.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14076.sql -o Data14076.sql.txt
echo Batch complete Data14076.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14077.sql -o Data14077.sql.txt
echo Batch complete Data14077.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14079.sql -o Data14079.sql.txt
echo Batch complete Data14079.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14081.sql -o Data14081.sql.txt
echo Batch complete Data14081.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14082.sql -o Data14082.sql.txt
echo Batch complete Data14082.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14083.sql -o Data14083.sql.txt
echo Batch complete Data14083.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14093.sql -o Data14093.sql.txt
echo Batch complete Data14093.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14094.sql -o Data14094.sql.txt
echo Batch complete Data14094.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14100.sql -o Data14100.sql.txt
echo Batch complete Data14100.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14101.sql -o Data14101.sql.txt
echo Batch complete Data14101.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14103.sql -o Data14103.sql.txt
echo Batch complete Data14103.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14105.sql -o Data14105.sql.txt
echo Batch complete Data14105.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14106.sql -o Data14106.sql.txt
echo Batch complete Data14106.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14107.sql -o Data14107.sql.txt
echo Batch complete Data14107.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14110.sql -o Data14110.sql.txt
echo Batch complete Data14110.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14113.sql -o Data14113.sql.txt
echo Batch complete Data14113.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14114.sql -o Data14114.sql.txt
echo Batch complete Data14114.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14117.sql -o Data14117.sql.txt
echo Batch complete Data14117.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14120.sql -o Data14120.sql.txt
echo Batch complete Data14120.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14121.sql -o Data14121.sql.txt
echo Batch complete Data14121.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14122.sql -o Data14122.sql.txt
echo Batch complete Data14122.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14125.sql -o Data14125.sql.txt
echo Batch complete Data14125.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14126.sql -o Data14126.sql.txt
echo Batch complete Data14126.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14128.sql -o Data14128.sql.txt
echo Batch complete Data14128.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14130.sql -o Data14130.sql.txt
echo Batch complete Data14130.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14131.sql -o Data14131.sql.txt
echo Batch complete Data14131.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14132.sql -o Data14132.sql.txt
echo Batch complete Data14132.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14135.sql -o Data14135.sql.txt
echo Batch complete Data14135.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14136.sql -o Data14136.sql.txt
echo Batch complete Data14136.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14138.sql -o Data14138.sql.txt
echo Batch complete Data14138.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14139.sql -o Data14139.sql.txt
echo Batch complete Data14139.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14141.sql -o Data14141.sql.txt
echo Batch complete Data14141.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14142.sql -o Data14142.sql.txt
echo Batch complete Data14142.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14143.sql -o Data14143.sql.txt
echo Batch complete Data14143.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14145.sql -o Data14145.sql.txt
echo Batch complete Data14145.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14146.sql -o Data14146.sql.txt
echo Batch complete Data14146.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14148.sql -o Data14148.sql.txt
echo Batch complete Data14148.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14150.sql -o Data14150.sql.txt
echo Batch complete Data14150.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14153.sql -o Data14153.sql.txt
echo Batch complete Data14153.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14154.sql -o Data14154.sql.txt
echo Batch complete Data14154.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14156.sql -o Data14156.sql.txt
echo Batch complete Data14156.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14158.sql -o Data14158.sql.txt
echo Batch complete Data14158.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14159.sql -o Data14159.sql.txt
echo Batch complete Data14159.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14162.sql -o Data14162.sql.txt
echo Batch complete Data14162.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14166.sql -o Data14166.sql.txt
echo Batch complete Data14166.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14167.sql -o Data14167.sql.txt
echo Batch complete Data14167.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14169.sql -o Data14169.sql.txt
echo Batch complete Data14169.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14172.sql -o Data14172.sql.txt
echo Batch complete Data14172.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14175.sql -o Data14175.sql.txt
echo Batch complete Data14175.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14177.sql -o Data14177.sql.txt
echo Batch complete Data14177.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14181.sql -o Data14181.sql.txt
echo Batch complete Data14181.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14182.sql -o Data14182.sql.txt
echo Batch complete Data14182.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14183.sql -o Data14183.sql.txt
echo Batch complete Data14183.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14185.sql -o Data14185.sql.txt
echo Batch complete Data14185.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14186.sql -o Data14186.sql.txt
echo Batch complete Data14186.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14187.sql -o Data14187.sql.txt
echo Batch complete Data14187.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14188.sql -o Data14188.sql.txt
echo Batch complete Data14188.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14193.sql -o Data14193.sql.txt
echo Batch complete Data14193.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14194.sql -o Data14194.sql.txt
echo Batch complete Data14194.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14197.sql -o Data14197.sql.txt
echo Batch complete Data14197.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14198.sql -o Data14198.sql.txt
echo Batch complete Data14198.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14200.sql -o Data14200.sql.txt
echo Batch complete Data14200.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14201.sql -o Data14201.sql.txt
echo Batch complete Data14201.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14204.sql -o Data14204.sql.txt
echo Batch complete Data14204.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14205.sql -o Data14205.sql.txt
echo Batch complete Data14205.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14207.sql -o Data14207.sql.txt
echo Batch complete Data14207.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14209.sql -o Data14209.sql.txt
echo Batch complete Data14209.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14213.sql -o Data14213.sql.txt
echo Batch complete Data14213.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14215.sql -o Data14215.sql.txt
echo Batch complete Data14215.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14216.sql -o Data14216.sql.txt
echo Batch complete Data14216.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14217.sql -o Data14217.sql.txt
echo Batch complete Data14217.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14222.sql -o Data14222.sql.txt
echo Batch complete Data14222.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14223.sql -o Data14223.sql.txt
echo Batch complete Data14223.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14226.sql -o Data14226.sql.txt
echo Batch complete Data14226.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14227.sql -o Data14227.sql.txt
echo Batch complete Data14227.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14228.sql -o Data14228.sql.txt
echo Batch complete Data14228.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14230.sql -o Data14230.sql.txt
echo Batch complete Data14230.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14234.sql -o Data14234.sql.txt
echo Batch complete Data14234.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14242.sql -o Data14242.sql.txt
echo Batch complete Data14242.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14243.sql -o Data14243.sql.txt
echo Batch complete Data14243.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14246.sql -o Data14246.sql.txt
echo Batch complete Data14246.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14247.sql -o Data14247.sql.txt
echo Batch complete Data14247.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14252.sql -o Data14252.sql.txt
echo Batch complete Data14252.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14253.sql -o Data14253.sql.txt
echo Batch complete Data14253.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14256.sql -o Data14256.sql.txt
echo Batch complete Data14256.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14266.sql -o Data14266.sql.txt
echo Batch complete Data14266.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14267.sql -o Data14267.sql.txt
echo Batch complete Data14267.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14268.sql -o Data14268.sql.txt
echo Batch complete Data14268.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14271.sql -o Data14271.sql.txt
echo Batch complete Data14271.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14273.sql -o Data14273.sql.txt
echo Batch complete Data14273.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14274.sql -o Data14274.sql.txt
echo Batch complete Data14274.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14275.sql -o Data14275.sql.txt
echo Batch complete Data14275.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14280.sql -o Data14280.sql.txt
echo Batch complete Data14280.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14282.sql -o Data14282.sql.txt
echo Batch complete Data14282.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14287.sql -o Data14287.sql.txt
echo Batch complete Data14287.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14289.sql -o Data14289.sql.txt
echo Batch complete Data14289.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14290.sql -o Data14290.sql.txt
echo Batch complete Data14290.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14293.sql -o Data14293.sql.txt
echo Batch complete Data14293.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14294.sql -o Data14294.sql.txt
echo Batch complete Data14294.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14299.sql -o Data14299.sql.txt
echo Batch complete Data14299.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14301.sql -o Data14301.sql.txt
echo Batch complete Data14301.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14303.sql -o Data14303.sql.txt
echo Batch complete Data14303.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14304.sql -o Data14304.sql.txt
echo Batch complete Data14304.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14305.sql -o Data14305.sql.txt
echo Batch complete Data14305.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14308.sql -o Data14308.sql.txt
echo Batch complete Data14308.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14309.sql -o Data14309.sql.txt
echo Batch complete Data14309.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14310.sql -o Data14310.sql.txt
echo Batch complete Data14310.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14316.sql -o Data14316.sql.txt
echo Batch complete Data14316.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14317.sql -o Data14317.sql.txt
echo Batch complete Data14317.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14321.sql -o Data14321.sql.txt
echo Batch complete Data14321.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14329.sql -o Data14329.sql.txt
echo Batch complete Data14329.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14330.sql -o Data14330.sql.txt
echo Batch complete Data14330.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14335.sql -o Data14335.sql.txt
echo Batch complete Data14335.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14336.sql -o Data14336.sql.txt
echo Batch complete Data14336.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14337.sql -o Data14337.sql.txt
echo Batch complete Data14337.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14341.sql -o Data14341.sql.txt
echo Batch complete Data14341.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14342.sql -o Data14342.sql.txt
echo Batch complete Data14342.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14345.sql -o Data14345.sql.txt
echo Batch complete Data14345.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14347.sql -o Data14347.sql.txt
echo Batch complete Data14347.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14348.sql -o Data14348.sql.txt
echo Batch complete Data14348.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14350.sql -o Data14350.sql.txt
echo Batch complete Data14350.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14351.sql -o Data14351.sql.txt
echo Batch complete Data14351.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14352.sql -o Data14352.sql.txt
echo Batch complete Data14352.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14353.sql -o Data14353.sql.txt
echo Batch complete Data14353.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14354.sql -o Data14354.sql.txt
echo Batch complete Data14354.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14355.sql -o Data14355.sql.txt
echo Batch complete Data14355.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14356.sql -o Data14356.sql.txt
echo Batch complete Data14356.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14357.sql -o Data14357.sql.txt
echo Batch complete Data14357.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14361.sql -o Data14361.sql.txt
echo Batch complete Data14361.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14363.sql -o Data14363.sql.txt
echo Batch complete Data14363.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14365.sql -o Data14365.sql.txt
echo Batch complete Data14365.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14371.sql -o Data14371.sql.txt
echo Batch complete Data14371.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14372.sql -o Data14372.sql.txt
echo Batch complete Data14372.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14375.sql -o Data14375.sql.txt
echo Batch complete Data14375.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14379.sql -o Data14379.sql.txt
echo Batch complete Data14379.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14382.sql -o Data14382.sql.txt
echo Batch complete Data14382.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14384.sql -o Data14384.sql.txt
echo Batch complete Data14384.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14387.sql -o Data14387.sql.txt
echo Batch complete Data14387.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14389.sql -o Data14389.sql.txt
echo Batch complete Data14389.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14391.sql -o Data14391.sql.txt
echo Batch complete Data14391.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14392.sql -o Data14392.sql.txt
echo Batch complete Data14392.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14393.sql -o Data14393.sql.txt
echo Batch complete Data14393.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14394.sql -o Data14394.sql.txt
echo Batch complete Data14394.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14396.sql -o Data14396.sql.txt
echo Batch complete Data14396.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14397.sql -o Data14397.sql.txt
echo Batch complete Data14397.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14399.sql -o Data14399.sql.txt
echo Batch complete Data14399.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14403.sql -o Data14403.sql.txt
echo Batch complete Data14403.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14404.sql -o Data14404.sql.txt
echo Batch complete Data14404.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14405.sql -o Data14405.sql.txt
echo Batch complete Data14405.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14406.sql -o Data14406.sql.txt
echo Batch complete Data14406.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14408.sql -o Data14408.sql.txt
echo Batch complete Data14408.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14411.sql -o Data14411.sql.txt
echo Batch complete Data14411.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14412.sql -o Data14412.sql.txt
echo Batch complete Data14412.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14414.sql -o Data14414.sql.txt
echo Batch complete Data14414.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14422.sql -o Data14422.sql.txt
echo Batch complete Data14422.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14423.sql -o Data14423.sql.txt
echo Batch complete Data14423.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14425.sql -o Data14425.sql.txt
echo Batch complete Data14425.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14426.sql -o Data14426.sql.txt
echo Batch complete Data14426.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14428.sql -o Data14428.sql.txt
echo Batch complete Data14428.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14429.sql -o Data14429.sql.txt
echo Batch complete Data14429.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14431.sql -o Data14431.sql.txt
echo Batch complete Data14431.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14432.sql -o Data14432.sql.txt
echo Batch complete Data14432.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14433.sql -o Data14433.sql.txt
echo Batch complete Data14433.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14434.sql -o Data14434.sql.txt
echo Batch complete Data14434.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14435.sql -o Data14435.sql.txt
echo Batch complete Data14435.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14437.sql -o Data14437.sql.txt
echo Batch complete Data14437.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14439.sql -o Data14439.sql.txt
echo Batch complete Data14439.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14441.sql -o Data14441.sql.txt
echo Batch complete Data14441.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14442.sql -o Data14442.sql.txt
echo Batch complete Data14442.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14443.sql -o Data14443.sql.txt
echo Batch complete Data14443.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14444.sql -o Data14444.sql.txt
echo Batch complete Data14444.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14445.sql -o Data14445.sql.txt
echo Batch complete Data14445.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14451.sql -o Data14451.sql.txt
echo Batch complete Data14451.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14454.sql -o Data14454.sql.txt
echo Batch complete Data14454.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14455.sql -o Data14455.sql.txt
echo Batch complete Data14455.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14457.sql -o Data14457.sql.txt
echo Batch complete Data14457.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14459.sql -o Data14459.sql.txt
echo Batch complete Data14459.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14464.sql -o Data14464.sql.txt
echo Batch complete Data14464.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14466.sql -o Data14466.sql.txt
echo Batch complete Data14466.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14468.sql -o Data14468.sql.txt
echo Batch complete Data14468.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14473.sql -o Data14473.sql.txt
echo Batch complete Data14473.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14474.sql -o Data14474.sql.txt
echo Batch complete Data14474.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14476.sql -o Data14476.sql.txt
echo Batch complete Data14476.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14477.sql -o Data14477.sql.txt
echo Batch complete Data14477.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14478.sql -o Data14478.sql.txt
echo Batch complete Data14478.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14479.sql -o Data14479.sql.txt
echo Batch complete Data14479.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14480.sql -o Data14480.sql.txt
echo Batch complete Data14480.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14482.sql -o Data14482.sql.txt
echo Batch complete Data14482.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14483.sql -o Data14483.sql.txt
echo Batch complete Data14483.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14484.sql -o Data14484.sql.txt
echo Batch complete Data14484.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14485.sql -o Data14485.sql.txt
echo Batch complete Data14485.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14486.sql -o Data14486.sql.txt
echo Batch complete Data14486.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14488.sql -o Data14488.sql.txt
echo Batch complete Data14488.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14490.sql -o Data14490.sql.txt
echo Batch complete Data14490.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14492.sql -o Data14492.sql.txt
echo Batch complete Data14492.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14494.sql -o Data14494.sql.txt
echo Batch complete Data14494.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14495.sql -o Data14495.sql.txt
echo Batch complete Data14495.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14498.sql -o Data14498.sql.txt
echo Batch complete Data14498.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14503.sql -o Data14503.sql.txt
echo Batch complete Data14503.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14509.sql -o Data14509.sql.txt
echo Batch complete Data14509.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14511.sql -o Data14511.sql.txt
echo Batch complete Data14511.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14513.sql -o Data14513.sql.txt
echo Batch complete Data14513.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14515.sql -o Data14515.sql.txt
echo Batch complete Data14515.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14516.sql -o Data14516.sql.txt
echo Batch complete Data14516.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14517.sql -o Data14517.sql.txt
echo Batch complete Data14517.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14518.sql -o Data14518.sql.txt
echo Batch complete Data14518.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14520.sql -o Data14520.sql.txt
echo Batch complete Data14520.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14521.sql -o Data14521.sql.txt
echo Batch complete Data14521.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14522.sql -o Data14522.sql.txt
echo Batch complete Data14522.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14523.sql -o Data14523.sql.txt
echo Batch complete Data14523.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14525.sql -o Data14525.sql.txt
echo Batch complete Data14525.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14526.sql -o Data14526.sql.txt
echo Batch complete Data14526.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14528.sql -o Data14528.sql.txt
echo Batch complete Data14528.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14529.sql -o Data14529.sql.txt
echo Batch complete Data14529.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14531.sql -o Data14531.sql.txt
echo Batch complete Data14531.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14535.sql -o Data14535.sql.txt
echo Batch complete Data14535.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14536.sql -o Data14536.sql.txt
echo Batch complete Data14536.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14537.sql -o Data14537.sql.txt
echo Batch complete Data14537.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14538.sql -o Data14538.sql.txt
echo Batch complete Data14538.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14542.sql -o Data14542.sql.txt
echo Batch complete Data14542.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14548.sql -o Data14548.sql.txt
echo Batch complete Data14548.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14552.sql -o Data14552.sql.txt
echo Batch complete Data14552.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14554.sql -o Data14554.sql.txt
echo Batch complete Data14554.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14563.sql -o Data14563.sql.txt
echo Batch complete Data14563.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14564.sql -o Data14564.sql.txt
echo Batch complete Data14564.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14566.sql -o Data14566.sql.txt
echo Batch complete Data14566.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14567.sql -o Data14567.sql.txt
echo Batch complete Data14567.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14569.sql -o Data14569.sql.txt
echo Batch complete Data14569.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14570.sql -o Data14570.sql.txt
echo Batch complete Data14570.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14572.sql -o Data14572.sql.txt
echo Batch complete Data14572.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14575.sql -o Data14575.sql.txt
echo Batch complete Data14575.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14576.sql -o Data14576.sql.txt
echo Batch complete Data14576.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14577.sql -o Data14577.sql.txt
echo Batch complete Data14577.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14579.sql -o Data14579.sql.txt
echo Batch complete Data14579.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14580.sql -o Data14580.sql.txt
echo Batch complete Data14580.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14581.sql -o Data14581.sql.txt
echo Batch complete Data14581.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14582.sql -o Data14582.sql.txt
echo Batch complete Data14582.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14585.sql -o Data14585.sql.txt
echo Batch complete Data14585.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14587.sql -o Data14587.sql.txt
echo Batch complete Data14587.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14588.sql -o Data14588.sql.txt
echo Batch complete Data14588.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14592.sql -o Data14592.sql.txt
echo Batch complete Data14592.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14594.sql -o Data14594.sql.txt
echo Batch complete Data14594.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14595.sql -o Data14595.sql.txt
echo Batch complete Data14595.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14598.sql -o Data14598.sql.txt
echo Batch complete Data14598.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14599.sql -o Data14599.sql.txt
echo Batch complete Data14599.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14600.sql -o Data14600.sql.txt
echo Batch complete Data14600.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14601.sql -o Data14601.sql.txt
echo Batch complete Data14601.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14608.sql -o Data14608.sql.txt
echo Batch complete Data14608.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14614.sql -o Data14614.sql.txt
echo Batch complete Data14614.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14615.sql -o Data14615.sql.txt
echo Batch complete Data14615.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14618.sql -o Data14618.sql.txt
echo Batch complete Data14618.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14619.sql -o Data14619.sql.txt
echo Batch complete Data14619.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14623.sql -o Data14623.sql.txt
echo Batch complete Data14623.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14624.sql -o Data14624.sql.txt
echo Batch complete Data14624.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14625.sql -o Data14625.sql.txt
echo Batch complete Data14625.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14626.sql -o Data14626.sql.txt
echo Batch complete Data14626.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14627.sql -o Data14627.sql.txt
echo Batch complete Data14627.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14629.sql -o Data14629.sql.txt
echo Batch complete Data14629.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14631.sql -o Data14631.sql.txt
echo Batch complete Data14631.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14632.sql -o Data14632.sql.txt
echo Batch complete Data14632.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14633.sql -o Data14633.sql.txt
echo Batch complete Data14633.sql 

sqlcmd -S %1 -d %2 -U %3 -P %4 -i Data14634.sql -o Data14634.sql.txt
echo Batch complete Data14634.sql 

Goto Exit
:Usage
echo Usage
echo Install.bat Server_Name DataBase_Name User_Name Password
:Exit