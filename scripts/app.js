function  init(){
    const gridElem = document.querySelector('.grid');
    const  cells = []
    const gridWidth = 10
    const numberOfCells = gridWidth * gridWidth
    const scoreElem = document.querySelector('#score')

    let duckPosition = 24;
    let score = 0;

    function addDuck(){
        cells[duckPosition].classList.add('duck') //add duck class where the duck is(cell)
    } 
    function removeDuck(){
        cells[duckPosition].classList.remove('duck')
    }
    function play(){
        setInterval(()=>{
            removeDuck()
            duckPosition = Math.floor(Math.random() * numberOfCells)
            addDuck()
        },3000)
    }
    function handleClick(event){
        //empty cell or cell with duck
        if(event.target.classList.contains('duck')){
            score += 1
            scoreElem.textContent = `Score: ${score}`
        }
    }

    function createGrid(){
        //for every cell create a div and append them to our grid
        //loop dor creating 100 divs
        for(let i =0; i < numberOfCells; i++){
            const cell = document.createElement('div')
            // cell.classList.add('duck') //add a duck class for each cell
            cell.textContent = i //fo develop just print out the number of each cell
            cell.addEventListener('click', handleClick)
            cells.push(cell)
            gridElem.appendChild(cell)
        }
        console.log(cells)
    }
    createGrid();
    play();
}
document.addEventListener('DOMContentLoaded',init)