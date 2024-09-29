import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './page.routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { QrComponent} from './qr/qr.component';
import { VistaAlumnoComponent } from './vista-alumno/vista-alumno.component';
import { VistaProfesorComponent } from './vista-profesor/vista-profesor.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    QrComponent,
    VistaAlumnoComponent,
    VistaProfesorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PageModule { }
