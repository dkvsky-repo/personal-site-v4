import Link from 'next/link';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  margin: auto 32px;

  .brand-name {
    text-transform: uppercase;
  }
`;

export default function Navigation() {
  const navItems = [
    { name: <HomeIcon />, path: '/' },
    { name: 'about', path: '/about' },
    { name: 'résumé', path: '/resume' },
    // { name: 'projects', path: '/projects' },
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
