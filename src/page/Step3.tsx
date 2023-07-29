import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Step3Component from '../components/Step3/Step3Component'
import {usePlan} from '../store/planStore/PlanContext'
import {Navigate} from 'react-router-dom'

const Step3 = () => {
    const {chosePlan} = usePlan()
    if (!chosePlan.id) {
        return <Navigate to={'/swr'} replace />;
     }
    return (
        <DefaultLayout>
            <Step3Component/>
        </DefaultLayout>
    );
};

export default Step3;