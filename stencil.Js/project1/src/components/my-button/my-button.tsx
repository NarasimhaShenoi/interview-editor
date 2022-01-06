import { Component, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';
import { DataProps } from '../types';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {

  @Prop() text: string;
  @State() count: number = 0;
  @State() data: DataProps;

  @Event() MyEvent: EventEmitter<DataProps>;

  @Listen('click', {capture: true})
  handleClick() {
    this.count = this.count + 1;
    this.MyEvent.emit(this.data);
  }

  connectedCallback() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response =>  response.json())
      .then(json => {
        this.data = json;
      })
  }

  render() {
    const {
      handleClick, text, count
    } = this;
    return (
      <div>
        <slot name="haribol"></slot>
        <h1>{this.data? this.data.title: "loading"}</h1>
        <slot></slot>
        <button onClick={handleClick} >{text} clicked {count} times</button>
      </div>
    );
  }

}
