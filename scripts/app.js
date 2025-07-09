function  init(){
    const gridElem = document.querySelector('.grid');
    const  cells = []
    const gridWidth = 10
    const numberOfCells = gridWidth * gridWidth
    function createGrid(){
        //for every cell create a div and append them to our grid
        //loop dor creating 100 divs
        for(let i =0; i < numberOfCells; i++){
            const cell = document.createElement('div')
            cell.classList.add('duck') //add a duck class for each cell
            cell.textContent = i //fo develop just print out the number of each cell
            cells.push(cell)
            gridElem.appendChild(cell)
        }
        console.log(cells)
    }
    createGrid()
}
document.addEventListener('DOMContentLoaded',init)