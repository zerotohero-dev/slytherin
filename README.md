```text
   _    _
,-(|)--(|)-.
\_   ..   _/ Slyhterin: Framework-independent slithering utility.
  \______/              Makes things draggable.
    V  V
```

## Demo

[Visit **bytesized.tv/slytherin** for a quick demo](https://bytesized.tv/slytherin).

## Why?

`slytherin` is a drag helper: It makes **DOM** nodes draggable.

Yes, there are many great drag&drop libraries out there; so why a new one?
Well, I created this library mostly for educational purposes. — There will
be a screencast about it soon in [**ByteSized.TV**](https://bytesized.tv).

My goal was to show that creating a drag utility is not that hard, and can
be done under, say, fifty lines of code.

In addition, I wanted something “very” lightweight for my personal use
(_in [JediFocus](https://jedifocus.com/)_). So `slytherin` is also here to
scratch my own itch **:)**

In the end, it does what it says is does: Nothing more, nothing less.

## Usage Example

For additional examples with comments and documentation
[see the `examples` folder](examples).

The following shows a simple **React** component that uses `slytherin` to
make a part of it **draggable**.

> **Aside**
> 
> Slyherin provides **framework-agnostic** `initialize, `start`, and `stop` endpoints, 
> so you don’t have to use it with **React** — You can practically use it with
> any front-end framework of your liking.

```javascript
import { start, stop, initialize } from 'slytherin';

import React, { Component } from 'react';
import { render } from 'react-dom';

class SimpleApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Start listening to drag events.
    start();

    const box = document.querySelector('.box');

    if (!box) {
      return;
    }

    // `initialze` gives the box super powers:
    // makes it draggable.
    initialize(box, {
      dragClassName: 'box--shadow',
      dragHandleClassName: 'box__header'
    });
  }

  componentWillUnmount() {
    // The component is doing a harakiri: 
    // Stop listening to drag events.
    stop();
  }

  render() {
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
```

## Yarn Scripts

* `yarn run lint`: Lints the project
* `yarn test`: For now, same as `yarn run lint`.
* `yarn serve-examples`: Creates a simple `http` server to serve the examples.
* `yarn run watch-examples`: Creates the bundles required for the examples to
  run. Starts webpack in watch mode.

## Wanna Help?

Any help is more than appreciated.

If you want to contribute to the source code, **fork this repository** and
**create a pull request**.

> In lieu of a formal style guide, take care to maintain the existing coding style.

Also, don’t forget to add unit tests for any new or changed functionality.

If you want to report a bug; or share a comment or suggestion, [file an issue](https://github.com/jsbites/bytesized.tv.web/issues/new).

## I’ve Found a Bug; I Have an Idea

[For bug reports and suggestions, please file an issue](https://github.com/jsbites/bytesized.tv.web/issues/new).

## Contact Information

* **Project Maintainer**: [Volkan Özçelik](https://volkan.io/)
* **Project Website**: [bytesized.tv](https://bytesized.tv/)

## License

MIT-licensed. — [See the license file for details](LICENSE.md).

## Code of Conduct

We are committed to making participation in this project a harassment-free experience
for everyone, regardless of the level of experience, gender, gender identity and
expression, sexual orientation, disability, personal appearance, body size, race,
ethnicity, age, religion, or nationality.

[See the code of conduct for details](CODE_OF_CONDUCT.md).

## A [ByteSized.TV][vidcast] Project

This repository is a part of the [Byte-Sized JavaScript VideoCasts][vidcast].

It is a compilation of short (_around ten minutes_) screencasts about **JavaScript**
and related technologies.

[**Learn**, **explore**, and **have fun**][vidcast]!

[vidcast]: https://bytesized.tv/ "ByteSized.TV"
