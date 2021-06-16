import moment from "moment";

// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {//filter eken eka expense object eka gane athulata aragena conditions check karanawa
      //filter eken true return wenawa nam eka dagannawa return object array ekata
      const createdAtMoment = moment(expense.createdAt)
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };