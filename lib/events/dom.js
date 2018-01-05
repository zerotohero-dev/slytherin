/*    _    _
 * ,-(|)--(|)-.
 * \_   ..   _/ Slytherin: Framework-independent slithering utility.
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

import { css, tick, untick, firstParentIncludingSelf as parent } from 'dombili';

import type { DragEventMeta } from 'slytherin-types';

const onMouseDown = (evt: MouseEvent, meta?: DragEventMeta) => {
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

  // Prevent arbitrary text selection while dragging.
  // Need to add to "mousemove", "mousedown", "touchstart", "touchmove"
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

const onMouseMove = (evt: MouseEvent, meta?: DragEventMeta) => {
  if (!meta) {
    return;
  }
  if (!meta.dragging) {
    return;
  }

  // Prevent arbitrary text selection while dragging.
  // Need to add to "mousemove", "mousedown", "touchstart", "touchmove"
  evt.preventDefault();

  untick(meta.tickId);
  meta.tickId = tick(() => {
    if (!meta) {
      return;
    }

    const el = meta.elm();

    if (!el) {
      return;
    }

    el.style.left = `${meta.start.left + evt.clientX - meta.start.clientX}px`;
    el.style.top = `${meta.start.top + evt.clientY - meta.start.clientY}px`;
  });
};

const onMouseUp = (evt: MouseEvent, meta?: DragEventMeta) => {
  if (!meta) {
    return;
  }

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
