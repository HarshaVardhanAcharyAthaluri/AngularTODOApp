import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetastComponent } from './createtast.component';

describe('CreatetastComponent', () => {
  let component: CreatetastComponent;
  let fixture: ComponentFixture<CreatetastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
