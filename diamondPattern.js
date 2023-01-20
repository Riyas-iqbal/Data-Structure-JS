let i, j, n, limit, target,star;

limit = 4 //change the value to adjust no of stars
target=limit
limit = (limit * 2) - 1;

for (i = 1; i <= limit; i++) {
    n = i <= target ? target + i - 1 : (target - i) + limit;
    for (j = 1; j <= n; j++) {
        star = i <= target ? target - i : i - target;
        if (j <= star) {
            process.stdout.write('  ')
        } else {
            process.stdout.write("* ")
        }
    }
    console.log('')
}