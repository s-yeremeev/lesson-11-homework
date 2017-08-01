/**
 * Class Game
 */
class Game extends Square {
    constructor(...props) {
        super(...props)

        function getColor(tag) {
            let style = window.getComputedStyle(tag);
            return style.backgroundColor;
        }

        this.checkSquare = function(keyCode) {
            const slides = document.getElementsByClassName("slides")
            let color = getColor(document.getElementsByClassName("slides")[ind])
            let checkDataLocalstorage = localStorage.getItem("positive")

            switch (keyCode){                        
                case 98:  // b
                    if(color == "rgb(0, 0, 255)") localStorage.setItem("positive", +checkDataLocalstorage + 1 )                    
                    break;
                case 103:   // g
                    if(color == "rgb(173, 255, 47)") localStorage.setItem("positive", +checkDataLocalstorage + 1 )
                
                    break;
                case 114:   // r
                if(color == "rgb(255, 0, 0)") localStorage.setItem("positive", +checkDataLocalstorage + 1 )                    
                    break;
                default:  
                console.log("Error")
                    break;
            }
        }
}
}

function Timer(ms) {
    this.ms = ms
    this.interval = null
}

Timer.prototype.start = function (callback) {
    this.interval = setInterval(callback, this.ms)
    return this
}

const game = new Game()
const timer = new Timer(1000)
localStorage.setItem("positive", 0)
timer.start(function () {  
        document.onkeypress = function (e) {
            let keyCode = e.keyCode
            if(keyCode !== undefined){
                game.checkSquare(keyCode)
                game.visibleSquare() 
               
            }
        }
})