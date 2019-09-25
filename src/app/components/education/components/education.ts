import { Component, OnInit } from '@angular/core'
import { School } from '../definitions/school'
import { EducationService } from '../services/education'

@Component({
  selector: 'app-education',
  styleUrls: ['./education.scss'],
  templateUrl: 'education.html',
})
export class EducationComponent implements OnInit {
  public schools: Array<School>

  constructor() {
  }

  ngOnInit() {
    this.loadSchools()
  }

  loadSchools(): void {
    EducationService.getSchools().then(
      schools => this.schools = schools,
    )
  }
}
