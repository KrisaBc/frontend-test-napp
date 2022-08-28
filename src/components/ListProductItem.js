import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';

export function ListProductItem({ product }) {
    const navigate = useNavigate()

    const goToProductDetail = () => navigate(`/${product.id}`)

    return (<Card sx={{ width: { xs: 280, sm: 240, md: 220 }, minWidth: 180, height: 300 }}>
        <CardActionArea onClick={goToProductDetail}>
            <CardMedia
                component="img"
                image={product.imgUrl}
                alt={product.brand}
                sx={{ width: 150, margin: 'auto', p: 2 }}
            />
            <Divider />
            <CardContent sx={{ pt: 1, pb: 1 }}>
                <Typography component="div" sx={{ color: '#e91e63', fontSize: 15 }}>
                    {product.brand} {product.model}
                </Typography>
                <Typography variant="body" color="text.secondary">
                    Price: {product.price} {'\u20AC'}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    )
}