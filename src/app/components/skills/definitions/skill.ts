/**
 * Interface for a Skill object
 */
export interface Skill {
  /**
   * More about the skill
   */
  content: string;
  /**
   * Level of confidence as a percentage
   */
  level: number;
  /**
   * Name of the skill
   */
  name: string;
}
