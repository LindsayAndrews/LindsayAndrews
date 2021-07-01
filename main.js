let recipe = {
    image : "flapjacks.jpg",
    title : "Homemade Flapjacks",
    subtitle : "The best flapjacks recipe you'll ever eat",
    chef : "Chef C J",
    ingredients : [ "500ml flour", "5tbs sugar", "1/3 tsp salt", "1 1/2 tbsp melted butter",
"2 eggs", "4tsp baking powder", "250ml milk"],
method : "Beat the eggs, gradually adding sugar. Add half of the milk & butter, stir well. Sift in the flour, stir well. Sift in flour, baking powder & salt to the mix. Stir in remaining milk"

} 

document.getElementById("RecipeName").innerHTML =recipe.title 
document.getElementById("SubtitleName").innerHTML =recipe.subtitle
 
let myRecipeName = document.getElementById("RecipeName")
myRecipeName.style.color = "purple"

let mySubtitleName = document.getElementById("SubtitleName")
mySubtitleName.style.color = "pink"

var x = document.getElementById("img")

let methodArray = recipe.method.split('.')
let methodContainer = document.getElementById("MethodName")
methodArray.forEach(function(item){
    let listItem = document.createElement("li")
    listItem.innerText =item;
    methodContainer.appendChild(listItem)
    
})
let listContainer = document.getElementById("Ingredients")
recipe.ingredients.forEach(function(item){
    let listItem = document.createElement("li")
    listItem.innerText =item;
    listContainer.appendChild(listItem)
 
})
 

 

