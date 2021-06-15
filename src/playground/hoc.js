//Higher Order Component - A component (HOC)(This is regular old react component) which renders other component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>{
    return (
        <div>
            <h1>Info</h1>
            <p>The infor is: {props.info}</p>
        </div>
    );
};

const withAdminWrapping = (WrappedComponent) =>{
    return (props)=>{
        return(
            <div>
                {props.isAdmin && <p>This is private infor, Please do not share</p>}
                <WrappedComponent {...props}/>
            </div>
        );
    };
};

const reuireAuthentication = (WrappedComponent) =>{
    return (props)=>{
        return(
            <div>
                {props.isAuthenticated ? (
                <WrappedComponent {...props}/>) : 
                <p>You are not authenticated !</p>}
            </div>
        );
    };
};

//{...props} -> props ekee enne monawada ewaa spread wenawa methana key value pairs widiyata

const AdminInfo = withAdminWrapping(Info);
const Authinfo = reuireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<Authinfo isAuthenticated={false } info="There are the details"/>, document.getElementById('app'));

