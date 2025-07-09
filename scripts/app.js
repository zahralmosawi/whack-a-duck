function  init(){
    const gridElem = document.querySelector('.grid');
    const  cells = []
    const gridWidth = 10
    const numberOfCells = gridWidth * gridWidth
    const scoreElem = document.querySelector('#score')
    const soundElem = document.querySelector('#sound')
    const resultElem = document.querySelector('#result')

    let duckPosition = 24;
    let score = 0;
    let totalDucks = 0;

    function addDuck(){
        cells[duckPosition].classList.add('duck') //add duck class where the duck is(cell)
        totalDucks++;
    } 
    function removeDuck(){
        cells[duckPosition].classList.remove('duck')
    }
    function endGame(){
        // resultElem.textContent = `Game Over,  Your score is ${score}`
        alert('Game Over,  Your score is ' +score)
        score = 0
        totalDucks = 0
    }
    function play(){
        setInterval(()=>{
            if(totalDucks < 10){
            removeDuck()
            duckPosition = Math.floor(Math.random() * numberOfCells)
            addDuck()   
            }else{
                endGame()
            }
        },3000)
    }
    function handleClick(event){
        //empty cell or cell with duck
        if(event.target.classList.contains('duck')){
            soundElem.pause()
            soundElem.currentTime = 0
            score += 1
            scoreElem.textContent = `Score: ${score}`
            soundElem.play()
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