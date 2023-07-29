import {useState} from 'react'
import {PlanContext} from './PlanContext'
import {Plan} from './Plan'
interface PlanProviderProps {
    children:React.ReactNode | React.ReactElement
}

export const PlanProvider:React.FC<PlanProviderProps> = ({children}) => {
    const [chosePlan,setChosePlan] = useState<Plan>({});

    return (
        <PlanContext.Provider value={{chosePlan,setChosePlan}}>
            {children}
        </PlanContext.Provider>
    )
}