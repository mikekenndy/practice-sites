var BOX_SIZE = 64;

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
		
		var css = "#square" + i + j + ":hover{border:2px solid #000000}";
		square.style.cssText = css;
		
		square.setAttribute('id', id + i + j);
		square.style.height = "10px";
		square.style.width = "10px";
		square.style.border = "1px solid #000000";
		
		square.addEventListener('mouseover', function(){
			square.style.backgroundColor = "#000000";
		})
		
		col.appendChild(square);
	}
	board.appendChild(col);
}

console.log(board);