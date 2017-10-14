/**
 * Interface for the Contact Message object
 */
export class ContactMessage {
  /**
   * Sender name
   */
  public name: string;
  /**
   * Sender email
   */
  public email: string;
  /**
   * Message content
   */
  public text: string;
  /**
   * Anti-spam field
   */
  public heuning: string;

  constructor(name?: string, email?: string, text?: string, heuning?: string) {
    this.name = name;
    this.email = email;
    this.text = text;
    this.heuning = heuning;
  }
}
