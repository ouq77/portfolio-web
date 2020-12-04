import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import { wrapError } from '../../shared/common/wrap.error'
import { WrappedError } from '../../shared/definitions/wrapped.error'
import { ContactMessage } from '../definitions/contact.message'
import { IErrorMessage } from '../definitions/error.message'
import { ContactService } from '../services/contact'

@Component({
  selector: 'app-contact-form',
  styleUrls: ['./contact.form.scss'],
  templateUrl: 'contact.form.html',
})
export class ContactFormComponent implements OnInit {
  public email: FormControl = new FormControl('', Validators.required)
  public errorMessages: Array<IErrorMessage>
  public heuning: FormControl = new FormControl('')
  public message: FormControl = new FormControl('', Validators.required)
  public name: FormControl = new FormControl('', Validators.required)
  public sentSuccessfully = false
  public serverErrors: string
  public submitBtnText = 'Send message'
  public submitClicked = false
  public submitting = false
  public form: FormGroup

  constructor(public fb: FormBuilder,
              private _contactService: ContactService) {
    this.form = fb.group({
      email: this.email,
      heuning: this.heuning,
      message: this.message,
      name: this.name,
    })
  }

  ngOnInit(): void {
    this.loadErrorMessages()
  }

  loadErrorMessages(): void {
    ContactService.getErrorMessages().then(
      errorMessages => {
        this.errorMessages = errorMessages
      },
    )
  }

  onClick(): void {
    this.submitClicked = true
  }

  onSubmit(): void {
    this.toggleSubmitting()
    this.serverErrors = ''

    const submission: ContactMessage = {
      name: this.name.value.trim(),
      email: this.email.value.trim(),
      text: this.message.value.trim(),
      heuning: this.heuning.value,
    }

    this._contactService.send(submission).subscribe(
      () => this.handleSuccess(),
      (err: HttpErrorResponse) => this.handleErrors(wrapError(err)),
    )
  }

  handleSuccess(): void {
    this.toggleSubmitting()
    this.sentSuccessfully = true
  }

  handleErrors(err: WrappedError): void {
    this.toggleSubmitting()
    switch (err.status) {
      case 400:
        err.content.errors.forEach((error: any) => {
          this.appendError(this.errorFromCode(error))
        })
        break
      case 500:
      default:
        this.appendError(this.errorFromCode('e_generic'))
        break
    }
  }

  errorFromCode(code: string): string {
    return this.errorMessages.find((message: IErrorMessage) => message.code === code).message
  }

  appendError(error: string): void {
    if (error) {
      if (this.serverErrors) {
        this.serverErrors += '<br>'
      }
      this.serverErrors += error
    }
  }

  toggleSubmitting(): void {
    this.submitting = !this.submitting
    this.submitBtnText = this.submitting ? 'Sending...' : 'Send message'
  }
}
