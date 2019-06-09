import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {

  transform(value: string): string {
    return value.trim();
  }
}

@Pipe({name: 'badgeUrl'})
export class BadgeUrlPipe implements PipeTransform {

  transform(badge: string): string {
    const badgeId = badge.match(/(\/\d{2,3}\/)/);
    return `https://www.codeschool.com/users/ouq77/badges${badgeId && badgeId[0] || ''}`;
  }
}

@Pipe({name: 'memberDate'})
export class MemberDatePipe implements PipeTransform {

  transform(memberDate: string): string {
    return new Date(memberDate).toLocaleDateString();
  }
}

@Pipe({name: 'score'})
export class ScorePipe implements PipeTransform {

  transform(score: number): string {
    return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

@Pipe({name: 'videoUrl'})
export class VideoUrlPipe implements PipeTransform {

  constructor(private _sanitationService: DomSanitizer) {
  }

  transform(videoUrl: string): SafeResourceUrl {
    return this._sanitationService.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
