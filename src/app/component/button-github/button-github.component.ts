import { Component } from '@angular/core';

@Component({
  selector: 'app-button-github',
  imports: [],
  templateUrl: './button-github.component.html',
  styleUrl: './button-github.component.css'
})
export class ButtonGithubComponent {
  redirectToGithub() {
    window.location.href = 'https://github.com/HiroshiGamma';
  }
}
