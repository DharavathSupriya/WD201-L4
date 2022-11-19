const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const overdue = () => {
    return all.filter(
      (todolist) => todolist.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    return all.filter(
      (todolist) => todolist.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    return all.filter(
      (todolist) => todolist.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };

  function toDisplayableList(list) {
    return list
      .map(
        (todolist) =>
          `${todolist.completed ? "[x]" : "[ ]"} ${todolist.title}.trim()${
            todolist.dueDate === new Date().toLocaleDateString("en-CA")
              ? " "
              : todolist.dueDate
          }`
      )
      .join("\n");
  }
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;
