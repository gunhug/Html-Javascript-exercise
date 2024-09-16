const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBox = window.innerHeight * 0.75;

    boxes.forEach(box => {
        const botTop = box.getBoundingClientRect().top;
        
        if ( botTop < triggerBox ) {
            box.classList.add("active");
        }else{
            box.classList.remove("active");
        }
    });
} 