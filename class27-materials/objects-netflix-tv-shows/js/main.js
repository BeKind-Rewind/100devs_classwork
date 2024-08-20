//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class FreshShow{
  constructor(showName, showTime, showRating, showGenre){
    this.name = showName
    this.runtime = showTime
    this.timeRating = showRating
    this.genre = showGenre
  }
  play(){
    console.log("start")
  }
  stop(){
    console.log("stopping")
  }
  saveToList(){
    console.log("list")
  }

}

let doggo = new FreshShow('Doggo Dragon', 120, '99%', 'Fantasy')