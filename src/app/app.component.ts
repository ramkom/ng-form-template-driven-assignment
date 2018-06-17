import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  submitted = false;
  subs = ['Basic', 'Advanced', 'Pro'];
  defaultSub = 'Advanced';
  formData = {};

  onFormSubmit() {
    console.log(this.form);
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }
    const { email, password, subscription } = this.form.value;
    this.formData = {
      email,
      subscription,
      password,
    };
    this.submitted = false;
    this.form.reset();
    this.form.form.patchValue({
      subscription: this.defaultSub,
    });
  }
}
