import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../routes/routes";

export default function Breadcrumb() {
    const breadcrumbs = useBreadcrumbs(routes)

    return <>
        {breadcrumbs.map(({
            match,
            breadcrumb
        }) => (
            <span key={match.pathname}>
                <NavLink to={match.pathname}>{breadcrumb}</NavLink>
            </span>
        ))}
    </>
}

