function toggleNav() {
    var updateElement = document.getElementById("menu-icon");
    var updateMenu = document.getElementById("menu");
    var updateList = document.getElementById("list");
    var updateMain = document.getElementById("main");
    //toggle adds a class if it's not there or removes if it is.
    updateElement.classList.toggle("open");
    updateMenu.classList.toggle('open2')
    updateList.classList.toggle('open3')
    updateMain.classList.toggle('open4')
  }