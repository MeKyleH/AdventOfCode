// ----- DAY ONE CHALLENGES -----

// Given a string of open and close parenthesis determine which  
// floor santa ends on
// open paren he moves up 1 floor
// closed paren he moves down 1 floor
function findSantasFloor(str) 
{
	var count = 0;
	for (var i = 0; i < str.length; i++) 
	{
		if (str.charAt(i) === "(") 
		{
			count++;
		}
		else 
		{
			count--;
		}
	}
	return count;
}

// Given a string of open and close parenthesis determine after 
// how many moves Santa enters the basement
function santaEntersBasement(str) 
{
	var count = 0;
	for (var i = 0; i < str.length; i++) 
	{
		if (str.charAt(i) === "(") 
		{
			count++;
		}
		else 
		{
			count--;
		}
		if (count === -1)
		{
			return i + 1;
		}
	}
	return "santa didn't enter the basement.";
}
