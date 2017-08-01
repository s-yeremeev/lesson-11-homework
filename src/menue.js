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
    }

    onClickClear () {
        localStorage.setItem("positive", 0)
    }

    onClickStatistick () {
        let checkLocalstorage = localStorage.getItem("positive")
        let points = document.getElementById("points")
        points.innerHTML = "You scored points:" + checkLocalstorage        
    }

    onClickStart () {
       let sq = new Square()
       sq.visibleSquare()     
    }
}

const menue = new Menue()
