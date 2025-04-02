const Profile = ({data}) => {
    data[1] = 30;
    data[0] = "Khan";
    return(
        <>
         <h1>Name: {data[0]}</h1>
         <p>Age: {data[1]}</p>
         <p>Skill: {data[2]}</p>
        
        </>
    )
};

export default Profile;