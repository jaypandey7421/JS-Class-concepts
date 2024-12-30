class Media{
    constructor(title){
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
    get title(){
      return this._title;
    }
    get ratings(){
      return this._ratings;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }

    set title(newTitle){
        this._title = newTitle;
    }
    set isCheckedOut(value){
        if(this._isCheckedOut != value){
            this._isCheckedOut = value;
        }
    }

    addRating(newRating){
        if(newRating < 1 || newRating > 5) return;
      this._ratings.push(newRating);
    }
    getAverageRating(){
        let initial = 0;
        const sum = this._ratings.reduce(
            (accumulator, currentValue)=> accumulator + currentValue, initial);

        return sum/this._ratings.length;
    }
    togleCheckOutStatus(){
      this._isCheckedOut = this._isCheckedOut? false: true;
    }
}

class Book extends Media{
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}
class Movie extends Media{
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}
class CD extends Media{
    constructor(artist, title, songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
}

const historyOfEverything = new Book("Bill Bryson", "A short History of Nearly Everything", 544);
historyOfEverything.togleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(6);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'speed', 116);
speed.togleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);