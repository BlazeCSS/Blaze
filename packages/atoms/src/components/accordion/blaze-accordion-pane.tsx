import { Component, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-accordion-pane'
})
export class AccordionPane {

  @State() _isOpen: boolean = false;
  @Prop() open: boolean = false;
  @Prop() header: string;

  componentWillLoad() {
    this._isOpen = this.open;
  }

  @Method()
  show() {
    this._isOpen = true;
  }

  @Method()
  close() {
    this._isOpen = false;
  }

  toggle() {
    this._isOpen ? this.close() : this.show();
  }

  @Method()
  isOpen() {
    return this._isOpen;
  }

  render() {
    const isOpenClass = this._isOpen ? 'c-card__control--active' : '';

    return ([
      <button
        role="heading"
        aria-expanded={this._isOpen}
        class={`c-card__control ${isOpenClass}`}
        onClick={() => this.toggle()}>

        {this.header}

      </button>,
      <section aria-hidden={!this._isOpen} class="c-card__item c-card__item--pane">
        <slot />
      </section>
    ]);
  }
}
