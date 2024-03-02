// document.addEventListener("DOMContentLoaded", function() {
//     const greenBtn = document.getElementById("green");

//     greenBtn.addEventListener("click", function() {
//         document.body.style.backgroundColor = "green";
//     });
// });


document.addEventListener("click", function(){
    const greenBtn = document.getElementById('green');

    greenBtn.addEventListener("click", function(){
        document.body.style.backgroundColor = "green";
    })
})


document.addEventListener("click", function(){
    const greenBtn = document.getElementById('red');

    greenBtn.addEventListener("click", function(){
        document.body.style.backgroundColor = "red";
    })
})


document.addEventListener("click", function(){
    const greenBtn = document.getElementById('blue');

    greenBtn.addEventListener("click", function(){
        document.body.style.backgroundColor = "blue";
    })
})


document.addEventListener("DOMContentLoaded", function() {
    const randomBtn = document.getElementById('random');

    randomBtn.addEventListener("click", function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
});