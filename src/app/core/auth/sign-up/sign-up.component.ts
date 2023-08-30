import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent {
    pass: boolean = false;
    clickEvent() {
        this.pass = !this.pass;
    }
}
