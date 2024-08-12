import { useState } from "react";

interface props {
  selected: string;
  list: Array<{ id: string; name: string }>;
}

const Footer = ({ list }: props) => {
  const [open, stOpen] = useState<Boolean>(false);
  return (
    <div className="p-4 pb-1 absolute bottom-0 flex justify-center items-center w-full">
      <div className=" flex backdrop-blur-sm bg-slate-950 rounded-3xl gap-2 h-12 px-4 justify-between items-center ">
        {list.map(({ id, name }) => (
          <div key={id}>
            <div className="text-sm">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Footer;
