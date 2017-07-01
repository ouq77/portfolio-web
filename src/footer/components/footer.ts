import {Component, OnInit} from '@angular/core';
import {FooterService} from '../services/footer';
import {Link} from '../definitions/link';

@Component({
  selector: 'footer',
  styleUrls: ['./footer.css'],
  templateUrl: 'footer.htm',
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
      links => this.links = <Array<Link>>links,
    );
  }
}
