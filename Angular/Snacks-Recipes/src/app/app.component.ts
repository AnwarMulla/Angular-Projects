import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  recipes: any[]=[]
  constructor()
  {
    fetch('https://dummyjson.com/recipes')
    .then((res)=>res.json())
    .then((data)=>(this.recipes=data.recipes));
  }

}
