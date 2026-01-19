import { createFileRoute } from '@tanstack/react-router'
import Home from '../components/pages/home';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  headers: () => ({
    "Cache-Control": "public, s-maxage=300, stale-while-revalidate=1800"
  }),
  head: ({ params: _ }) => ({
    title: `daftness - Web Developer and -geek-`,
    meta: [
      {
        name: 'description',
        content: 'The personal site of a developer who generally goes by the name \'daft\' when gaming, a Typescript, PHP and new-to-Golang Web developer in South Africa, who loves learning new programming languages.',
      },
    ],
  }),
});

function RouteComponent() {
  return <Home />;
};

