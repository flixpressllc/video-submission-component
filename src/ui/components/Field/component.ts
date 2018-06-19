import Component from '@glimmer/component';

let id = 0;

function dasherize(str?: string): string {
  if (!str) { return ''; }
  return str.replace(/ /g, '-').toLowerCase();
}

export default class Field extends Component {
  public id = ++id;
  public get base() { return dasherize(this.args.name ? this.args.name : this.args.label); }
  public get safeId() { return this.base + '-' + this.id; }
}
