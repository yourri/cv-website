import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

interface Props {
  window?: () => Window;
  selectedItem: (item: string) => void;
}

const navItems = ['Parcours Scolaire', 'Parcours Professionnel', 'Contactez-moi'];

export default function DrawerAppBar(props: Props) {
  const [selectedItem, setSelectedItem] = useState('Parcours Scolaire');

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    props.selectedItem(item);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            fontWeight={'bold'}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Thierry Leclaire
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#fff',
                  backgroundColor: selectedItem === item ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
                }}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </Box>
  );
}