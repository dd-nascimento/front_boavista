import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../core/api.config';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${API_BASE_URL}api/pedidos`, {
      withCredentials: true
    }).subscribe({
      next: (resposta) => {
        console.log('Pedidos:', resposta);
      },
      error: (erro) => {
        console.error('Erro ao consultar pedidos:', erro);
      }
    });
  }
}
