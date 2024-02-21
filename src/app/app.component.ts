import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    { 
      title: 'Neat Tree', 
      image: 'assets/tree.jpeg',
      username: 'nature', 
      content: 'I saw this neat tree today'
    },
    { 
      title: 'Snowy Mountain', 
      image: 'assets/mountain.jpeg',
      username: 'mountainlover', 
      content: 'Here is a picture of a snowy mountain'
    },
    { 
      title: 'Moutain Biking', 
      image: 'assets/biking.jpeg',
      username: 'biking12222', 
      content: 'I did some biking today'
    }
  ]
}
