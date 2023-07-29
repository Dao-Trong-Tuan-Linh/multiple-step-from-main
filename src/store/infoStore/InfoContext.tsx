import {createContext,useContext} from 'react'
import {InfoContextType} from './Info'

export const InfoContext = createContext<InfoContextType | null>(null);

export const useInfo = () => {
    const context = useContext(InfoContext);
    if (!context) {
        throw new Error('useInfo must be used within a InfoProvider');
      }
      return context;
}

