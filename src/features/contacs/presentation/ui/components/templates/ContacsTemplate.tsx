import React from 'react';
import SafeLayout from '@/shared/components/layouts/SafeLayout';

export default function ContacsTemplate({ children }: { children: React.ReactNode }) {
    return (
        <SafeLayout>
            {children}
        </SafeLayout>
    );
}