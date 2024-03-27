import React, { Suspense } from 'react';

import { Lists, Tabs } from '@/entities/schedule/ui';

async function SchedulePage() {
  return (
    <div>
      <Suspense>
        <Tabs />
      </Suspense>

      <Lists />
    </div>
  );
}

export default SchedulePage;
