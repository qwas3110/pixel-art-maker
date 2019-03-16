

(function makeGrid() {
    const color = document.getElementById('colorPicker');
    const inputHeight = document.getElementById('inputHeight');
    const inputWidth = document.getElementById('inputWidth');
    const pixelCanvas = document.getElementById('pixelCanvas');

    document
        .getElementById('sizePicker')
        .addEventListener('submit' , function (e) {
            e.preventDefault();
            pixelCanvas.innerHTML = '';
            const result = document.createDocumentFragment();

            for (let row = 0; row < inputHeight.value; row++) {
                let tr = document.createElement('tr');
                for (let col = 0; col < inputWidth.value; col++) {
                    let td = document.createElement('td');
                    td.textContent = col + 1;
                    td.onclick = (e) => {
                        e.target.style.backgroundColor = color.value;
                    };
                    tr.appendChild(td);
                    result.appendChild(tr);
                }
            }
            pixelCanvas.appendChild(result);
        })
}());
