import "./topbar.css";
import { Search } from "@material-ui/icons";

export default function Topbar() {
    return(
        <div className="TopbarContainer">
            <div className="topbarLeft"></div>
                <span className="logo">Clownfb</span>
            <div className="topbarCenter"></div>
                <div className="searchBar">
                    <Search/>
                    <input placeholder="Search friend or post" className="searchInput"/>
                </div> 
            <div className="topbarRight"></div>
        </div>
    )
}