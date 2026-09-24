import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
import { API_BASE_URL } from '../../core/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(dados: LoginRequest) {
    return this.http.post<LoginResponse>(
        `${API_BASE_URL}auth/login`,
        dados
    );
    }
}