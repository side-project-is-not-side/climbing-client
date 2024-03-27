import Lists from '@/entities/schedule/ui/Lists';
import Tabs from '@/entities/schedule/ui/Tabs';

export const dynamic = 'force-dynamic';
async function SchedulePage() {
  return (
    <div>
      <Tabs />

      <Lists />
    </div>
  );
}

export default SchedulePage;
