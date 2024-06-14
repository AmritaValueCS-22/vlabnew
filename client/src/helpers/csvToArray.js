export function csvToJSON(csv) {
  let lines = csv.split("\n");
  console.log(lines);
  let result = [];
  let headers;
  headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    let obj = {};

    if (lines[i] == undefined || lines[i].trim() == "") {
      continue;
    }

    let words = lines[i].split(",");
    for (var j = 0; j < words.length; j++) {
      obj[headers[j].trim()] = words[j];
    }

    result.push(obj);
  }
  return result;
}
