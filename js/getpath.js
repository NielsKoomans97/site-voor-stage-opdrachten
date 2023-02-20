const getPath = (key, o) => {
    if (!o || typeof o !== "object") {
      return "";
    }

    const keys = Object.keys(o);
    for(let i = 0; i < keys.length; i++) {
      if (keys[i] === key ) {
        return key;
      }

      const path = getPath(key, o[keys[i]]);
      if (path) {
        return keys[i] + "." + path;
      }
    }
    return "";
  };

const obj = "";
let btn = document.getElementById("runjson");

btn.addEventListener("click",function(){
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;

        // This is a regular expression to identify carriage
        // Returns and line breaks
        const lines = file.split(/\r\n|\n/);
        obj = lines.join('\n');
    };

    reader.readAsText("../opdracht5/challenge1.txt");


});
