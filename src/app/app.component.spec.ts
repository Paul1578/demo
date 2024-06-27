import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const mockResponse = 'Hello, world!';

  
  const backendServiceStub = {
    getHelloFromBackend: async () => mockResponse
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: BackendService, useValue: backendServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'portfolio-frontend-yavirac'`, () => {
    expect(component.title).toEqual('portfolio-frontend-yavirac');
  });

  it('should fetch and display message', async () => {
    
    await component.getHelloFromBackend();

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(mockResponse);
  });
});
