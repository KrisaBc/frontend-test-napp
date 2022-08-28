import HeaderTitle from "./HeaderTitle"
import HeaderCartButton from "./HeaderCartButton"
import Breadcrumb from "./Breadcrumb"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export function Header() {

    return (<AppBar sx={{ backgroundColor: '#e91e63', width: '100%' }}>
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }} >
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row'
            }} >
                <HeaderTitle />
                <Breadcrumb />
                <HeaderCartButton />
            </Box>
        </Container>
    </AppBar >
    )
}
