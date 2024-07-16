import { setupCounter } from '@/js/module/counter.js'
export default (function() {
  function init() {
    document.querySelector('#app').innerHTML = `
      <div class="container h-100 d-flex flex-column align-items-center justify-content-center">
        <h1>Hello Vite!</h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
      </div>
    `
    setupCounter(document.querySelector('#counter'))
  }

  function run() {
    init()
  }

  return {
    run
  }
})()
