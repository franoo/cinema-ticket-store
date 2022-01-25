export class Movie{
    constructor(
        public id:number,
        public title:string,
        public description:string,
        public genre:string,
        public duration:number,
        public releaseDate:Date,
    ){}
}