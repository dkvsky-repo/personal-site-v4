import ReactMarkdown from 'react-markdown';

export default function Experience({ data }) {
  data.sort((a, b) => b.metadata.order - a.metadata.order);

  return (
    <section className='experience'>
      <h1>Experience</h1>
      {data.map((xp) => (
        <div className='experience__item' key={xp.id}>
          <div className='experience__item-col1'>
            {xp.metadata.logo ? (
              <img src={xp.metadata.logo} alt={xp.metadata.organization} />
            ) : (
              false
            )}
          </div>
          <div className='experience__item-col2'>
            <h3>{xp.metadata.job_title}</h3>
            <p>
              <strong>{xp.metadata.organization}</strong>,{' '}
              {xp.metadata.location}
            </p>
            <p>
              {xp.metadata.dateFrom}{' '}
              {xp.metadata.dateTo ? `- ${xp.metadata.dateTo}` : 'Present'}
            </p>
            <ReactMarkdown source={xp.content} />
          </div>
        </div>
      ))}
    </section>
  );
}
