import AuthButtons from "./AuthButtons";
import NavElements from "./NavElements";

const MobileSidebar = () => {
  return (
    <>
      <NavElements hoverDisabled={true}/>
      <AuthButtons/>
    </>
  );
};

export default MobileSidebar;
