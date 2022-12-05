const list = document.querySelector('ol');
const a = list.children[4]; //enfant de ol
const b = list.children[0]; //enfant de ol
b.before(a);

const h = document.querySelectorAll('h2');
const c = h[2]; //2ème h2
const d = h[1];//1ème h2
d.before(c);

const p = document.querySelectorAll('p');
const p4 = p[4];//paragraphe 4
p4.before(d);

const s = document.querySelectorAll('section');
const e = s[2]; //la 2ème section
e.remove()

