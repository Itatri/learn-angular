import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.pip';
import { UppercasePipe } from './shared/pipes/Uppercase.pipe';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [ 
     RouterOutlet,
     HeaderLayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
