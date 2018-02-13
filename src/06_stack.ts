// In this lesson we're going to implement a basic stack.
// The interfaces are given. Make sure the size cannot be modified from the
// outside.

// In JavaScript / TypeScript, we can declare getter functions using the
// following syntax:
//
// ```ts
// class MyClass {
//   get myProp (): number {
//     return 123;
//   }
// }
// ```
//
// The same works for setters, but we don't need them for this exercise.

interface IStack <T> {
  size: number;

  push (value: T): void;
  pop (): T;
  peek (): T;
  toArray (): Array<T>;
}

export class Stack <T> implements IStack<T> {
  private tail: IStackFrame<T> = new LastStackFrame<T>();
  private _size:number = 0;

  get size (): number {
    return this._size;
  }

  push = (value: T) : void => {
    let frame = new StackFrame<T>(value);

    frame.next = this.tail;
    this.tail = frame;

    this._size++;
  }

  pop = () : T => {
    let ret:T = this.tail.value;
    this.tail = this.tail.next;

    if (this._size > 0) {
      this._size--;
    }

    return ret;
  }

  peek = () : T => {
    return this.tail.value;
  }

  toArray = () : Array<T> => {
    return this.tail.toArray();
  } 
}

interface IStackFrame <T> {
  value: T;
  next: IStackFrame<T>;
  toArray (): Array<T>;
}

class StackFrame <T> implements IStackFrame <T> {
  public value:T = null;

  constructor (value: T) {
    this.value = value;
  }

  public next: StackFrame<T> ;

  toArray= () : Array<T> => {
    return [this.value, ...this.next.toArray()];
  } 
}

class LastStackFrame <T> implements IStackFrame <T> {
  public value:T = null;
  public next: LastStackFrame<T> = this;

  toArray = () : Array<T> => {
    return [];
  } 
}
