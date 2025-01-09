document.addEventListener('DOMContentLoaded', () => {
  const leftScarf = document.querySelector('.leftscarf');
  const rightScarf = document.querySelector('.rightscarf');
  const background = document.querySelector('.parallax-background');

  let lastScrollY = 0; // 用來追蹤上一個滾動位置

  // 初始設置圍巾和背景的位置
  const windowHeight = window.innerHeight;
  const initialOffset = windowHeight * 0.4;

  leftScarf.style.transform = `translateX(-${initialOffset * 0.4}px)`;
  rightScarf.style.transform = `translateX(${initialOffset * 0.6}px)`;

  // 背景放大效果
  const initialScaleFactor = 1 + lastScrollY / 500;
  background.style.transform = `scale(${initialScaleFactor})`;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // 背景放大效果
    const scaleFactor = 1 + scrollY / 500;
    background.style.transform = `scale(${scaleFactor})`;

    leftScarf.style.transform = `translateX(-${(scrollY - windowHeight * 0.4) * 0.4}px)`;
    rightScarf.style.transform = `translateX(${(scrollY - windowHeight * 0.4) * 0.6}px)`;

    lastScrollY = scrollY; // 更新最後的滾動位置
  });
});

