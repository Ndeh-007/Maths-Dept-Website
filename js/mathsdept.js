document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('warningNav').classList.add('sticky-top');
        } else {
            document.getElementById('warningNav').classList.remove('sticky-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
    let hoverItem = document.getElementById("navbarDropdownBioMathsUnit");
    let hoverContentBioMaths = document.getElementById('d-down');
    let hoverProgrammes = document.getElementById("navbarDropdownProgrammes");
    let hoverContentProgrammes = document.getElementById('p-down');

    hoverItem.addEventListener('mouseover', () => {
        hoverContentBioMaths.style.display = 'block';
        hoverContentBioMaths.style.transition = '0.25s'
    })
    hoverItem.addEventListener('mouseleave', () => {
        hoverContentBioMaths.style.display = 'none';
        hoverContentBioMaths.style.transition = '0.25s'
    })
    hoverContentBioMaths.addEventListener('mouseenter', () => {
        hoverContentBioMaths.style.display = 'block';
        hoverContentBioMaths.style.transition = '0.25s'
    })
    hoverContentBioMaths.addEventListener('mouseleave', () => {
        hoverContentBioMaths.style.display = 'none';
        hoverContentBioMaths.style.transition = '0.25s'
    })


    // hover for programmes

    hoverProgrammes.addEventListener('mouseover', () => {
        hoverContentProgrammes.style.display = 'block';
        hoverContentProgrammes.style.transition = '0.25s'
    })
    hoverProgrammes.addEventListener('mouseleave', () => {
        hoverContentProgrammes.style.display = 'none';
        hoverContentProgrammes.style.transition = '0.25s'
    })
    hoverContentProgrammes.addEventListener('mouseenter', () => {
        hoverContentProgrammes.style.display = 'block';
        hoverContentProgrammes.style.transition = '0.25s'
    })
    hoverContentProgrammes.addEventListener('mouseleave', () => {
        hoverContentProgrammes.style.display = 'none';
        hoverContentProgrammes.style.transition = '0.25s'
    })
});