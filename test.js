const moment = require('moment');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));  
console.log(moment().format("MMM Do YY"));  
console.log(moment().startOf('hour').fromNow());  