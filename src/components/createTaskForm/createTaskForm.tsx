import { Box, Stack, Typography } from '@mui/material'
import React, {FC, ReactElement} from 'react'
import { TaskTitleField } from './_taskTitleField'
import { TaskDiscriptionField } from './_taskDiscriptionField'
import { TaskDateField } from './_taskDateField'
import { TaskSelectField } from './_taskSelectField'
import { Status } from './enums/Status'
import { Priority } from './enums/Priority'


export const CreateTaskForm : FC = (): ReactElement =>{
    return(
        <Box 
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        width='100%'
        px={4}
        my={6}
        >
            <Typography variant='h6' component='h2' mb={2}>Create A Task</Typography>
					<Stack  sx={{width:'100%'}} spacing={2}>
						<TaskTitleField/>
                        <TaskDiscriptionField/>
                        <TaskDateField/>
                    
                        <Stack direction='row' spacing={2}>
                            <TaskSelectField 
                                label='Status'
                                name='Status'
                                 items={[
                                    {
                                        value : Status.todo,
                                        label : Status.todo.toUpperCase(),
                                    },
                                    {
                                        value : Status.inProgress,
                                        label : Status.inProgress.toUpperCase(),
                                    },
                                    {
                                        value : Status.completed,
                                        label : Status.completed.toUpperCase(),
                                    }
                                ]}
                                 />
                            <TaskSelectField
                                label=' Priority '
                                name=' Priority '
                                 items={[
                                    {
                                        value :  Priority.low,
                                        label :  Priority.low.toUpperCase(),
                                    },
                                    {
                                        value :  Priority.normal,
                                        label :  Priority.normal.toUpperCase(),
                                    },
                                    {
                                        value :  Priority.high,
                                        label :  Priority.high.toUpperCase(),
                                    }
                                ]}                           
                            />
                            
                        </Stack>
                        
						{/* create task button */}
					</Stack>
        </Box>
    )

}