import { createFileRoute } from '@tanstack/react-router'
import AnimateTextExamples from '../components/pages/animate-text-examples';

export const Route = createFileRoute('/animate-text-examples')({
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
  return <AnimateTextExamples />;
};

