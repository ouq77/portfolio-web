import { Component, OnInit } from '@angular/core';
import { Link } from '../definitions/link';
import { FooterService } from '../services/footer';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.scss'],
  templateUrl: 'footer.html',
})
export class FooterComponent implements OnInit {
  public links: Array<Link>;
  public currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    FooterService.getLinks().then(
      links => this.links = <Array<Link>> links,
    );
  }
}
