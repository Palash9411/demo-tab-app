import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  @Input() public title :string | undefined ;  
  @Input() public selected :boolean =false ;  

  ngOnInit(): void {
  }

}
