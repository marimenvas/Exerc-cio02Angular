import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { UsuariosService } from './usuarios.service';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
