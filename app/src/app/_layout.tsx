import { Stack } from "expo-router";
import "../styles/global.css";

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name='index' options={{headerShown: false}} />
            <Stack.Screen name='signin' options={{headerShown: false}} />
            <Stack.Screen name='signup' options={{headerShown: false}} />
            <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        </Stack>
    )
}