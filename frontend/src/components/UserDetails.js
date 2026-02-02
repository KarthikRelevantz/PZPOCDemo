import { useUserContext } from "../hooks/useUserContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const UserDetails = ({ user }) => {
  const { dispatch } = useUserContext();

  const handleClick = async () => {
    const response = await fetch("/api/users/" + user.id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_USER", payload: json });
    }
  };

  return (
    <div className="user-details">
      <h4>{user.name}</h4>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      {user.createdAt && (
        <p>
          {formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}
        </p>
      )}

      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default UserDetails;
