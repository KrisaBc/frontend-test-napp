import HeaderTitle from "./HeaderTitle"
import HeaderCartButton from "./HeaderCartButton"
import Breadcrumb from "./Breadcrumb"
import { AppBar, Box } from '@mui/material';
import { displayDirection, pink } from "../../styles/styles";

export function Header() {

    return <AppBar sx={{ backgroundColor: pink, width: '100%' }}>
        <Box sx={displayDirection('row')} pr={4} pl={2}>
            <HeaderTitle />
            <Breadcrumb />
            <HeaderCartButton />
        </Box>
    </AppBar >
}
