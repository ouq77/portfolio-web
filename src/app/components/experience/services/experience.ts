import { Job } from '../definitions/job';
import { JOBS } from '../models/jobs';

export class ExperienceService {

  static getJobs(): Promise<Array<Job>> {
    return Promise.resolve(JOBS);
  }
}
