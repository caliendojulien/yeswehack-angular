import {Component, Input} from '@angular/core';
import {Config} from "../../../models/config";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
  @Input() config!: Config;
}
