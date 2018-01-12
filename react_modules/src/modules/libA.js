import { num } from './libAA';

export function add(a, b) { //Named export
	return a+b;
}

export const substract = (a,b) => {
	return a-b;
}

export const singleInstanceShared = () => {
	console.log('From libA module : ',{num});
	return num;
}