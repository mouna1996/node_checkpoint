var result = 0;
process.argv.forEach(function(num, index) {
    if (index > 1) {
        result += Number(num);
    }
});

console.log(result);