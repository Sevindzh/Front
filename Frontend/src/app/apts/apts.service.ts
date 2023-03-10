import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IApts } from "./apts";
import { routingComponents } from "../app-routing.module";

@Injectable()
export class AptsService{

    constructor(private http: HttpClient){}

    id: number = 0 

    getBuildings(): Observable<IApts[]>
    {
        return this.http.get<IApts[]>("https://localhost:5001/api/Buildings/BuildingInfoApartments/" + String(this.id));
    }
}