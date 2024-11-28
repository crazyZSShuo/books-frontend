'use client'

import Image from "next/image";
import Link from "next/link";

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  cover: string;
}

export default function BookCard({ id, title, author, cover }: BookCardProps) {
  return (
    <Link 
      href={`/book/${id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative aspect-[2/3]">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
      </div>
    </Link>
  );
}
