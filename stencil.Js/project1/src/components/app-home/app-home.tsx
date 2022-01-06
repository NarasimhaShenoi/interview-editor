import { Component, h, Listen } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @Listen('MyEvent', {capture: true})
  handleMyEvent(data:  any) {
    alert(data.detail.title);
  }
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
        <my-button text="gauranga" ><h1 slot="haribol">This is an placeholder for slot</h1></my-button>
        <my-button text="nityanada"><h1>This is an placeholder for slot</h1></my-button>
        <my-button text="advaita" ><h1>This is an placeholder for slot</h1></my-button>
      </div>
    );
  }
}
