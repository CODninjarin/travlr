export interface Trip {
    _id: string, // Internal primary key in MongoDB 
    code: string, 
    name: string,
    length: string, 
    start: Date, 
    resort: string, 
    erPerson: string, 
    image: string,
    description: string
}