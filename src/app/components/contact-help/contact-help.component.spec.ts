import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHelpComponent } from './contact-help.component';

describe('ContactHelpComponent', () => {
  let component: ContactHelpComponent;
  let fixture: ComponentFixture<ContactHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactHelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
