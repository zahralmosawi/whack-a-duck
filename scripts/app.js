function  init(){
    const gridElem = document.querySelector('.grid');
    function createGrid(){
        //for every cell create a div and append them to our grid
        //loop dor creating 100 divs
        for(let i =0; i < 100; i++){
            const cell = document.createElement('div')
            cell.textContent = i //fo develop just print out the number of each cell
            gridElem.appendChild(cell)
        }
    }
    createGrid()
}
document.addEventListener('DOMContentLoaded',init)