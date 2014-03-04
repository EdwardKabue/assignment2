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
var hex=convertDecToHex(input).toString();
function padTo4Digits(toPad)
{
	if(toPad.length==1)
	{
		toPad="000"+toPad
		return toPad;
	}

	else if(toPad.length==2)
	{
		toPad="00"+toPad;
		return toPad;
	}

	else if(toPad.length==3)
	{
		toPad="0"+toPad;
		return toPad;
	}

	else if(toPad.length>=4)
	{
		return toPad;
	}

}
console.log(padTo4Digits(hex));
alert(padTo4Digits(input.toString())+" is "+padTo4Digits(hex)+" in hex");

