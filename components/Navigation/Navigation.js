import Link from 'next/link';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  margin: auto 32px;

  .brand-name {
    font-weight: bold;
    text-transform: uppercase;
  }

  .nav-item {
    a {
      color: #415462;
    }
  }
`;

export default function Navigation() {
  const navItems = [
    // { name: 'Home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'recommendations', path: '/recommendations' },
    // { name: "Blog", path: "/blog" },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <StyledNavigation>
      <ul>
        <Link href='/' key='home'>
          <li className='brand-name'>David Kontorovsky</li>
        </Link>
      </ul>
      <ul>
        {navItems.map((item) => (
          <li className='nav-item' key={item.name}>
            <Link href={item.path}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNavigation>
  );
}
