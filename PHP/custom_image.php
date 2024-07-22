<?php
parse_str($_SERVER['QUERY_STRING'], $params);
?>
<html>

<head>
	<title>Custom Image Upload</title>
	<script src="/JQuery/jquery.js"></script>
	<script type="text/javascript">
		function getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}
		$(function() {
			var timer = setInterval(function() {
				$("#count_num").html(function(i, html) {
					if (parseInt(html) > 1) {
						return parseInt(html) - 1;
					} else {
						clearTimeout(timer);
						return;
					}
				});
			}, 1000);
		});

		function copyic() {
			let textarea = document.getElementById("imageCode");
			textarea.select();
			document.execCommand("copy");
		}
		$(document).ready(function() {
			var u = window.location.hostname;
			var v = u.split(".")[0];
			if (document.cookie.indexOf('bl_folder') != -1) { // Folder Templates
				v = v + "/" + getCookie('bl_folder');
			}
			//$(".hname").val(v);
			$('.file-custom').click(function() {
				$('.inputFile').click();
			});
			$('.inputFile').change(function() {
				$('.file-custom').attr('data-after', $('.inputFile').val().replace(/^.*(\\|\/|\:)/, ''));
				var mb = this.files[0].size / 1024 / 1024;
				if (mb >= 5) { // 5MB size Alert
					var n = mb.toFixed(2);
					alert("Your Image file size is " + n + " MB exceeding the maximum file size of 5 MB.");
					document.forms["uploadForm"].reset(); 
					location.reload();
				}
				var ext = $('.inputFile').val().split('.')[1];
				var dt = new Date();
				var y = dt.getFullYear();
				var m = dt.getMonth() + 1;
				var d = dt.getDate();
				var min = dt.getMinutes();
				var s = dt.getSeconds();
				var h = dt.getHours() % 12 || 12;
				var hf = dt.getHours();
				var hx = hf,
					min;
				var ap = (hx > 12) ? ('PM') : ('AM');
				var n = Math.round(Math.random() * 10000000);
				var path = d + "-" + m + "-" + y + "-" + h + "-" + min + "-" + s + "-" + ap + "-" + n;
				$('.fname').val(path.toLowerCase() + "." + ext.toLowerCase());
				$('.btnSubmit').click(function() {
					if ($('.inputFile').val() != '') {
						$('.btnSubmit').val('Waiting...');
						$('.btnSubmit').addClass('btndisable');
					}
				});
			});
			$('.fcopybn').click(function() {
				$('.fcopybn').text('Copied!');
				$('.fcopybn').addClass('fcopied');
				setTimeout(function() {
					$('.fcopybn').removeClass('fcopied');
					$('.fcopybn').text('Copy Code');
				}, 10000);
			});
		});
		$(document).ready(function(e) {
			// Ajax
			$("#uploadForm").on('submit', (function(e) {
				e.preventDefault();
				$.ajax({
					url: "iupload.php?site=<?= str_replace(['http://', 'https://'], '', $params['mydomain']) ?>",
					type: "POST",
					data: new FormData(this),
					contentType: false,
					cache: false,
					processData: false,
					success: function(data) {
						$("#targetLayer").html(data);
					},
					error: function() {}
				});

				var sa = setInterval(function() {
					var mdomain = "<?php echo $params['mydomain'] ?>/";
					var hnf = window.location.hostname;
					var hn = hnf.split(".")[0];
					if (document.cookie.indexOf('bl_folder') != -1) { // Folder Templates
						hn = hn + "/" + getCookie('bl_folder');
					}
					if ($('#targetLayer').text().indexOf('Yes') >= 0) {
						if ($('.fcaption').val() == 0) {
							if ($('input[name="falign"]:checked').val() == 'None') {
								$('.imageCode').text('<img class="pagephoto" src="' + mdomain + $(".fname").val() + '" />');
							} else if ($('input[name="falign"]:checked').val() == 'Center') {
								$('.imageCode').text('<img align="center" class="pagephoto" src="' + mdomain + $(".fname").val() + '" />');
							} else if ($('input[name="falign"]:checked').val() == 'Right') {
								$('.imageCode').text('<img align="right" class="pagephoto" src="' + mdomain + $(".fname").val() + '" />');
							} else if ($('input[name="falign"]:checked').val() == 'Left') {
								$('.imageCode').text('<img align="left" class="pagephoto" src="' + mdomain + $(".fname").val() + '" />');
							} else {
								$('.imageCode').text('<img class="pagephoto" src="' + mdomain + $(".fname").val() + '" />');
							}

						}

						// <IMG ALIGN=left BORDER="0" SRC="/clients/bulletlink/staff-aai-22922/cursor.png">
						else {
							if ($('input[name="falign"]:checked').val() == 'None') {
								$('.imageCode').text('<table width="1" cellspacing="0" cellpadding="0" border="0" align="Center"><tbody><tr><td align="Center"><span><img class="pagephoto layout_pagephoto" src="' + mdomain + $(".fname").val() + '"></span></td></tr><tr><td><div class="pagephotocaption layout_pagephotocaption ">' + $(".fcaption").val() + '</div></td></tr></tbody></table>');
							}
							if ($('input[name="falign"]:checked').val() == 'Center') {
								$('.imageCode').text('<table width="1" cellspacing="0" cellpadding="0" border="0" align="Center"><tbody><tr><td align="Center"><span><img class="pagephoto layout_pagephoto" src="' + mdomain + $(".fname").val() + '"></span></td></tr><tr><td><div class="pagephotocaption layout_pagephotocaption ">' + $(".fcaption").val() + '</div></td></tr></tbody></table>');
							}
							if ($('input[name="falign"]:checked').val() == 'Right') {
								$('.imageCode').text('<table width="1" cellspacing="0" cellpadding="0" border="0" align="Right"><tbody><tr><td align="Center"><span><img class="pagephoto layout_pagephoto" src="' + mdomain + $(".fname").val() + '"></span></td></tr><tr><td><div class="pagephotocaption layout_pagephotocaption ">' + $(".fcaption").val() + '</div></td></tr></tbody></table>');
							}
							if ($('input[name="falign"]:checked').val() == 'Left') {
								$('.imageCode').text('<table width="1" cellspacing="0" cellpadding="0" border="0" align="Left"><tbody><tr><td align="Center"><span><img class="pagephoto layout_pagephoto" src="' + mdomain + $(".fname").val() + '"></span></td></tr><tr><td><div class="pagephotocaption layout_pagephotocaption ">' + $(".fcaption").val() + '</div></td></tr></tbody></table>');
							}
						}
						$('#targetLayer').text('No');
						$('.btnSubmit').css('visibility', 'hidden');
						$('.fsec').css('visibility', 'hidden');
						$('#targetLayer').before('<div class="cndiv"><span class="cnspan">Generating Image Code</span><span id="count_num">4</span></div>');
						document.forms["uploadForm"].reset();
						clearInterval(sa);
					} else if ($('#targetLayer').text().indexOf('No') >= 0) {}
				}, 1000);
				var pa = setInterval(function() {
					if ($('#count_num').length) {
						if ($('#count_num').text() == 2) {
							$('.btnSubmit').css('visibility', 'hidden');
						}
						if ($('#count_num').text() == 1) {
							$('.cndiv').css('display', 'none');
							$('.cnic').css('display', 'block');
							clearInterval(pa);
						}
					}
				}, 1000);
			}));
		});
	</script>
