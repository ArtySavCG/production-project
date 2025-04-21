import React, { useState } from 'react';
import classes from './Counter.module.scss';


export const Counter = () => {
	const [count, setCount] = useState(0);
	
	const increment = ()=>{
		setCount(count+1)
	}

	return (
		<div className={classes.main}>
			<div>	
				<h1 className={classes.header}>{count}</h1>
			</div>
			<div>
				<button className={classes.btn} onClick={increment}>increment</button>
			</div>
		</div>
	);
};