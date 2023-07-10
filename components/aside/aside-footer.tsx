const footerLinks = [
  ['Terms of Service', 'https://Twipper.com/tos'],
  ['Privacy Policy', 'https://Twipper.com/privacy'],
  ['Cookie Policy', 'https://support.Twipper.com/articles/20170514'],
  ['Accessibility', 'https://help.Twipper.com/resources/accessibility'],
  [
    'Ads Info',
    'https://business.Twipper.com/en/help/troubleshooting/how-Twipper-ads-work.html'
  ]
] as const;

export function AsideFooter(): JSX.Element {
  return (
    <footer
      className='sticky top-16 flex flex-col gap-3 text-center text-sm 
                 text-light-secondary dark:text-dark-secondary'
    >
      <nav className='flex flex-wrap justify-center gap-2'>
        {footerLinks.map(([linkName, href]) => (
          <span key={linkName} className='custom-underline'>
            {linkName}
          </span>
        ))}
      </nav>
      <p>© 2022 Twipper, Inc.</p>
    </footer>
  );
}
