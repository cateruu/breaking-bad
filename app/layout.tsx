import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <title>Bearking Bed</title>
        <meta name='description' content='Breaking bed info mordo' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
