import { ActivatedRoute, Router } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CursoDetalheComponent } from './curso-detalhe.component';
import { CursosService } from './../cursos.service';

class RouterStub {
  events: EventEmitter<Event> = new EventEmitter<Event>();
  navigateByUrl(url: string) { return url; }
}

describe('CursoDetalheComponent', () => {
  let component: CursoDetalheComponent;
  let fixture: ComponentFixture<CursoDetalheComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [CursoDetalheComponent],
      imports: [RouterTestingModule.withRoutes([
        { path: 'curso/:id', component: CursoDetalheComponent }
      ])
      ],
      providers: [
        CursosService,
        { provide: ActivatedRoute, useValue: { 'params': Observable.from([{ 'id': 1 }]) } },
        { provide: Router, useClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(fixture).toBeDefined();
    }
  );

});
