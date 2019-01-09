//ООП в функциональном стиле
function Menu(menu) {
  this._menu = menu;//защищенное свойство

  var classOpen = 'menu-nav--open';//приватные свойства

  var menu_nav = menu.querySelector('.menu-nav');
  var menu_burgerBtn = menu.querySelector('.menu-button');

  var maxH;
  
  //раскрытие-закрытие меню по бургеру
  menu_burgerBtn.onclick = function() {
    //закрытие
    if(menu_nav.classList.contains(classOpen)){
      menu_nav.style.maxHeight = 0;
      menu_nav.classList.remove(classOpen);
    }
    //открытие
    else{
      maxH = menu_nav.querySelector('.menuList').offsetHeight;
      menu_nav.style.maxHeight = maxH+'px';
      menu_nav.classList.add(classOpen);
    }
  };

};

function SubMenu(menu) {
  Menu.apply(this, arguments);// отнаследовать

  var self = this;//сохранение текущей области видимости для приватных методов

  var classOpenSub = 'menuSubList--open';

  var subBtn = this._menu.querySelectorAll('.menuList-subBtn');
  for(var i=0; i<subBtn.length; i++){
    subBtn[i].onclick = function() {
      var subMenu = this.closest('.menuList-item').querySelector('.menuSubList');
      var subMenu_open = (!subMenu.classList.contains(classOpenSub)) ? true : false;

      var maxHsub = subMenu.querySelector('.menuSubList-inner').offsetHeight;

      //закрытие
      if(!subMenu_open){
        closeSubs();//закрыть все включая данный
      }
      //открытие
      else{
        closeSubs(subMenu);//закрыть все подменю кроме данного
        subMenu.style.maxHeight = maxHsub+'px';
        subMenu.classList.add(classOpenSub);//открыть данный
      }
      return false;
    }
  }

  //приватный метод
  function closeSubs(obj){
    var menu_subs = self._menu.querySelectorAll('.menuSubList');
    for(var i=0; i<menu_subs.length; i++){
      if(menu_subs[i] != obj){
        menu_subs[i].style.maxHeight = 0;
        menu_subs[i].classList.remove(classOpenSub);
      }
    };
  };
};


//usage
document.addEventListener('DOMContentLoaded', function() {
  var menus = document.querySelectorAll('.j-menu');
  for(var i=0; i<menus.length; i++){
    var menu = new Menu(menus[i]);
  };

  var menusSub = document.querySelectorAll('.j-menuSub');
  for(var i=0; i<menusSub.length; i++){
    var menuSub = new SubMenu(menusSub[i]);
  };
});