</head>

<body>
	<div class="fbody">
		<div class="fbodyInner">
			<div class="fform">
				<form id="uploadForm" action="iupload.php" method="post" enctype="multipart/form-data">
					<div id="targetLayer">No</div>
					<div class="cnic">
						<span class="cnis">Copy below code and Paste in PageDesiger Editor Screen</span>
						<textarea id="imageCode" class="imageCode"></textarea>
						<button class="fcopybn" onclick="copyic()">Copy Code</button>
					</div>
					<div id="uploadFormLayer">
						<section class="fsec">
							<label class="flabel" style="display:none;">File</label>
							<input name="userImage" type="file" class="inputFile" accept="image/x-png,image/gif,image/jpeg" required />
							<span class="file-custom" data-after="Choose file..."></span>
						</section>
						<section class="fsec">
							<input name="fcaption" class="fcaption" type="text" value="" placeholder="Image Caption (Optional)">
						</section>
						<section class="fsec">
							<span class="fspan">Choose Image Alignment <i>(Optional)</i>:</span>
							<input type="radio" id="none" name="falign" value="None" checked><label for="none">None</label>
							<input type="radio" id="center" name="falign" value="Center"><label for="center">Center</label>
							<input type="radio" id="left" name="falign" value="Left"><label for="left">Left</label>
							<input type="radio" id="right" name="falign" value="Right"><label for="right">Right</label>
						</section>
						<input name="fname" class="fname" type="hidden" value="">
						<input name="hname" class="hname" type="hidden" value="<?php echo $params['mydomain'] ?>">
						<input name="ips" class="ips" type="hidden" value="<?php echo $params['ips'] ?>">
						<div class="fbutton">
							<input type="submit" value="Upload" class="btnSubmit" />
						</div>
					</div>
			</div>
		</div>
		</form>
	</div>
	</div>
	</div>
	<style>
		.fbody {
			background: white;
		}

		.cnic {
			display: none;
		}

		#uploadForm {
			font-family: Arial;
			font-size: 14px;
		}

		.btnSubmit.btndisable {
			pointer-events: none;
			opacity: 0.3;
		}

		.bgColor label {
			font-weight: bold;
			color: #A0A0A0;
		}

		#targetLayer {
			display: none;
		}

		#uploadFormLayer {
			float: left;
		}

		#uploadForm {
			width: 100%;
			float: left;
		}

		.btnSubmit {
			background-color: #696969;
			padding: 5px 30px;
			border: #696969 1px solid;
			border-radius: 4px;
			color: #FFFFFF;
			margin-top: 10px;
		}

		.image-preview {
			width: 150px;
			height: 150px;
			border-bottom-left-radius: 4px;
			border-top-left-radius: 4px;
		}

		.fwaiting.fw_open {
			visibility: visible;
			width: 100%;
			height: 100%;
			position: fixed;
			background: white;
			text-align: center;
			line-height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: bold;
			font-family: Trebuchet Ms;
		}

		.fwaiting {
			visibility: hidden;
		}

		.fform {
			width: 100%;
			float: left;
			box-sizing: border-box;
			font-family: Trebuchet MS !important;
		}

		.fbodyInner {
			padding: 10px;
			box-sizing: border-box;
			margin-left: auto;
			margin-right: auto;
			margin-top: 20px;
			margin-bottom: 20px;
		}

		.fbody {
			width: 100%;
			float: left;
		}

		#uploadFormLayer {
			width: 100%;
			margin-top: 20px;
		}

		.fsec {
			width: 70%;
			float: left;
			margin-bottom: 15px;
			margin-left: 15%;
		}

		.fsec .flabel {
			width: 20%;
			float: left;
			margin-right: 5%;
			color: black;
			font-weight: bold;
			text-align: right;
			line-height: 35px;
		}

		.fsec input {
			width: 100%;
			background: white;
			border-radius: 3px;
			line-height: 25px;
			padding: 5px;
			box-sizing: border-box;
			color: black;
			box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
			border: 1px solid rgba(0, 0, 0, 0.5);
			box-sizing: border-box;
		}

		.fsec .flabel i {
			font-size: 11px !important;
			color: #6D6D6D;
		}

		.fsec input {
			font-family: Trebuchet MS !important;
		}

		.fsec select {
			width: 65%;
			height: 30px !important;
			border-radius: 3px;
			border-width: 0;
			box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
			border: 1px solid rgba(0, 0, 0, 0.5);
			box-sizing: border-box;
		}

		.fbutton {
			width: 100%;
			text-align: center;
		}

		.inputFile {
			cursor: pointer;
		}

		#uploadForm {
			padding: 20px 0;
			box-sizing: border-box;
			margin-bottom: 0;
		}

		.btnSubmit {
			cursor: pointer;
		}

		.fbutton .btnSubmit {
			background: #267bf7;
			border-width: 0;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
			font-weight: bold;
			text-transform: uppercase;
			font-family: Trebuchet Ms;
			line-height: 20px;
			transition: 200ms linear;
			font-size: 12px !important;
		}

		.fbutton .btnSubmit:hover {
			background: black;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.7);
			transition: 300ms linear;
		}

		.btnSubmit.btnuploaded {
			background: #4cab69;
			pointer-events: none;
			box-shadow: none !important;
		}

		.cndiv {
			width: 100%;
			text-align: center;
			font-weight: bold;
			font-family: Trebuchet MS;
			position: absolute;
			box-sizing: border-box;
			bottom: 35%;
		}

		.cnspan {
			display: block;
			text-align: center;
			font-size: 16px;
			box-sizing: border-box;
		}

		#count_num {
			width: 100%;
			float: left;
			text-align: center;
			font-size: 20px;
			margin-top: 10px;
			box-sizing: border-box;
			color: #267bf7;
		}

		#uploadForm {
			position: relative;
		}

		.cnic {
			position: absolute;
			width: 90%;
			box-sizing: border-box;
			text-align: center;
			margin-left: 5%;
		}

		#imageCode {
			width: 100%;
			float: left;
			margin-bottom: 20px;
			border-radius: 4px;
			border: 1px solid gray;
			color: #464646;
			font-family: Trebuchet Ms;
			font-size: 14px;
			padding: 2px;
			box-sizing: border-box;
			height: 60px;
		}

		.fcopybn {
			background: #5cb85c;
			border-width: 0;
			padding: 10px 20px;
			color: white;
			border-radius: 5px;
			cursor: pointer;
			font-family: Trebuchet Ms;
			font-weight: bold;
			text-transform: uppercase;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
		}

		.fcopybn.fcopied {
			background: white;
			color: black;
		}

		.cnis {
			width: 100%;
			float: left;
			text-align: center;
			margin-bottom: 10px;
			font-weight: bold;
			font-family: Trebuchet MS;
		}

		.cnic {
			top: 20px;
		}

		.fsec {
			position: relative;
			display: inline-block;
			cursor: pointer;
		}

		.fsec input {
			min-width: 14rem;
			margin: 0;
			filter: alpha(opacity=0);
		}

		.file-custom {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			z-index: 5;
			height: 20px;
			padding: .5rem 1rem;
			line-height: 1.5;
			color: #555;
			background-color: #fff;
			border: .075rem solid #333;
			border-radius: 5px;
			box-shadow: inset 0 .2rem .4rem rgba(0, 0, 0, .05);
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			font-family: Trebuchet MS;
			color: black !important;
		}

		.file-custom::before {
			position: absolute;
			top: 0px;
			right: 0px;
			bottom: -.075rem;
			z-index: 6;
			display: block;
			content: "Browse";
			height: 21px;
			padding: .5rem 1rem;
			line-height: 1.5;
			color: white;
			background-color: #333;
			border-width: 0;
			border-radius: 0 .25rem .25rem 0;
		}

		.file-custom::after {
			content: attr(data-after);
		}

		.fbutton {
			float: left;
			border-top: 1px solid gray;
		}

		.cndiv~#uploadFormLayer .fbutton {
			visibility: hidden;
		}

		input[name="falign"] {
			float: left;
			width: auto;
			min-width: auto;
		}

		input[name="falign"] label {
			float: left;
			text-align: left;
		}

		input[name="falign"]~label {
			float: left;
			padding-left: 5px;
			cursor: pointer;
			font-size: 12px !important;
			font-weight: bold;
			margin-right: 13px;
		}

		input[name="falign"]~label:hover {
			color: #267bf7;
		}

		.fspan {
			float: left;
			margin-right: 10px;
			font-family: Trebuchet MS;
			width: 100%;
			clear: both;
			margin-bottom: 5px;
			color: #333;
		}

		input[name="falign"]:checked+label {
			color: #267bf7;
		}


		body {
			padding: 0;
			box-sizing: border-box;
		}

		.fbodyInner {
			padding: 0;
			margin: 0;
		}

		#uploadForm {
			padding-top: 0;
			padding-bottom: 0;
		}
	</style>
</body>

</html>
