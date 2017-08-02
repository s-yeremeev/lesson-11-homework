/**
 * Class Menue
 */
class Menue extends Square {
    constructor(...props) {
        super(...props)
        this.clickClear = document.getElementById("clearBtn")
        this.clickStatistick = document.getElementById("statBtn")
        this.clickStart = document.getElementById("startBtn")

        this.onClickClear = this.onClickClear.bind(this)
        this.clickClear.addEventListener("click", this.onClickClear)  

        this.onClickStatistick = this.onClickStatistick.bind(this)
        this.clickStatistick.addEventListener("click", this.onClickStatistick)  

        this.onClickStart = this.onClickStart.bind(this)
        this.clickStart.addEventListener("click", this.onClickStart)
        
        this.displayClass = function (start, points) {
            let visibleStart = document.getElementsByClassName("square-all")
            visibleStart[0].style.display = start; 
            let visiblePoints = document.getElementsByClassName("view-points")
            visiblePoints[0].style.display = points; 
        }

    }
    
        onClickClear() {
            this.displayClass("none", "none")
            localStorage.setItem("positive", 0)
            let points = document.getElementById("points")
            points.innerHTML = ""
            localStorage.setItem("flag", true) 
        
        }

        onClickStatistick () {
            this.displayClass("none", "block")
            let checkLocalstorage = localStorage.getItem("positive")
            let points = document.getElementById("points")
            points.innerHTML = "You scored points:" + checkLocalstorage 
            localStorage.setItem("flag", false)
        }

        onClickStart () { 
            let flag = localStorage.getItem("flag")
            if(flag) {
                this.displayClass("block", "none")           
                this.visibleSquare()   
            }
        }
}

const menue = new Menue()
