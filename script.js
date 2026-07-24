//your JS code here. If required.
let btn = document.getElementById('btn');
let input = document.getElementById('ip');
let output = document.getElementById('output');

const promise1 = (value) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(value);
		},2000)
	})
}

const promise2 = (value) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(value*2);
		},2000)
	})
}

const promise3 = (value) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(value - 3);
		},1000)
	})
}

const promise4 = (value) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(value / 2);
		},1000)
	})
}

const promise5 = (value) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(value + 10);
		},1000)
	})
}

function solve(inp){
	promise1(inp).then((res)=>{
	output.textContent = `Result: ${res}`;
	return promise2(res);
}).then((res)=>{
	output.textContent = `Result: ${res}`;
	return promise3(res);
}).then((res)=>{
	output.textContent = `Result: ${res}`;
	return promise4(res);
}).then((res)=>{
	output.textContent = `Result: ${res}`;
	return promise5(res);
}).then((res)=>{
	output.textContent = `Result: ${res}`;
})
}

btn.addEventListener("click",(e)=>{
	e.preventDefault();
	solve(input.value);
})