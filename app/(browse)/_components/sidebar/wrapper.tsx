'use client';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';
import { useEffect, useState } from 'react';
import { ToggleSkeleton } from './toggle';
import { RecommendedSkeleton } from './recommended';
import { useIsClient } from 'usehooks-ts';
import { FollowingSkeleton } from './following';

interface WrapperProps {
    children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
    const isClient = useIsClient();
    const { collapsed } = useSidebar((state) => state);

    if (!isClient)
        return (
            <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] Z-50">
                <ToggleSkeleton />
                <FollowingSkeleton />
                <RecommendedSkeleton />
            </aside>
        );
    return (
        <aside
            className={cn(
                'fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] Z-50',
                collapsed && 'w-[70px]'
            )}
        >
            {children}
        </aside>
    );
};
