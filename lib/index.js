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

import { on, off } from 'dombili';

import { onMouseDown, onMouseMove, onMouseUp } from './events/dom';

const body = document.body;

const elements = new WeakMap();
let activeDraggable = null;

const createDraggablePredicate = (box, dragHandleClassName) => {
  if (!dragHandleClassName) {
    return elm => elm === box;
  }

  return (elm: any): boolean => {
    if (!elm) {
      return false;
    }

    return elm.classList && elm.classList.contains(dragHandleClassName);
  };
};

const initialize = (elm: HTMLElement | null, options: any = {}): void => {
  if (!elm) {
    return;
  }

  activeDraggable = elm;

  const isDraggable = createDraggablePredicate(
    elm,
    options.dragHandleClassName
  );

  elements.set(activeDraggable, {
    start: { clientX: 0, clientY: 0, left: 0, top: 0 },
    dragging: false,
    tickId: 0,
    elm: () => activeDraggable,
    dragClassName: options.dragClassName,
    isDraggable
  });
};

const onBodyMouseDown = (evt: MouseEvent): void => {
  onMouseDown(evt, elements.get(activeDraggable));
};

const onBodyMouseUp = (evt: MouseEvent): void => {
  onMouseUp(evt, elements.get(activeDraggable));
};

const onBodyMouseMove = (evt: MouseEvent): void => {
  onMouseMove(evt, elements.get(activeDraggable));
};

let started = false;

const start = () => {
  if (started) {
    return;
  }

  on(body, 'mousedown', onBodyMouseDown);
  on(body, 'mouseup', onBodyMouseUp);
  on(body, 'mousemove', onBodyMouseMove);

  started = true;
};

const stop = () => {
  if (!started) {
    return;
  }

  off(body, 'mousedown', onBodyMouseDown);
  off(body, 'mouseup', onBodyMouseUp);
  off(body, 'mousemove', onBodyMouseMove);

  started = false;
};

export { initialize, start, stop };
