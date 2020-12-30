export default function DownloadResume({
  width = '280px',
  className = '',
  fileLocation,
}) {
  return (
    <a
      role='button'
      className={className}
      href={`${fileLocation}`}
      target='_blank'
      style={{ width: width }}
    >
      Download Résumé
    </a>
  );
}
