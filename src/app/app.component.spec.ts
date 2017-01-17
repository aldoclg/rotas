import { DebugElement, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

class RouterStub {
  events: EventEmitter<Event> = new EventEmitter<Event>();
  navigateByUrl(url: string) { return url; }
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CommonModule,
        RouterTestingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute },
      ]
    });

    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
