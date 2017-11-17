import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../services/header';
import {MENU_CONFIG, GRID_ROTATOR_CONFIG} from '../models/header.config';
import {ImageIds} from '../definitions/image.ids';
import {delay} from '../../shared/common/delay';

@Component({
  selector: 'header',
  styleUrls: ['./header.css'],
  templateUrl: 'header.htm',
})
export class HeaderComponent implements OnInit {
  public imageIds: Array<string>;
  private _headerService: HeaderService;
  private _previousWidth: number;
  private _previousHeight: number;
  private _onDraw: Function;

  constructor(_headerService: HeaderService) {
    this._headerService = _headerService;
  }

  ngOnInit() {
    this.initImageIds();
    this.initResizeListener();
  }

  initImageIds() {
    this._headerService.getImageIds().subscribe(
      resp => this.initGridRotator((<ImageIds>resp).imageIds),
      err => console.warn('imageIds not returned'),
    );
  }

  initResizeListener() {
    (($: JQueryStatic) => {
      $(window).on('resize', () => {
        this.setBannerSize(this._previousWidth, this._previousHeight);
      });
    })(jQuery);
  }

  initGridRotator(imageIds: Array<string>) {
    this._onDraw = () => {
      this.setDynamicCssValues();
    };
    this.imageIds = imageIds;
    (($) => {
      // Delay 250ms for images to be rendered in template
      delay(250).then(() => {
        this.setBannerSize(this._previousWidth, this._previousHeight);
        (<any>$('#ri-grid')).gridrotator($.extend({}, GRID_ROTATOR_CONFIG, {onDraw: this._onDraw}));
        this.initNavigation();
      });
    })(jQuery);
  }

  initNavigation() {
    (($) => {
      $(() => {
        (<any>$('.navbar-wrapper')).stickUp(MENU_CONFIG);

        $('.navbar.navbar-inverse.navbar-static-top a').click(
          () =>
            $('.navbar-collapse').addClass('hide-class').addClass('collapse').removeClass('in'),
        );

        $('.navbar-toggle').click(
          () =>
            $('.navbar-collapse').removeClass('hide-class'),
        );
      });
    })(jQuery);
  }

  setBannerSize(previousWidth: number = 0, previousHeight: number = 0) {
    (($: JQueryStatic, previousWidth: number, previousHeight: number) => {
      const windowWidth: number = $(window).width();
      const windowHeight: number = $(window).height();
      const widthChanged: boolean = previousWidth !== windowWidth;
      let heightChanged: boolean = false;
      // mobile browsers ads about 60px to screen height when hiding address bar - ignore this
      if (windowHeight - previousHeight > 60) {
        heightChanged = true;
      }
      if (windowHeight - previousHeight < -60) {
        heightChanged = true;
      }
      if (widthChanged || heightChanged) {
        $('.banner').css({
          'height': windowHeight - 60,
          'width': windowWidth,
        });
        // this.setDynamicCssValues(windowWidth);
        this._previousWidth = windowWidth;
        this._previousHeight = windowHeight;
      }
    })(jQuery, previousWidth, previousHeight);
  }

  setDynamicCssValues() {
    (($: JQueryStatic) => {
      const bannerText: JQuery = <JQuery>$('.banner-text');
      if ($(window).width() <= 480) {
        const tile: JQuery = <JQuery>$('.js_cb-slideshow-tile');
        bannerText.css({
          'height': tile.height(),
          'top': tile.height() * 2,
        });
      } else {
        bannerText.css({
          'height': '',
          'top': ((($(window).height() - bannerText.height()) / 2) - 60),
        });
      }
    })(jQuery);
  }
}
