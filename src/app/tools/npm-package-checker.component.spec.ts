import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmPackageCheckerComponent } from './npm-package-checker.component';

describe('NpmPackageCheckerComponent', () => {
  let component: NpmPackageCheckerComponent;
  let fixture: ComponentFixture<NpmPackageCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpmPackageCheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpmPackageCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
