const fs = require('fs');

let test;
try {
  test = fs.readFileSync('m.txt', 'utf8');
} catch (err) {
  console.error(err);
}

test = test.replace(/\n/g, '&');

let i = 0;
let j = 0;
let answ = [];
let correct = '';

while (j < 400) {
  let res = '';
  let res1 = '';
  let listt = [];
  while (test[i] !== '•') {
    if (test[i] === '√') {
      break;
    }
    res += test[i];
    i++;
  }

  listt.push(res);
  res = '';
  let count = 0;
  i -= 2;
  while (count !== 5) {
    try {
      let nextAmpersand = test.indexOf('&', i + 1);
      res1 += test.slice(i + 1, nextAmpersand);
      i = nextAmpersand;

      if (res1.includes('√')) {
        res1 = ' •' + res1.slice(2);
        correct = res1;
      }

      listt.push(res1);
      res1 = '';
      count++;
    } catch (error) {
      console.error('Error processing string:', error);
    }
  }
  listt.push(correct);
  answ.push(listt);
  j++;
}

module.exports = answ;


