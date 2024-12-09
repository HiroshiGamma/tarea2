import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../component/card/card.component';
import { ButtonGithubComponent } from '../../component/button-github/button-github.component';
import { ButtonContactoComponent } from '../../component/button-contacto/button-contacto.component';
import { ExplabComponent } from '../../component/explab/explab.component';
import { SobremiComponent } from '../../component/sobremi/sobremi.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardComponent, ButtonGithubComponent, ButtonContactoComponent, ExplabComponent, SobremiComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
