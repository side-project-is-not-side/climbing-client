'use client';

import React from 'react';

import useSWR from 'swr';

import { UserInfoMain } from '@/entities/challenges';
import { LogoutButton, WithdrawButton } from '@/features/auth';

const UserInfoPage = () => {
  const { data: userInfo } = useSWR<UserInfoMain>('/v1/user-info', null, { revalidateOnFocus: false });

  return (
    <div className="pt-10">
      <div className="flex gap-5 items-center w-full h-20 px-[30px] my-6 rounded-[10px] bg-neutral-700">
        <span className="font-header-1 text-neutral-white">유저 ID</span>

        <span className="font-text-1 text-neutral-400">{userInfo?.email}</span>
      </div>

      <LogoutButton />
      <WithdrawButton />
    </div>
  );
};

export default UserInfoPage;
