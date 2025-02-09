import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JflSideMenuComponent } from './jfl-side-menu.component';
import { provideRouter } from '@angular/router';

describe('JflSideMenuComponent', () => {
  let component: JflSideMenuComponent;
  let fixture: ComponentFixture<JflSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JflSideMenuComponent],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JflSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud call onSign when logout button is clicked', () => {

    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    button.click();

    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('shoud call onSignOut when logout button is clicked', () => {

    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    button.click();

    expect(component.onSignOut.emit).toHaveBeenCalled();


  });

});
