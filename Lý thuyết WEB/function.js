function increaseAmount(id)
{
	var a = document.getElementById(id).value;
	document.getElementById(id).value=Number(a)+1;
}
function descreaseAmount(id)
{
	var a = document.getElementById(id).value;
	if (Number(a) >1) {
		document.getElementById(id).value=Number(a)-1;
	}
}
