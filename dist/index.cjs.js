'use strict';

var EventEmitter = require('events');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

class ElementSizeObserver extends EventEmitter__default["default"] {
  /**
   * @typedef {String} SizeObserverEventName
   */
  static EVENT_SIZE_CHANGED = 'resize';

  /**
   * @param {Object} params
   * @param {Element} params.element – observable DOM-element
   * @param {Function|null}
   */
  constructor({
    element,
    onResize = null
  }) {
    super();
    this.element = element;
    this.observer = new ResizeObserver(this.onObserverChanged.bind(this));
    if (onResize) {
      this.on(ElementSizeObserver.EVENT_SIZE_CHANGED, onResize);
    }
    this.observer.observe(this.element);
  }

  /**
   * Destroys the instance
   * @returns {void}
   */
  destructor() {
    this.removeAllListeners();
    this.observer.unobserve(this.element);
    this.observer.disconnect();
  }

  /**
   * Processes list of entries
   * @param {Array.<ResizeObserverEntry>} entries 
   * @returns {void}
   */
  onObserverChanged(entries) {
    const entry = entries.find(e => e.target === this.element);
    if (entry) {
      this.emit(ElementSizeObserver.EVENT_SIZE_CHANGED, {
        element: this.element
      });
    }
  }
}

module.exports = ElementSizeObserver;
