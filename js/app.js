const fs = require('fs')
const lodash = require('lodash')

let dates = [
  "2020-03-25",
  "2019-02-21",
  "2019-04-02",
  "2019-01-27",
  "2020-11-12",
  "2019-12-05",
  "2019-11-28",
  "2019-10-09",
  "2019-07-05",
  "2019-06-15"
]
let keywords = [
  "Python",
  "SQL",
  "Linux",
  "Database",
  ".NET",
  "Git",
  "Deployment",
  "AngularJS",
  "Visual Studio",
  "Scripting",
  "Amazon Web Services",
  "HTML",
  "PHP",
  "Android",
  "Back End",
  "Software Engineering",
  "Computer Science",
  "Java",
  "JavaScript",
  "Design",
  "User Interface",
  "Hardware",
  "Front End",
  "C#",
  "Code",
  "Engineering",
  "Mobile"
]
let alertfreq = [
  "Daily",
  "Weekly",
  "Monthly"
]
let alertdays = [
  "Friday",
  "Monday",
  "Tuesday",
  "Thurday",
  "Saturday"
]

let platforms = [
  "Indeed",
  "StackOverflow",
  "LinkedIn",
  "Glassdoor"
]

let countries = [
  "NetherLands",
  "UK",
  "Germany",
  "Belgium"
]
const gen = (arr, i, id) => ({ name: arr[Math.floor(Math.random() * arr.length)], id: `${id}_${i}` });

const genQ = (arr, i, id) => arr[Math.floor(Math.random() * arr.length)];

const genY = (arr1, arr2, id) => ({
  frequency: arr1[Math.floor(Math.random() * arr1.length)],
  day: arr2[Math.floor(Math.random() * arr2.length)],
  id: `${id}_${Math.floor(Math.random() * arr1.length)}` });

const genV = (arr) => arr[Math.floor(Math.random() * arr.length)];

const genX = (arr1, arr2, id) => genY(arr1, arr2, id)

const many = (num, arr, id) => Array(num).fill().map((_, i) => gen(arr, i, id));

const manyQ = (num, arr, id) => Array(num).fill().map((_, i) => genQ(arr, i, id));

const uniq = (arr) => [...new Set(arr)]

const length = 15;
const items = { queries: [] }

for (let item = 0; item <= length; item++) {
  const query = {
    id: `query_${item}`,
    country: genV(countries),
    "created_on": genV(dates),
    "alert_frequency": genX(alertfreq, alertdays, 'alerts'),
    keywords: {
      required: uniq(manyQ(8, keywords, 'imp')),
      optional: uniq(manyQ(8, keywords, 'opt')),
      negative: uniq(manyQ(8, keywords, 'neg')),
    },
    platforms: uniq(manyQ(3, platforms, 'plat')),
    excludeAgencies: false,
    includeNegativeKeywords: true
  }
  items.queries.push(query)
}

let queryJson = JSON.stringify(items)


fs.writeFile("./queries.json", queryJson, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log("The file was saved!");
}); 

     
     
     
     