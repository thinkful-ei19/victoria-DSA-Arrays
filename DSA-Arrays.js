'use strict';
const Memory = require('./memory');
const memory = new Memory();

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}
function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  // arr.push(3); //Array { length: 1, capacity: 3, ptr: 0 }
  // arr.push(5); //Array { length: 2, capacity: 3, ptr: 0 }
  // arr.push(15); //Array { length: 3, capacity: 3, ptr: 0 }
  // arr.push(19); //Array { length: 4, capacity: 12, ptr: 3 }
  // arr.push(45); //Array { length: 5, capacity: 12, ptr: 3 }
  // arr.push(10); //Array { length: 6, capacity: 12, ptr: 3 }

  // //length increases with each number being pushed as arr is getting longer.

  // //capasity is increasing everytime it is === to length of the array. because
  //our SIZE_RATIO is === to 3 capasatity triples

  //ptr points at the begining/head of resized/expanded capasity. it only
  //changes when we resize. Eg. next time it will change to 15 once capasaly will change to 36

  // arr.pop(); //Array { length: 5, capacity: 12, ptr: 3 }
  // arr.pop(); //Array { length: 4, capacity: 12, ptr: 3 }
  // arr.pop(); //Array { length: 3, capacity: 12, ptr: 3 }

  //lenght decreases because our array is getting shorter, but capacity and ptr
  //stays the same as we did not call any function to shring those and it does not
  //happen automatically, both capacity and ptr will stay the same waiting to be filled

  //console.log(arr.get(0));
  // arr.pop();
  // arr.pop();
  // arr.pop();
  //console.log(arr);
  arr.push('tauhida');
  console.log(arr.get(0));
  //console prints NaN because we are expexting data type as number
  //resize function is a helper for other public functions
}

main();
