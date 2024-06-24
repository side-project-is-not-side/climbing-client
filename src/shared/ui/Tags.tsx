import React from 'react';

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex gap-[6px] flex-wrap">
      {tags.map((tag) => (
        <li
          key={tag}
          className="px-[10px] py-0.5 rounded-[5px] bg-grayscale-600 text-grayscale-400 text-xs font-medium"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
