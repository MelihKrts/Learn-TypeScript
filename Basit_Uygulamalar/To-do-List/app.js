"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let workInput = document.getElementById("workName");
    let saveButton = document.getElementById("save");
    const todoList = document.querySelector(".list-to-do-box");
    window.addEventListener("load", () => {
        displayToDo();
    });
    saveButton === null || saveButton === void 0 ? void 0 : saveButton.addEventListener("click", () => {
        let workValue = workInput.value;
        saveToDo(workValue);
    });
    function saveToDo(work) {
        const key = `todo_${Date.now()}`;
        localStorage.setItem(key, work);
        workInput.value = "";
        displayToDo();
    }
    function deleteToDo(key) {
        localStorage.removeItem(key);
        displayToDo();
    }
    function displayToDo() {
        if (todoList) {
            todoList.innerHTML = "";
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key === null || key === void 0 ? void 0 : key.startsWith("todo_")) {
                    const value = localStorage.getItem(key);
                    const todoItem = document.createElement("div");
                    todoItem.className = "todo-item";
                    const todoText = document.createElement("span");
                    todoText.textContent = value;
                    const deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "Sil";
                    deleteBtn.className = "delete-btn";
                    deleteBtn.onclick = () => {
                        if (confirm("Silmek istediğinizden emin misiniz?")) {
                            deleteToDo(key);
                        }
                    };
                    todoItem.appendChild(todoText);
                    todoItem.appendChild(deleteBtn);
                    todoList.appendChild(todoItem);
                }
            }
        }
    }
});
