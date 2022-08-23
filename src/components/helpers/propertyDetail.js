export const propertyDetail = property => {
    if (Array.isArray(property)) {
        return property.map(value => <dd key={value}>
            {value} </dd>)

    } else {
        return <dd>{property}</dd>
    }
}