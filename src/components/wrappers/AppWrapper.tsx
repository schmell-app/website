import { AppShell, Header, MantineProvider } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import { colors } from "../../constants";
import { theme } from "../../lib";
import HeaderContent from "../Header";
import { useMediaQuery } from "@mantine/hooks";

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

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
            height={isSmallScreen ? 150 : 95}
            p="sm"
            sx={{
              borderRadius: 20,
              margin: 12,
            }}
          >
            <HeaderContent />
          </Header>
        }
      >
        {children}
      </AppShell>
    </MantineProvider>
  );
};

export default AppWrapper;
