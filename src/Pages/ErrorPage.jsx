import errorImage from "../assets/error image.jpg"

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2 className="text-6xl font-bold text-red-500 my-8"> Something Went Wrong </h2>
            <div className="w-3/5 mx-auto flex justify-center mb-8">
                <img className="h-[470px]" src={errorImage} alt="" />
            </div>
            <h2 className="text-6xl font-bold text-red-500"> Try Again Letter </h2>
        </div>
    );
};

export default ErrorPage;