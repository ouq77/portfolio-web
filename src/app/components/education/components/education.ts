import { Component, OnInit } from '@angular/core';
import { School } from '../definitions/school';
import { EducationService } from '../services/education';

@Component({
  selector: 'app-education',
  styleUrls: ['./education.scss'],
  templateUrl: 'education.html',
})
export class EducationComponent implements OnInit {
  public schools: Array<School>;
  private _educationService: EducationService;

  constructor(educationService: EducationService) {
    this._educationService = educationService;
  }

  ngOnInit() {
    this.loadSchools();
    // this.loadCodeSchool();
  }

  loadSchools(): void {
    EducationService.getSchools().then(
      schools => this.schools = schools,
    );
  }
}
