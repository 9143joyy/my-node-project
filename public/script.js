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
  // slide show
  let slideIndex = 0;

  function showSlides() {
      let slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; // 隱藏所有圖片
      }
      slideIndex++; // 增加索引，顯示下一張圖片
      if (slideIndex > slides.length) {
          slideIndex = 1; // 如果已經是最後一張，從第一張重新開始
      }
      slides[slideIndex - 1].style.display = "block"; // 顯示當前索引對應的圖片
      setTimeout(showSlides, 3000); // 每 3 秒切換一次
  }
  
  showSlides(); // 開始自動切換圖片

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
  