window.onload = function() {
    // Get the rose and leaf elements
    const rose = document.querySelector('.rose');
    const leaf = document.querySelector('.leaf');

    // Apply a class to trigger the animation when the page loads
    rose.classList.add('grow');
    leaf.classList.add('grow');

    // You can add more interactivity here, for example, trigger the animation on a button click
    // Example: If you add a button to your HTML:
    // const button = document.querySelector('#animateButton');
    // button.addEventListener('click', () => {
    //    rose.classList.add('grow');
    //    leaf.classList.add('grow');
    // });
};
