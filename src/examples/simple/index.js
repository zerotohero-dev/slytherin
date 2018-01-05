/*    _    _
 * ,-(|)--(|)-.
 * \_   ..   _/ Slyhterin: Framework-independent slithering utility.
 *   \______/              Makes things draggable.
 *     V  V
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
 */

// @flow

// This is a simple React example that uses `slytherin`.
//
// `slytherin` is framework-independent: You can integrate it
// to you favorite framework of choice.
//
// We’ll add comments to the `slytherin`-specific parts of the code to
// show you how.

// The following import statement is equivalent to:
// `import { start, stop, initialize } from 'slytherin';`
import { start, stop, initialize } from '../../..';

import React, { Component } from 'react';
import { render } from 'react-dom';

class SimpleApp extends Component<{}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // start: binds event listeners to `document.body`.
    // stop: unbinds event listeners from `document.body`.
    //
    // You can call `start()` and `stop()` as many times you like.
    //
    // Hint:
    // You can also use `stop()` to temporarily disable drag actions too.
    // Until you call `start()` again nothing will be draggable.
    start();

    // We need a DOM reference to drag.
    const box = document.querySelector('.box');

    if (!box) {
      return;
    }

    // At any time a single DOM element can be draggable.
    // If you `initialize` something else, then you’ll make that thing
    // draggable. — Since, in this example, we only have a single element
    // that does not change, we’ll just initialize it and call it a day.
    initialize(box, {
      // Optional: CSS class name to assign to the draggable element while
      // it is being dragged.
      dragClassName: 'box--shadow',

      // Optional: If not given, the entire element (`box`) will be considered
      // a drag target. — If provided, the drag target will be limited only to the
      // owner of the class name.
      //
      // The class name of the element that you can initiate the drag action by
      // doing a touch or mousedown gesture.
      // If you touch outside the drag handle, your drag action
      // will not be registered, and dragging will not start.
      dragHandleClassName: 'box__header'
    });
  }

  componentWillUnmount() {
    // Since component unmounted, we can stop listening to events.
    stop();
  }

  render() {
    // This is just regular JSX/HTML: Nothing fancy.
    return (
      <div className="wrapper">
        <div className="box">
          <div className="box__header">A Draggable Box</div>
          <div className="box__body">
            <p>Repello Inimicum!</p>
            <p>Salvio Hexia!</p>
            <p>Repello Muggletum!</p>
            <p>Protego Maxima!</p>
            <p>Fianto Duri!</p>
            <p>Repello Inimicum!</p>
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
