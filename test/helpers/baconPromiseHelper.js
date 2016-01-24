/**
 * @author rmopliva
 */
import BaconJS from 'baconjs';
import Promise from 'bluebird';

/**
 * Cover a unique BcaonJS subscription with a Promise
 * to help tests results of streams
 *
 * @param  {Object} stream Stream to watch for the first subscription
 */
export default function promiseBaconSubscription(stream) {
  return new Promise((resolve) => {
    stream.subscribe((event) => {
      resolve(event);
      return BaconJS.noMore;
    });
  });
}
