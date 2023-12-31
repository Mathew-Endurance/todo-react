import React, {FC, ReactElement} from 'react'
import { Grid } from '@mui/material'
import {Avatar, Box, Typography} from '@mui/material'
import PropTypes from 'prop-types'

interface IProfile {
    name ?: string 
}

export const Profile : FC<IProfile> = (props) : ReactElement => {
    const {name = ''} = props
    return (
        <Box 
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
  
        >
            <Avatar
            sx={{
                width: '96px',
                height: '96px',
                backgroundColor: 'primary.main',
                marginBottom: '16px'
            }}
            >
                <Typography variant="h3" color="text.primary">{`${name.charAt(0)}`}</Typography>
            </Avatar>
            
            <Typography variant="h6" color="text.primary">{`Welcome, ${name}`}</Typography>
             
            <Typography variant="body1" color="text.primary">This is your personal task manager</Typography>
        </Box>
    )
}

// define prop
// Profile.propTypes = {
//     name: PropTypes.string
// }
