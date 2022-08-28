import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function HeaderTitle() {
    return (<Toolbar >
        <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
                fontFamily: 'monospace', 
                fontSize: 20,
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            ByUrPhone
        </ Typography>
    </Toolbar >
    )
}