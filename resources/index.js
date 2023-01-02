function scrollFunction(id) {
    var access = document.getElementById(id);
    access.scrollIntoView();
}

function toggleMenu() {
    let menuBtn = document.getElementById('menu');
    var menuOverlay = document.getElementById('menu-overlay');
    if(menuBtn.className.includes('menu')) {
        menuBtn.className = "mdi mdi-close";
        menuOverlay.style.visibility = 'visible';
    } else {
        menuBtn.className = "mdi mdi-menu";
        menuOverlay.style.visibility = 'hidden';
    }
}