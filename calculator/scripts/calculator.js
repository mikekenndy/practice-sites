var display_text = "";
var start_text = "Enter text...";
var numbers = [];
var ops = [];
var available_ops = "+-x/";

function appendDisplay(append)
{
	if(available_ops.includes(append))
	{
		numbers.push(getLastNumber());
		ops.push(append);
		console.log(ops);
	}
	display_text += append;
	display.textContent = display_text;
	display.style.color ="#000000";
	console.log(numbers);
}

function clearDisplay() 
{
	display.textContent = start_text;
	display.style.color="#B8B8B8";
	display_text = "";
	numbers = [];
}

function performOperation()
{
	numbers.push(getLastNumber());
	console.log(numbers);
	var result;
	switch(ops[0])
	{
		case "+":
			result = parseInt(numbers[0]) + parseInt(numbers[1]);
		break;
		
		case "-":
			result = parseInt(numbers[0]) - parseInt(numbers[1]);
		break;
		
		case "/":
			result = parseInt(numbers[0]) / parseInt(numbers[1]);
		break;
		
		case "x":
			result = parseInt(numbers[0]) * parseInt(numbers[1]);
		break;
		
		default:
			alert("Invalid operation attempted.");
			clearDisplay();		
	}
	
	// Reset values after operation
	numbers = [result.toString()];
	ops = [];
	display_text = result.toString();
	display.textContent = result;
	
	console.log("End of perform: ");
	console.log(numbers);
}

function logNumber(num){ numbers.push(num);}

function getLastNumber()
{
	var num = "";
	for(var i = (display_text.length - 1); i >= 0; i--)
	{
		if(available_ops.includes(display_text[i]))
			break;
		num += display_text[i];
	}
	return reverseString(num);
}

function reverseString(str)
{
	var rev = "";
	for(var i = (str.length - 1); i >= 0; i--)
		rev += str[i];
	return rev;
}