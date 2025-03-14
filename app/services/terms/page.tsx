import fs from 'fs';
import path from 'path';

const Page = () => {
  const filePath = path.join(process.cwd(), 'public', 'service', 'terms.html');
  const htmlContent = fs.readFileSync(filePath, 'utf-8');

  return (
    <div className="flex flex-col gap-2" dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />
  );
};

export default Page;
