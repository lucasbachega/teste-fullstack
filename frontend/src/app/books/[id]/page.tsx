import BookDetail from "@/components/BookDetail";
import { Card } from "@/components/ui/Card";

interface Props {
  params: {
    id: string;
  };
}

export default function BookDetailPage({ params }: Props) {
  if (!params.id) {
    return (
      <div className="p-10 text-center text-zinc-500">
        Livro não encontrado.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <Card variant="elevated">
        <h1 className="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-2">
          Livro
        </h1>
        <BookDetail bookId={params.id} />
      </Card>
    </div>
  );
}
