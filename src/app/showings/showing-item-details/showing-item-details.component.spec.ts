import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingItemDetailsComponent } from './showing-item-details.component';

describe('ShowingItemDetailsComponent', () => {
  let component: ShowingItemDetailsComponent;
  let fixture: ComponentFixture<ShowingItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
