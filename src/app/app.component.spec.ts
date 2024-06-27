import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service'; // Importa tu servicio
import { of } from 'rxjs'; // Importa 'of' desde rxjs para simular observables

describe('AppComponent', () => {
  let backendServiceStub: Partial<BackendService>; // Declara el stub del servicio

  beforeEach(async () => {
    backendServiceStub = {
      getHelloFromBackend: () => of('Hello from backend') // Define un stub para el método del servicio
    };

    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: BackendService, useValue: backendServiceStub } // Provee el stub del servicio
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'portfolio-frontend-yavirac'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio-frontend-yavirac');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, portfolio-frontend-yavirac');
  });

  it('should fetch data from backend and update response', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const backendService = TestBed.inject(BackendService); // Obtén el servicio mockeado

    spyOn(backendService, 'getHelloFromBackend').and.callThrough(); // Espía y llama al método real

    app.getHelloFromBackend(); // Llama al método que hace la petición al backend

    fixture.detectChanges(); // Detecta los cambios después de que la petición se complete

    expect(app.response).toEqual('Hello from backend'); // Verifica que la respuesta se haya actualizado correctamente
  });
});
