import { Box, TextField, Typography } from '@mui/material'
import React, {FC, ReactElement} from 'react'



export const TaskDiscriptionField : FC = (): ReactElement =>{
    return(
        <TextField
            id='discription'
            label = 'Description'
            placeholder='Description'
            variant='outlined'
            size='small'
            multiline
            rows={4}
            name='description'
            fullWidth   
        />
    )

}
