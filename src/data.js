import { v4 as uuidv4 } from "uuid";

const todos = [
  { text: "Buy some Apples", isCompleted: true, id: uuidv4() },
  { text: "Buy some Pears", isCompleted: false, id: uuidv4() },
  { text: "Buy some Bananas", isCompleted: false, id: uuidv4() }
];

export default todos;
