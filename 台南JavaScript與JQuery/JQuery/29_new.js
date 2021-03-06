$(function () {
    let divWidth = $('#sliderBoard').width()
    let imgCount = $('#content li').length

    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append(`<li></li>`)
    }
    $('#contentButton li:nth-child(1)').addClass('clicked');

    $('#content li').width(divWidth)            // li的寬度
    $('#content').width(divWidth * imgCount)    // ul的寬度

    let index;
    $('#contentButton li').click(function(){
        index = $(this).index()

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')
    })
});