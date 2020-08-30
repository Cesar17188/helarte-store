import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(
    private authService: AuthService,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this.mobileQueryListener);
  }
  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  logout() {
    this.authService.logout()
    .then(() => {
      this.router.navigate(['./home']);
    });
  }

  // tslint:disable-next-line: member-ordering
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h =>
                h.test(window.location.host));
}
