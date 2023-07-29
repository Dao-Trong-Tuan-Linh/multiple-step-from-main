import {createContext,useContext} from 'react'
import {AddOnsContextType} from './AddOns'

export const AddOnsContext = createContext<AddOnsContextType | null>(null);

export const useAddOns = () => {
    const context = useContext(AddOnsContext);
    if (!context) {
        throw new Error('useAddOns must be used within a AddOnsProvider');
      }
      return context;
}

