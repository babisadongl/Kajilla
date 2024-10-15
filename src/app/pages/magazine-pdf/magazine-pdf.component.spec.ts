import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazinePdfComponent } from './magazine-pdf.component';

describe('MagazinePdfComponent', () => {
  let component: MagazinePdfComponent;
  let fixture: ComponentFixture<MagazinePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagazinePdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
