import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() header: string = '';
  @Input() error: boolean = false;
  @Input() description: string = '';
  @Input() footerButton: Array<string> = [];
  
  @Output() footerAction = new EventEmitter();;

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(action: string): void {
    this.footerAction.emit(action);
  }

}
