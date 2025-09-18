const elemen = document.querySelectorAll(".container-row");
function checkScroll() {
    elements.forEach(el => { const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classicList.add("show")
        }
        
    });
}
window.addEventListener("scroll", checkScroll)
checkScroll();

