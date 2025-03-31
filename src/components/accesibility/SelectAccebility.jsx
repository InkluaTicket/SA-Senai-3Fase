import { GlobalContext } from '@/contexts/GlobalContext'
import { useContext } from 'react'
import Select from "react-select"

export default function SelectAccebility({ onChange }) {

    const { colorsSettings } = useContext(GlobalContext)

    const filtrosDaltonismo = colorsSettings.find(setting => setting.idSetting === 'colorBlindness')


    return (
        <Select
            options={filtrosDaltonismo.options}
            onChange={onChange}
            placeholder="Filtros Para Daltonismo"
        />
    )
}
