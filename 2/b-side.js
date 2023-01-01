const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const results = data.split('\n').map((m) => m.split(" "))
    .map(([oponent, result]) => {
      if (oponent === "A") {
        if (result === "X") {
          return 3 + 0;
        }

        if (result === "Y") {
          return 1 + 3;
        }

        if (result === "Z") {
          return 2 + 6;
        }
      }

      if (oponent === "B") {
        if (result === "X") {
          return 1 + 0;
        }

        if (result === "Y") {
          return 2 + 3;
        }

        if (result === "Z") {
          return 3 + 6;
        }
      }

      if (oponent === "C") {
        if (result === "X") {
          return 2 + 0;
        }

        if (result === "Y") {
          return 3 + 3;
        }

        if (result === "Z") {
          return 1 + 6;
        }
      }
    });

  const sum = results.reduce((acc, val) => {
    if (!val) return acc;
    return acc + val;
  }, 0);

  console.log(sum);
});
