
function makeLatinSquare(n) {
  const latinSquare = [];
  
  const firstRow = Array.from({ length: n }, (_, i) => i + 1);
  
  for (let i = 0; i < n; i++) {
    latinSquare.push([...firstRow.slice(i), ...firstRow.slice(0, i)]);
  }
  return latinSquare;
}


const result = makeLatinSquare(4);

for(let i = 0; i < result.length; i++)
    console.log(result[i]);