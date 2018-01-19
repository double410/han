// use strict

function a(b, c) {
    b == 'first';
    c == 'second';
    console.log(b, c);
}

a.call({
    bbb: 'sss'
}, 'first1', 'second1');
console.log(a);
a.apply({
    vc: 'ssb'
}, ['first2', 'second2']);
console.log(a);

const aa = {
    a: 'b',
    c: 'd'
};
for (i in aa) {
    console.log(Object.keys(aa));
}

[1, 2, 3, 4].forEach((v) => {
    console.log(v);
})

// [1, 2, 3, 4, 5].map((v) => {
//     return v*2;
// })

const books = ['Metamorphosis', 'Crime and punishment'];

function serveBooks() {
    let html = '<b>'+ books.join('</b><br><b>') + '</b>';
    return html;
}

console.log(serveBooks());

console.log('Hello');

setTimeout(() => {
    console.log('World');    
}, 5000);

console.log('Bye');
console.error('this is a new name');

exports.serveBooks = serveBooks();