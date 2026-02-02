import { useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";

// import components
import UserDetails from "../components/UserDetails";
import UserForm from "../components/UserForm";

const Home = () => {
  const { users, dispatch } = useUserContext();

  useEffect(() => {
    const fetcUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_USERS", payload: json });
      }
    };

    fetcUsers();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="users">
        {users &&
          users.map((user) => <UserDetails user={user} key={user._id} />)}
      </div>
      <UserForm />
    </div>
  );
};

export default Home;
