import Profile from "./Profile"

const User = () => {
    const user = {name: "Saad", age: 20, skill: "javascript"};
    const data = ["Saad", 20, "Javascript"];
    return (
        <Profile data={data}/>
    )
}

export default User;