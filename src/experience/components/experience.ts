import {Component, OnInit} from '@angular/core';
import {ExperienceService} from '../services/experience';
import {Job} from '../definitions/job';

@Component({
  selector: 'experience',
  styleUrls: ['./experience.css'],
  templateUrl: 'experience.htm',
})
export class ExperienceComponent implements OnInit {
  public jobs: Array<Job>;

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    ExperienceService.getJobs().then(
      jobs =>
        this.jobs = jobs,
    );
  }
}
