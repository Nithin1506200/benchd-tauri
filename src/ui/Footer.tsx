interface props {
  selected: string;
  list: Array<{ component: React.JSX.Element; id: String }>;
}

const Footer = ({ list }: props) => {
  return (
    <div className="w-[100vw] p-4 pb-1 absolute bottom-0">
      <div className=" flex border rounded-xl gap-2 h-12 px-4 justify-between items-center ">
        {list.map((e) => (
          <>{e.component}</>
        ))}
      </div>
    </div>
  );
};
export default Footer;
