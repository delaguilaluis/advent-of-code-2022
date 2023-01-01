const file = await Deno.open("input.txt", { read: true });
const decoder = new TextDecoder();

const rucksacks = [];
for await (const chunk of file.readable) {
  rucksacks.push(...decoder.decode(chunk).split("\n"));
}

const repeated = rucksacks.map((rucksack) => {
  const size = rucksack.length / 2;
  const firstCompartment = Array.from(rucksack.substring(0, size));
  const secondCompartment = Array.from(rucksack.substring(size));
  return { firstCompartment, secondCompartment };
}).map(({ firstCompartment, secondCompartment }) => {
  return firstCompartment.find((supplyType) =>
    secondCompartment.includes(supplyType)
  );
});

const priorities = repeated.map((r) => {
  return r ? r.charCodeAt(0) - 96 : 0;
})
  .map((r) => r < 0 ? r + 58 : r);

const sum = priorities.reduce((acc, val) => acc + val, 0);

console.log(sum);

file.close();
