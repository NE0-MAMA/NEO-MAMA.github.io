var slot = 1;
var userguess = [];
var guessnum = 1,alerta = false;
var slotposition;
function code(min,max)
{
	var exit = true;
	while (exit)
	{	
		var checker = [];
		var code = (Math.floor(Math.random() * (max - min)) + min).toString();
		if (code.length==3){code = "0" + code;}
		for (let i=0;i<=4-1;i++)
		{
			if (checker.includes(code[i]))
			{
				exit = true;
				
				break;
			}
			else
			{
				exit = false;
				checker.push(code[i])
			}
		}
	}
	return code;
}
var crack = code(100,9999);
function numclick(a)
{
	
	if (guessnum!=11)
	{
		document.getElementById("error").innerText = "";
		if (a=='delete')
		{
			if (slot != 1)
			{
				slot--;
				slotposition = "slot" + slot;
				document.getElementById(slotposition).innerText = "";
				document.getElementById(slotposition).style.backgroundColor = "";
				userguess.pop();
			}
		}
		else if (a=='enter')
		{
			if (userguess.join('')==crack)
			{
				alert("You Crack The Code");
				location.reload();
	
				document.getElementById("error").innerText = "You Crack The Code";
			}
			else if (slot == 5)
			{
				
				process();
			}
		}
		else if (!userguess.includes(a))
		{
			slotposition = "slot" + slot;
			document.getElementById(slotposition).innerText = a;
			document.getElementById(slotposition).style.backgroundColor = "rgba(245,66,90,0.5)";
			userguess.push(a);
			if (slot!=5)
			{
				slot++;	
			}
		}	
		else
		{
			document.getElementById("error").innerText = "Same Digit not Allowed";
		}
	}
	else
	{
		if (alerta==false)
		{
			alert("You Lose!! Code: " + crack);
			alerta = true;
			document.getElementById("enter").innerText = "Restart";
			document.getElementById("enter").style.fontSize = '80%';
		}
		else if (a=='enter')
		{
			location.reload();
		}
	}
}



function process(){
	
	document.getElementById(("c" + guessnum)).innerText = userguess.join('');
	document.getElementById("cc" + guessnum).innerText = correctnum();
	document.getElementById("ccc" + guessnum).innerText = correctposition();
	guessnum++;
	userguess = [];
	for (var clear=1;clear<=4;clear++)
	{
		var rem = "slot" + clear;
		document.getElementById(rem).innerText = ""; 
		document.getElementById(rem).style.backgroundColor = "";
	}
	slot = 1;
}

function correctnum()
{
	var correctn = 0;
	for (var i=0;i<=3;i++)
	{
		if (crack.split('').toString().includes(userguess[i]))
		{
			correctn++;
		}
	}
	return correctn;	
}

function correctposition()
{
	var correctpos = 0;
	for (let i=0;i<=3;i++)
	{
	
		if (crack.toString().split('')[i]==userguess[i])
		{
			correctpos++;
		}
	}
	return correctpos;
}
