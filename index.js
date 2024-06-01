function generateDropDown(outer, inner) {
    inner.forEach(element => { element.style.display = 'none' });

    outer.forEach(element => {
        const veryMuchInner = element.firstElementChild.nextElementSibling;

        element.addEventListener('mouseover', function() {
            veryMuchInner.style.display = "block";
        });

        element.addEventListener('mouseout', function() {
            veryMuchInner.style.display = "none";
        });

        element.addEventListener('mousedown', function() {
            veryMuchInner.style.display = "block";
        });

        element.addEventListener('mouseup', function() {
            veryMuchInner.style.display = "block";
        });
    });
}

module.exports = generateDropDown