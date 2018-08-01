import { Component } from '@stencil/core';

@Component({
  tag: 'blaze-accordion'
})
export class Accordion {

  render() {
    return (
      <div class="c-card c-card--accordion">
        <slot />
      </div>
    );
  }
}
