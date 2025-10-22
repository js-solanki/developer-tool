import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRequestComposerComponent } from './api-request-composer.component';

describe('ApiRequestComposerComponent', () => {
  let component: ApiRequestComposerComponent;
  let fixture: ComponentFixture<ApiRequestComposerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiRequestComposerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiRequestComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
