import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-frontend-yavirac';
  response: any = '';

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.getHelloFromBackend();
  }

  async getHelloFromBackend() {
    try {
      this.response = await this.backendService.getHelloFromBackend();
    } catch (error) {
      console.error('Error al obtener el mensaje:', error);
      
    }
  }
}
