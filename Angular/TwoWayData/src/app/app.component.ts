import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
// val:any;
// x:any;
// fun()
// {
//   const el=document.getElementById('nam') as HTMLInputElement;
//   this.val=el.value;
//   alert(this.val)
// }
name!:string;
Email!:string;
pass!:string;
show()
{
  alert(`Successfully Submitted \n ${this.name} \n ${this.Email} \n ${this.pass}`)
}
}
