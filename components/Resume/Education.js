export default function Education({ data }) {
  data.sort((a, b) => b.metadata.order - a.metadata.order);

  return (
    <section className='education'>
      <h1>Education</h1>
      {data.map((ed) => (
        <div className='education__item' key={ed.id}>
          <div className='education__item-logo'>
            <img src={ed.metadata.logo} alt={ed.metadata.organization} />
          </div>
          <div className='education__item-description'>
            <p>
              {ed.metadata.date} | <strong>{ed.metadata.degree_title}</strong>{' '}
              <br />
              {ed.metadata.organization}, {ed.metadata.location}.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
