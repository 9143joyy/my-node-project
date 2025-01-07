document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
  
      // 取得背景與前景元素
      const background = document.querySelector('.parallax-background');
      const foreground = document.querySelector('.parallax-foreground');
  
      // 設置視差滾動效果
      background.style.transform = `translateY(${scrollY * 0.2}px)`; // 背景較慢
      foreground.style.transform = `translateY(${scrollY * 0.5}px)`; // 前景較快
    });
  });


var myCarousel = document.querySelector('#demo')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,  // 設定輪播時間間隔（毫秒）

})


  $(document).ready(function() {
    $("#contactForm").on("submit", function(event) {
      event.preventDefault();  // 防止表單提交時頁面刷新
  
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
  
      // 使用 AJAX 發送表單資料
      $.ajax({
        url: "/contact",  // contact 路徑
        type: "POST",
        data: {
          name: name,
          email: email,
          message: message
        },
        success: function(response) {
          // 顯示成功訊息
          $('#success').html("<div class='alert alert-success'>Message sent successfully!</div>");
        },
        error: function() {
          // 顯示錯誤訊息
          $('#success').html("<div class='alert alert-danger'>Sorry, there was an error sending your message.</div>");
        }
      });
    });
  });
  