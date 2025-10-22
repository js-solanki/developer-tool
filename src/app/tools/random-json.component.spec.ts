import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomJsonComponent } from './random-json.component';

describe('RandomJsonComponent', () => {
  let component: RandomJsonComponent;
  let fixture: ComponentFixture<RandomJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
