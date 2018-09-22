import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelViagensComponent } from './panel-viagens.component';

describe('PanelViagensComponent', () => {
  let component: PanelViagensComponent;
  let fixture: ComponentFixture<PanelViagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelViagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
