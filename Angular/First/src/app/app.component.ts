import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  n = 'Anwar';
  img='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ4RB-fxT5u5SBgNvwgN60HnfekRSNzzHKmCNegrjNFXGaWty8Ud8PqLp_6ZAMq0jOQdK2D3vqPkpYXULWXWZfrJe6ww4lYtnRbz0Xeqsulj0OnLVfCJVq1Qwt6pf-XwhvLX3sEKQ&usqp=CAc';
  title='Samsung Galaxy S23 Ultra 5G';
  price='₹1,09,999';
  isNotAvailable=false;
  fun()
  {
    alert("Product adde to cart")
  }
}
