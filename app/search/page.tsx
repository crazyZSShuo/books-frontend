'use client'

import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import BookCard from '@/components/BookCard';

// Sample search results - in a real app, this would come from an API
const allBooks = [
  { id: 1, title: '思考，快与慢', author: '丹尼尔·卡尼曼', cover: 'https://picsum.photos/200/300?random=1' },
  { id: 2, title: '人类简史', author: '尤瓦尔·赫拉利', cover: 'https://picsum.photos/200/300?random=2' },
  { id: 3, title: '未来简史', author: '尤瓦尔·赫拉利', cover: 'https://picsum.photos/200/300?random=3' },
  { id: 4, title: '认知觉醒', author: '周岭', cover: 'https://picsum.photos/200/300?random=4' },
  { id: 5, title: '深度工作', author: '卡尔·纽波特', cover: 'https://picsum.photos/200/300?random=5' },
  { id: 6, title: '原则', author: '瑞·达利欧', cover: 'https://picsum.photos/200/300?random=6' },
  // Add more books as needed
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // Simple search implementation - in a real app, this would be handled by a backend
  const searchResults = allBooks.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">搜索结果</h1>
          <p className="text-gray-600">
            关键词 "{query}" 找到 {searchResults.length} 个结果
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {searchResults.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">未找到相关书籍</p>
          </div>
        )}
      </main>
    </div>
  );
}
