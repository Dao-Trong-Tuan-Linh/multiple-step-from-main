import {useState} from 'react'
import {AddOnsContext} from './AddOnsContext'
import {AddOns} from './AddOns'
interface AddOnsProviderProps {
    children:React.ReactNode | React.ReactElement
}

export const AddOnsProvider:React.FC<AddOnsProviderProps> = ({children}) => {
    const [choseAddOns,setChoseAddOns] = useState<AddOns[]>([]);

    return (
        <AddOnsContext.Provider value={{choseAddOns,setChoseAddOns}}>
            {children}
        </AddOnsContext.Provider>
    )
}