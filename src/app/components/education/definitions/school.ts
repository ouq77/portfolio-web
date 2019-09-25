/**
 * Interface for a School object
 */
export interface School {
  /**
   * Blurb about school
   */
  content: string
  /**
   * School details
   */
  institution: {
    /**
     * School location
     */
    location: string
    /**
     * School name
     */
    name: string
    /**
     * Optional School web address
     */
    url?: string
  }
  /**
   * Highest qualification
   */
  qualification: string
  /**
   * Years attended
   */
  year: {
    /**
     * Start year
     */
    from: number
    /**
     * End year
     */
    to: number
  }
}
