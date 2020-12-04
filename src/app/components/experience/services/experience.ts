import { Injectable } from '@angular/core'

import { Job } from '../definitions/job'
import { JOBS } from '../models/jobs'

@Injectable()
export class ExperienceService {

  static getJobs(): Promise<Array<Job>> {
    return Promise.resolve(JOBS)
  }
}
