import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddClientModalComponent } from './edit-add-client-modal.component';

describe('EditAddClientModalComponent', () => {
  let component: EditAddClientModalComponent;
  let fixture: ComponentFixture<EditAddClientModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddClientModalComponent]
    });
    fixture = TestBed.createComponent(EditAddClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
