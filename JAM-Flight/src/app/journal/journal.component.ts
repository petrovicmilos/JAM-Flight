import { Component } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  selectedTab: string = 'pending';

  selectTab(tab: string) {
    this.selectedTab = tab;
    console.log("clicked");
  }
}
