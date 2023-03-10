export class UserDTO{
    UserEmail: string
    UserPassword: string
    constructor(Email: string,Password: string)
    {
        this.UserEmail = Email
        this.UserPassword = Password
    }
}