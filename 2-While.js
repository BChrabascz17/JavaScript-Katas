/*1.2 While Loop*/

//Conditional where flavor == chocolate or vanilla
//if strawberry alert all out of strawberry.
//prompt for flavor, then output heres your flavor
//Else alert no such flavor
//Coninue while flavor is not = to coffee
// Then write no coffee allowed in school
do{
	var flavor = prompt("Please enter a flavor such as Chocolate, Vanilla or Strawberry");
	if(flavor == "chocolate" || flavor == "vanilla"){
		alert("The flavor you selected is "+flavor);
	}
	else if(flavor == "strawberry"){
		alert("Sorry we do not have any "+flavor+" ice cream left.");
	}
	else if(flavor == "coffee"){
		alert("No coffee allowed in school.")
	}
	else{
		alert("Sorry. There is no such flavor in our store");
	}
}
while(flavor != "coffee")