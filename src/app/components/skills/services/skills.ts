import { Injectable } from '@angular/core'
import { Skill } from '../definitions/skill'
import { SKILLS } from '../models/skills'

@Injectable()
export class SkillService {

  static getSkills(): Promise<Array<Skill>> {
    return Promise.resolve(SKILLS)
  }
}
