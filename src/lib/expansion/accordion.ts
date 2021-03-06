import {Directive, Input} from '@angular/core';
import {coerceBooleanProperty} from '../core/coercion/boolean-property';

/** MdAccordion's display modes. */
export type MdAccordionDisplayMode = 'default' | 'flat';

/** Unique ID counter */
let nextId = 0;

/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
@Directive({
  selector: '[cdk-accordion]',
})
export class CdkAccordion {
  /** A readonly id value to use for unique selection coordination. */
  readonly id = `cdk-accordion-${nextId++}`;

  /** Whether the accordion should allow multiple expanded accordion items simulateously. */
  @Input() get multi(): boolean { return this._multi; }
  set multi(multi: boolean) { this._multi = coerceBooleanProperty(multi); }
  private  _multi: boolean = false;

  /** Whether the expansion indicator should be hidden. */
  @Input() get hideToggle(): boolean { return this._hideToggle; }
  set hideToggle(show: boolean) { this._hideToggle = coerceBooleanProperty(show); }
  private  _hideToggle: boolean = false;

  /**
   * The display mode used for all expansion panels in the accordion. Currently two display
   * modes exist:
   *   default - a gutter-like spacing is placed around any expanded panel, placing the expanded
   *     panel at a different elevation from the reset of the accordion.
   *  flat - no spacing is placed around expanded panels, showing all panels at the same
   *     elevation.
   */
  @Input() displayMode: MdAccordionDisplayMode = 'default';
}

/**
 * Directive for a Material Design Accordion.
 */
@Directive({
  selector: 'mat-accordion, md-accordion',
  host: {
    class: 'mat-accordion'
  }
})
export class MdAccordion extends CdkAccordion {}
