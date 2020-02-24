var BOX_SIZE = 100;

// Setup board for etch-a-sketch
const board = document.querySelector('.board');

var id = "square";
for (var i = 0; i < BOX_SIZE; i++)
{
	const col = document.createElement('div');
	col.setAttribute('id', "col" + i);
	col.style.display = "inline-grid";	
	for (var j = 0; j < BOX_SIZE; j++)
	{
		const square = document.createElement('div');
		
		square.setAttribute('id', id + i + "-" + j);
		square.style.height = "6px";
		square.style.width = "6px";
		square.style.border = "1px solid #000000";
		
		square.addEventListener('mouseover', function(){
			square.style.backgroundColor = "#000000";
		})
		
		col.appendChild(square);
	}
	board.appendChild(col);
}

console.log(board);

function clearScreen()
{
	for (var i = 0; i < BOX_SIZE; i++)
	{
		for (var j = 0; j < BOX_SIZE; j++)
		{
			var id = "#square" + i + "-" + j;
			console.log(id);
			const square = document.querySelector(id);
			square.style.backgroundColor="#FFFFFF";
		}
	}
}