import {Component} from '@angular/core';
import {Config} from "../../models/config";

@Component({
  selector: 'app-ywh',
  templateUrl: './ywh.component.html',
  styleUrls: ['./ywh.component.scss']
})
export class YwhComponent {

  public config: Config;

  constructor() {
    this.config = new Config(false, false, false, false);
  }

}
