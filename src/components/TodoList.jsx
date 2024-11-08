import { Box, List } from '@mui/material'
import React from 'react'
import { Todo } from './Todo'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../utils'
import { TodoFooter } from './TodoFooter'

export const TodoList = () => {
  const {data,isLoading,isError,error}=useQuery({queryKey:['todos'],queryFn:getTodos})

  if(isLoading) return <div>Loading </div>
  if(isError) return <div>Error:{error.message}</div>

  return (
    <div className='todolist'>
         <Box sx={{ margin:'auto', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List>
            {data.data.map(obj=>
              <Todo key={obj.id} {...obj}/>
            )}
          </List>

         </Box>
         <TodoFooter nrTasks={data.data.filter(obj=>!obj.completed).lenght}/>

    </div>
  )
}
