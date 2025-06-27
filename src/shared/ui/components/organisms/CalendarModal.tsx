import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { spacing, typography, colors } from "@/shared/theme";
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns-tz';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ],
  monthNamesShort: [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ],
  dayNames: [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  today: 'Hoy'
};
LocaleConfig.defaultLocale = 'es';

//props para el modal
interface FormModalProps {
    visible: boolean; //Controla la visibilidad del modal
    onClose: () => void; // para cerrar/abrir el modal
    onConfirm: (selectedDate: Date) => void;
    defaultDate?: Date;
    shouldPersistDateSelection: boolean;
    setShouldPersistDateSelection: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalendarModal:React.FC<FormModalProps> = ({visible, onClose, onConfirm, defaultDate, shouldPersistDateSelection, setShouldPersistDateSelection}) => {
    const [selectedDate, setSelectedDate] = useState<Date>(defaultDate || new Date());
    const deviceTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; //Establecemos zona horaria del dispositivo

    useEffect(() => {
        if (defaultDate) setSelectedDate(defaultDate);
    }, [defaultDate]);

    //Propiedades para el calendario
    const formattedDate = format(selectedDate, "yyyy-MM-dd", { timeZone: deviceTimeZone }); 
    const today = format(new Date(), "yyyy-MM-dd", { timeZone: deviceTimeZone });

    return (
        <Modal
            transparent={true} 
            animationType="slide"
            visible={visible}
            onRequestClose={onClose} // Botón de retroceder desde Android(botón fisico del celular)
        >
            <View style={styles.overlay}>
                <View style={styles.calendarBox}>
                    <View style={styles.modalHeader}>
                        <Pressable onPress={()=> {
                            setShouldPersistDateSelection(false);
                            onClose(); 
                            console.log("Botón cancelar modal del calendario");
                        }}>
                            <Text style={styles.textCancel}>Cancelar</Text>
                        </Pressable>
                        <Text style={styles.titleText}>Elegir fecha</Text>
                        <Pressable onPress={()=> {
                            console.log("Botón añadir fecha del calendario");
                            onConfirm(selectedDate);
                            setShouldPersistDateSelection(true);
                            onClose();
                        }}>
                            <Text style={styles.textAdd}>Añadir</Text>
                        </Pressable>
                    </View>
                    <Calendar
                        current={format(selectedDate, "yyyy-MM-dd")}
                        onDayPress={(day) => {
                            const selected = new Date(day.year, day.month - 1, day.day);
                            setSelectedDate(selected);
                        }}
                        markedDates={{
                            [formattedDate]: {
                                selected: true,
                                selectedColor: colors.backgroundApp,
                            },
                        }}
                        maxDate={today}
                        theme={{
                            selectedDayBackgroundColor: colors.backgroundApp,
                            todayTextColor: colors.backgroundApp,
                            arrowColor: colors.backgroundApp,
                            textSectionTitleColor: "#000",
                            textDayFontWeight: "500",
                            textMonthFontWeight: "bold",
                            textMonthFontSize: 18,
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
}
export default CalendarModal;

const styles = StyleSheet.create({
    overlay:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.44)',
    },
    calendarBox:{
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: spacing.lg,
        borderTopRightRadius: spacing.lg,
        paddingTop: spacing.md,
        paddingBottom: spacing.xxl,
        backgroundColor: colors.surface,
    },
    modalHeader:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        padding: spacing.md,
        marginTop: spacing.xs,
    },
    textCancel:{
        color: 'rgba(78, 76, 76, 0.78)',
        fontSize: typography.fontSizeM,
        fontWeight:'500',
    },
    titleText:{
        fontWeight:'bold',
        letterSpacing: 1.5,
        fontSize: typography.fontSizeXL,
    },
    textAdd:{
        color: colors.backgroundApp,
        fontSize: typography.fontSizeM,
        fontWeight:'500',
    },
})