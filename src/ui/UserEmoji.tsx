import React from "react";

function getInitials(name: string) {
  let tokens = name.split(" ");
  switch (tokens.length) {
    case 0:
      return "";
    case 1:
      return tokens[0].charAt(0).toUpperCase();
    default:
      return (
        tokens[0].charAt(0).toUpperCase() + tokens[1].charAt(0).toUpperCase()
      );
  }
}
const UserEmoji = React.memo((props: { name: string }) => {
  return (
    <>
      <div className="bg-gray-988 border-4 rounded-3xl w-10 h-10 flex justify-center items-center">
        <span className=" text-sm font-semibold">
          {getInitials(props.name)}
        </span>
      </div>
    </>
  );
});
export default UserEmoji;
