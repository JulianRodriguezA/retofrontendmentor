import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiModel} from '../interfaces/interface';
import {apiResponse} from '../interfaces/response.interface';
@Injectable()

export class ApiService{
    constructor(
        private _http: HttpClient
    ){
        
    }
    getLink(linkString:string):Observable<apiResponse>{
        return this._http.get("https:api.shrtco.de/v2/shorten?url="+linkString).pipe(
            map((res:ApiModel)=>{
                return {
                    original: res.result.original_link,
                    new: res.result.short_link,
                    copied:false
                };
            })
        );
    }
}