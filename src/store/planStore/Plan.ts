export interface Plan{
    id?:string,
    name?:string,
    money?:number,
    type?:string
}

export interface PlanContextType{
    chosePlan:Plan,
    setChosePlan:React.Dispatch<Plan>
}