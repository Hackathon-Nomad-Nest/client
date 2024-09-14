/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This class acts as a registry for callbacks.
 * Classes can register their callbacks here and they can be used by other classes if needed.
 * For eg., opening reference selection screen from the builder configuration
 * We need to give the callback for onPressDone on the reference selection screen
 * And that callback only comes from the component that invokes the reference selection screen in the preview
 * So when that component is created, it registers its callback to be used by the builder configuration
 */

const callbacks: { [id: string]: { [type: string]: any } } = {};

// Name callback
// Eg, onClickLogin
export enum CallbackTypes {}

/**
 *
 * @param id it is an unique identifier specifying which screen/component callbacks are being addressed
 * @param type type of callback. Example - A screen can have multiple callbacks like scrollToInAppFilters, scrollToMultiRow etc.
 * @param callbackOrStage this is either a function that is being registered or a number specifying the
 * current stage the callback is in. Example - To scroll to selection screen in the builder, there may be
 * multiple stages that we will need to complete. If the component is not expanded, then we will have to
 * expand the component and the selection screen UI before we are ready to scroll the selection screen into view
 */
export function registerCallback(id: string, type: CallbackTypes, callbackOrStage: Function | number) {
  if (callbacks[id]) {
    callbacks[id][type] = callbackOrStage;
  } else {
    callbacks[id] = { [type]: callbackOrStage };
  }
}

export function unregisterCallback(id: string, type: CallbackTypes) {
  if (callbacks[id]) {
    delete callbacks[id][type];
  }
}

export function getCallbackForId(id: string, type: CallbackTypes): any | undefined {
  return callbacks[id]?.[type];
}
