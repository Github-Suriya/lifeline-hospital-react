import Doctors from "./partials/Doctor";
import './DoctorsList.css';
import Search from "./partials/Search";

const DoctorsList = () => {
    return (
        <>
        <div className="doctors-list-section">
            <div className="container search-container-wrapper">
                <Search />
            </div>
            <Doctors />
        </div>
        </>
    )
};

export default DoctorsList;