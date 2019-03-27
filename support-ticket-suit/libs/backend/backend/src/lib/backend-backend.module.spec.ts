import { async, TestBed } from '@angular/core/testing';
import { BackendBackendModule } from './backend-backend.module';

describe('BackendBackendModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BackendBackendModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BackendBackendModule).toBeDefined();
  });
});
