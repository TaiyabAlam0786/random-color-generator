// Generate a random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalId;
// Start the change background color
const changeColor = function (){
    document.body.style.backgroundColor = randomColor();
}
document.querySelector('#start').addEventListener('click', function (e) {
   if( !intervalId){
    intervalId = setInterval( changeColor, 1000)
   }
});

// Stop the  change background color

document.querySelector('#stop').addEventListener('click', function (e) {
    clearInterval(intervalId);
    intervalId=null;
})