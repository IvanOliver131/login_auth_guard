import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from '../baseService';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseService {
    authURL = `http://localhost:3000/auth`;

    constructor(private h: HttpClient) {
        super(h);
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
        })

            .pipe(
                map((data: any) => {
                    let result = data.result[0];

                    localStorage.setItem("token", result.token);
                    localStorage.setItem("user_id", result.id);

                    return data.result;
                }),
            );
    }*/

    login(loginObj: any) {
        let password = Md5.hashStr(loginObj.password);
        loginObj.password = password;

        const obj = {
            email: loginObj.email,
            password: loginObj.password
        }

        return this.http.post(this.authURL, obj, {
            headers: this.getCommonHeaders(false)
        })
            .pipe(
                map((data: any) => {
                    //
                    if (data.status != "200") {
                        catchError(this.handleErrors);
                    }

                    localStorage.setItem("userId", data.id);
                    localStorage.setItem("token", data.token);

                    return data;
                }),
                catchError(this.handleErrors)
            );
    }
}
