const burger = document.querySelector(".burger")

const active = document.querySelector("ul")

burger.addEventListener("click", () => {
    active.classList.toggle("active")
    burger.classList.toggle("burger-active")
    
}) 