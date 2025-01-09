document.addEventListener('DOMContentLoaded', () => {
  const leftScarf = document.querySelector('.leftscarf');
  const rightScarf = document.querySelector('.rightscarf');
  const background = document.querySelector('.parallax-background');

  let lastScrollY = 0; // 用來追蹤上一個滾動位置

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // 背景放大效果
    const scaleFactor = 1 + scrollY / 500;
    background.style.transform = `scale(${scaleFactor})`;

    leftScarf.style.transform = `translateX(-${(scrollY - windowHeight * 0.4) * 0.4}px)`;
    rightScarf.style.transform = `translateX(${(scrollY - windowHeight * 0.4) * 0.4}px)`;

    lastScrollY = scrollY; // 更新最後的滾動位置
  });
});
