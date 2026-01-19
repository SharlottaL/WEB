// JavaScript source code
function Factorial(n)
{
    let f = BigInt(1);
    for (let i = 1n; i <= n; i++)
    {
        f *= i;
}
			return f;
}
function Factorial2()
{
    let source_input_field = document.getElementById("factorial-source");
    let source_value = source_input_field.value;
    let factorial_result = document.getElementById("factorial-result");
    factorial_result.innerHTML = Factorial(source_value);
}

function Power()
{
    let osnov_input_field = document.getElementById("power-source-osnov");
    let osnov_value = osnov_input_field.value;
    let step_input_field = document.getElementById("power-source-step");
    let step_value = step_input_field.value;
    let power_result = document.getElementById("power-result");
    power_result.innerHTML = (osnov_value ** step_value);
}
function Fibonachi()
{
    let fibonachi_input_field = document.getElementById("fibonachi-source");
    let fibonachi_value = fibonachi_input_field.value;
    let fibonachi_result = document.getElementById("fibonachi-result");
    let a = 0, b = 1;
    let fibonachi_numbers = [];
    while (a <= fibonachi_value) {
    fibonachi_numbers.push(a);
    [a, b] = [b, a + b]; 
}
  fibonachi_result.innerHTML = fibonachi_numbers.join(',');
}