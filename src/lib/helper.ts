/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { isPlainObject, snakeCase } from 'lodash';
import camelCase from 'lodash/camelCase';
import { DeepPartial } from 'src/redux/types';

export const filterNumeric = (input: string) => {
  return input.replace(/[^\d]/g, '');
};

export function cleanPhoneNumber(input: string) {
  return input.replace(/(?!^\+)\D/g, '');
}

export function formatNumber(num: number | string, fix?: boolean) {
  const parsedNumber = typeof num === 'string' ? parseFloat(num) : num;

  if (isNaN(parsedNumber)) {
    return num;
  }

  let formattedNumber: string;

  if (fix) {
    formattedNumber = parsedNumber.toFixed(2);
  } else {
    formattedNumber = parsedNumber.toString();
  }

  const parts = formattedNumber.split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  formattedNumber = fix ? parts.join('.') : parts[0];

  return formattedNumber;
}

export const removeDuplicates = (arr: string[]) => {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

export function getEnumValues<T extends string | number>(e: any): T[] {
  return typeof e === 'object' ? Object.keys(e).map((key) => e[key]) : [];
}

export const objectKeysToCamelCase = (obj: { [k: string]: any }): { [k: string]: any } => {
  if (Array.isArray(obj)) {
    return obj.map((v) => objectKeysToCamelCase(v));
  } else if (isPlainObject(obj)) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: objectKeysToCamelCase(obj[key]),
      }),
      {}
    );
  }
  return obj;
};

export const objectKeysToSnakeCase = (obj: { [k: string]: any }): { [k: string]: any } => {
  if (Array.isArray(obj)) {
    return obj.map((v) => objectKeysToSnakeCase(v));
  } else if (isPlainObject(obj)) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [key === 'id' ? '_id' : snakeCase(key)]: objectKeysToSnakeCase(obj[key]),
      }),
      {}
    );
  }
  return obj;
};

export const generateRandomString = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@}`';
  const charactersLength = characters.length;
  let currentLength = 0;
  while (currentLength < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    currentLength += 1;
  }
  return result;
};

export function isValidEmail(email: string) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

export function filterObjectKeys<T>(obj: any, keys: Array<keyof T>): DeepPartial<T> {
  const result: any = {};

  for (const key of keys) {
    if (key in obj) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        result[key] = filterObjectKeys(
          value,
          Object.keys(value).filter((singleValue) => typeof singleValue !== 'symbol') 
        );
      } else {
        result[key] = value;
      }
    }
  }

  return result;
}
