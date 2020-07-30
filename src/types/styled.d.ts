import {} from 'styled-components';
import { Theme } from '../components/context/ColorVariable';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
