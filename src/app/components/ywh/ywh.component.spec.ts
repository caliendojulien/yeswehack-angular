import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YwhComponent } from './ywh.component';

describe('YwhComponent', () => {
  let component: YwhComponent;
  let fixture: ComponentFixture<YwhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YwhComponent]
    });
    fixture = TestBed.createComponent(YwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
