import React from 'react';
import AppBar from '@material-ui/core/AppBar';

export class MenuBar extends React.Component {
    
    render() {
        return (
            <AppBar position="static">
                <Toolbar variant="dense">
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit">
                    Photos
                  </Typography>
                </Toolbar>
            </AppBar>

        )
    }
}

export default MenuBar;