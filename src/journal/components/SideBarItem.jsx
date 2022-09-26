import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export const SideBarItem = ({note}) => {
  return (
    <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={note.title} />
                  <ListItemText
                    secondary={
                      "Magna tempor culpa laborum aute excepteur ex dolor nisi veniam duis pariatur sit proident ipsum."
                    }
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
  )
}
