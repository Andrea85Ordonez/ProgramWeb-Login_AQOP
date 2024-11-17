import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../services/user.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule,
    RouterModule, MatTabsModule, 
    MatInputModule, MatButtonModule, 
    FormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'ProgramWeb-Login_AQOP';

  // variables 
  log_gmail: string = '';
  log_password: string = '';
  reg_email: string = '';
  reg_password: string = '';
  reg_conf_password: string = '';

  hidePassword: boolean = true;
  constructor(private router: Router, private userService: UserService) {}
  verContrase() {
    this.hidePassword = !this.hidePassword;
  }
  ingresar() {
    if (!this.log_gmail || !this.log_password) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    this.userService.getUsers().subscribe(
      (users) => {
        const validUser = users.find(
          user => user.email === this.log_gmail && user.password === this.log_password
        );

        if (validUser) {
          alert(`¡Bienvenido, ${validUser.name}!`);
          console.log('Inicio de sesión exitoso:', validUser);
          this.router.navigate(['/home']);
        } else {
          alert('Correo o contraseña incorrectos.');
        }
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
        alert('Error de conexión con el servidor. Intente más tarde.');
      }
    );
  }

  registrar() {
    console.log('Registrando usuario...');
  }
}
