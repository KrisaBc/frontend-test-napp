import { useProductDetail } from "../states/product/hooks";


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
    } = productDetail || {}

    return <div>
        <h2>Product Description</h2>
        <ul>
            <li>Brand: {brand}</li>
            <li>Model: {model}</li>
            <li>Dimentions: {dimentions}</li>
            <li>Weight: {weight}</li>
            <li>Operating System: {os}</li>
            <li>Iternal Memory: {internalMemory}</li>
            <li>CPU: {cpu}</li>
            <li>RAM: {ram}</li>
            <li>Battery: {battery}</li>
            <li>Display Resolution: {displayResolution}</li>
            <li>Display Size: {displaySize}</li>
            <li>Primary Camera:</li>
            {primaryCamera?.map(value => <dd>
                {value} </dd>)}
            <li>Secondary Camera:</li>
            {secondaryCmera?.map(value => <dd>
                {value} </dd>)}
            <li>Price: {price}</li>
        </ul>
    </div>
}


