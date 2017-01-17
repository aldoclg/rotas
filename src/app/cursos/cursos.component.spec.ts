import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { CursosService } from './cursos.service';

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { CursosComponent } from './cursos.component';

class RouterStub {
  events: EventEmitter<Event> = new EventEmitter<Event>();
  navigateByUrl(url: string) { return url; }
}

describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CursosComponent],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
          { path: 'cursos', component: CursosComponent },
        ])
      ],
      providers: [
        CursosService,
        { provide: ActivatedRoute, useValue: { 'queryParams': Observable.from([{ 'pagina': 1 }]) } },
        { provide: Router, useClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* it('should go to url',
     async(inject([Router, Location], (router: Router, location: Location) => {
 
     let fixture = TestBed.createComponent(CursosComponent);
     fixture.detectChanges();
 
     fixture.debugElement.query(By.css('a')).nativeElement.click();
     fixture.whenStable().then(() => {
       expect(location.path()).toEqual('/settings/testing/edit/1');
       console.log('after expect');
     });
   })));*/

});
