import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BattleLogComponent } from './battle-log.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BattleLogService} from './battle-log.service';

describe('BattleLogComponent', () => {
  let component: BattleLogComponent;
  let fixture: ComponentFixture<BattleLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleLogComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {
          provide: BattleLogService,
          useValue: {
            messageList: []
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
