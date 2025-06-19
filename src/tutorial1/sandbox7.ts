// TypeScript does not know the anchor tag is in the page or not during development time
const anchor = document.querySelector('a');

// so you can use ? to access href because anchor is null or not
console.log(anchor?.href);

// or you can check if an anchor element is available or not
if (anchor) {
    console.log(anchor.href);
}

// if you are sure, it is in the DOM, you can use!
const anchor2 = document.querySelector('a')!
console.log(anchor2.href)