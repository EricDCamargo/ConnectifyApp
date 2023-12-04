import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientModalComponent } from './create-client-modal.component';

describe('CreateClientModalComponent', () => {
  let component: CreateClientModalComponent;
  let fixture: ComponentFixture<CreateClientModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateClientModalComponent]
    });
    fixture = TestBed.createComponent(CreateClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
