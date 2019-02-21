
(function makeGrid() {

  document
      .querySelector("#sizePicker")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        document.querySelector("#pixelCanvas").innerHTML = '';
        const inputHeight = document.querySelector("#inputHeight");
        const inputWidth =  document.querySelector("#inputWidth");
        const color = document.querySelector("#colorPicker");
        const pixelCanvas =  document.querySelector("#pixelCanvas");
        const result = document.createDocumentFragment();
        const startingTime = performance.now();
        for (let row = 0; row < inputHeight.value; row++) {
          let tr = document.createElement('tr');
          console.log(`${row + 1}`);
          for (let col = 0; col < inputWidth.value; col++) {
            let td = document.createElement('td');
            td.innerText = col + 1;
            td.onclick = (e) => e.target.style.backgroundColor = color.value;
            tr.appendChild(td);
            result.appendChild(tr);
          }
        }
        pixelCanvas.appendChild(result);
        const endingTime = performance.now();
        console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
      })
}());



