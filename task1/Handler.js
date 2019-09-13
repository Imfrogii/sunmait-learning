let headerConrainer = document.getElementsByClassName('header-container')[0];
let buttonMore = headerConrainer.getElementsByClassName('button-more')[0];
let header = headerConrainer.getElementsByTagName('header')[0];
let smallMenu = headerConrainer.getElementsByClassName('small-menu')[0];
let logo = header.getElementsByClassName('logo')[0];
let search = headerConrainer.getElementsByClassName('search')[0];

buttonMore.addEventListener("click", (event) => {
    event.stopPropagation();
    (smallMenu.style.left === "0px")?
    closeMenu() : showMenu();
});
header.addEventListener("click", function(e) {
    if(smallMenu.style.left === "0px")
    closeMenu();
});

showMenu = () =>{
  smallMenu.style.left = "0px";
  search.style.left="0";
  buttonMore.style.marginLeft = "290px";
  logo.style.marginLeft = "300px";
  disableScrolling();
}
closeMenu = () =>{
   smallMenu.style.left = "-340px";
   search.style.left="-340px";
   buttonMore.style.marginLeft = "2vw";
   logo.style.marginLeft = "0px";
   enableScrolling();
}

let searchIcon = document.getElementsByClassName("search-icon")[0];
let bigSearch = document.getElementsByClassName("big-search")[0];
searchIcon.addEventListener("click", (event) => {
    // event.stopPropagation();
    (bigSearch.style.top == "64px")?
    closeSearch() : showSearch();
  });

showSearch = () =>{
  bigSearch.style.top = "64px";
  // bigSearch.style.zIndex = "0";
  searchIcon.innerHTML = '<big><i class="fa fa-times" aria-hidden="true"></i></big>';
  searchIcon.classList.add("hover");
  setTimeout(() => {
    bigSearch.style.zIndex = "0";
  }, 200);
}

closeSearch = () => {
  bigSearch.style.zIndex = "-100";
  bigSearch.style.top = "-80px";
  searchIcon.innerHTML = '<big><i class="fa fa-search" aria-hidden="true"></i></big>'
  // searchIcon.style.backgroundColor = "rgba(101, 144, 72, 0)";
  searchIcon.classList.remove("hover");
}

searchIcon.addEventListener("onmouseover", hover);
searchIcon.addEventListener("onmouseout", hover)
function hover() {
  searchIcon.classList.add("hover");
}

disableScrolling = () =>{
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
}

enableScrolling = () =>{
    window.onscroll = () => {};
}
