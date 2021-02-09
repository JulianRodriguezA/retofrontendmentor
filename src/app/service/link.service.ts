import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class ApiService{
    constructor(
        private _http: HttpClient
    ){
        
    }
    getLink(linkString):Observable<any>{
        return this._http.get("https:api.shrtco.de/v2/shorten?url="+linkString)
    }
}