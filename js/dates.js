var today= new Date;
today=today.getDay();

function checkWeekend(date)
{
   if(date==0||date==6)
   {
   		return "It's a weekend"
   }
   else
   {
   		return "Not a weekend"
   }
}

document.write
(checkWeekend(today));