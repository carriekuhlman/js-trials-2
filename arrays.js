"use strict";


// 1. printIndices
function printIndices(items) {
  for (const item of items) 
  console.log(item, items.indexOf(item));
}


// 2. everyOtherItem
function everyOtherItem(items) 
{
  const itemList = [];

  for (let i = 0; i < items.length; i += 1)
  {
    if (i % 2 === 0)
    {
      itemList.push(items[i]);
    }
  }
  return itemList;
}

function compare(a, b) {
  return a - b;
}

// 3. smallestNItems
function smallestNItems(items, n) {
  return items.sort(compare).slice(0,n);
}
