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

import type {
  DragEventMeta,
  DragInitializationOptions,
  DraggablePredicate
} from 'slytherin-types';

import { on, off } from 'dombili';

import { onMouseDown, onMouseMove, onMouseUp } from './events/dom';

const elements = new WeakMap();
let activeDraggable = null;

const createDraggablePredicate = (
  box: HTMLElement,
  dragHandleClassName?: string
): DraggablePredicate => {
  if (!dragHandleClassName) {
    return elm => elm === box;
  }

  return (elm: HTMLElement): boolean => {
    if (!elm) {
      return false;
    }

    if (!dragHandleClassName) {
      return false;
    }

    return elm.classList && elm.classList.contains(dragHandleClassName);
  };
};

const init = (elm: HTMLElement, options: DragInitializationOptions): void => {
  if (!elm) {
    return;
  }

  activeDraggable = elm;

  options.bazinga;

  const isDraggable = createDraggablePredicate(
    elm,
    options.dragHandleClassName
  );

  const meta: DragEventMeta = {
    start: { clientX: 0, clientY: 0, left: 0, top: 0 },
    dragging: false,
    tickId: 0,
    elm: () => activeDraggable,
    dragClassName: options.dragClassName,
    isDraggable
  };

  elements.set(activeDraggable, meta);
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

const start = (): void => {
  if (started) {
    return;
  }

  const body = document.body;

  if (!body) {
    return;
  }

  on(body, 'mousedown', onBodyMouseDown);
  on(body, 'mouseup', onBodyMouseUp);
  on(body, 'mousemove', onBodyMouseMove);

  started = true;
};

const stop = (): void => {
  if (!started) {
    return;
  }

  const body = document.body;

  if (!body) {
    return;
  }

  off(body, 'mousedown', onBodyMouseDown);
  off(body, 'mouseup', onBodyMouseUp);
  off(body, 'mousemove', onBodyMouseMove);

  started = false;
};

export { init, start, stop };
