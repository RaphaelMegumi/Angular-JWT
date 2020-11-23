import { Observable } from 'rxjs';
import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.obterUsuarios().subscribe(data =>{
      this.usuarios = data;
    });
  }

}
