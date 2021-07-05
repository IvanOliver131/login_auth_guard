import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userURL = `http://localhost:3000/users`;
    //authURL = `http://localhost:3000/auth`;

    constructor(private http: HttpClient) { }

    register(cadastroObj: any) {
        let password = Md5.hashStr(cadastroObj.password);
        cadastroObj.password = password;

        const obj = {
            email: cadastroObj.email,
            password: cadastroObj.password
        }

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('bearer', "697-2fe-fc860");

        console.log(obj)
        return this.http.post(`${this.userURL}`, obj);
    }

    /*
    login(loginObj: any) {

        let password = Md5.hashStr(loginObj.password);
        loginObj.password = password;

        const obj = {
            email: loginObj.email,
            password: loginObj.password
        }

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('bearer', "697-2fe-fc860");

        return this.http.post(`${this.authURL}`, obj, {
            headers
        });
    }*/
}
