import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEcommerceUserComponent } from './save-ecommerce-user.component';

describe('SaveEcommerceUserComponent', () => {
  let component: SaveEcommerceUserComponent;
  let fixture: ComponentFixture<SaveEcommerceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveEcommerceUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveEcommerceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
