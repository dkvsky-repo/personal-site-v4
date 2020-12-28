export default function DownloadResume({ width = '280px', fileLocation }) {
  return (
    <a
      role='button'
      className='outline'
      href={`${fileLocation}`}
      target='_blank'
      style={{ width: width }}
    >
      Download Résumé
    </a>
  );
}
