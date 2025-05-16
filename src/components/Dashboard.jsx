import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Paper,
  Button,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }}>
            Role: {user?.user_metadata?.role || 'User'}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Your Dashboard
          </Typography>
          <Typography variant="body1">
            This is your protected dashboard page. You can add your content here.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}