import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSearchComponent } from './master-search.component';

describe('MasterSearchComponent', () => {
  let component: MasterSearchComponent;
  let fixture: ComponentFixture<MasterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
