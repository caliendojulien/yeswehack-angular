import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Config} from "../../../models/config";
import {Tag} from "../../../models/tag";

@Component({
  selector: 'app-tags-dropdown',
  templateUrl: './tags-dropdown.component.html',
  styleUrls: ['./tags-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagsDropdownComponent {
  @Input() config!: Config;
  public tags: Tag[];
  public selection: Tag[];

  constructor() {
    this.tags = [
      new Tag('tag1'),
      new Tag('tag2')
    ];
    this.selection = [];
  }

  public retirer(tag: Tag): void {
    if (this.config.dropdown) {
      const index = this.selection.indexOf(tag);
      if (index >= 0)
        this.selection.splice(index, 1);
    }
  }

  public ajouter(evt: any): void {
    if (this.config.dropdown) {
      this.selection = evt.value;
    }
    evt.chipInput.clear();
  }
}
