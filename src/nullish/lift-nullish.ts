import { isNullish, type Nullish } from "./is-nullish.ts";

export function liftNullish<In, Out>(fn: (value: In) => Out) {
  function wrapped(value: In): Out;
  function wrapped(value: In | Nullish): Out | Nullish;
  function wrapped(value: In | Nullish): Out | Nullish {
    return isNullish(value) ? value : fn(value);
  }
  return wrapped;
}
