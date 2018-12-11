// Select color input
const colorPicker = document.querySelector("#colorPicker");

// Select size input
const inputHeight =  document.querySelector("#inputHeight");
const inputWidth = document.querySelector("#inputWidth");

// Select from submit and pixelCanvas Table

const sizePicker = document.querySelector("#sizePicker");
const pixelCanvas = document.querySelector("#pixelCanvas");

// When size is submitted by the user, call makeGrid()

function makeGrid(height,width,colorSelect) {

    sizePicker.addEventListener("submit", function (e) {
        e.preventDefault();
        pixelCanvas.innerHTML = "";
        let h,w;
        h = height.value;
        w = width.value;
        console.log(h,w);
        for (let x = 0;  x < h; x++) {
            let tr = document.createElement('tr');
            for (let i = 0; i < w; i++) {
                let td = document.createElement("td");
                tr.appendChild(td);
                pixelCanvas.appendChild(tr);
            }
        }

        let td = document.querySelectorAll("td");
        for (let x = 0;  x < td.length; x++) {
            td[x].addEventListener('click', function (e) {
                let color = colorSelect.value;
                td[x].style.backgroundColor = color;
            })
        }
    })
}



makeGrid(inputHeight,inputWidth,colorPicker);


// (function makeEvent() {
//     const SIZE_PICKER = document.getElementById("sizePicker");
//     SIZE_PICKER.addEventListener("submit", function() {
//         event.preventDefault();
//         var height = document.getElementById("inputHeight").value;
//         var width = document.getElementById("inputWidth").value;
//         makeGrid(height, width);
//     }, false);
// })();
//
// function paintBox() {
//     const COLOR_PICKER = document.getElementById("colorPicker").value;
//     this.style.background = COLOR_PICKER
// }
//
// function makeGrid(height, width) {
//     const TABLE = document.getElementById("pixelCanvas");
//     TABLE.innerHTML = "";
//     for (var i = 0; i < height; i++) {
//         var row = TABLE.insertRow(i);
//         for (var j= 0; j < width; j++ ) {
//             var cell = row.insertCell(j);
//             cell.onclick = paintBox;
//         }
//     }
// }
