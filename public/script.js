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
