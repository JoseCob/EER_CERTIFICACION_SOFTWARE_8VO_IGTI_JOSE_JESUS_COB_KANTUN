import React from "react";
import { View } from 'react-native';
import SafeLayout from '@/shared/components/layouts/SafeLayout';

export default function DashBoardTemplate ({children}: {children: React.ReactNode}) {
    return (
        <SafeLayout>
            <View
                style={{
                    flex:1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {children}
            </View>
        </SafeLayout>
    );
}