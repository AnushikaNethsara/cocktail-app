import Link from "next/link";

const LinkItem = ({ href, isActive, children }) => {
  const linkClasses = `
    px-4 py-2 rounded-md text-lg font-semibold transition duration-200
    ${isActive ? "bg-gray-200 text-gray-900" : "text-gray-600"}
    hover:bg-gray-300 hover:text-black
  `;

  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
};

export default LinkItem;
