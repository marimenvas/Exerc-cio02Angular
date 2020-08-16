import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'UsuariosApi';
  usuarios: any = [];

  constructor(
    protected usuariosService: UsuariosService
  ) {
  }

  ngOnInit() {
    this.usuariosService.getUsuarios()
    .subscribe(
      (data) => {
        this.usuarios = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
  
