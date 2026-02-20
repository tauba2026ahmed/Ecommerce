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


const lists = document.querySelectorAll("#new-arrivals .product-list");
    const buttons = document.querySelectorAll("#new-arrivals .btn");
    const nextBtn = document.querySelector("#new-arrivals .btn-next");
    let current = 0;

    // زرار رقم 1 و 2
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const index = parseInt(btn.dataset.index);

            lists.forEach((list, i) => {
                list.classList.toggle("active", i === index);
            });

            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            current = index;
        });
    });

    // زرار Next
    nextBtn.addEventListener("click", () => {
        lists[current].classList.remove("active");
        buttons[current].classList.remove("active");

        current = (current + 1) % lists.length;
        console.log(current);

        lists[current].classList.add("active");
        buttons[current].classList.add("active");
    });
