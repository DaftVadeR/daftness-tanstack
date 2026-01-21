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
        content: 'Examples of React animated text components using different methods for rendering. Typing effect.',
      },
    ],
  }),
});

function RouteComponent() {
  return <AnimateTextExamples />;
};

