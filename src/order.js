function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length >= 3) {
    return deliveryOrders;
  } else {
    deliveryOrders.push(order);
    return deliveryOrders;
    }
}

function refundOrder(orderNumber, deliveryOrders) {
 for(var i = 0; i < deliveryOrders.length; i++){
   if(deliveryOrders[i].orderNumber==orderNumber){
     deliveryOrders.splice(i, 1);
     }
 }
}

function listItems(deliveryOrders) {
  var itemArray = [];

  //  PURPOSE:  create a comma spearated string that contains the names of each item ordered.
  //  HOW:  Loop through the deliveryOrders array and add each orders item name to the local ItemArray variable.
  //  RETURN:  A string of item names separated by a comma and space ', '

  for(var i = 0; i < deliveryOrders.length; i ++) {
    itemArray.push(deliveryOrders[i].item);
  }

  return itemArray.join(", ");
}


/*
  var i = 0;
  var item1 = deliveryOrders[i].item;
  i++;
  var item2 = deliveryOrders[i].item;
  i++;
  var item3 = deliveryOrders[i].item;

  itemArray.push(item1);
  itemArray.push(item2);
  itemArray.push(item3);
*/






  //  PURPOSE:should tell us if the item is in the list orders
  //  HOW:we're gonna use a for loop to find the item in the list of orders
  //  RETURN:if the item is found, we will return true if the item is not found
  //         we will return false

function searchOrder(deliveryOrders, item) {
  var found = false;
  for(var i = 0; i < deliveryOrders.length; i ++){
    if(deliveryOrders[i].item == item) {
       found = true;
     }
  }

  return found;
}



module.exports = {
   takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
