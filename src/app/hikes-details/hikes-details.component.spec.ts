import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikesDetailsComponent } from './hikes-details.component';

describe('HikesDetailsComponent', () => {
  let component: HikesDetailsComponent;
  let fixture: ComponentFixture<HikesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HikesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HikesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
