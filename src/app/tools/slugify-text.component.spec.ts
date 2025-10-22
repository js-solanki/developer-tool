import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlugifyTextComponent } from './slugify-text.component';

describe('SlugifyTextComponent', () => {
  let component: SlugifyTextComponent;
  let fixture: ComponentFixture<SlugifyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlugifyTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlugifyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
