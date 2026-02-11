// These comments are added by MOI. Nobody, or nomachine else.

import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import { TanStackDevtools } from '@tanstack/react-devtools';

import appCss from '../styles.css?url';
import React from 'react';
import Ascii from '@/components/ui/ascii';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'The DafT Dev, also known as Ross D',
      },
      {
        name: 'description',
        content:
          'The DafT Dev, also known as Ross D - NextJS, Typescript and Golang Web Developer.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon-new.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Daft Dev" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Backup */}
        {/*
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
        */}

        <link
          href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />

        {/* Meta overrides */}
        <HeadContent />

        <Ascii />
      </head>
      <body>
        {children}
        {/* <TanStackDevtools */}
        {/*   config={{ */}
        {/*     position: 'bottom-right', */}
        {/*   }} */}
        {/*   plugins={[ */}
        {/*     { */}
        {/*       name: 'Tanstack Router', */}
        {/*       render: <TanStackRouterDevtoolsPanel />, */}
        {/*     }, */}
        {/*   ]} */}
        {/* /> */}
        <Scripts />
        { /* Cloudflare Web Analytics - not needed right now */}
        {/* <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "e32c25a87e9148198f60435cb9205a0b"}'></script> */}
        { /* End Cloudflare Web Analytics */}
      </body>
    </html>
  )
};
