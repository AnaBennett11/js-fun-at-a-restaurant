function nameMenuItem(pizza) {
return `Delicious ${pizza}`
};

function createMenuItem(itemName, itemPrice, itemType) {
  var menuItemName ={
  name: itemName,
  price: itemPrice,
  type: itemType,
  }
  return menuItemName
}
//ingredient has argument of cheese, listOfIngredients = empty array
function addIngredients(ingredient,listOfIngredients){
  if(listOfIngredients.includes(ingredient)) {
  return ingredient;
} else {
    return listOfIngredients.push(ingredient);
  }
}

function formatPrice(initialPrice) {
  return "$" + initialPrice;
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, menuItemType) {
  return{
    title:title,
    ingredients:ingredients,
    type:menuItemType,
  }
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
