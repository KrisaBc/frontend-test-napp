import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../routes/routes";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box'

export default function Breadcrumb() {
    const breadcrumbs = useBreadcrumbs(routes)

    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {breadcrumbs.map(({
            match,
            breadcrumb
        }) => (
            <Breadcrumbs aria-label="breadcrumb" key={match.pathname}>
                <Link underline="hover" color="white" href={match.pathname}>
                    {breadcrumb}
                </Link>
            </Breadcrumbs>
        ))}
    </Box>
}

// <span key={match.pathname}>
// <NavLink to={match.pathname}>{breadcrumb}</NavLink>
// </span>