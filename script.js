document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColorBtn');
    const container = document.querySelector('.container');
    
    const colors = [
        '#ff9999', '#99ff99', '#9999ff',
        '#ffff99', '#ff99ff', '#99ffff'
    ];
    
    let currentColorIndex = 0;
    
    button.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        container.style.backgroundColor = colors[currentColorIndex];
    });
});