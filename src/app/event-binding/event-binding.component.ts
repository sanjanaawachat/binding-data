import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  productAddstatus:string=`NO product id added yet!!!!`
    productRemovestatus:string=`NO product id added yet!!!!`;
  constructor() { }

  ngOnInit(): void {
  }
  onproAdd(){
    console.log('clicked');
    this.productAddstatus="product is added to cart!!!!"
    
  }

  onproRemove(){
      console.log('clicked');
    this.productRemovestatus="product is remove to cart!!!!"
  }
  onbtnclick(input: HTMLInputElement) {
    console.log(input.value);
    alert(input.value);
  }

}
