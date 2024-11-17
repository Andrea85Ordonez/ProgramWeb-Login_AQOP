import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { PrincipalModule } from './principal/principal.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule, LoginModule, HomeModule, PrincipalModule
  ]
})
export class AppModule { }
