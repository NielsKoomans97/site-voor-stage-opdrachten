let input = document.getElementById("input");
let output = document.getElementById("output");
let convertbtn = document.getElementById("convert");

function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

// const intToRoman = (num) => {
//     const map = {
//       M: 1000,
//       CM: 900,
//       D: 500,
//       CD: 400,
//       C: 100,
//       XC: 90,
//       L: 50,
//       XL: 40,
//       X: 10,
//       IX: 9,
//       V: 5,
//       IV: 4,
//       I: 1,
//     };
//     let result = '';

//     for (key in map) {
//       const repeatCounter = Math.floor(num / map[key]);

//       if (repeatCounter !== 0) {
//         result += key.repeat(repeatCounter);
//       }

//       num %= map[key];

//       if (num === 0) return result;
//     }

//     return result;
//   };

convertbtn.addEventListener("click", function() {
    let roman = romanize(parseInt(input.value));

    console.log(roman);

    output.innerText = roman;
});


