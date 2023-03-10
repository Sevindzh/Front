
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmailValidator } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map,catchError } from 'rxjs/operators';
import { UserDTO } from "./userDTO";

@Injectable()
export class AuthService{
    url = 'https://localhost:5001/api/Auth/login'
    token: any;
    constructor(private http: HttpClient){}

    login(email: string, password: string)
    {
        let result: string
        let DTO = new UserDTO(email,password)
        this.http.post(this.url, DTO,{responseType: 'text'}).subscribe((resp: any) =>
        {
            localStorage.setItem('auth_token', resp);
        });
        return localStorage.getItem('auth_token');
    };
}