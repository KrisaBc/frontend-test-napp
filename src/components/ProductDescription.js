import { useProductDetail } from "../states/product/hooks";
import { propertyDetail } from "./helpers/propertyDetail";
import { List, ListItem, Typography, Container } from '@mui/material'
import { pink, font } from "../styles/styles"

export function ProductDescription() {
    const productDetail = useProductDetail()

    const {
        brand,
        model,
        price,
        cpu,
        ram,
        internalMemory,
        os,
        displayResolution,
        displaySize,
        battery,
        primaryCamera,
        secondaryCmera,
        dimentions,
        weight,
    } = productDetail

    return <Container>
        <Typography variant="h3" sx={font(pink, 16)}>
            {brand} {model}
        </Typography>
        <List sx={font('inherit', 14, 'Helvetica')}>
            <ListItem  >Dimentions: {dimentions}</ListItem>
            <ListItem>Weight: {weight}</ListItem>
            <ListItem>Operating System: {os}</ListItem>
            <ListItem>Iternal Memory: {propertyDetail(internalMemory)}</ListItem>
            <ListItem>CPU: {cpu}</ListItem>
            <ListItem>RAM: {ram}</ListItem>
            <ListItem>Battery: {battery}</ListItem>
            <ListItem>Display Resolution:
                <Typography variant="body" sx={font('inherit', 14, 'Helvetica')}> {displayResolution}</Typography>
            </ListItem>
            <ListItem>Display Size: {displaySize}</ListItem>
            <ListItem>Primary Camera:
                <Typography variant="body" sx={font('inherit', 14, 'Helvetica')}> {propertyDetail(primaryCamera)}</Typography>
            </ListItem>
            <ListItem>Secondary Camera:
                <Typography variant="body" sx={font('inherit', 14, 'Helvetica')}>{propertyDetail(secondaryCmera)}</Typography>
            </ListItem>
            <ListItem>Price: {price ? price : '-'} {'\u20AC'}</ListItem>
        </List>
    </Container>
}


