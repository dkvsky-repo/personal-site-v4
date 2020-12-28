export default function DownloadResumeButton({ width = '280px' }) {
  return (
    <a
      role='button'
      className='outline'
      href='kontorovsky_david-resume.pdf'
      target='_blank'
      style={{ width: width }}
    >
      Résumé
    </a>
  );
}
