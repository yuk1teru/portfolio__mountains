(() => {
const menuBtnRef = document.querySelector("[data-menu-button]");
const mobileMenuRef = document.querySelector("[data-menu]");
menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("open");
    mobileMenuRef.classList.toggle("open");
    
});
    
    
})();