import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared/services/shared.service';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private sharedService: SharedService,
    private loginService: LoginService
  ) {
    this.isLoggedIn$ = this.sharedService.isLoggedIn$;
  }

  ngOnInit() {
    this.loginService.validateOnRefresh();
  }
}
