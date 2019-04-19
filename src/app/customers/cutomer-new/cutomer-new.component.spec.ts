import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerNewComponent } from './cutomer-new.component';

describe('CutomerNewComponent', () => {
  let component: CutomerNewComponent;
  let fixture: ComponentFixture<CutomerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
