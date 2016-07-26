///console.log(process.argv)

var total=0;

for(var index=2;index<process.argv.length;index++)
{
  total = total + +process.argv[index];
}

console.log(total);
