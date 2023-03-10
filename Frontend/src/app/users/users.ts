export interface IUser{
    userID: number
    uName: string
    uSurame: string
    uEmail: string
    passwordHash: any
    passwordSalt: any
    isAdmin: Boolean
}