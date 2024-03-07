import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-loader',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <h1>Hola mundo</h1>
  `
})

export class UserLoaderComponent {

}
