import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // // Text
  // title =
  // {
  //   name:'Hello',
  //   old:2024,
  // };

  // // Property
  // isDisabled = true;

  // // Attributes
  // contentImage = 'Young Tri';


  // nameBtn = 'Click Me';
  // clickMessage = '';

  // handleClickMe(): void{
  //   this.clickMessage = 'Click me Hello World';
  // }

  // updateField(): void{
  //   console.log('Hello World');
  // }

  // bindingMessage = '';
}
