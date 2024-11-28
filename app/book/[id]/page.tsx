'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import BookMetadata from '@/components/BookMetadata';
import DownloadOptions from '@/components/DownloadOptions';
import RelatedBooks from '@/components/RelatedBooks';

// Sample book data - in a real app, this would come from an API
const bookData = {
  id: 1,
  title: '思考，快与慢',
  author: '丹尼尔·卡尼曼',
  publisher: '中信出版社',
  publishDate: '2024-05-04',
  cover: 'https://picsum.photos/400/600?random=1',
  description: `
    这本书是诺贝尔经济学奖得主丹尼尔·卡尼曼的代表作。
    作者深入浅出地介绍了人类是如何思考的，为什么在某些情况下会做出错误的判断，
    以及如何避免这些认知偏差。书中将人的思维分为快思维（系统1）和慢思维（系统2），
    并通过大量的实验和研究案例，展示了这两种思维系统是如何影响我们的决策的。
  `.trim(),
  authorIntro: `
    丹尼尔·卡尼曼（Daniel Kahneman），1934年生于特拉维夫，
    心理学家和行为经济学家，2002年因其将心理学研究方法引入经济学而获得诺贝尔经济学奖。
    他是普林斯顿大学伍德罗·威尔逊学院心理学和公共事务荣休教授。
  `.trim(),
  views: 6650,
  downloads: 0,
  formats: [
    { name: 'EPUB', size: '2.5MB' },
    { name: 'AZW3', size: '3.1MB' },
    { name: 'MOBI', size: '2.8MB' },
  ],
};

// Sample related books
const relatedBooks = [
  { id: 2, title: '预测：决策与判断', author: '菲利普·泰洛克', cover: 'https://picsum.photos/200/300?random=2' },
  { id: 3, title: '直觉泵和其他思考工具', author: '丹尼尔·丹尼特', cover: 'https://picsum.photos/200/300?random=3' },
  { id: 4, title: '超越智商', author: '基思·斯坦诺维奇', cover: 'https://picsum.photos/200/300?random=4' },
  { id: 5, title: '这才是心理学', author: '基思·斯坦诺维奇', cover: 'https://picsum.photos/200/300?random=5' },
];

export default function BookDetailPage() {
  const handleDownload = (format: string) => {
    // Handle download logic here
    console.log(`Downloading ${format} format`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900">首页</Link>
          <ChevronRight size={16} />
          <Link href="/category/all" className="hover:text-gray-900">全部书籍</Link>
          <ChevronRight size={16} />
          <span className="text-gray-900">{bookData.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Book Info Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Book Cover */}
                <div className="relative aspect-[2/3] md:col-span-1">
                  <Image
                    src={bookData.cover}
                    alt={bookData.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                {/* Book Metadata */}
                <div className="md:col-span-2">
                  <BookMetadata
                    title={bookData.title}
                    author={bookData.author}
                    publisher={bookData.publisher}
                    publishDate={bookData.publishDate}
                    views={bookData.views}
                    downloads={bookData.downloads}
                  />
                </div>
              </div>
            </div>

            {/* Download Options */}
            <DownloadOptions
              formats={bookData.formats}
              onDownload={handleDownload}
            />

            {/* Book Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">内容简介</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {bookData.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">作者简介</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {bookData.authorIntro}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <RelatedBooks books={relatedBooks} />
          </div>
        </div>
      </main>
    </div>
  );
}
