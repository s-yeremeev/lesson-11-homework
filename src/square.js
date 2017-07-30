class Square {
    constructor(color) {
    this.color = color

    this.canvasAdd = function () {
      const canvas = document.getElementById("newSquare");  
      if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = color;
      ctx.fillRect(25,25,100,100);
      }
    }
    }
}

// function Timer(ms) {
//     this.ms = ms
//     this.interval = null
// }

// /**
//  * function for start count in ms
//  */
// Timer.prototype.start = function (callback) {
//     this.interval = setInterval(callback, this.ms)
//     return this
// }

// /**
//  * function for clear interval
//  */
// Timer.prototype.stop = function () {
//     clearInterval(this.interval)
//     return this
// }

// /**
//  * function for stop count in ms
//  */
// Timer.prototype.stopAfter = function (ms, callback) {
//     setTimeout(callback, ms)
//     return this
// }

// const sq = new Square("red")
//     sq.canvasAdd()

// const timer = new Timer(1000)
// timer.start(function () {
//      if(color == "red"){
//          let col = "blue"   
//          console.log(col) 
//      } else {
//          let col = "red"
//          console.log(col) 
//      }
//         const sq = new Square(col)
//         console.log(col) 
//         sq.canvasAdd()
    
//           })
//   .stopAfter(15000, timer.stop.bind(timer))