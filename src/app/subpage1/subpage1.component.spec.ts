import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage1Component } from './subpage1.component';

describe('SubpageComponent', () => {
  let component: Subpage1Component;
  let fixture: ComponentFixture<Subpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subpage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
