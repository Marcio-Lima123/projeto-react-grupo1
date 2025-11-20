// import { Link } from "react-router-dom";


export function Home(){
    return (
        <div>
            <HeaderApp />
                <h1>Start of the project</h1>
                {/* <Link to="/profile">Profile</Link> */}
            <FooterApp />
        </div>
    );
}

function HeaderApp(){
    return (
        <h1>This is the Header</h1>
    );
}

function FooterApp(){
    return (
        <h1>This is a Footer</h1>
    );
}
