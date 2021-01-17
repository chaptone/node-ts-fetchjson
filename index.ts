import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// BAD !!

// axios.get(url).then(res => {
//   const todo = res.data;

//   const ID = todo.ID;
//   const title = todo.Title;
//   const finished = todo.finished;
//   console.log(`
//     id: ${ID}
//     title: ${title}
//     finished: ${finished}
//   `);
// });

// FIXED WITH TYPESCRIPT BUT SOMETHING WENT WRONG !

// interface Todo {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// axios.get(url).then(res => {
//   const todo = res.data as Todo;

//   const id = todo.id;
//   const title = todo.title;
//   const completed = todo.completed;
//   logTodo(id, completed, title);
// });

// const logTodo = (id, title, completed) => {
//   console.log(`
//     id: ${id}
//     title: ${title}
//     finished: ${completed}
//   `);
// };

// FIXING AGAIN AND EVERYTHING FINE ~

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    id: ${id}
    title: ${title}
    finished: ${completed}
  `);
};
