//get user input
var input=prompt("Enter a number between 0 and 15");
input=parseInt(input,10);

//check for valid input
while(input<0||input>15||isNaN(input))
{
	input=prompt("Bad input! Try again, must be 0-15");
	input=parseInt(input);
}		

//function definition
function convertDecToHex(dec)
{	
	var local="the function did "+dec;
	console.log(local);
	if(dec>=0&&dec<=9)
	{
		return dec;
	}
	else if(dec==10)
	{
		return "A";
	}
	else if(dec==11)
	{
		return "B";
	}
	else if(dec==12)
	{
		return "C";
	}
	else if(dec==13)
	{
		return "D";
	}
	else if(dec==14)
	{
		return "E";
	}
	else if(dec==15)
	{
		return "F";
	}
}
var hex=convertDecToHex(input);
alert(input+" is "+hex+" in hex");