import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from './api.config';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const http = inject(HttpClient);
  const router = inject(Router);

  return http.get(`${API_BASE_URL}auth/me`, {
    withCredentials: true
    }).pipe(

    map(() => {
      console.log('✅ /auth/me retornou OK');
      return true;
    }),

    catchError((erro) => {
      console.log('❌ /auth/me retornou erro:', erro.status);

      return of(router.createUrlTree(['/login']));
    })

  );
};