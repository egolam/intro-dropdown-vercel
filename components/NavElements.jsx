import Features from "./Features";
import Company from "./Company";

const NavElements = ({hoverDisabled}) => {
  return (
    <ul className="list-none flex flex-col md:flex-row gap-10 px-6 md:px-0 md:h-full md:items-center md:justify-center">
      <Features hoverDisabled={hoverDisabled}/>
      <Company hoverDisabled={hoverDisabled}/>

      <li className="hover:text-[#151515] cursor-pointer md:h-full md:flex md:items-center">Careers</li>
      <li className="hover:text-[#151515] cursor-pointer md:h-full md:flex md:items-center">About</li>
    </ul>
  );
};

export default NavElements;
