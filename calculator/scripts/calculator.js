var display_text = "";
var start_text = "Enter text...";

function appendDisplay(append)
{
	display_text += append;
	display.textContent = display_text;
	display.style.color ="#000000";
}

function clearDisplay() 
{
	display.textContent = start_text;
	display.style.color="#B8B8B8";
	display_text = "";
}
