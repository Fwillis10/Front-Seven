import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  registro;
 

  constructor(private userService: UserService ) {}
 
  ngOnInit() {
    this.registro = {
      usuario: '',
      endereco: '',
      preco: '',
     
      
    };
  }
  registroUsuario() {
    this.userService.registroNewUsuario(this.registro).subscribe()
      response => {
        alert('Usuario ' + this.registro.usuario + 'foi criado!' )
      }
      error => console.log('erro', error);
        
      
    
    }
  }



