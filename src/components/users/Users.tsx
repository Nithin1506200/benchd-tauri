import { users } from "../../types/user.types";

import UserEmoji from "../../ui/UserEmoji";

const UserCards = (props: {
  user: users;
  onClick: (id: string) => undefined;
}) => {
  return (
    <div className=" flex items-center  px-2 py-1 border-b-[.5px] border-slate-950">
      <UserEmoji name={props.user.name} />
      <h2 className=" font-bold ml-2">{props.user.name}</h2>
    </div>
  );
};
const ListUsers = (props: { users: Array<users> }) => {
  return (
    <>
      <div>
        <div>
          {props.users.map((user) => {
            return <UserCards user={user} onClick={(_) => undefined} />;
          })}
        </div>
        <button>Add user</button>
      </div>
    </>
  );
};

export default ListUsers;
