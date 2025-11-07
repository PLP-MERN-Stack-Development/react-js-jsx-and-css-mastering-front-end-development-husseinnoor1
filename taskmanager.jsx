import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Card from './Card'
import Button from './Button'


export default function TaskManager(){
const [tasks, setTasks] = useLocalStorage('tasks', [])
const [text, setText] = useState('')
const [filter, setFilter] = useState('all')


function addTask(){
if(!text.trim()) return
setTasks([{ id: Date.now(), text, done: false }, ...tasks])
setText('')
}


function toggleDone(id){ setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)) }
function del(id){ setTasks(tasks.filter(t => t.id !== id)) }


const shown = tasks.filter(t => filter === 'all' ? true : filter === 'active' ? !t.done : t.done)


return (
<Card>
<div className="flex gap-2 mb-4">
<input className="flex-1 p-2 rounded border" value={text} onChange={e=>setText(e.target.value)} placeholder="New task" />
<Button onClick={addTask}>Add</Button>
</div>
<div className="flex gap-2 mb-4">
<Button variant={filter==='all'?'primary':'secondary'} onClick={()=>setFilter('all')}>All</Button>
<Button variant={filter==='active'?'primary':'secondary'} onClick={()=>setFilter('active')}>Active</Button>
<Button variant={filter==='completed'?'primary':'secondary'} onClick={()=>setFilter('completed')}>Completed</Button>
</div>
<ul className="space-y-2">
{shown.map(t=> (
<li key={t.id} className="flex items-center justify-between p-2 rounded border">
<div className="flex items-center gap-3">
<input type="checkbox" checked={t.done} onChange={()=>toggleDone(t.id)} />
<span className={t.done? 'line-through text-gray-500': ''}>{t.text}</span>
</div>
<Button variant="danger" onClick={()=>del(t.id)}>Delete</Button>
</li>
))}
</ul>
</Card>
)
}