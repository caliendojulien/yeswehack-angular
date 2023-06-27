import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Config} from "../../../models/config";
import {Tag} from "../../../models/tag";
import {COMMA, ENTER, SPACE, TAB} from "@angular/cdk/keycodes";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagsComponent {
  @Input() config!: Config;
  public readonly toucheDeSeparation = [ENTER, COMMA, SPACE, TAB] as const;
  public tags: Tag[];
  public selection: Tag[];
  public inputTag: FormControl;
  public erreurunique: boolean;

  constructor() {
    this.tags = [
      new Tag('tag1'),
      new Tag('tag2')
    ];
    this.selection = [];
    this.inputTag = new FormControl('', Validators.required);
    this.erreurunique = false;
  }

  public retirer(tag: Tag): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0)
      this.tags.splice(index, 1);
  }

  public ajouter(evt: any): void {
      this.tags.push(new Tag(evt.value));
      evt.chipInput.clear();
  }
}
