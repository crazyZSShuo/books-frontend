'use client'

import { Download, FileText } from 'lucide-react';

interface Format {
  name: string;
  size: string;
}

interface DownloadOptionsProps {
  formats: Format[];
  onDownload: (format: string) => void;
}

export default function DownloadOptions({ formats, onDownload }: DownloadOptionsProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">下载选项</h3>
        <div className="flex gap-2">
          {formats.map(format => (
            <span
              key={format.name}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {format.name}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {formats.map(format => (
          <div
            key={format.name}
            className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-gray-500" />
              <div>
                <p className="font-medium text-gray-900">{format.name} 格式</p>
                <p className="text-sm text-gray-500">文件大小：{format.size}</p>
              </div>
            </div>
            <button
              onClick={() => onDownload(format.name)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download size={16} />
              下载
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
