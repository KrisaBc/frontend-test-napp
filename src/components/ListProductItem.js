import { useNavigate } from 'react-router-dom'
import {
    Card, CardContent, CardMedia,
    Typography, Divider, CardActionArea
} from '@mui/material';
import { card, image, font, pink } from '../styles/styles'

export function ListProductItem({ product }) {
    const navigate = useNavigate()

    const goToProductDetail = () => navigate(`/${product.id}`)

    return (<Card sx={card}>
        <CardActionArea onClick={goToProductDetail}>
            <CardMedia
                component="img"
                image={product.imgUrl}
                alt={product.brand}
                sx={image(150)}
            />
            <Divider />
            <CardContent sx={{ pt: 1, pb: 1 }}>
                <Typography component="div" sx={font(pink, 15)}>
                    {product.brand} {product.model}
                </Typography>
                <Typography variant="body" color="text.secondary">
                    Price: {product.price ? product.price : ''} {'\u20AC'}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    )
}