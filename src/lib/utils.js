import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isEven(number) {
  return number % 2 === 0;
}

export function isOdd(number) {
  return number % 2 !== 0;
}

export function isLastListItem(item, list) {
  return item === list[list.length - 1];
}