import Link from "next/link";

export default function Navigation() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Recommendations", path: "/recommendations" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav>
      {navItems.map((item) => (
        <Link href={item.path} key={item.name}>
          <a>{item.name}</a>
        </Link>
      ))}
    </nav>
  );
}
