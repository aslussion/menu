var classOpen = 'menu-nav--open';

document.addEventListener('DOMContentLoaded', function() {
  menu_btn = document.querySelectorAll('.menu-button');

  //раскрытие-закрытие меню по бургеру
  [].forEach.call(menu_btn , function(el) {
  el.onclick = function() {
    var menu = this.closest('.menu');
    var menu_nav = menu.querySelector('.menu-nav');

    //закрытие
    if(menu_nav.classList.contains(classOpen)){
      menu_nav.style.display='none';
      menu_nav.classList.remove(classOpen);
    }
    //открытие
    else{
      menu_nav.style.display='block';
      menu_nav.classList.add(classOpen);
    }
  };
  });


});
