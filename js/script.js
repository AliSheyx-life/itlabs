window.addEventListener('load', () => {
    
    // Burger Menu
    document.querySelector('.header-nav__burger').addEventListener('click', () => document.querySelector('.header-nav').classList.toggle('open'))

    // Header Parallax
    document.querySelector('.header').addEventListener('mousemove', e => {
        const x = e.clientX / -50;
        const y = e.clientY / -50;
        
        document.querySelector('.header-parallax__elem_img').style.transform = `translate(${x}px, ${y}px)`
    })
    
})
