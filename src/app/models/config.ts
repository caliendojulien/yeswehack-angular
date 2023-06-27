export class Config {
  public dropdown: boolean;
  public label: boolean;
  public helptext: boolean;
  public disable: boolean;

  constructor(dropdown: boolean, label: boolean, helptext: boolean, disable:boolean) {
    this.dropdown = dropdown;
    this.label = label;
    this.helptext = helptext;
    this.disable = disable;
  }
}
