import { useLoaderData } from "react-router-dom";


const ToyDetail = () => {
    const {toy} = useLoaderData();
    console.log({toy});
    return (
        <div>
            
        </div>
    );
};

export default ToyDetail;