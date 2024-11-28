'use client'

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import BookCard from '@/components/BookCard';
import { categories } from '@/components/Header';

// Sample books data - in a real app, this would come from an API
const categoryBooks = {
  business: [
    { id: 1, title: '从0到1', author: '彼得·蒂尔', cover: 'https://picsum.photos/200/300?random=7' },
    { id: 2, title: '原则', author: '瑞·达利欧', cover: 'https://picsum.photos/200/300?random=8' },
    { id: 3, title: '穷查理宝典', author: '查理·芒格', cover: 'https://picsum.photos/200/300?random=9' },
  ],
  humanities: [
    { id: 4, title: '人类简史', author: '尤瓦尔·赫拉利', cover: 'https://picsum.photos/200/300?random=10' },
    { id: 5, title: '枪炮、病菌与钢铁', author: '贾雷德·戴蒙德', cover: 'https://picsum.photos/200/300?random=11' },
    { id: 6, title: '乌合之众', author: '古斯塔夫·勒庞', cover: 'https://picsum.photos/200/300?random=12' },
  ],
  science: [
    { id: 7, title: '时间简史', author: '史蒂芬·霍金', cover: 'https://picsum.photos/200/300?random=13' },
    { id: 8, title: '宇宙简史', author: '斯蒂芬·霍金', cover: 'https://picsum.photos/200/300?random=14' },
    { id: 9, title: '费曼物理学讲义', author: '理查德·费曼', cover: 'https://picsum.photos/200/300?random=15' },
  ],
  lifestyle: [
    { id: 10, title: '断舍离', author: '山下英子', cover: 'https://picsum.photos/200/300?random=16' },
    { id: 11, title: '怦然心动的人生整理魔法', author: '近藤麻理惠', cover: 'https://picsum.photos/200/300?random=17' },
    { id: 12, title: '修行在厨房', author: '松下幸子', cover: 'https://picsum.photos/200/300?random=18' },
  ],
  collections: [
    { id: 13, title: '哈佛经典全集', author: '多位作者', cover: 'https://picsum.photos/200/300?random=19' },
    { id: 14, title: '企业管理必读', author: '多位作者', cover: 'https://picsum.photos/200/300?random=20' },
    { id: 15, title: '科普名著精选', author: '多位作者', cover: 'https://picsum.photos/200/300?random=21' },
  ],
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const category = categories.find(cat => cat.id === slug);
  const books = categoryBooks[slug as keyof typeof categoryBooks] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            {category && <category.icon size={24} className="text-gray-700" />}
            <h1 className="text-3xl font-bold text-gray-900">{category?.name || '分类'}</h1>
          </div>
        </div>

        {books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">暂无相关书籍</p>
          </div>
        )}
      </main>
    </div>
  );
}
