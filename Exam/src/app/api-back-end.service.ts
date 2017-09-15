import { Injectable } from '@angular/core';
import {Http, Headers,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiBackEndService {
	private url = 'https://api.github.com/';

  constructor(private http:Http) { }
  ngOnInit(){

  }

  loadFollowersDude(user){
  	return this.http.get(this.url+"users/"+user+"/followers").map((res: Response) => res.json());
  }

  loadDudes(user:any):Observable<any>{
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //console.log("CARGANDO SERVICIOS");
    return this.http.get(this.url+"search/users?q="+user).map((res: Response) => res.json());
  }
  loadDude(user:any){
  	//https://api.github.com/users/YOUR_NAME
  	return this.http
      .get(this.url+"users/"+user)
      .map((response) => response.json())
      .toPromise();
  }
}
