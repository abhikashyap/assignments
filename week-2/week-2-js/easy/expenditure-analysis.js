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
  all_categories={}
  for (const transaction of transactions){
    const {category,price} = transaction
    if (category in all_categories){
      all_categories[category]+=price
        
    }else{
      all_categories[category]=price
    }
    
  }
  console.log(all_categories)
  output=[]
  for (const each_category in all_categories){
    // { category: 'Food', totalSpent: 10 }
    console.log(each_category)
    output.push({'category':each_category,
                'totalSpent':all_categories[each_category]})
    
  }
  console.log(output)
  return output;
}
module.exports = calculateTotalSpentByCategory;
