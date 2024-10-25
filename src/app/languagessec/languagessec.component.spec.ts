import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagessecComponent } from './languagessec.component';

describe('LanguagessecComponent', () => {
  let component: LanguagessecComponent;
  let fixture: ComponentFixture<LanguagessecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagessecComponent]
    });
    fixture = TestBed.createComponent(LanguagessecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
