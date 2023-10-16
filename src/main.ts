import './style.css'

interface Todo {
    readonly id:string ,
    task:string,
    isCompleted:boolean
}

const todoArray:Todo[] = []

const formElemnt = document.getElementsByClassName("todo-form")[0] as HTMLFormElement
const todoInput = document.getElementsByClassName("todo-input")[0] as HTMLInputElement

formElemnt.onsubmit = (e)=>{
    e.preventDefault();
    const todo:Todo = {
     id:String(Math.random()),
     task:todoInput.value,
     isCompleted:false
    }
    todoArray.push(todo)
 }