(function() {
  "use strict";
  // This function will be called from Flutter when it prepares the JS-interop.
  window._stateSet = function () {
    window._stateSet = function () {
      console.log("Call _stateSet only once!");
    };

    // The state of the flutter app, see `class _MyAppState` in lib/main.dart.
    let appState = window._appState;
}
}());