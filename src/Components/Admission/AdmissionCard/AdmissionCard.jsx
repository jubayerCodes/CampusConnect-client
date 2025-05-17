
import { Link } from 'react-router';

const AdmissionCard = ({ college, idx }) => {

    return (
        <>
            <div className="relative bg-white hover:bg-green-800 hover:text-white shadow border rounded-lg flex flex-col justify-between">
                <Link to={`/admission/${college?._id}`} className="text-xl font-semibold p-4 block">{idx + 1}. {college?.collegeName}</Link>
            </div>
        </>
    );
};

export default AdmissionCard;