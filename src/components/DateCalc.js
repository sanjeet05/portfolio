import moment from 'moment';

const DateCalc = (start_date, end_date) => {
  const a = moment(end_date);
  const b = moment(start_date);
  // const years = a.diff(b, 'years');
  // let months = '';
  // let results = '';
  // if(years === 0) {
  //   months = a.diff(b, 'months');
  // }
  // if (months) {
  //   results = months + ' months';
  // } else {
  //   results = years + ' years';
  // }

  let results = '';
  a.add(1, 'month');
  const monthsDiff = a.diff(b, 'months');
  const years = Math.floor(monthsDiff / 12);
  const months = Math.floor(monthsDiff % 12);
  if (years === 0) { // only months
    if (months === 1) {
      results = months + ' month';
    } else {
      results = months + ' months';
    }
  } else { // months and years
    if (months === 0) { // only years
      if (years === 1) {
        results = years + ' year';
      } else {
        results = years + ' years';
      }
    } else { // both
      if (years === 1) {
        if (months === 1) {
          results = years + ' year, ' + months + ' month';
        } else {
          results = years + ' year, ' + months + ' months';
        }
      } else {
        if (months === 1) {
          results = years + ' years, ' + months + ' month';
        } else {
          results = years + ' years, ' + months + ' months';
        }
      }
    }
  }

  // console.log('years, months', years, months);
  return results;
};

export default DateCalc;
