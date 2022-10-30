import React, { useState } from 'react';
import clsx from 'clsx';
import { Routes, Route, NavLink } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Web';
import ListItemIcon from '@mui/icons-material/List';

import { Typography, ListItemText, ListItem, List, Button, Grid, Drawer } from '@mui/material'

const styles = theme => ({
    alignContent: {
        alignSelf: 'center'
    },
    activeListItem: {
        color: theme.palette.primary.main
    }
});

const NavListItem = withStyles(styles)(
    ({ classes, Icon, text, active, ...other }) => (
        <ListItem component={NavLink} {...other}>
            <ListItemIcon
                classes={{
                    root: clsx({ [classes.activeListItem]: active })
                }}
            >
                <Icon />
            </ListItemIcon>
            <ListItemText
                classes={{
                    primary: clsx({
                        [classes.activeListItem]: active
                    })
                }}
            >
                {text}
            </ListItemText>
        </ListItem>
    )
);

const NavItem = props => (
    <Routes>
        <Route
            exact
            path={props.to}
            render={() => <NavListItem active={true} {...props} />}
        />
        <Route path="/" render={() => <NavListItem {...props} />} />
    </Routes>
);

function DrawerItemNavigation({ classes }) {
    const [open, setOpen] = useState(false);

    return (
        <Grid container justify="space-between">
            <Grid item className={classes.alignContent}>
                <Route
                    exact
                    path="/"
                    render={() => <Typography>Home</Typography>}
                />
                <Route
                    exact
                    path="/page2"
                    render={() => <Typography>Page 2</Typography>}
                />
                <Route
                    exact
                    path="/page3"
                    render={() => <Typography>Page 3</Typography>}
                />
            </Grid>
            <Grid item>
                <Drawer
                    className={classes.drawerWidth}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <List>
                        <NavItem
                            to="/"
                            text="Home"
                            Icon={HomeIcon}
                            onClick={() => setOpen(false)}
                        />
                        <NavItem
                            to="/page2"
                            text="Page 2"
                            Icon={WebIcon}
                            onClick={() => setOpen(false)}
                        />
                        <NavItem
                            to="/page3"
                            text="Page 3"
                            Icon={WebIcon}
                            onClick={() => setOpen(false)}
                        />
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <Button onClick={() => setOpen(!open)}>
                    {open ? 'Hide' : 'Show'} Drawer
                </Button>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(DrawerItemNavigation);
