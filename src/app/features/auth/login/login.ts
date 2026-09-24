import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  constructor(private authService: AuthService) {}

  testarLogin() {

    const dados = {
      email: 'developer@boavista.net',
      password: '123@123'
    };

    this.authService.login(dados).subscribe({
      next: (resposta) => {
        console.log('Login realizado!');
        console.log(resposta);
      },
      error: (erro) => {
        console.error('Erro no login:', erro);
      }
    });
  }
}
