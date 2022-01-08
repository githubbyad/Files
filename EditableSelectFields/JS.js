// BEGIN: Custom SourceLine & ByLine

$(document).ready(function() {
    if (window.location.href.indexOf("form2.asp?lid=Pages&") != -1) {
        $('#source_line, #by_line').parent('.select').addClass('select-editable');
        $('#source_line, #by_line').attr('onchange', 'this.nextElementSibling.value=this.value');
        $('#source_line').after('<input id="source_line" name="source_line" type="text" name="format" value="' + $('#source_line').val() + '" />');
        $('#by_line').after('<input id="by_line" name="by_line" type="text" name="format" value=" ' + $('#by_line').val() + '" />');
        $('select#source_line, select#by_line').attr('id', '');
        $('section:nth-child(10)').css('display', 'none');
        $('section:nth-child(11)').css('display', 'none');
        if ($('#picture2_caption').val().indexOf("^") > -1) {
            var p = $('#picture2_caption').val();
            var q = p.split("^");
            $('#source_line').val(q[0]);
            $('#by_line').val(q[1]);
        } else {
            var x = $('#source_line').val();
            var y = $('#by_line').val();
            $('#source_line').val(x);
            $('#by_line').val(y);
        }
        $('#source_line, #by_line').change(function() {
            $('#picture2_caption').val($('#source_line').val() + "^" + $('#by_line').val());
        });
    }
});

// END: Custom SourceLine & ByLine
