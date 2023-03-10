import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "./users";

@Injectable()
export class UsersService{

    constructor(private http: HttpClient){}

    getUsers(): Observable<IUser[]>
    {
        return this.http.get<IUser[]>("https://localhost:5001/api/Users");
    }
}