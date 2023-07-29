
import './SwrComponent.css'
const SwrComponent = () => {
    return (
        <div className="background">
            <div className="container-swr">
                <img className='img-error' src="/public/images/error.svg"/>
                <h1 className='container-swr--title'>Oops!</h1>
                <p className='container-swr--info'>Something weng wrong!</p>
            </div>
        </div>
    );
};

export default SwrComponent;