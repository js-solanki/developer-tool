import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexExplainerComponent } from './regex-explainer.component';

describe('RegexExplainerComponent', () => {
  let component: RegexExplainerComponent;
  let fixture: ComponentFixture<RegexExplainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegexExplainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegexExplainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
