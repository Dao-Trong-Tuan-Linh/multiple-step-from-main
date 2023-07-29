export interface Info{
    name?:string,
    email?:string,
    phone?:string,
}

export interface InfoContextType{
    userInfo:Info,
    setUserInfo:React.Dispatch<Info>
}