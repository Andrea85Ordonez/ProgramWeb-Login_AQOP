import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatCardModule } from '@angular/material/card'; 
import { MatTableModule } from '@angular/material/table';  
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-usuarios-lista',
  standalone: true,
  imports: [MatCardModule, MatTableModule, CommonModule],  
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UsuariosListaComponent implements OnInit {
  users: any[] = [];  
  displayedColumns: string[] = ['nombre', 'email', 'telefono', 'direccion','contraseñas']; 

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // obtener los usuarios
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;  
        console.log(this.users);
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
