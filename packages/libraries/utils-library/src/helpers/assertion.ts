import { Dict, Func } from '../types';

// Number assertions
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function isNotNumber(value: any) {
  return (
    typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)
  );
}

function isNumeric(value: any) {
  return value != null && value - parseFloat(value) + 1 >= 0;
}

// Array assertions
function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

function isEmptyArray(value: any) {
  return isArray(value) && value.length === 0;
}

// Function assertions
function isFunction<T extends Func = Func>(value: any): value is T {
  return typeof value === 'function';
}

// Generic assertions
function isDefined(value: any) {
  return typeof value !== 'undefined' && value !== undefined;
}

function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined' || value === undefined;
}

function isUndefinedOrNull(value: any): value is null | undefined {
  return isUndefined(value) || value == null;
}

// Object assertions
function isObject(value: any): value is Dict {
  return Object.prototype.toString.call(value) === '[object Object]';
}

function isEmptyObject(value: any) {
  return isObject(value) && Object.keys(value).length === 0;
}

function isNotEmptyObject(value: any): value is object {
  return value && !isEmptyObject(value);
}

function isNull(value: any): value is null {
  return value == null;
}

const REACT_TEXT = {
  string: true,
  number: true,
};

const isReactText = (value: any) => !!REACT_TEXT[typeof value];

// String assertions
function isString(value: any): value is string {
  return Object.prototype.toString.call(value) === '[object String]';
}

// Empty assertions
function isEmpty(value: any): boolean {
  if (isArray(value)) return isEmptyArray(value);
  if (isObject(value)) return isEmptyObject(value);
  if (value == null || value === '') return true;
  return false;
}

// reactish assertions
function isRefObject(val: any): val is { current: any } {
  return 'current' in val;
}

export {
  isArray,
  isDefined,
  isEmpty,
  isEmptyArray,
  isEmptyObject,
  isFunction,
  isNotEmptyObject,
  isNotNumber,
  isNull,
  isNumber,
  isNumeric,
  isObject,
  isReactText,
  isRefObject,
  isString,
  isUndefined,
  isUndefinedOrNull,
};
