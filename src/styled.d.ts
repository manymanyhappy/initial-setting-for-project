import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      BLACK: string,
      GRAY: string,
      RED: string,
      DARK_SLATE_BLUE: string,
      FLORAL_WHITE: string
    };

    SIZES: {
      TEN: string,
      TWENTY: string,
      THIRTY: string,
      HUNDRED: string
    };

    DEVICETYPE: {
      PC: string,
      Mobile: string
    };
  }
}
