import fs from 'fs';
import path from 'path';

export default function Page() {
  const filePath = path.join(process.cwd(), 'public', 'service', 'policy.html');
  const htmlContent = fs.readFileSync(filePath, 'utf-8');

  return (
    <div className="flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />
  );
}
