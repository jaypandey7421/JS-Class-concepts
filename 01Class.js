class Box{
    constructor(l, b, h){
        this._length = l;
        this._breadth = b;
        this._height = h;
    }

    get length(){
        return this._length;
    }
    get breadth(){
        return this._breadth;
    }
    get height(){
        return this._height;
    }
}

const smallBox = new Box(4,5,6);
console.log(`Height: ${smallBox.height}`);
