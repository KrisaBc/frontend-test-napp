
export function ProductActionsSelector({ option, name }) {

    return <div>
        <select name={name}>
            {option.map(value => <option key={value.code} value={value.code}>
                {value.name}
            </option>)}
        </select>
    </div>
}
