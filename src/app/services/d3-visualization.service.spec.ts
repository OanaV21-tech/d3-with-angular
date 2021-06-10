import { TestBed } from '@angular/core/testing';

import { D3VisualizationService } from './d3-visualization.service';

describe('D3VisualizationService', () => {
  let service: D3VisualizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(D3VisualizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
