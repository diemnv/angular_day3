import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day3';
  maxValue = 10;
  showValue = true;
  private _checked = false;
  @Input()

  get checked() {
    return this._checked;
  }
  set checked(v: any) {
    if (v === false || v === 'false') {
      this._checked = false;
    } else {
      this._checked = true;
    }
    this.updateBinding();
  }

  private _readonly = false;
  @Input()
  get readonly() {
    return this._readonly;
  }
  set readonly(v: any) {
    if (v === false || v === 'false') {
      this._readonly = false;
    } else {
      this._readonly = true;
    }
    this.updateBinding();
  }
  public bindingClasses = {
    'checkbox-checked': this._checked,
    'checkbox-uncheck': !this._checked,
    'disabled': this._readonly
  };

  @Output()
  checkedChange = new EventEmitter<boolean>();
  private onChange = (v: boolean) => { };
  private onTouched = () => { };

  constructor() { }

  ngOnInit() {
  }

  private updateBinding() {
    this.bindingClasses = {
      'checkbox-checked': this._checked,
      'checkbox-uncheck': !this._checked,
      'disabled': this._readonly
    };
  }

  toggleChecked() {
    if (this._readonly) {
      return;
    }
    this._checked = !this._checked;
    this.checkedChange.emit(this._checked);
    this.updateBinding();
  }
}
