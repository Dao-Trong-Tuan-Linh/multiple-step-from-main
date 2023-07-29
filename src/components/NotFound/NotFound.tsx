

const NotFound = () => {
    return (
        <div className="background">
            <div className="container-swr">
                <img className='img-error' src="/public/images/error.svg"/>
                <h1 className='container-swr--title'>Error 404!</h1>
                <p className='container-swr--info'>This route is not exist!</p>
            </div>
        </div>
    );
};

export default NotFound;