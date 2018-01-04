/*
 *
 */

// @flow

import { start, stop, initialize, destruct } from '../../..';

import React, { Component } from 'react';
import { render } from 'react-dom';

class SimpleApp extends Component<{}> {
  box: HTMLElement;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    start();

    const box = document.querySelector('.box');

    if (!box) {
      return;
    }

    this.box = box;

    initialize(this.box, {
      dragClassName: 'box--shadow',
      dragHandleClassName: 'box__header'
    });
  }

  componentWillUnmount() {
    if (!this.box) {
      return;
    }

    stop();
    destruct(this.box);

    delete this.box;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="box">
          <div className="box__header">A Draggable Box</div>
          <div className="box__body">
            <p>
              Cheesecake marzipan chocolate bar ice cream gummi bears sesame
              snaps lollipop. Marshmallow cookie lemon drops cupcake sweet chupa
              chups. Cake biscuit croissant. Cheesecake cake jelly beans
              cheesecake. Chocolate cake jelly macaroon caramels brownie dragée
              danish gummies.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const reactRoot = document.getElementById('react-root');

if (reactRoot) {
  render(<SimpleApp />, reactRoot);
}
