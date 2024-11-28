'use client'

import { useState } from 'react';
import { Book } from 'lucide-react';
import Header from '@/components/Header';
import BookCard from '@/components/BookCard';

// Using the same books data from the home page
// In a real app, this would come from an API or database
const allBooks = [
  { id: 1, title: '思考，快与慢', author: '丹尼尔·卡尼曼', cover: 'https://picsum.photos/200/300?random=1' },
  { id: 2, title: '人类简史', author: '尤瓦尔·赫拉利', cover: 'https://picsum.photos/200/300?random=2' },
  { id: 3, title: '未来简史', author: '尤瓦尔·赫拉利', cover: 'https://picsum.photos/200/300?random=3' },
  { id: 4, title: '认知觉醒', author: '周岭', cover: 'https://picsum.photos/200/300?random=4' },
  { id: 5, title: '深度工作', author: '卡尔·纽波特', cover: 'https://picsum.photos/200/300?random=5' },
  { id: 6, title: '原则', author: '瑞·达利欧', cover: 'https://picsum.photos/200/300?random=6' },
  { id: 7, title: '刻意练习', author: '安德斯·艾利克森', cover: 'https://picsum.photos/200/300?random=7' },
  { id: 8, title: '心流', author: '米哈里·契克森米哈赖', cover: 'https://picsum.photos/200/300?random=8' },
  { id: 9, title: '自控力', author: '凯利·麦格尼格尔', cover: 'https://picsum.photos/200/300?random=9' },
  { id: 10, title: '专注力', author: '克里斯·贝利', cover: 'https://picsum.photos/200/300?random=10' },
  // ... add more books as needed
];

const BOOKS_PER_PAGE = 30;

export default function AllBooksPage() {
  const [page, setPage] = useState(1);
  
  const totalPages = Math.ceil(allBooks.length / BOOKS_PER_PAGE);
  const displayedBooks = allBooks.slice(0, page * BOOKS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Book size={24} className="text-gray-700" />
          <h1 className="text-3xl font-bold text-gray-900">全部书籍</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {displayedBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        {page < totalPages && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setPage(p => p + 1)}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              加载更多
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
