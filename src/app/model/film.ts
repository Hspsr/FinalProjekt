export class Film {
    name: string;
    watched: Boolean;
    length: Number | null;
    constructor(name: string, watched: Boolean, length: Number | null){
        this.name = name;
        this.watched = watched;
        this.length = length;
    }
}