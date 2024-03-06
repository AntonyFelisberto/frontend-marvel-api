export interface Characters {
    id:string,
    name:string,
    description:string,
    thumbnail:string,
    comics?:[],
    series?:[],
    stories?:[],
    events?:[]
}