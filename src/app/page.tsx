import Image from "next/image";
import Link from "next/link";
import { todo } from "node:test";

export default async function Home() {

  const url = await fetch("https://jsonplaceholder.typicode.com/todos")
  const res = await url.json();
  console.log(res)
  return (
    <main>
			{res.map((todo: any, index: number) => (
				<div key={index}>
					<Link href={`${todo.id}`}>
						<h1 className='text-2xl'>
							{todo.id} &nbsp; &nbsp;
							{todo.title}
						</h1>
					</Link>
				</div>
			))}
		</main>
  );
}
