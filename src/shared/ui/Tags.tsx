import React from 'react';

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex gap-[10px]">
      {tags.map((tag) => (
        <li key={tag} className="px-4 py-[2px] rounded-[10px] bg-neutral-700 text-neutral-400 text-xs font-bold">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
