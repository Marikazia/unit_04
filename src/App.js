import './App.css';
import React from 'react';
import { useState } from 'react';

const out = React.createRef();
const out10 = React.createRef();
// const randCol = "randomInt, randomInt, randomInt";

function randomInt(min, max) {
	// let a = 0;
	// let b = 250;
	// min = Math.ceil(min);
	// max = Math.floor(max);
	return Math.round(Math.random() * (max - min) + min);
}
console.log(randomInt);



function App() {
  let count4 = 0;

  function task1() {
		console.log('task2');
  }
  function task2() {
		const bt2 = document.querySelector('.task-2');
		bt2.classList.add('active');
  }
  function task3(event) {
		// console.log('input');
		console.log(event.target.value);
  }
  function task4() {
		console.log(count4++);
  }
  function task5(event) {
		// const o5 = document.querySelector('.out-5');

		if(event.target.checked) {
			out.current.textContent = event.target.value;
			console.log(event.target.value);
		} else {
			out.current.textContent = 0;
			console.log(0);
		}
  }
  function task6(event) {
		out.current.textContent = event.target.value;
		console.log(event.target.value);
  }
  function task7() {
		out.current.style.backgroundColor = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})` ;
  }
  function task8(event) {
		let out8 = '';
		if (!isNaN(+event.key)) {
			out8 += '1';
		} else {
			out8 += '0';
		}
		// out = out8;
		out.current.textContent = out8;
		console.log(out8);

		// let a = event.nativeEvent.keyCode;
    // console.log(a);
		// console.log(event.target.value);
		// console.log(event.nativeEvent.key);
		// // out.current.textContent = 1;
    // if (a >= 48 || a <= 57) {
		// 	out.current.textContent = '1';
		// } else {
		// 	out.current.textContent = '0';
		// }
  }
  function task9(event) {
		out.current.textContent = event.target.value;
  }
	let ar10 = [5, 6, 7];
  function task10() {
    // ar10.push(+event.target.value);
    // console.log(ar10);
		// i10 = document.querySelector("i-10").event.target.value;
		// let aa10 = '';

		ar10.push(out10.current.value);
		console.log(ar10);
		// let newAr = [...ar10];
		// console.log(newAr);
		// let newArr = '';
		// newArr.push(aa10);
		// for (let i = 0; i < ar10.length; i++) {
		// 	newArr += ar10[i];
		// }
		// ar10.push(event.target.value);

		// console.log(aa10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button onClick={task1} className="task-1">Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div onMouseEnter={task2} className="task-2" ref={out}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input onInput={task3} type="text" className="task-3" />
      </section>
      <section>
        <h2>Task 4</h2>
        <button onClick={task4} className="task-4">Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input onChange={task5} type="checkbox" value="55" />
        <div className="out-5" ref={out}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select onChange={task6} className="task-6">
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
				<div className="out-6" ref={out}></div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7"  ref={out}></div>
        <button onClick={task7} className="task-7">Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input onKeyPress={task8} type="text" className="task-8"></input>
        <div className="out-8" ref={out}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input onInput={task9} type="range" className="task-9"></input>
        <div className="out-9" ref={out}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={out10}></input>
        <button onClick={task10} className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
