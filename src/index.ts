import snake from "snake-case";
import camel from "camel-case";

interface ConvertFunc {
  (name: string): string;
}

function _convertObject(
  obj: {
    [key: string]: any;
    [key: number]: any;
  },
  fn: ConvertFunc
) {
  let r: any = {};
  Object.keys(obj).forEach(k => {
    r[fn(k)] = changeProps(obj[k], fn);
  });
  return r;
}

function _convertArray(arr: Array<any>, fn: ConvertFunc): Array<any> {
  return arr.map(x => changeProps(x, fn));
}

export function changeProps(obj: any, fn: ConvertFunc) {
  if (obj instanceof Array) {
    return _convertArray(obj, fn);
  } else if (typeof obj === "object") {
    return _convertObject(obj, fn);
  }
  return obj;
}

export function camelProps(obj: any) {
  return changeProps(obj, camel);
}

export function snakeProps(obj: any) {
  return changeProps(obj, snake);
}
