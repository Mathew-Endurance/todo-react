import { Box, TextField, Typography } from '@mui/material'
import React, {FC, ReactElement} from 'react'
import { ITextField } from '../interfaces/ITextField'
import PropTypes from 'prop-types'

export const TaskDiscriptionField : FC <ITextField>= (props): ReactElement =>{
    const {
		disabled=false,
		onChange=(e)=>console.log(e)
	} = props
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
            disabled={disabled}
            onChange={onChange}
        />
    )

}

TaskDiscriptionField.propTypes = {
    onChange :  PropTypes.func,
    disabled : PropTypes.bool
}
