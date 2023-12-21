import { Box, Stack, StackProps } from "@mui/material";

export type ContainerProps = Pick<StackProps, "sx" | "children"> & {
  fullHeight?: boolean;
  limitedWidth?: boolean;
  horizontallyCentered?: boolean;
  verticallyCentered?: boolean;
};

export const Container = ({
  sx,
  fullHeight,
  horizontallyCentered: verticalAligned,
  verticallyCentered,
  limitedWidth,
  children,
}: ContainerProps) => {
  return (
    <Stack
      direction="column"
      px={2}
      sx={{
        minHeight: fullHeight ? "1000px" : undefined,
        height: fullHeight ? "100vh" : undefined,
        alignItems: verticalAligned ? "center" : undefined,
        justifyContent: verticallyCentered ? "center" : undefined,
        ...sx,
      }}
    >
      <Box
        sx={{
          maxWidth: limitedWidth ? "1200px" : undefined,
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};
