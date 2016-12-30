/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CursosServiceService } from './cursos-service.service';

describe('CursosServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosServiceService]
    });
  });

  it('should ...', inject([CursosServiceService], (service: CursosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
