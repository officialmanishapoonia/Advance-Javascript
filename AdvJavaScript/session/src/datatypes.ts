// data types - number, boolean, string, null, undefined, object, array

let a: number = 10;
let b: string = 'hello';
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;
let f: { name: string; age: number } = {
  name: 'John',
  age: 25,
};
let g: { name: string; age: number } = { name: 'John', age: 25 };

g.name = 'John';
g.age = 25;
let h: number[] = [1, 2, 3, 4, 5];
let i: number[] = new Array(1, 2, 3, 4, 5);
let j: (string | number | boolean | null | undefined | { name: string; age: number } | number[])[] = ['John', 25, true, null, undefined, { name: 'John', age: 25 }, [1, 2, 3, 4, 5]];

console.log(a, b, c, d, e, f, g, h, i, j);

console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h, typeof i, typeof j);