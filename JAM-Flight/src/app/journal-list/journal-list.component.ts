import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent {
  @Input() selectedTab: string;
}
