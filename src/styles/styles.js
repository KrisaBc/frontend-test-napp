//general styles
export const displayCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export const pink = '#e91e63'

export const image = width => {
    return {
        width,
        margin: 'auto',
        p: 2
    }
}

export const font = (color, size, family) => {
    return {
        color: color,
        fontSize: size,
        fontFamily: family,
        textDecoration: 'none',
    }
}

export const displayDirection = (direction, width) => {
    return {
        display: 'flex',
        flexDirection: direction,
        width,
        justifyContent: direction === 'row' ? 'space-between' : 'center'
    }
}

export const card = {
    minWidth: 180,
    height: 290,
    width: { xs: 280, sm: 240, md: 220 }
}

export const submitButton = {
    backgroundColor: pink,
    "&:hover": { backgroundColor: pink }
}

//input search styles
export const inputBox = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    zIndex: 1,
    top: 90,
    left: 0,
    rigth: 0,
}

