
export interface AddOns {
    id?:string,
    name?:string,
    desc?:string,
    money?:number,
    type?:string
}

export interface AddOnsContextType {
    choseAddOns:AddOns[],
    setChoseAddOns:React.Dispatch<AddOns[]>
}