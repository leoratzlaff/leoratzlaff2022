function toggleMenu(){
  var sidenav = document.getElementById("sidenav");
  var menu_btn = document.getElementById("menu_btn");
  if (!sidenav.classList.contains('open')) {
    sidenav.classList.add("open");
    menu_btn.innerText = "Close";
    document.body.style.overflowY = "hidden";
  } else {
    sidenav.classList.remove("open");
    menu_btn.innerText = "Menu";
    document.body.style.overflowY = "auto";
  }
}