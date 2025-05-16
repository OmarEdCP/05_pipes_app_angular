import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyCasePipe } from '../../pipes/canfly-case.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyCasePipe, HeroColorPipe,],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Alejandro');
  upperCase = signal(true);

  heroes = signal(heroes);
}
