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
		promise2(res).then((res)=>{
			output.textContent = `Result: ${res}`;
			promise3(res).then((res)=>{
				output.textContent = `Result: ${res}`;
				promise4(res).then((res)=>{
					output.textContent = `Result: ${res}`;
					promise5(res).then((res)=>{
						output.textContent = `Final Result: ${res}`;
					})
				})
			})
		})
	})
	// output.textContent = p1;
	// let p2 = await promise1(p1);
	// output.textContent = p2;
	// let p3 = await promise1(p2);
	// output.textContent = p3;
	// let p4 = await promise1(p3);
	// output.textContent = p4;
	// let p5 = await promise1(p4);
	// output.textContent = p5;
}

btn.addEventListener("click",(e)=>{
	e.preventDefault();
	solve(input.value);
})