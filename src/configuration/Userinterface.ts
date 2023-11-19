export interface User{
    _id?: any
    email: string,
    firstName: string
    lastName: string,
    password: string
}

export interface UserFromClient{
    email: string,
    password: string
    id?:string
}