 $(function() {
     let divWidth = $('#sliderBoard').width() // 抓寬度
     let imgCount = $('#content li').length // 查幾個圖

     /* 生成 contentbutton 的 li */
     for (let i = 0; i < imgCount; i++) {
         $('#contentButton').append(`<li></li>`)
     }

     $('#contentButton li:nth-child(1)').addClass('clicked');

     $('#content li').width(divWidth) // li 的寬度
     $('#content').width(divWidth * imgCount) // ul 的寬度

     let index;
     $('#contentButton li').click(function() {
         // alert($(this).index())
         index = $(this).index()

         $('#content').animate({
             left: divWidth * index * -1,
         })

         $(this).addClass('clicked')
         $('#contentButton li').not(this).removeClass('clicked')
     })

     // 功能1: resize, 將所有 resize 之後會影響的值放在 changeStatus 函數中，當 window 發生 resize 事件時就去呼叫該函數
     $(window).resize(function() {
         changeStatus()
     })

     function changeStatus() {
         $(window).resize(function() {
             $('#sliderBoard').width =
         })

     }

     // 功能2: 每間隔8秒呼叫一次函數
     setInterval(moveNext, 5000)

     function moveNext() {
         // 偵測在第幾個 index, 移到下一個則++
     }
 });