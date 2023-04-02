import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule],
})
export class AppComponent {
  constructor() {}
}
