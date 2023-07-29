
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Step2Component from '../components/Step2/Step2'
import {Info} from '../store/infoStore/Info'
import {Navigate} from 'react-router-dom'
import {useInfo} from '../store/infoStore/InfoContext'


const Step2 = () => {
    const {userInfo} = useInfo()
    if (!userInfo.email && !userInfo.name && !userInfo.phone) {
        return <Navigate to={'/swr'} replace />;
     }
    return (
        <DefaultLayout>
            <Step2Component/>
        </DefaultLayout>
    );
};

export default Step2;