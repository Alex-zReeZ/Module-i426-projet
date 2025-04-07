import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikesSearchListComponent } from './hikes-search-list.component';

describe('HikesSearchListComponent', () => {
  let component: HikesSearchListComponent;
  let fixture: ComponentFixture<HikesSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HikesSearchListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HikesSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
