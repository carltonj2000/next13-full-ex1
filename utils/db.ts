import fs from "fs";
import path from "path";

const dbDir = path.join(process.cwd(), "dbDir");
const dbFile = path.join(dbDir, "dbData.json");

export type TODO = { id: string; name: string; isDone: boolean };

const todosDefault = [
  { id: "1", name: "Learn HTML", isDone: false },
  { id: "2", name: "Learn CSS", isDone: false },
  { id: "3", name: "Learn JavaScript", isDone: false },
];

export function readall() {
  if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir);
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify(todosDefault));
    return todosDefault;
  }
  const dataStr = fs.readFileSync(dbFile, "utf8");
  const data = JSON.parse(dataStr);
  return data;
}

export function toggleDone(id: string) {
  if (!fs.existsSync(dbFile)) {
    console.error("Db file does not exist at ", dbFile);
    return false;
  }
  const dataStr = fs.readFileSync(dbFile, "utf8");
  const data = JSON.parse(dataStr);
  const newData = data.map((d: TODO) =>
    d.id !== id ? d : { ...d, isDone: !d.isDone }
  );
  fs.writeFileSync(dbFile, JSON.stringify(newData));
  return newData;
}

export function deleteTodo(id: string) {
  if (!fs.existsSync(dbFile)) {
    console.error("Db file does not exist at ", dbFile);
    return false;
  }
  const dataStr = fs.readFileSync(dbFile, "utf8");
  const data = JSON.parse(dataStr);
  const newData = data.filter((d: TODO) => d.id !== id);
  fs.writeFileSync(dbFile, JSON.stringify(newData));
  return true;
}

export function add(name: string) {
  if (!fs.existsSync(dbFile)) {
    console.error("Db file does not exist at ", dbFile);
    return false;
  }
  const dataStr = fs.readFileSync(dbFile, "utf8");
  const data = JSON.parse(dataStr);
  const id = data.reduce(
    (m: string, d: TODO) => (parseInt(d.id) > parseInt(m) ? d.id : m),
    "0"
  );
  const todo = { name, id: `${parseInt(id) + 1}`, isDone: false };
  fs.writeFileSync(dbFile, JSON.stringify([...data, todo]));
  return todo;
}
