import {createContext,useContext} from 'react'
import {PlanContextType} from './Plan'

export const PlanContext = createContext<PlanContextType | null>(null);

export const usePlan = () => {
    const context = useContext(PlanContext);
    if (!context) {
        throw new Error('usePlan must be used within a PlanProvider');
      }
      return context;
}

