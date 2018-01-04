/*
 *
 */

// @flow

import { css, tick, untick, firstParentIncludingSelf as parent } from 'dombili';

const onMouseDown = (evt: MouseEvent, meta: any): void => {
  if (!meta) {
    return;
  }

  const el = meta.elm();

  if (!el) {
    return;
  }

  const target = parent(evt.target, meta.isDraggable);

  if (!target) {
    return;
  }

  evt.preventDefault();

  if (meta.dragClassName) {
    el.classList.add(meta.dragClassName);
  }

  meta.dragging = true;
  meta.start.clientX = evt.clientX;
  meta.start.clientY = evt.clientY;

  const left = css(el, 'left', true);
  const top = css(el, 'top', true);

  meta.start.left = parseInt(left, 10) || 0;
  meta.start.top = parseInt(top, 10) || 0;
};

const onMouseMove = (evt: MouseEvent, meta: any): void => {
  if (!meta) {
    return;
  }
  if (!meta.dragging) {
    return;
  }

  untick(meta.tickId);
  meta.tickId = tick(() => {
    const el = meta.elm();

    if (!el) {
      return;
    }

    el.style.left = `${meta.start.left + evt.clientX - meta.start.clientX}px`;
    el.style.top = `${meta.start.top + evt.clientY - meta.start.clientY}px`;
  });
};

const onMouseUp = (evt: MouseEvent, meta: any): void => {
  const el = meta.elm();

  if (!el) {
    return;
  }
  if (!meta) {
    return;
  }

  if (meta.dragClassName) {
    el.classList.remove(meta.dragClassName);
  }

  meta.dragging = false;
};

export { onMouseDown, onMouseMove, onMouseUp };
