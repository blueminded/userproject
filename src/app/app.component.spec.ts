import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IData } from './models/data.model';
import { By } from '@angular/platform-browser';
import { IName } from './models/name.model';
import { UserModule } from './user/user.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, UserModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should the info of the user', () => {
    const name: IName = {
      first: 'Joana',
      last: 'Doe',
    };

    const user: IData = {
      gender: 'Female',
      knowFor: 'Demo info',
      profession: 'Web dev',
      name,
    };

    component.user = user;
    fixture.detectChanges();

    const pElements = fixture.debugElement.queryAll(By.css('p'));
    console.log(pElements);
    expect(pElements.length).toBe(4);
  });
});
