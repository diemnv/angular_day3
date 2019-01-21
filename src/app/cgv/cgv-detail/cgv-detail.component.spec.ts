import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgvDetailComponent } from './cgv-detail.component';

describe('CgvDetailComponent', () => {
  let component: CgvDetailComponent;
  let fixture: ComponentFixture<CgvDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgvDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
