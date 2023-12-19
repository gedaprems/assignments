/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  let allCategory = {};

  for (let idx = 0; idx < transactions.length; idx++) {
    let category = transactions[idx]['category'];

    if (allCategory[category] == undefined) {
      allCategory[category] = 0;
    }

    allCategory[category] += transactions[idx]['price'];
  }

  let categoryList = Object.keys(allCategory);
  for (let i = 0; i < categoryList.length; i++) {
    let price = allCategory[categoryList[i]];
    result.push({ "category": categoryList[i], "totalSpent": price });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
