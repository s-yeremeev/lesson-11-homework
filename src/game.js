class Game extends Square {
    constructor(){
        super(color)

        this.checkSquare = function(idsquare, event) {
                    const blueRect = document.getElementById("blueRect");
                    // получаем стиль для blueRect
                    const cs = window.getComputedStyle(blueRect);
                    
                    var left = parseInt(cs.marginLeft);
                    var top = parseInt(cs.marginTop);
                    
                    switch (event.keyCode){                        
                        case 37:  // если нажата клавиша влево
                            if(left>0)
                                
                            break;
                        case 38:   // если нажата клавиша вверх
                            if(top>0)
                               
                            break;
                        case 39:   // если нажата клавиша вправо
                            
                            break;
                        case 40:   // если нажата клавиша вниз
                            
                            break;
                            }
                        }
 
                            addEventListener("keydown", moveRect);
    }
}

switch(event.keyCode) {
    case "":{
        break
    }
    case "":{
        break
    }
    case "":{
        break
    }
    case "":{
        break
    }
    case "":{
        break
    }
     default:{
    
    break
    }
}