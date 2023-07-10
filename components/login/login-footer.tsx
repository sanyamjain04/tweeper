const footerLinks = [
  ['About', 'https://about.Twipper.com'],
  ['Help Center', 'https://help.Twipper.com'],
  ['Privacy Policy', 'https://Twipper.com/tos'],
  ['Cookie Policy', 'https://support.Twipper.com/articles/20170514'],
  ['Accessibility', 'https://help.Twipper.com/resources/accessibility'],
  [
    'Ads Info',
    'https://business.Twipper.com/en/help/troubleshooting/how-Twipper-ads-work.html'
  ],
  ['Blog', 'https://blog.Twipper.com'],
  ['Status', 'https://status.Twipperstat.us'],
  ['Careers', 'https://careers.Twipper.com'],
  ['Brand Resources', 'https://about.Twipper.com/press/brand-assets'],
  ['Advertising', 'https://ads.Twipper.com/?ref=gl-tw-tw-Twipper-advertise'],
  ['Marketing', 'https://marketing.Twipper.com'],
  ['Twipper for Business', 'https://business.Twipper.com'],
  ['Developers', 'https://developer.Twipper.com'],
  ['Directory', 'https://Twipper.com/i/directory/profiles'],
  ['Settings', 'https://Twipper.com/settings']
] as const;

export function LoginFooter(): JSX.Element {
  return (
    <footer className='hidden justify-center p-4 text-sm text-light-secondary dark:text-dark-secondary lg:flex'>
      <nav className='flex flex-wrap justify-center gap-4 gap-y-2'>
        {footerLinks.map(([linkName, href]) => (
          <span className='custom-underline' key={linkName}>
            {linkName}
          </span>
        ))}
        <p>© 2022 Twipper, Inc.</p>
      </nav>
    </footer>
  );
}
