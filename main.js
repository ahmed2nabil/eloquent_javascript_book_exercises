 var gridSize =8 ;
var totalSize = (gridSize * gridSize) + gridSize;
var grid = "";
for (i = 0; i < totalSize; i++) {
  if (i % (gridSize + 1) == 0)
    grid += "\n";
  else if (i % 2 == 0)
    grid += "#";
  else
    grid += " ";
}
console.log(grid);