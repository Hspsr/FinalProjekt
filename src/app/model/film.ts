export class Film {
    name: string;
    watched: Boolean;
    length: Number;
    constructor(name: string, watched: Boolean, length: Number){
        this.name = name;
        this.watched = watched;
        this.length = length;
    }
}