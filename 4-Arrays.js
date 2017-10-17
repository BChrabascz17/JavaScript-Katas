/*1.2 While Loop*/

//Conditional where flavor == chocolate or vanilla
//if strawberry alert all out of strawberry.
//prompt for flavor, then output heres your flavor
//Else alert no such flavor
//XXConinue while flavor is not = to coffee
//XXThen write no coffee allowed in school
// Put in a for loop ask for 3 scoops
// After each scoop alert say heres your flavor
//after  loop, alert heres your sunday

var ourFlavors = ["chocolate","vanilla","strawberry"];
var scoops = [];
for (scoop = 0; scoop < 3; scoop++) { 

		var flavor = prompt("Please enter a flavor such as Chocolate, Vanilla or Strawberry");
		if(inArray(flavor, ourFlavors)== true){
			
				if(flavor == "strawberry"){
					alert("Sorry we do not have any "+flavor+" ice cream left.");
					scoop--;
					alert("Please select a different flavor");
				}
				else{
					scoops[scoop] = flavor
				}
		}
		else{
			alert("Sorry. There is no "+flavor+" flavor in our store");
			scoop=scoop - 1;
			
		}
}

alert("Here's your "+scoops+" cone");

function inArray(svalue, tarray){
	answer = false
	for(index = 0; index < tarray.length; index++){
		if(svalue == tarray[index]){
			answer = true;
		}
	}
	return answer;
}