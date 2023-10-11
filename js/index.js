let section = document.querySelector("section");
let headerHeight = getComputedStyle(document.querySelector("header")).height;
let sectionHeight = window.innerHeight - parseInt(headerHeight);

section.style.minHeight = `${sectionHeight}px`;