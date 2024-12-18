import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGithubComponent } from './button-github.component';

describe('ButtonGithubComponent', () => {
  let component: ButtonGithubComponent;
  let fixture: ComponentFixture<ButtonGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGithubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
