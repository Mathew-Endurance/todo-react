import { Box, Stack, Typography } from '@mui/material'
import React, {FC, ReactElement} from 'react'
import { TaskTitleField } from './_taskTitleField'
import { TaskDiscriptionField } from './_taskDiscriptionField'


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
						{/* title */}
						<TaskTitleField/>

						{/* discription */}
						<TaskDiscriptionField/>

						{/* date field */}

						{/* staus field  and priority*/}

						{/* create task button */}
					</Stack>
        </Box>
    )

}