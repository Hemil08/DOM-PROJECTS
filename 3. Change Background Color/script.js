const background = document.getElementsByTagName("body")[0];
const changeBgButton = document.getElementById("changeBgButton");


// Create Random Number 
const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
};

  // Create random RGBA colors
const getRandomColor = () => {
    const r = getRandomNumber(256);
    const g = getRandomNumber(256);
    const b = getRandomNumber(256);
    const a = Math.random().toFixed(1);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
};


changeBgButton.addEventListener("click", function(){
    const randomColor = getRandomColor();
    background.style.backgroundColor = randomColor;
});
