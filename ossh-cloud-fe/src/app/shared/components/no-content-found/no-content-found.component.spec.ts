import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoContentFoundComponent } from './no-content-found.component';

describe('NoContentFoundComponent', () => {
  let component: NoContentFoundComponent;
  let fixture: ComponentFixture<NoContentFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoContentFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoContentFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
