import './SideBar.css';
import data from "../../../data/data.json";
import Topics from '../../Topics';

function SideBar() {
    return (
        <div className="SideBar">
            <Topics data={data}/>

        </div>


    )
}

export default SideBar;