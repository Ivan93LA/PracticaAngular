import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <h1> Hola mundo desde Angular y desde {{city.toUpperCase()}} </h1> `,
  styles: ``
})
export class AppComponent {
  city = 'Madrid'
}
