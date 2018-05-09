import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingModalConfComponent } from './listing-modal-conf-component';

describe('ListingComponentComponent', () => {
  let component: ListingModalConfComponent;
  let fixture: ComponentFixture<ListingModalConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingModalConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingModalConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
