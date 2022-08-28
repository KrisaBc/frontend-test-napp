import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../routes/routes";
import { Breadcrumbs, Link, Box } from '@mui/material';
import { displayCenter } from "../../styles/styles";

export default function Breadcrumb() {
    const breadcrumbs = useBreadcrumbs(routes)
    return <Box sx={displayCenter}>
        {breadcrumbs.map(({
            match,
            breadcrumb
        }) => (<Breadcrumbs aria-label="breadcrumb" key={match.pathname}>
            <Link underline="hover" color="white" href={match.pathname}>
                {breadcrumb}
            </Link>
        </Breadcrumbs>
        ))}
    </Box>
}
