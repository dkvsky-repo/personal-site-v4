import Navigation from '../Navigation/Navigation'
import Meta from '../Meta';

export default function Header() {
  return (
    <>
      <div style={{ background: 'lightgray' }}>
        <h1>Header</h1>
        <Meta />
        <Navigation />
      </div>
    </>
  )
}