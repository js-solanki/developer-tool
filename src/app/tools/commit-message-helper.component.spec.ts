import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitMessageHelperComponent } from './commit-message-helper.component';

describe('CommitMessageHelperComponent', () => {
  let component: CommitMessageHelperComponent;
  let fixture: ComponentFixture<CommitMessageHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitMessageHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitMessageHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
