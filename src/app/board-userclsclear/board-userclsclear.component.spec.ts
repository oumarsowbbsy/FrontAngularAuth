import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUserclsclearComponent } from './board-userclsclear.component';

describe('BoardUserclsclearComponent', () => {
  let component: BoardUserclsclearComponent;
  let fixture: ComponentFixture<BoardUserclsclearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardUserclsclearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardUserclsclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
