import { Toolbar, Typography } from '@mui/material';
import { font } from '../../styles/styles';

export default function HeaderTitle() {
    return <Toolbar>
        <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={font('inherit', 20, 'monospace')}
        >
            ByUrPhone
        </ Typography>
    </Toolbar >
}