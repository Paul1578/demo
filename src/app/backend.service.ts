import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = 'https://demo-backend-cg46.onrender.com'; // URL del backend Nest.js

  constructor() {}

  async getHelloFromBackend() {
    try {
      const response = await fetch(`${this.apiUrl}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener la respuesta del servidor');
      }
      return await response.text(); 
    } catch (error) {
      console.error('Error al obtener el mensaje:', error);
      throw error; 
    }
  }
}
