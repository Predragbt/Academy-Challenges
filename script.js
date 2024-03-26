// Task 1: Array Transformation
// Write a JavaScript function that takes as input an array of numbers and returns a new
// array which is transformed as follows: if the numbers in the array are less than 10, multiply
// by 2, otherwise multiply by 4. For sample array:
// let array = [1, 5, 10, 11, 20, 34];
// the output should be:
// transformArray(array) = [2, 10, 20, 44, 80, 136]

let arrayOfNumbers = [1, 5, 10, 11, 20, 34, 100];

function transformArray(array) {
  let newArray = [];
  let newValue;

  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 10) {
      newValue = array[i] * 2;
    } else if (array[i] > 10) {
      newValue = array[i] * 4;
    }

    newArray.push(newValue);
  }

  return newArray;
}

const newArrayWithTransformedNumbers = transformArray(arrayOfNumbers);
console.log(newArrayWithTransformedNumbers);

// Task 2: Remove Duplicates
// Write a JavaScript function to remove duplicate items from an array. For sample array:
// let array = [1, 1, 2, 3, 4, 1, 2, 5, 7, 8, 0];
// the output should be:
// removeDuplicates(array) = [1, 2, 3, 4, 5, 7, 8, 0]

const arrayWithDuplicates = [1, 1, 2, 3, 3, 4, 1, 2, 5, 7, 8, 0, 2];

function removeDuplicates(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let isDuplicateNumber = false;

    for (let j = 0; j < newArray.length; j++) {
      if (array[i] === newArray[j]) {
        isDuplicateNumber = true;
        break;
      }
    }

    if (!isDuplicateNumber) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const newArrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(newArrayWithoutDuplicates);

// Task 3: Dynamic Table Generator
// Write a JavaScript program that prompts the user to enter two numbers: number of
// columns and number of rows. The program contains one function:
// generateTable(nrRows, nrColumns)
// which dynamically generates a simple HTML table with the specified number of columns
// and rows.

const body = document.querySelector("body");

let rows;
while (true) {
  rows = prompt("Enter a number of rows:");

  if (rows === null) {
    break;
  }

  rows = +rows;

  if (!isNaN(rows) && rows > 0) {
    break;
  }
}

let columns;
while (true) {
  columns = prompt("Enter the number of columns");

  if (columns === null) {
    break;
  }

  columns = +columns;

  if (!isNaN(columns) && columns > 0) {
    break;
  }
}

function generateTable(nrRows, nrColumns) {
  const table = document.createElement("table");
  table.style.margin = "0 auto";

  for (i = 0; i < nrRows; i++) {
    let tableRow = document.createElement("tr");

    for (j = 0; j < nrColumns; j++) {
      let tableColumn = document.createElement("td");
      tableColumn.setAttribute(
        "style",
        "border: 2px solid black; padding: 30px;"
      );
      tableRow.appendChild(tableColumn);
    }

    table.appendChild(tableRow);
  }

  body.appendChild(table);
}

generateTable(rows, columns);
