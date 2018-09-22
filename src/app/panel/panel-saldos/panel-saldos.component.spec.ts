import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSaldosComponent } from './panel-saldos.component';

describe('PanelSaldosComponent', () => {
  let component: PanelSaldosComponent;
  let fixture: ComponentFixture<PanelSaldosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSaldosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
