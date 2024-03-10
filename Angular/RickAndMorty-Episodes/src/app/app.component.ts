import { Component } from '@angular/core';
import { EpisodeService } from './episode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Episodes :any[]=[]
  constructor(private ep:EpisodeService)
  {
    this.ep.getData().subscribe((data:any)=>this.Episodes=data)
  }
}
