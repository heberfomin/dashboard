import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCarregamentosComponent } from './panel-carregamentos.component';

describe('PanelCarregamentosComponent', () => {
  let component: PanelCarregamentosComponent;
  let fixture: ComponentFixture<PanelCarregamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCarregamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCarregamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
