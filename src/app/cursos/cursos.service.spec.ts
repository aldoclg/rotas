/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CursosService } from './cursos.service';

describe('CursosService', () => {

  let service: CursosService

  beforeEach(() => {

    service = new CursosService;

    TestBed.configureTestingModule({
      providers: [CursosService]
    });

  });

  it('should return defined from getCurso when id is valid', inject([CursosService], (service: CursosService) => {
    expect(service).toBeTruthy();
  }));

});
