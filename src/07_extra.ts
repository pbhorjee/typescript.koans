// Wow! You're fast! If you've reached this lesson, it's time for some more
// Lodash magic!
// Obviously Lodash has much more functions than we worked on so far, so now
// it's your turn to implement a couple more non-trivial examples.
// It's helpful to keep the [Lodash Docs](https://lodash.com/docs/4.16.4) at
// hand in case you get confused about how certain corner cases should be
// handled.

// ### join
// Converts all elements in array into a string separated by separator.
export function join(arr: Array<string>, concater:string = ","): string {
    let ret:string = "";

    arr.forEach((element, index) => {
        ret += element;

        if (index != arr.length-1) {
            ret += concater
        }
    });

    return ret;
}

// ### ary
// ary creates a new function. The returned function invokes func - first
// argument - with n - second argument - arguments, discarding any superfluous
// arguments.
export function ary(func: Function, arg:any):  {
}
