$(function () {
    // alert($('div').css('font'))
    $('#shrink').click(function(){
        changeSize('small');  // 呼叫
    });
    $('#enlarge').click(function(){
        changeSize('big');  // 呼叫
    });

    function changeSize(size){  // 宣告 + 定義
        let currentSize = parseInt($('div').css('fontSize'))

        if(size == 'small'){
            newSize = currentSize - 2;
        }else if(size == 'big'){
            newSize = currentSize + 2;
        }

        $('div').css('fontSize', newSize)
    }
});