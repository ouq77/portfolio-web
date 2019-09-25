import { Component, OnInit } from '@angular/core'
import { Job } from '../definitions/job'
import { ExperienceService } from '../services/experience'

@Component({
  selector: 'app-experience',
  styleUrls: ['./experience.scss'],
  templateUrl: 'experience.html',
})
export class ExperienceComponent implements OnInit {
  public jobs: Array<Job>

  ngOnInit(): void {
    this.loadJobs()
  }

  loadJobs(): void {
    ExperienceService.getJobs().then(
      jobs =>
        this.jobs = jobs,
    )
  }
}
