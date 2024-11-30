import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

const items = [
    { id: 1, name: "Teclados"},
    { id: 2, name: "Auriculares"},
    { id: 3, name: "Mouse"},
     ]
function renderRow(props) {
  const { index, style } = props;
  const item = items[index]
  
  

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
    <ListItemButton>
    <ListItemText primary={item.name} />
    </ListItemButton>
    </ListItem>
  );
}

export default function ItemListContainer() {
    
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={3}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  )
}
