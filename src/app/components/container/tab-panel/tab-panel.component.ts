import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit , AfterContentInit {

  constructor() { }

  @ContentChildren(TabComponent) 
  tabs  : QueryList<TabComponent>| undefined  ;

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.tabs)
  }
  selectTab(tab:TabComponent){
      this.tabs?.forEach(ele=>ele.selected = false);
      tab.selected = true ; 
  }

}
