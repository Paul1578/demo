import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-frontend-yavirac';
  response = ""
  constructor(private http: HttpClient) { }

  getHello() {
    this.http.get<any>('https://demo-backend-cg46.onrender.com/')
      .subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          this.response = response;
        },
        (error) => {
          console.error('Error al obtener el mensaje:', error);
        
        }
      );
  }
}
