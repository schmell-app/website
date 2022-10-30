import { AppShell, Header, MantineProvider } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import colors from "../../constants/colors";
import { theme } from "../../lib/mantine/theme";

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <AppShell
        styles={{
          main: {
            backgroundColor: colors.gray[6],
          },
        }}
        header={
          <Header
            height={95}
            p="sm"
            sx={{
              borderRadius: 20,
              margin: 12,
            }}
          >
            <h1>Header</h1>
            {/* <HeaderContent /> */}
          </Header>
        }
      >
        {children}
      </AppShell>
    </MantineProvider>
  );
};

export default AppWrapper;
