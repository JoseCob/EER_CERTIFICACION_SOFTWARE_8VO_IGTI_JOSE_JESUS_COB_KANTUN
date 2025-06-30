import React from "react";
import { View} from 'react-native';
import { spacing } from "@/shared/theme";

interface props {
    children: React.ReactNode;
}

const ContactsData:React.FC<props> = ({children}) => {
    return (
        <View style={{marginBottom: spacing.md}}> 
            {children}
        </View>  
    );
}
export default ContactsData