import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFluxoComponent } from './panel-fluxo.component';

describe('PanelFluxoComponent', () => {
  let component: PanelFluxoComponent;
  let fixture: ComponentFixture<PanelFluxoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelFluxoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFluxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
