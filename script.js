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
                         if (ii % 7 != 4 && ii % 7 != 5 && !(skippedDays.includes(ii))) {
                              letterDays.January.push(String.fromCharCode(65 + counter))
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
                         if (ii % 7 != 1 && ii % 7 != 2 && !(skippedDays.includes(ii))) {
                              letterDays.Febuary.push(String.fromCharCode(65 + counter))
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
                         if (ii % 7 != 1 && ii % 7 != 2) {
                              letterDays.March.push(String.fromCharCode(65 + counter))
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
                         if (ii % 7 != 5 && ii % 7 != 6 && !(skippedDays.includes(ii))) {
                              letterDays.April.push(String.fromCharCode(65 + counter))
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
                         if (ii % 7 != 3 && ii % 7 != 4 && !(skippedDays.includes(ii))) {
                              letterDays.May.push(String.fromCharCode(65 + counter))
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
                         if (ii % 7 != 0 && ii % 7 != 1) {
                              letterDays.June.push(String.fromCharCode(65 + counter))
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
                         if (ii % 7 != 0 && ii % 7 != 1) {
                              letterDays.September.push(String.fromCharCode(65 + counter))
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
                         if (ii % 7 != 5 && ii % 7 != 6 && !(skippedDays.includes(ii))) {
                              letterDays.October.push(String.fromCharCode(65 + counter))
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
                         if (ii % 7 != 2 && ii % 7 != 3 && !(skippedDays.includes(ii))) {
                              letterDays.November.push(String.fromCharCode(65 + counter))
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
                         if (ii % 7 != 0 && ii % 7 != 1 && !(skippedDays.includes(ii))) {
                              letterDays.December.push(String.fromCharCode(65 + counter))
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

console.log(letterDays[currentMonth][day - 1]);