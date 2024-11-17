import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PrincipalModule } from './principal/principal.module';
import { UsuariosListaComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: PrincipalModule }
    ]
  },
  { path: 'usuarios', component: UsuariosListaComponent },

];
