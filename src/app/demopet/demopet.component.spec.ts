import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemopetComponent } from './demopet.component';

describe('DemopetComponent', () => {
  let component: DemopetComponent;
  let fixture: ComponentFixture<DemopetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemopetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemopetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
