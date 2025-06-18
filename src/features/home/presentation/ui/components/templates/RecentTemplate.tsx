import {View, StyleSheet} from "react-native";
import { spacing } from '@/shared/theme'; //Hoja de Estilos generales
import RecentNotesHeader from '@/features/home/presentation/ui/components/molecules/RecentNotesHeader';
import RecentNotesCard from '@/features/home/presentation/ui/components/organisms/RecentNotesCard';

export default function RecentTemplate({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.content}>
            <RecentNotesHeader />
            <RecentNotesCard />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        justifyContent:'flex-start',
        marginTop: 28,
        marginLeft: spacing.lg,
        marginRight: spacing.lg,
    },
})