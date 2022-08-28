import { Box, InputLabel, NativeSelect } from '@mui/material/';

export function ProductActionsSelector({ option, optionName }) {

    return <Box>
        <InputLabel variant='standard' htmlFor={optionName}>
            {optionName}:
        </InputLabel>
        <NativeSelect inputProps={{
            name: optionName,
            id: optionName,
        }}>
            {option.map(value => <option key={value.code} value={value.code}>
                {value.name}
            </option>)}
        </NativeSelect>
    </Box>

}
