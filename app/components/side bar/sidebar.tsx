type Props = {
    open: boolean;
  };
  
  const Sidebar = ({ open }: Props) => {
    const baseClasses = "flex flex-col justify-between bg-indigo-700 text-zinc-50 md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed md:h-[calc(100vh_-_64px)] h-full w-[300px] transition-transform .3s ease-in-out md:translate-x-0";
    const conditionalClasses = open ? "" : "-translate-x-full";
  
    return (
      <div className={`${baseClasses} ${conditionalClasses}`}>
        <nav className="md:sticky top-0 md:top-16">
          <ul className="py-2 flex flex-col gap-2">
            <li>links here</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
  