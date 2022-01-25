import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingItemComponent } from './showing-item.component';

describe('ShowingItemComponent', () => {
  let component: ShowingItemComponent;
  let fixture: ComponentFixture<ShowingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
