const file = await Deno.open("input.txt", { read: true });
const decoder = new TextDecoder();

const inventory = [];
for await (const chunk of file.readable) {
  inventory.push(...decoder.decode(chunk).split("\n"));
}

const reducer = (acc, val) => {
  const int = Number.parseInt(val, 10);
  if (!Number.isNaN(int)) {
    acc.push(acc.pop() + int);
    return acc;
  }

  acc.push(0);
  return acc;
};

const aggregation = inventory.reduce(reducer, [0]);

const max = aggregation.reduce((acc, val) => {
  if (val > acc) return val;
  return acc;
}, 0);

console.log(max);

file.close();
