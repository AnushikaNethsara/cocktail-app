import LinkItem from "../atoms/LinkItem";

const NavLinks = ({ currentPath }) => (
  <>
    <LinkItem href="/" isActive={currentPath === "/"}>
      Home
    </LinkItem>
    <LinkItem href="/search" isActive={currentPath === "/search"}>
      Search
    </LinkItem>
    <LinkItem href="/favourites" isActive={currentPath === "/favourites"}>
      Favourites
    </LinkItem>
  </>
);

export default NavLinks;
