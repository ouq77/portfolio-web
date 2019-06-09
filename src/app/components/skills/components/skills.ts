import { Component, OnInit } from '@angular/core';
import { cancelableDelay } from '../../shared/common/delay';
import { elementInViewport } from '../../shared/common/element.in.viewport';
import { Skill } from '../definitions/skill';
import { SkillService } from '../services/skills';

@Component({
  selector: 'app-skills',
  styleUrls: ['./skills.scss'],
  templateUrl: 'skills.html',
})
export class SkillsComponent implements OnInit {
  private _skillChartDrawn = false;
  private _timeoutScroll: any;
  public skills: Array<Skill>;

  constructor() {
  }

  ngOnInit(): void {
    this.getSkills();
    this.initScrollListener();
  }

  getSkills(): void {
    SkillService.getSkills().then(
      (skills) => {
        this.skills = skills;
        this.drawChart();
      },
    );
  }

  initScrollListener(): void {
    (($: JQueryStatic) => {
      $(document).on('scroll', () => {
        // wait half a second for scroll to stop
        if (this._timeoutScroll) {
          clearTimeout(this._timeoutScroll);
        }
        this._timeoutScroll = cancelableDelay(250, () => {
          if (!this._skillChartDrawn) {
            this.drawChart();
          }
        });
      });
    })(jQuery);

    if (!this._skillChartDrawn) {
      this.drawChart();
    }
  }

  drawChart(): void {
    (($) => {
      $('.js_trigger_skills').each((index: number, triggerEl: Element) => {
        if (!this._skillChartDrawn && elementInViewport($, <JQuery> $(triggerEl))) {
          this._skillChartDrawn = true;
          $('.chart').each((_index: number, chartEl: Element) => {
            (<any> $(chartEl)).easyPieChart({
              onStep: (from: number, to: number, percent: number) => {
                $(chartEl).find('.percent').text(Math.round(percent));
              },
            });
          });
        }
      });
    })(jQuery);
  }
}
