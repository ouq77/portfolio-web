import { Skill } from '../definitions/skill'
import { SKILLS } from '../models/skills'

export class SkillService {

  static getSkills(): Promise<Array<Skill>> {
    return Promise.resolve(SKILLS)
  }
}
