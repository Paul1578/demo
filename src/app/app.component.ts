import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-frontend-yavirac';

  response: string = '';

  constructor(private backendService: BackendService) {}

  getHelloFromBackend() {
    this.backendService.getHelloFromBackend().subscribe(
      (response) => {
        this.response = response;
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }
}
