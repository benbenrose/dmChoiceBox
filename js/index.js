/**
 * Created by lili on 2017/12/27.
 */
$(document).ready(function(){
    $('#testDemo').choicebox({
        type: 'checkbox',
        attr: 'value'
    }).on('change.dm.choice', function (data) {
        console.log(data);
    });

    $('.J_all_btn').on('click',function () {
        //选中所有
        $('#testDemo').choicebox('choiceAll');
    });
    $('.J_clean_btn').on('click',function () {
        //清除选中状态
        $('#testDemo').choicebox('cleanAll');
    });
});