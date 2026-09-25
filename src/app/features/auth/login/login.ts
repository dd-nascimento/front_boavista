import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [
    FormsModule,
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
email: any;
password: any;
  constructor(private authService: AuthService) {}

  loginBV(){
    const dados = {
      email: this.email,
      password: this.password
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
