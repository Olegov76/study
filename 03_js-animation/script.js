let tl = gsap.timeline();

tl.from('.hero__left', { opacity: 0, y: 70, duration: 0.4 })
  .from('.hero__descr', { opacity: 0, duration: 0.4 })
  .from('.img1', { opacity: 0, duration: 0.2, scale: 0.6 })
  .from('.img2', { opacity: 0, duration: 0.2, scale: 0.6 })
  .from('.img3', { opacity: 0, duration: 0.2, scale: 0.6 })
  .from('.photos__author', { opacity: 0, duration: 0.5 })

document.getElementById('btn').onclick = function () {
  document.getElementById('menu').classList.add('menu--open');
  tl.from('.menu', { opacity: 0, y: 30, duration: 0.2 })
    .from('.menu__top', { opacity: 0, y: -60, duration: 0.2 }, "-=0.5")
    .from('.menu__nav', { opacity: 0, y: 30, duration: 0.3 })
    .from('.menu__right,.social', { opacity: 0, y: 30, duration: 0.3 });
}

document.getElementById('btn_close').onclick = function () {
  document.getElementById('menu').classList.remove('menu--open');
  tl.from('.hero__left', { opacity: 0, y: 70, duration: 0.4 })
  .from('.hero__descr', { opacity: 0, duration: 0.4 })
  .from('.img1', { opacity: 0, duration: 0.2, scale: 0.6 })
  .from('.img2', { opacity: 0, duration: 0.2, scale: 0.6 })
  .from('.img3', { opacity: 0, duration: 0.2, scale: 0.6 })
  .from('.photos__author', { opacity: 0, duration: 0.5 })
}
