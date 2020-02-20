
// Setup board for etch-a-sketch
const board = document.querySelector('.board');


var id = "square";
for (var i = 0; i < 16; i++)
{
	const col = document.createElement('div');
	col.setAttribute('id', "col" + i);
	col.style.display = "inline-grid";	
	for (var j = 0; j < 16; j++)
	{
		const square = document.createElement('div');
		square.setAttribute('id', id + i + j);
		square.style.height = "10px";
		square.style.width = "10px";
		square.style.border = "1px solid #000000";
		
		col.appendChild(square);
	}
	board.appendChild(col);
}

console.log(board);