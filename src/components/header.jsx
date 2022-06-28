import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { CImg} from '@coreui/react';

const HeaderCrud = () => {
    return (
        <AppBar position="static" style={{ background: '#FE0C19' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        style={{ marginLeft: "10px" }}
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            // color: 'inherit',
                            color: "#FFFFFF",
                            textDecoration: 'none',
                        }}
                    >
                        CRUD DOCENTES
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default HeaderCrud;
