/*
 *
 */

// @flow

import { on, off } from 'dombili';

import { onMouseDown, onMouseMove, onMouseUp } from './events/dom';

const body = document.body;

const elements = new WeakMap();
let activeDraggable: HTMLElement | null = null;

const identity = x => x;

const createDraggablePredicate = dragHandleClassName => {
  if (!dragHandleClassName) {
    return identity;
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

  const isDraggable = createDraggablePredicate(options.dragHandleClassName);

  elements.set(activeDraggable, {
    start: { clientX: 0, clientY: 0, left: 0, top: 0 },
    dragging: false,
    tickId: 0,
    elm: () => activeDraggable,
    dragClassName: options.dragClassName,
    isDraggable
  });
};

const destruct = (elm: HTMLElement | null): void => {
  if (!activeDraggable) {
    return;
  }
  if (!elm) {
    return;
  }

  elements.delete(elm);
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

const start = () => {
  on(body, 'mousedown', onBodyMouseDown);
  on(body, 'mouseup', onBodyMouseUp);
  on(body, 'mousemove', onBodyMouseMove);
};

const stop = () => {
  off(body, 'mousedown', onBodyMouseDown);
  off(body, 'mouseup', onBodyMouseUp);
  off(body, 'mousemove', onBodyMouseMove);
};

export { initialize, destruct, start, stop };
