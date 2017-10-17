/*1.1 Consitionals woth prompt*/
//Conditional where flavor == chocolate or vanilla
//if strawberry alert all out of strawberry.
//prompt for flavor, then output heres your flavor
//Else alert no such flavor

var flavor = prompt("Please enter a flavor such as Chocolate, Vanilla or Strawberry");

if(flavor == "chocolate" || flavor == "vanilla"){
	alert("The flavor you selected is "+flavor);
}
else if(flavor == "strawberry"){
	alert("Sorry we do not have any "+flavor+" ice cream left.");
}
else{
	alert("Sorry. There is no such flavor in our store");
}