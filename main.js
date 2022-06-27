const mobileMenuToggler = document.querySelector(".mobile-menu-toggler")
const menu = document.querySelector("nav > ul")

document.querySelectorAll(".dropdown-btn").forEach( btn => {
    btn.addEventListener("click", e => {
        const menuTogglerStyle = document.defaultView.getComputedStyle(mobileMenuToggler,null);
        // This peace of logic for mobile view only
        if (menuTogglerStyle.display === 'none') return
        const isTrueSet = (e.target.dataset.pressed === 'true')
        e.target.dataset.pressed = !isTrueSet
    })
})



mobileMenuToggler.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active")
    const isTrueSet = (e.target.dataset.menuOpened === 'true')
    e.target.dataset.menuOpened = !isTrueSet
})

document.addEventListener("click", e => {
    const menuTogglerStyle = document.defaultView.getComputedStyle(mobileMenuToggler,null);
    // This peace of logic for desktop view
    if (menuTogglerStyle.display !== 'none') return
    const isDropdownButton = e.target.matches(".dropdown-btn")
    if (!isDropdownButton && e.target.closest("li[data-dropdown]") != null) return

    let currentButton
    if (isDropdownButton) {
        currentButton = e.target
        const isTrueSet = (e.target.dataset.pressed === 'true')
        e.target.dataset.pressed = !isTrueSet
    }

    document.querySelectorAll('.dropdown-btn[data-pressed="true"]').forEach( btn => {
        if(btn === currentButton) return
        btn.dataset.pressed = false
    })

})