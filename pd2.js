<script>
// BEGIN: Adding Custom Image Frame
$(document).ready(function(){
	// If Folder template
	var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');  
		for (var i = 0; i < url.length; i++) {  
			var urlparam = url[i].split('=');  
			if (urlparam[0] == 'f') {  
				if(urlparam[1].includes('/')) {
					var parts = urlparam[1].split('/');
					var fn = parts.pop() || parts.pop();  // handle potential trailing slash
					createCookie('bl_folder',fn); 
				}
			}
		}  	
	// PageDesigner1
		$('.CuteEditorGroupMenu:nth-child(2) > tbody > tr').append('<span class="custom_image_on" title="Add Image"><img src="/images/icon_image.png"><span>');
	// PageDesigner2
		$('#oEdit2tbargrpEdit3 .main_istoolbar > tbody > tr > td').after('<span class="custom_image_on" title="Add Image"><img src="/images/icon_image.png"><span>');
	$('.custom_image_on').click(function(){
		$('body').append('<div class="custom_image_iframe"><span class="custom_image_close" title="Close">+<span></span></span><iframe src="/custom_image.php"></iframe></div>');
		$('.custom_image_close').click(function(){
			$('.custom_image_iframe').remove();
		});
	});
});
// END: Adding Custom Image Frame
</script>
