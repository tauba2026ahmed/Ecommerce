const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const close = document.getElementById("close")

menu.addEventListener("click", () => {
    navbar.classList.add("active")
});

close.addEventListener("click", () => {
    navbar.classList.remove("active")
});

// const navbarEle = document.querySelectorAll("#navbar a");

// navbarEle.forEach(link => {
//     link.addEventListener("click", () => {

//         // نشيل active من الكل
//         navbarEle.forEach(item => {
//             item.classList.remove("active");
//         });

//         // نضيفها للعنصر اللي اتضغط عليه
//         link.classList.add("active");
//     });
// });

const navbarEle = document.querySelectorAll("#navbar a");

const currentPage = window.location.pathname.split("/").pop();

console.log(currentPage)

navbarEle.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
} )
