const DynamicTodo = async (props: any) => {
	// const url = await fetch(`https://simple-books-api.glitch.me/books/8342398432489`);
	const url = await fetch(
		`https://jsonplaceholder.typicode.com/todos${props.params.id}`
	);
	const res = await url.json();
	console.log("SingleTodoResponse",res);

	return (
		<h1 className='pl-5 text-5xl'>
			{props.params.id} <br />
			{res.title} <br />
			{res.userId} <br />
		</h1>
	);
};

export default DynamicTodo;

// const DynamicData = async (props : any) => {
//     const url = await fetch(`https://jsonplaceholder.typicode.com/todos${props.params.id}`);
//     const res = await url.json();
//     console.log("SingleTodoRespons", res)
     
//     return(
//         <h1 className='pl-5 text-5xl'>
// 			{props.params.id} <br />
// 			{res.title} <br />
// 			{res.id}
// 		</h1>
//     )

// }
// export default DynamicData