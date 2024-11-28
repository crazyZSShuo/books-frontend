'use client'

import Image from 'next/image';
import Link from 'next/link';

interface RelatedBook {
  id: number;
  title: string;
  author: string;
  cover: string;
}

interface RelatedBooksProps {
  books: RelatedBook[];
}

export default function RelatedBooks({ books }: RelatedBooksProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">相关书籍</h3>
      
      <div className="space-y-4">
        {books.map(book => (
          <Link
            key={book.id}
            href={`/book/${book.id}`}
            className="flex gap-4 p-3 bg-white rounded-md hover:shadow-md transition-shadow"
          >
            <div className="relative w-16 h-24 flex-shrink-0">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="font-medium text-gray-900 line-clamp-1">{book.title}</h4>
              <p className="text-sm text-gray-500">{book.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
