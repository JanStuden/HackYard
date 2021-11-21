import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.page.html',
  styleUrls: ['./event-view.page.scss'],
})
export class EventViewPage implements OnInit {

  id: string

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
