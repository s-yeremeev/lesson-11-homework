class Game extends Square {
    constructor(...props) {
        super(...props)

        function getColor(tag) {
            // var toHex = function(color) {
            //     var hex = function(str) {
            //     let result = parseInt(str).toString(16);
            //     if (result.length < 2)
            //         result = '0' + result;
            //     return result;
            //     }
            // let rgb = color.match(/^rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)$/);
            // if (!rgb)
            // return color;
            // return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
            // }
        let style = window.getComputedStyle(tag);
        return style.backgroundColor;
        }

         this.checkSquare = function() {
             const slides = document.getElementsByClassName("slides")
             let ind2 = ind
             if(ind2 >= slides.length) ind2 = 0
             let color = getColor(document.getElementsByClassName("slides")[ind2])
                            
                            console.log(color)         
                                 
                            // switch (event.keyCode){                        
                            //     case 37:  // если нажата клавиша влево
                            //         if(left>0)
                                        
                            //         break;
                            //     case 38:   // если нажата клавиша вверх
                            //         if(top>0)
                                    
                            //         break;
                            //     case 39:   // если нажата клавиша вправо
                                    
                            //         break;
                            //     case 40:   // если нажата клавиша вниз
                                    
                            //         break;
                            //         }
                            //     }
        
                            //         addEventListener("keydown", moveRect);
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
timer.start(function () {
  game.visibleSquare() 
  game.checkSquare()
    })