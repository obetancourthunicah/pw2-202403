document.addEventListener("DOMContentLoaded", ()=>{
    const hamburgerMenu = document.querySelector('.hamburger');
    const navContainer = document.querySelector('header nav');
    let hidden = true;
    if (hamburgerMenu !== null && navContainer !== null) {
        hamburgerMenu.addEventListener('click', (e)=>{
            e.preventDefault();
            hidden = !hidden;
            navContainer.classList.toggle('hidden');
            hamburgerMenu.classList.toggle('rotate');
        });
    }
});