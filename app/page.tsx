'use client'

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import BookCard from "@/components/BookCard";

// Sample books data - expanded to include more books
const allBooks = [
  // First 30 books (already shown)
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
  { id: 11, title: '清醒思考的艺术', author: '罗尔夫·多贝里', cover: 'https://picsum.photos/200/300?random=11' },
  { id: 12, title: '学会提问', author: '布朗', cover: 'https://picsum.photos/200/300?random=12' },
  { id: 13, title: '金字塔原理', author: '芭芭拉·明托', cover: 'https://picsum.photos/200/300?random=13' },
  { id: 14, title: '高效能人士的七个习惯', author: '史蒂芬·柯维', cover: 'https://picsum.photos/200/300?random=14' },
  { id: 15, title: '影响力', author: '罗伯特·西奥迪尼', cover: 'https://picsum.photos/200/300?random=15' },
  { id: 16, title: '黑天鹅', author: '纳西姆·塔勒布', cover: 'https://picsum.photos/200/300?random=16' },
  { id: 17, title: '反脆弱', author: '纳西姆·塔勒布', cover: 'https://picsum.photos/200/300?random=17' },
  { id: 18, title: '随机漫步的傻瓜', author: '纳西姆·塔勒布', cover: 'https://picsum.photos/200/300?random=18' },
  { id: 19, title: '稀缺', author: '塞德希尔·穆来纳森', cover: 'https://picsum.photos/200/300?random=19' },
  { id: 20, title: '引爆点', author: '马尔科姆·格拉德威尔', cover: 'https://picsum.photos/200/300?random=20' },
  { id: 21, title: '异类', author: '马尔科姆·格拉德威尔', cover: 'https://picsum.photos/200/300?random=21' },
  { id: 22, title: '眨眼之间', author: '马尔科姆·格拉德威尔', cover: 'https://picsum.photos/200/300?random=22' },
  { id: 23, title: '沟通的艺术', author: '罗纳德·阿德勒', cover: 'https://picsum.photos/200/300?random=23' },
  { id: 24, title: '非暴力沟通', author: '马歇尔·卢森堡', cover: 'https://picsum.photos/200/300?random=24' },
  { id: 25, title: '关键对话', author: '科里·帕特森', cover: 'https://picsum.photos/200/300?random=25' },
  { id: 26, title: '谈判力', author: '罗杰·费希尔', cover: 'https://picsum.photos/200/300?random=26' },
  { id: 27, title: '决策与判断', author: '斯科特·普劳斯', cover: 'https://picsum.photos/200/300?random=27' },
  { id: 28, title: '乌合之众', author: '古斯塔夫·勒庞', cover: 'https://picsum.photos/200/300?random=28' },
  { id: 29, title: '社会性动物', author: '埃利奥特·阿伦森', cover: 'https://picsum.photos/200/300?random=29' },
  { id: 30, title: '心理学与生活', author: '理查德·格里格', cover: 'https://picsum.photos/200/300?random=30' },
  
  // Additional books for loading more
  { id: 31, title: '情商', author: '丹尼尔·戈尔曼', cover: 'https://picsum.photos/200/300?random=31' },
  { id: 32, title: '社会认知', author: '菲斯克', cover: 'https://picsum.photos/200/300?random=32' },
  { id: 33, title: '乌托邦', author: '托马斯·莫尔', cover: 'https://picsum.photos/200/300?random=33' },
  { id: 34, title: '理想国', author: '柏拉图', cover: 'https://picsum.photos/200/300?random=34' },
  { id: 35, title: '君主论', author: '马基雅维利', cover: 'https://picsum.photos/200/300?random=35' },
  { id: 36, title: '社会契约论', author: '卢梭', cover: 'https://picsum.photos/200/300?random=36' },
  { id: 37, title: '论法的精神', author: '孟德斯鸠', cover: 'https://picsum.photos/200/300?random=37' },
  { id: 38, title: '国富论', author: '亚当·斯密', cover: 'https://picsum.photos/200/300?random=38' },
  { id: 39, title: '资本论', author: '马克思', cover: 'https://picsum.photos/200/300?random=39' },
  { id: 40, title: '战争论', author: '克劳塞维茨', cover: 'https://picsum.photos/200/300?random=40' },
  // Add more books as needed
];

const BOOKS_PER_PAGE = 30;

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(BOOKS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayCount(prev => Math.min(prev + BOOKS_PER_PAGE, allBooks.length));
      setIsLoading(false);
    }, 500);
  };

  const displayedBooks = allBooks.slice(0, displayCount);
  const hasMore = displayCount < allBooks.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[400px]">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">书籍知识库</h1>
          <form onSubmit={handleSearch} className="w-full max-w-2xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索一下"
                className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Featured Books */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">最新发布</h2>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {displayedBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
        
        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? '加载中...' : '查看更多'}
              <ChevronDown size={18} className={isLoading ? 'animate-bounce' : ''} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
