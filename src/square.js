var ind = 1
class Square {
    constructor(...props) {
    this.visibleSquare = function () {
                          let i = 0
                          let slides = document.getElementsByClassName("slides")
                          for (i = 0; i < slides.length; i++) {
                              slides[i].style.display = "none"; 
                          }
                          ind++;
                          if (ind > slides.length) {
                             ind = 1
                          } 
                          slides[ind-1].style.display = "block"; 
      }
    }
}

const square = new Square()
