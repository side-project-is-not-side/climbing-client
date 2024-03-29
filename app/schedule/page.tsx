import React, { Suspense } from 'react';

import { Lists, Tabs } from '@/entities/schedule/ui';

async function SchedulePage() {
  return (
    <div>
      <Suspense>
        <Tabs />
      </Suspense>

      <Suspense>
        <Lists />
      </Suspense>
    </div>
  );
}

export default SchedulePage;
