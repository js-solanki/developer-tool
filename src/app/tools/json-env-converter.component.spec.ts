import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonEnvConverterComponent } from './json-env-converter.component';

describe('JsonEnvConverterComponent', () => {
  let component: JsonEnvConverterComponent;
  let fixture: ComponentFixture<JsonEnvConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonEnvConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonEnvConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
