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

declare module 'slytherin-types' {
  declare type DragEventMeta = {
    start: { clientX: number, clientY: number, left: number, top: number },
    dragging: boolean,
    tickId: number,
    elm: () => HTMLElement | null,
    dragClassName?: string,
    isDraggable: (elm: HTMLElement) => boolean
  };

  declare type DragInitializationOptions = {
    dragClassName?: string,
    dragHandleClassName?: string
  };

  declare type DraggablePredicate = (elm: HTMLElement) => boolean;
}
