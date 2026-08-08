import React from 'react';
import { Link } from 'react-router-dom';

const renderFormattedText = (text) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const linkText = match[1];
    const linkUrl = match[2];

    if (linkUrl.startsWith('/')) {
      parts.push(
        <Link
          key={match.index}
          to={linkUrl}
          className="text-amber-400 font-semibold underline underline-offset-4 decoration-amber-400/40 hover:decoration-amber-400 hover:text-amber-300 transition-colors"
        >
          {linkText}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noreferrer"
          className="text-amber-400 font-semibold underline underline-offset-4 decoration-amber-400/40 hover:decoration-amber-400 hover:text-amber-300 transition-colors"
        >
          {linkText}
        </a>
      );
    }
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const MarkdownRenderer = ({ content }) => {
  if (!content) return null;

  const lines = content.split(/\r?\n/);
  const elements = [];
  let currentList = [];
  let listType = null;

  const flushList = (key) => {
    if (currentList.length > 0) {
      if (listType === 'ul') {
        elements.push(
          <ul key={`ul-${key}`} className="list-disc list-inside space-y-2 mb-6 text-white/70 text-base md:text-lg pl-4 font-normal">
            {currentList.map((item, idx) => (
              <li key={idx}>{renderFormattedText(item)}</li>
            ))}
          </ul>
        );
      } else if (listType === 'ol') {
        elements.push(
          <ol key={`ol-${key}`} className="list-decimal list-inside space-y-2 mb-6 text-white/70 text-base md:text-lg pl-4 font-normal">
            {currentList.map((item, idx) => (
              <li key={idx}>{renderFormattedText(item)}</li>
            ))}
          </ol>
        );
      }
      currentList = [];
      listType = null;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList(index);
      return;
    }

    if (trimmed.startsWith('# ')) {
      flushList(index);
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushList(index);
      elements.push(
        <h2 key={index} className="text-2xl md:text-3xl font-black text-white mt-10 mb-4 tracking-tight">
          {trimmed.replace(/^##\s+/, '')}
        </h2>
      );
    } else if (trimmed.startsWith('### ')) {
      flushList(index);
      elements.push(
        <h3 key={index} className="text-xl md:text-2xl font-bold text-amber-400 mt-8 mb-3">
          {trimmed.replace(/^###\s+/, '')}
        </h3>
      );
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (listType && listType !== 'ul') flushList(index);
      listType = 'ul';
      currentList.push(trimmed.replace(/^[-*]\s+/, ''));
    } else if (/^\d+\.\s+/.test(trimmed)) {
      if (listType && listType !== 'ol') flushList(index);
      listType = 'ol';
      currentList.push(trimmed.replace(/^\d+\.\s+/, ''));
    } else {
      flushList(index);
      elements.push(
        <p key={index} className="text-white/70 leading-relaxed text-base md:text-lg mb-6 font-medium">
          {renderFormattedText(trimmed)}
        </p>
      );
    }
  });

  flushList(lines.length);

  return <div className="markdown-content">{elements}</div>;
};

export default MarkdownRenderer;
