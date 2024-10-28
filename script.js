let letterDays = {};
function generateLetterDay() {
     let counter = 0;
     let month = 9;
     for (i = 0; i < 12; i++) {
          switch (month) {
               case 1:
                    letterDays.January = [];
                    for (ii = 1; ii <= 31; ii++) {
                         let skippedDays = [1, 20];
                         let halfDays = [];
                         if (ii % 7 != 4 && ii % 7 != 5 && !(skippedDays.includes(ii))) {
                              let dayObj = {
                                   letter: null,
                                   halfDay: null,
                              }
                              dayObj.letter = String.fromCharCode(65 + counter);
                              if (!(halfDays.includes(ii))) {
                                   dayObj.halfDay = false;
                              } else {
                                   dayObj.halfDay = true;
                              }
                              letterDays.January.push(dayObj);
                              counter++;
                              if (counter > 6) {
                                   counter = 0;
                              }
                         } else {
                              letterDays.January.push('')
                         }
                    }
                    break;
               case 2:
                    letterDays.Febuary = [];
                    for (ii = 1; ii <= 28; ii++) {
                         let skippedDays = [17];
                         let halfDays = [14];
                         if (ii % 7 != 1 && ii % 7 != 2 && !(skippedDays.includes(ii))) {
                              let dayObj = {
                                   letter: null,
                                   halfDay: null,
                              }
                              dayObj.letter = String.fromCharCode(65 + counter);
                              if (!(halfDays.includes(ii))) {
                                   dayObj.halfDay = false;
                              } else {
                                   dayObj.halfDay = true;
                              }
                              letterDays.Febuary.push(dayObj);
                              counter++;
                              if (counter > 6) {
                                   counter = 0;
                              }
                         } else {
                              letterDays.Febuary.push('')
                         }
                    }
                    break;
               case 3:
                    letterDays.March = [];
                    for (ii = 1; ii <= 31; ii++) {
                         let halfDays = [10, 11, 12, 13];
                         if (ii % 7 != 1 && ii % 7 != 2) {
                              let dayObj = {
                                   letter: null,
                                   halfDay: null,
                              }
                              dayObj.letter = String.fromCharCode(65 + counter);
                              if (!(halfDays.includes(ii))) {
                                   dayObj.halfDay = false;
                              } else {
                                   dayObj.halfDay = true;
                              }
                              letterDays.March.push(dayObj);
                              counter++;
                              if (counter > 6) {
                                   counter = 0;
                              }
                         } else {
                              letterDays.March.push('')
                         }
                    }
                    break;
               case 4:
                    letterDays.April = [];
                    for (ii = 1; ii <= 30; ii++) {
                         let skippedDays = [14, 15, 16, 17, 18, 21];
                         let halfDays = [11];
                         if (ii % 7 != 5 && ii % 7 != 6 && !(skippedDays.includes(ii))) {
                              let dayObj = {
                                   letter: null,
                                   halfDay: null,
                              }
                              dayObj.letter = String.fromCharCode(65 + counter);
                              if (!(halfDays.includes(ii))) {
                                   dayObj.halfDay = false;
                              } else {
                                   dayObj.halfDay = true;
                              }
                              letterDays.April.push(dayObj);
                              counter++;
                              if (counter > 6) {
                                   counter = 0;
                              }
                         } else {
                              letterDays.April.push('')
                         }
                    }
                    break;
               case 5:
                    letterDays.May = [];
                    for (ii = 1; ii <= 30; ii++) {
                         let skippedDays = [26];
                         let halfDays = [];
                         if (ii % 7 != 3 && ii % 7 != 4 && !(skippedDays.includes(ii))) {
                              let dayObj = {
                                   letter: null,
                                   halfDay: null,
                              }
                              dayObj.letter = String.fromCharCode(65 + counter);
                              if (!(halfDays.includes(ii))) {
                                   dayObj.halfDay = false;
                              } else {
                                   dayObj.halfDay = true;
                              }
                              letterDays.May.push(dayObj);
                              counter++;
                              if (counter > 6) {
                                   counter = 0;
                              }
                         } else {
                              letterDays.May.push('')
                         }
                    }
                    break;
               case 6:
                    letterDays.June = [];
                    for (ii = 1; ii <= 18; ii++) {
                         let halfDays = [18];
                         if (ii % 7 != 0 && ii % 7 != 1) {
                              let dayObj = {
                                   letter: null,
                                   halfDay: null,
                              }
                              dayObj.letter = String.fromCharCode(65 + counter);
                              if (!(halfDays.includes(ii))) {
                                   dayObj.halfDay = false;
                              } else {
                                   dayObj.halfDay = true;
                              }
                              letterDays.June.push(dayObj);
                              counter++;
                              if (counter > 6) {
                                   counter = 0;
                              }
                         } else {
                              letterDays.June.push('')
                         }
                    }
                    break;
               case 7:
                    letterDays.July = [];
                    break;
               case 8:
                    letterDays.August = [];
                    break;
               case 9:
                    letterDays.September = [];
                    for (ii = 5; ii <= 30; ii++) {
                         let halfDays = [19, 26];
                         if (ii % 7 != 0 && ii % 7 != 1) {
                              let dayObj = {
                                   letter: null,
                                   halfDay: null,
                              }
                              dayObj.letter = String.fromCharCode(65 + counter);
                              if (!(halfDays.includes(ii))) {
                                   dayObj.halfDay = false;
                              } else {
                                   dayObj.halfDay = true;
                              }
                              letterDays.September.push(dayObj);
                              counter++;
                              if (counter > 6) {
                                   counter = 0;
                              }
                         } else {
                              letterDays.September.push('')
                         }
                    }
                    break;
               case 10:
                    letterDays.October = [];
                    for (ii = 1; ii <= 31; ii++) {
                         let skippedDays = [3, 4, 14, 24];
                         let halfDays = [24];
                         if (ii % 7 != 5 && ii % 7 != 6 && !(skippedDays.includes(ii))) {
                              let dayObj = {
                                   letter: null,
                                   halfDay: null,
                              }
                              dayObj.letter = String.fromCharCode(65 + counter);
                              if (!(halfDays.includes(ii))) {
                                   dayObj.halfDay = false;
                              } else {
                                   dayObj.halfDay = true;
                              }
                              letterDays.October.push(dayObj);
                              counter++;
                              if (counter > 6) {
                                   counter = 0;
                              }
                         } else {
                              letterDays.October.push('')
                         }
                    }
                    break;
               case 11:
                    letterDays.November = [];
                    for (ii = 1; ii <= 30; ii++) {
                         let skippedDays = [7, 8, 11, 28, 29];
                         let halfDays = [15, 27];
                         if (ii % 7 != 2 && ii % 7 != 3 && !(skippedDays.includes(ii))) {
                              let dayObj = {
                                   letter: null,
                                   halfDay: null,
                              }
                              dayObj.letter = String.fromCharCode(65 + counter);
                              if (!(halfDays.includes(ii))) {
                                   dayObj.halfDay = false;
                              } else {
                                   dayObj.halfDay = true;
                              }
                              letterDays.November.push(dayObj);
                              counter++;
                              if (counter > 6) {
                                   counter = 0;
                              }
                         } else {
                              letterDays.November.push('')
                         }
                    }
                    break;
               case 12:
                    letterDays.December = [];
                    for (ii = 1; ii <= 31; ii++) {
                         let skippedDays = [23, 24, 25, 26, 27, 30, 31];
                         let halfDays = [20];
                         if (ii % 7 != 0 && ii % 7 != 1 && !(skippedDays.includes(ii))) {
                              let dayObj = {
                                   letter: null,
                                   halfDay: null,
                              }
                              dayObj.letter = String.fromCharCode(65 + counter);
                              if (!(halfDays.includes(ii))) {
                                   dayObj.halfDay = false;
                              } else {
                                   dayObj.halfDay = true;
                              }
                              letterDays.December.push(dayObj);
                              counter++;
                              if (counter > 6) {
                                   counter = 0;
                              }
                         } else {
                              letterDays.December.push('')
                         }
                    }
                    break;
          }

          month++;
          if (month > 12) {
               month = 1;
          }
     }
}

generateLetterDay();

const jsonData = JSON.stringify(letterDays, null, 2);

const blob = new Blob([jsonData], { type: 'application/json' });

const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'data.json'; // Filename for the download

// Append the link to the body (necessary for Firefox)
document.body.appendChild(link);

// Trigger the download
link.click();

// Remove the link after the download is triggered
document.body.removeChild(link);

let date = new Date();
let day = date.getDate();
let currentMonth = date.toLocaleString('default', { month: 'long' });
console.log(currentMonth);
console.log(day);
console.log(letterDays[currentMonth][day - 1].halfDay);