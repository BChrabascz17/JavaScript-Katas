/*1.2 While Loop*/

//Conditional where flavor == chocolate or vanilla
//if strawberry alert all out of strawberry.
//prompt for flavor, then output heres your flavor
//Else alert no such flavor
//XXConinue while flavor is not = to coffee
//XXThen write no coffee allowed in school
// Put in a for loop ask for 3 scoops
// After alert say heres your flavor


for (i = 1; i < 4; i++) { 
    



		var flavor = prompt("Please enter a flavor such as Chocolate, Vanilla or Strawberry");
		if(flavor == "chocolate" || flavor == "vanilla"){
			alert("The flavor you selected is "+flavor);
			alert("Scoop #"+i+". Your flavor is "+flavor);
		}
		else if(flavor == "strawberry"){
			alert("Sorry we do not have any "+flavor+" ice cream left.");
			i--;
			alert("Please select a different flavor");
		}
		else{
			alert("Sorry. There is no such flavor in our store");
			i--;
			alert("Please select a different flavor");
		}
	
	
	
}