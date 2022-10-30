import React, { useState } from 'react';

import {Drawer, Grid, Button, List, ListItem, ListItemText, Typography, Stack} from '@mui/material'
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Web';


const ListItems = ({ items, onClick }) =>
  items
    .filter(({ hidden }) => !hidden)
    .map(({ label, disabled, Icon }, i) => (
      <ListItem
        button
        key={i}
        disabled={disabled}
        onClick={onClick(label)}
      >
        <ListIcon>
          <Icon />
        </ListIcon>
        <ListItemText>{label}</ListItemText>
      </ListItem>
    ));

export default function DrawerItemState() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [items] = useState([
    { label: 'Home', Icon: HomeIcon },
    { label: 'About', Icon: WebIcon },
    { label: 'Services', Icon: WebIcon, disabled: true },
    { label: 'Projects', Icon: WebIcon },
    { label: 'Career', Icon: WebIcon },
    { label: 'Register', Icon: WebIcon },
    { label: 'Login', Icon: WebIcon },
  ]);

  const onClick = content => () => {
    setOpen(false);
    setContent(content);
  };

  return (
    <Grid container justify="space-between" color={'inherit'}>
      <Stack item>
        <Typography marginLeft={5}>{content}</Typography>
      </Stack>
      <Grid item>
        <Drawer variant='temporary' open={open} onClose={() => setOpen(false)}>
          <List>
            <ListItems items={items} onClick={onClick} />
          </List>
        </Drawer>
      </Grid>

      <Grid item>
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Hide' : 'Show'} Menu
        </Button>
      </Grid>
    </Grid>
  );
}
