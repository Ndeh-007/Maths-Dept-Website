document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('warningNav').classList.add('sticky-top'); 
        } else {
            document.getElementById('warningNav').classList.remove('sticky-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
    let hoverItem = document.getElementById("navbarDropdownBioMathsUnit");
    let hoverContent = document.getElementById('d-down');

    hoverItem.addEventListener('mouseover',()=>{
         hoverContent.style.display = 'block';
         hoverContent.style.transition = '0.25s'
    }) 
    hoverItem.addEventListener('mouseleave',()=>{
         hoverContent.style.display = 'none';
         hoverContent.style.transition = '0.25s'
    }) 
    hoverContent.addEventListener('mouseenter',()=>{
        hoverContent.style.display = 'block';
        hoverContent.style.transition = '0.25s'
    }) 
    hoverContent.addEventListener('mouseleave',()=>{
        hoverContent.style.display = 'none';
        hoverContent.style.transition = '0.25s'
    })
});


