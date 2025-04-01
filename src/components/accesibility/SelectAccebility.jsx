import { GlobalContext } from '@/contexts/GlobalContext'
import { useContext } from 'react'
import Select from "react-select"

export default function SelectAccebility({ onChange }) {

    const { colorsSettings } = useContext(GlobalContext)

    const filtrosDaltonismo = colorsSettings.find(setting => setting.idSetting === 'colorBlindness')

    const customStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: "#fff",
            border: "2px solid #CDD1DB",
            borderRadius: "16px",
            height: "56px",
            padding: "16x",
            fontSize: "14px",
            fontWeight: "500",
            color: "#051b44",
            boxShadow: "none",
        }),
        indicatorSeparator: (styles) => ({
            ...styles,
            display: "none",
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
            color: "#051b44",
            fontSize: "240px",
        }),
        menu: (styles) => ({
            ...styles,
            backgroundColor: "#F9FAFB",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            marginTop: "4px",
        }),
        option: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: isFocused ? "#E5E7EB" : "transparent",
            color: "#051b44",
            fontSize: "14px",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#E5E7EB",
            },
        }),
        selectContainer: (styles) => ({
            ...styles,
            width: "100%",
            fontSize: "140px",
            color: "#051b44",
        }),
        placeholder: (styles) => ({
            ...styles,
            padding: "8px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#051b44",
        }),
        input: (styles) => ({
            ...styles,
            color: "#051b44",
        }),
        singleValue: (styles) => ({
            ...styles,
            color: "#051b44",
            fontSize: "14px",
            fontWeight: "500",
            
        }),
    }


    return (
        <Select
            instanceId="select-accebility"
            className=".select-accebility"
            styles={customStyles}
            options={filtrosDaltonismo?.options || []}
            onChange={onChange}
            placeholder="Filtros Para Daltonismo"
        />
    )
}
