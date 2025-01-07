import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionConfig } from 'src/app/shared/models/common.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonConfig: ActionConfig = new ActionConfig();
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onClickFunc() {
    this.onClick.emit(this.buttonConfig);
  }
}
