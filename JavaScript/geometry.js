// JavaScript source code

function Figures()
{
	let n = document.getElementById("figure-source").value;
	let result = document.getElementById("figure-result");
	let figure="";
	for(let i =0;i < n; i++)
	{
		figure+="* ".repeat(n)+"\n";
	}
	figure+="\n";
	

	for(let i=1;i<=n;i++)
	{
		figure+="* ".repeat(i)+"\n";
	}
	figure+="\n";

	for(let i=n;i>=1;i--)
	{
		figure+="* ".repeat(i)+"\n";
	}
	figure+="\n";

	for(let i=0;i<n;i++)
	{
		figure+= "  ".repeat(i)+"* ".repeat(n-i)+"\n";
	}
	figure+="\n";

	for(let i=n;i>=0;i--)
	{
		figure+= "  ".repeat(i)+"* ".repeat(n-i)+"\n";
	}
	figure+="\n";

	for(let i=1;i<=n;i++)
	{
		const spaces = ' '.repeat(n - i);
		figure += spaces + '/'+ ' '.repeat(i * 2 - 1) + "\\\n";
	}
	for(let i=n;i>=1;i--)
	{
		const spaces = ' '.repeat(n - i);
		figure += spaces + "\\"+ ' '.repeat(i * 2 - 1) + "/\n";
	}

	 figure += "\n";

	for(let row = 0; row < n; row++) {
        for(let col = 0; col < n; col++) {
            if((row + col) % 2 === 0) {
                figure += "+ ";
            } else {
                figure += "- ";
            }
        }
        figure += "\n";
    }
	 figure += "\n";

	result.textContent=figure;
}

function Chess()
{
	let n = document.getElementById("chess-source").value;
	let result = document.getElementById("chess-result");
	let chess = "";
	for(let row = 0; row < n; row++) {
		for(let n_row = 0; n_row < n;  n_row++) {
			let line='';
        for(let col = 0; col < n; col++) {
            if((row + col) % 2 === 0) {
               line += "* ".repeat(n);
            } else {
                line +="  ".repeat(n);
            }
        }
		chess+=line+'\n';
		}
		}
	 result.textContent=chess;
}

function Pascal() 
{let n = document.getElementById("pascal-source").value;
let result = document.getElementById("pascal-result");
	let triangle = "";

	for(let row = 0; row < n; row++)
	{
		triangle += " ".repeat(n-row -1);

		let number = 1;

		for(let col =0; col <=row; col++)
		{
			triangle+=number + "    ";
			number = number * (row-col) / (col + 1);
		}
		triangle+="\n";
	}
	result.textContent=triangle;
}