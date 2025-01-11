import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Airport } from "src/app/core/types/type";

@Injectable({
    providedIn: 'root',
})
export class AirportService {
    private apiUrl = 'http://localhost:8080/api/airports/search';

    constructor(private http: HttpClient) { }

    searchAirports(query: string): Observable<Airport[]> {
        return this.http.get<Airport[]>(`${this.apiUrl}?query=${query}`);
    }
}