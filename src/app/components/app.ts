import { Component, OnInit } from '@angular/core'
import { AppService } from '../services/app'
import { cancelableDelay } from './shared/common/delay'
import { elementInViewport } from './shared/common/element.in.viewport'

@Component({
  selector: 'app-container',
  styleUrls: ['./app.scss'],
  templateUrl: 'app.html',
})
export class AppComponent implements OnInit {
  private _timeoutMenuAnimate: any

  ngOnInit(): void {
    AppService.consoleMessage()
    this.initSmoothPageScroll()
  }

  initSmoothPageScroll(): void {
    (($: JQueryStatic) => {
      $('a[href*="#"]:not([href="#"])').on('click', (e: JQuery.Event) => {
        e.preventDefault()
        const targetEl: HTMLAnchorElement = <HTMLAnchorElement> (<any> e).target
        if (location.pathname.replace(/^\//, '') === targetEl.pathname.replace(/^\//, '')
          && location.hostname === targetEl.hostname) {
          let target: JQuery = <JQuery> $(targetEl.hash)
          target = target.length ? target : <JQuery> $(`[name=${targetEl.hash.slice(1)}]`)
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 60,
            }, 500)
          }
        }
      })

      $('#js_menu_button').on('click', (e: JQuery.Event) => {
        e.preventDefault()

        if (this._timeoutMenuAnimate) {
          clearTimeout(this._timeoutMenuAnimate)
        }
        // wait half a second for menu collapse/expand to finish
        this._timeoutMenuAnimate = cancelableDelay(500, () => {
          if ($('#js_navbar').hasClass('in')) {
            if (!elementInViewport($, <JQuery> $('#js_contact_li'))) {
              $('html,body').animate({
                scrollTop: $('#js_menu_button').offset().top,
              }, 1000)
            }
          }
        })
      })
    })(jQuery)
  }
}
