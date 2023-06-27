import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tag} from "../../../models/tag";
import {Config} from "../../../models/config";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() tag!: Tag;
  @Input() config!: Config;
  @Output() tag_retire: EventEmitter<Tag>;


  constructor() {
    this.tag_retire = new EventEmitter<Tag>();
  }

  public retirer(tag: Tag) {
    // Envoi de l'évènement au parent
    this.tag_retire.emit(tag);
  }
}
