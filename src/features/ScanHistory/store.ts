import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { Scan } from '@/entities/ScanCard';
import { toInternal } from '@/shared/lib/helpers';
import { useUserStore } from '@/shared/stores';

interface ScansStore {
  scans: Scan[] | null;
  fetchScans: () => void;
  addScan: (scan: Scan) => void;
}

const useScansStore = create<ScansStore>()(
  devtools(
    immer((set) => ({
      scans: null,
      fetchScans: async () => {
        const profileId = useUserStore.getState().activeProfile?.id;
        const response = await fetch(`api/v1/profiles/${profileId}/scans`);
        const data = toInternal(await response.json());
        set((state) => {
          state.scans = data.scans;
        });
      },
      addScan: (scan: Scan) =>
        set((state) => {
          state.scans?.push(scan);
        }),
    }))
  )
);

export default useScansStore;
