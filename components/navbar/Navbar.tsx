import LinksDropDown from './LinksDropDown';
import Logo from './Logo';
import NavSearch from './NavSearch';

function Navbar() {
  return (
    <nav className="sticky  top-0 left-0 right-0  z-50 ">
      <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center flex-wrap gap-4 py-4 sm:py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <LinksDropDown />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
