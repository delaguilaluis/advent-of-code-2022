const file = await Deno.open("input.txt", { read: true });
const decoder = new TextDecoder();

const matches = [];
for await (const chunk of file.readable) {
  matches.push(...decoder.decode(chunk).split("\n"));
}

const results = matches.map((m) => m.split(" "))
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

file.close();
