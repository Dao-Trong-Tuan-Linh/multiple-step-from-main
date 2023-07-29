import './App.css'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Step1 from './page/Step1'
import Step2 from './page/Step2'
import Step3 from './page/Step3'
import Step4 from './page/Step4'
import Swr from '../src/components/Swr/SwrComponent'
import NotFound from './components/NotFound/NotFound'
import {useInfo} from './store/infoStore/InfoContext'

interface IRoute {
  path:string,
  component:React.ReactNode | React.ReactElement
}




function App() {
  
  const listRoutes:IRoute[] = [
    {path:'/',component:<Navigate to="/step1" replace={true}/>},
    {path:'/step1',component:<Step1/>},
    {path:'/step2',component:<Step2 />},
    {path:'/step3',component:<Step3/>},
    {path:'/step4',component:<Step4/>},
    {path:'/swr',component:<Swr/>},
    {path:'*',component:<NotFound/>}
  ]
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {listRoutes.map((route:IRoute,index:number) => {
          return <Route key={index} path={route.path} element={route.component} />
        })}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
