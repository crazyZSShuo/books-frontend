'use client'

import Link from "next/link";
import { Book, BookOpen, Library, Bookmark, Coffee, Code } from "lucide-react";
import Logo from '@/components/Logo';

export const categories = [
  { id: 'home', name: '首页', icon: Book, path: '/' },
  { id: 'business', name: '经营励志', icon: BookOpen, path: '/category/business' },
  { id: 'humanities', name: '人文社科', icon: Library, path: '/category/humanities' },
  { id: 'science', name: '科学新知', icon: Code, path: '/category/science' },
  { id: 'lifestyle', name: '生活休闲', icon: Coffee, path: '/category/lifestyle' },
  { id: 'collections', name: '合集区', icon: Bookmark, path: '/category/collections' },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-8">
            <Logo />
            <div className="hidden md:flex space-x-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.id}
                    href={category.path}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Icon size={18} />
                    <span>{category.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link 
              href="/auth/login"
              className="relative px-4 py-2 text-gray-700 overflow-hidden group hover:text-gray-900 transition-colors duration-300"
            >
              <span className="relative z-10">登录</span>
              <div className="absolute inset-0 h-[1px] w-full bg-gray-900 -bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <div className="absolute inset-0 bg-gray-100 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 -z-0" />
            </Link>
            <Link
              href="/auth/register"
              className="relative px-4 py-2 text-gray-700 overflow-hidden group hover:text-gray-900 transition-colors duration-300"
            >
              <span className="relative z-10">注册</span>
              <div className="absolute inset-0 h-[1px] w-full bg-gray-900 -bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <div className="absolute inset-0 bg-gray-100 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 -z-0" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
