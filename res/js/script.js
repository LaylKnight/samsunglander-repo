var SELECTED_COUNT = 0;
var  conf_count = 0, que1_count = 0, que2_count = 0, que3_count = 0, que4_count = 0;

$('#btn_getstarted').click(function(){
    $('#block-1').fadeOut('300', function(){
        $('#block-2').fadeIn('300');
    })
});

$('#btn_submit').click(function(){
    $('#block-2').fadeOut('300', function(){
        $('#block-3').fadeIn('300');
        setTimeout( function(){$('#block-3').fadeOut('300', function(){
            $('#block-4').fadeIn('300');
        })}, 3000);
    })
});

$('input[name="conf"]').click(function(){
    conf_count++;
    if(conf_count == 1)
    {
        SELECTED_COUNT++;
    }

    $('#block4__featureditem--name').html(
    $("input[name='conf']:checked").val()
    + '" Neo QLED 8K QN004');

    btnSubmit_activate();
});

$('input[name="que-1"]').click(function(){
    que1_count++;
    if(que1_count == 1)
    {
        SELECTED_COUNT++;
    }
    btnSubmit_activate();
});
$('input[name="que-2"]').click(function(){
    que2_count++;
    if(que2_count == 1)
    {
        SELECTED_COUNT++;
    }
    btnSubmit_activate();
});
$('input[name="que-3"]').click(function(){
    que3_count++;
    if(que3_count == 1)
    {
        SELECTED_COUNT++;
    }
    btnSubmit_activate();
});
$('input[name="que-4"]').click(function(){
    que4_count++;
    if(que4_count == 1)
    {
        SELECTED_COUNT++;
    }
    btnSubmit_activate();
});

function btnSubmit_activate()
{
    if(SELECTED_COUNT == 5)
    {
        $('#btn_submit').css('display', 'block');
    }
}