import { createFileRoute } from '@tanstack/react-router'
import Home from '../components/pages/home';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  headers: () => ({
    "Cache-Control": "public, s-maxage=300, stale-while-revalidate=1800"
  }),
  head: ({ params: _ }) => ({
    title: `The DafT Dev, also known as Ross D - NextJS, Typescript and Golang Web Developer.`,
    meta: [
      {
        name: 'description',
        content: 'The personal site of a daft fullstack developer by the name of Ross D, a Typescript, PHP and new-to-Golang Web developer in South Africa, who loves learning new programming languages and paradigms, both on server and client.',
      },
    ],
  }),
});

function RouteComponent() {
  return <Home />;
};

