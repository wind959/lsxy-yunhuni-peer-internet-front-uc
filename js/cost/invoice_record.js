$(function () {
    $.fn.datepicker.defaults.autoclose = true;

    $('.datepicker').datepicker({
        language: "zh-CN",
        setDate: '10/2015',
        format: 'yyyy-mm-dd',
        viewMode: "day",
        minViewMode: "day",
        todayHighlight: true,
        todayBtn: true,
        autoclose: true //fail
    }).on('changeDate', function (e) {
        $(this).datepicker('hide')
    });



});


$('#sendinvoice').click(function () {
    //0 填写  1，2 大于100 3大于1000
    var type = $('.invoice-type').attr('data-type');
    var currentprice = parseInt($('#invoice-price').attr('data-money'));
    switch (type) {
        case '1':
        case '2':
            if(currentprice<100){
                tips('个人增值税普通发票、企业增值税普通发票(100元起),才能开具'); return false;
            }
            break;
        case '3':
            if(currentprice<1000){
                tips('企业增值税专用发票(1000元起),才能开具');return false;
            }
            break;
        default:
            tips('您还未填写发票信息，请先填写完成，再进行开票申请');return false;
            break;
    }
    sendsubmit();

});


function tips(title) {
    bootbox.setDefaults("locale","zh_CN");
    bootbox.alert(title, function() {
    });
}


function compareTime(starttime,endtime){
    if(!starttime){
        return '请填写开始时间';
    }
    if(!endtime){
        return '请填写结束时间';
    }
    var d1 = new Date(starttime.replace(/\-/g, "\/"));
    var d2 = new Date(endtime.replace(/\-/g, "\/"));
    if(d1>d2){
        return '时间范围填写有误';
    }
    return '';
}