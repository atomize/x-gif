"use strict";

var defaultFrameDelay = 10;

export default class Gif {
  constructor(frames) {
    this.frames = frames;
    this.length = 0;
    this.offsets = []

    frames.forEach((frame) => {
      this.offsets.push(this.length);
      this.length += (frame.delay || defaultFrameDelay);
    });
  }

  frameAt(fraction) {
    var offset = fraction * this.length;
    for (var i = 1, l = this.offsets.length; i < l; i++) {
      if (this.offsets[i] > offset) break;
    }
    return i - 1;
  }
};
