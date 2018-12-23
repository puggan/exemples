# Compiling the scripts one by one works
tsc ts/a.ts --outFile build/a.js
tsc ts/b.ts --outFile build/b.js
tsc ts/c.ts --outFile build/c.js

# Compiling the scripts togehter, dosn't work, and thats fine as they going to be used on 3 different pages.
# tsc ts/*.ts --outFile build/
