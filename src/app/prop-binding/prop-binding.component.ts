import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.scss']
})
export class PropBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userName:string="sanjana awachat";
  info:string = "i love angular";
  infocontainer:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat odio itaque beatae deserunt illo voluptatum molestiae sit necessitatibus nemo enim neque reiciendis nobis quidem est omnis veniam nesciunt dolore! Quibusdam vel quasi consectetur porro dolorem corporis numquam repellendus nisi vero totam, amet magni in?";

}
