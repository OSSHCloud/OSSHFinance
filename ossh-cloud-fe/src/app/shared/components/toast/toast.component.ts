import { Component } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService],
})
export class ToastComponent {
  clickEventsubscription: Subscription;
  constructor(
    private messageService: MessageService,
    private alertService: AlertService
  ) {
    this.clickEventsubscription = this.alertService.subject$.subscribe(
      (data) => {
        this.showMessage(data);
      }
    );
  }

  ngOnInit() {}
  showMessage(data: any) {
    this.messageService.add({
      severity: data.resulttype,
      detail: data.detail,
    });
  }
}
