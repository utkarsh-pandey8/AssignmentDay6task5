import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewparentComponent } from './newparent.component';

describe('NewparentComponent', () => {
  let component: NewparentComponent;
  let fixture: ComponentFixture<NewparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewparentComponent]
    });
    fixture = TestBed.createComponent(NewparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
