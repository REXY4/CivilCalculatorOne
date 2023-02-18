import { NativeBaseProvider } from 'native-base';
import Router from './src/routers';

export default function App() {
  return (
    <NativeBaseProvider>
        <Router/>
    </NativeBaseProvider>
  );
}
