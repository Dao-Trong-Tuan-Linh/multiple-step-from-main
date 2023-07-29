import {useState} from 'react'
import {InfoContext} from './InfoContext'
import {Info} from './Info'

interface InfoProviderProps {
    children:React.ReactNode | React.ReactElement
}

export const InfoProvider:React.FC<InfoProviderProps> = ({children}) => {
    const [userInfo,setUserInfo] = useState<Info>({});

    return (
        <InfoContext.Provider value={{userInfo,setUserInfo}}>
            {children}
        </InfoContext.Provider>
    )
}