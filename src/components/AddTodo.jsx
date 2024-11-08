import { Button, TextField } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useState } from 'react'
import { addTodos } from '../utils'

export const AddTodo = () => {
    const [newTask,setNewTask]=useState('')

    const queryClient=useQueryClient()

    const handleAdd=async ()=>{
      await addTodos({task:newTask})
      queryClient.invalidateQueries('todos')
      setNewTask('')

    }
  return (
    <div className='addtodo'>
        <TextField id="filled-basic" label="add new task..." variant="filled" 
        sx={{backgroundColor:"white"}}
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd} disabled={!newTask}>Add</Button>
    </div>
  )
}

