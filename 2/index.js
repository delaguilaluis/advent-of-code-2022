const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'test.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const results = data.split('\n').map((m) => m.split(" "))
    .map(([p1, p2]) => {
      if (p1 === "A") {
        if (p2 === "X") {
          return 1 + 3;
        }

        if (p2 === "Y") {
          return 1 + 0;
        }

        if (p2 === "Z") {
          return 1 + 6;
        }
      }

      if (p1 === "B") {
        if (p2 === "X") {
          return 2 + 6;
        }

        if (p2 === "Y") {
          return 2 + 3;
        }

        if (p2 === "Z") {
          return 2 + 0;
        }
      }

      if (p1 === "C") {
        if (p2 === "X") {
          return 3 + 0;
        }

        if (p2 === "Y") {
          return 3 + 6;
        }

        if (p2 === "Z") {
          return 3 + 3;
        }
      }
    });

  const sum = results.reduce((acc, val) => {
    if (!val) return acc;
    return acc + val;
  }, 0);

  console.log(sum);
});
