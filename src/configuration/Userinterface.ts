export interface User{
    _id?: any
    email: string,
    first_name: string
    last_name: string,
    password: string
}

export interface UserFromClient{
    email: string,
    password: string
}