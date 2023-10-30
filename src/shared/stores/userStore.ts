import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { Profile, QRInfo, RoleType, User } from '../models';

interface UserStore {
  user: User | null;
  profiles: Profile[] | null;
  activeProfile: Profile | null;
  qrInfo: QRInfo | null;
  fetchUser: () => void;
}

const mockedData: Omit<UserStore, 'fetchUser'> = {
  user: {
    firstName: 'Dev env',
    id: 0,
    telegramId: 0,
    username: 'Dev env',
  },
  profiles: [
    {
      id: 0,
      role: RoleType.DEVELOPER,
      user: {
        firstName: 'Dev env',
        id: 0,
        telegramId: 0,
        username: 'Dev env',
      },
    },
  ],
  activeProfile: {
    id: 0,
    role: RoleType.DEVELOPER,
    user: {
      firstName: 'Dev env',
      id: 0,
      telegramId: 0,
      username: 'Dev env',
    },
  },
  qrInfo: {
    profileId: 0,
    userId: 0,
    telegramId: 0,
  },
};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: {
          user: {
            id: string | number;
          };
        };
      };
    };
  }
}

const useUserStore = create<UserStore>()(
  devtools(
    immer((set) => ({
      user: null,
      profiles: null,
      activeProfile: null,
      qrInfo: null,
      fetchUser: async () => {
        const initData = window.Telegram.WebApp.initData;
        if (initData) {
          const userTelegramId = window.Telegram.WebApp.initDataUnsafe.user.id;

          const response = await fetch(`api/v1/profiles/telegram/${userTelegramId}`);
          // const response = await fetch(`http://localhost:8001/api/v1/profiles/telegram/${userTelegramId}`);
          // const response = await fetch(`${process.env.NEXT_PUBLIC_API_PROFILES}/${userTelegramId}`);
          if (response.status === 200) {
            const data = await response.json();
            set((state) => {
              state.user = data[0].user;
              state.profiles = data;
              state.activeProfile = data[0];
              state.qrInfo = {
                userId: data[0].user.id,
                profileId: data[0].id,
                telegramId: data[0].user.telegram_id,
              };
            });
            return data;
          }
        } else {
          set((state) => {
            state.activeProfile = mockedData.activeProfile;
            state.profiles = mockedData.profiles;
            state.qrInfo = mockedData.qrInfo;
            state.user = mockedData.user;
          });
          return mockedData;
        }
      },
    }))
  )
);

export default useUserStore;
