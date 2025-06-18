import {View, StyleSheet} from "react-native";
import { spacing } from '@/shared/theme'; //Hoja de Estilos generales
import RemindersHeader from '@/features/home/presentation/ui/components/molecules/RemindersHeader';
import ReminderButtonGroup from '@/features/home/presentation/ui/components/organisms/ReminderButtonGroup';
import RemindersContacsCard from '@/features/home/presentation/ui/components/organisms/RemindersContacsCard';

export default function RemindersTemplate({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.content}>
      <RemindersHeader />
      <ReminderButtonGroup />
      <RemindersContacsCard />
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