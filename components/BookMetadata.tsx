'use client'

import { Calendar, User, Building, Eye, Download } from 'lucide-react';

interface BookMetadataProps {
  title: string;
  author: string;
  publisher: string;
  publishDate: string;
  views: number;
  downloads: number;
}

export default function BookMetadata({
  title,
  author,
  publisher,
  publishDate,
  views,
  downloads,
}: BookMetadataProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <User size={18} />
          <span>作者：{author}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Building size={18} />
          <span>出版社：{publisher}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={18} />
          <span>出版日期：{publishDate}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-600">
            <Eye size={18} />
            <span>{views} 次浏览</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Download size={18} />
            <span>{downloads} 次下载</span>
          </div>
        </div>
      </div>
    </div>
  );
}
