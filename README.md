# ElementSizeObserver

Minimalistic wrapper around [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) to watch element size.

## Installation

```bash
# via npm:
npm i element-size-observer

# or yarn:
yarn add element-size-observer
```

## Usage

Basic example:

```js
import ElementSizeObserver from 'element-size-observer'

const observer = new ElementSizeObserver({
  element: document.querySelector('#some'),
  onResize: () => {
    console.log('Element resized')
  },
})
```

`ElementSizeObserver` inherits [EventEmitter](https://nodejs.org/api/events.html) interface, so you can subscribe to `resize` event:

```js
const observer = new ElementSizeObserver({
  element: document.querySelector('#some'),
})

observer.on('resize', () => {
  console.log('Handler #1')
})

observer.once('resize', () => {
  console.log('Handler #2')
})

observer.removeAllListeners()
```

Destroy the instance when it's no longer needed:

```js
observer.destructor()
```

Destructor will properly destroy underlying `ResizeObserver` and `EventEmitter`.

## Contribution

Feel free to open [issues](https://github.com/arlegotin/element-size-observer/issues) and [pull-requests](https://github.com/arlegotin/element-size-observer/pulls).