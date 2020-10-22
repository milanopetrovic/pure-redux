const span = document.querySelector('span') as HTMLSpanElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

export function render(collection) {
  let html = '';
  span.innerHTML = collection.length;
  todoList.innerHTML = '';

    for (const item of collection) {
        html += `<li>${item.label}
                    <button type="button" data-todo='${JSON.stringify(item)}'>Delete</button>
                </li>`
    }

    todoList.innerHTML = html;
}