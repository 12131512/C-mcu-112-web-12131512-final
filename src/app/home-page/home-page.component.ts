import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [CommonModule, HeaderComponent],
})
export class HomePageComponent {}
