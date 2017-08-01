var ind = 1
/**
 * Class Square
 */
class Square {
    constructor(...props) {

    this.visibleSquare = function () {
        let i = 0
        let slides = document.getElementsByClassName("slides")
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        ind = Math.floor(Math.random() * (slides.length - 0)) 
        slides[ind].style.display = "block"; 
      }
    }
}

const square = new Square()
