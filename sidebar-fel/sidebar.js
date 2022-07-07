var sideBar = document.getElementById("sidebar");
var logo = document.getElementById("logo");

var searchInput = document.getElementById("search-input");
var searchBar = document.getElementById("search-bar");

var menuItem1 = document.getElementById("menu-item1");
var menuItem2 = document.getElementById("menu-item2");
var menuItem3 = document.getElementById("menu-item3");
var menuItem4 = document.getElementById("menu-item4");
var menuItem5 = document.getElementById("menu-item5");
var ul = document.getElementById("list");
var items = document.getElementById("items");

var avatar = document.getElementById("avatar");
var description = document.getElementById("description");

function hideSidebar() {

    sideBar.classList.toggle("closed");
    logo.classList.toggle("hidden");

    ul.classList.toggle("center-list");
    items.classList.toggle("center-items");

    searchInput.classList.toggle("hidden");
    searchBar.classList.toggle("closed-search-bar")

    menuItem1.classList.toggle("hidden");
    menuItem2.classList.toggle("hidden");
    menuItem3.classList.toggle("hidden");
    menuItem4.classList.toggle("hidden");
    menuItem5.classList.toggle("hidden");

    avatar.classList.toggle("hidden");
    description.classList.toggle("hidden");

}

function returnPage(){
    history.back()
}