import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Step4Component from '../components/step4/Step4Component'
import {Navigate} from 'react-router-dom'
import {usePlan} from '../store/planStore/PlanContext'


const Step4 = () => {
    const {chosePlan} = usePlan()
    if (!chosePlan.id) {
        return <Navigate to={'/swr'} replace />;
     }
    return (
        <DefaultLayout>
            <Step4Component/>
        </DefaultLayout>
    );
};

export default Step4;