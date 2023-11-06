import { Stack, StackProps, styled } from "@mui/material";

type Props = StackProps & {
  fullWidth?: boolean;
};

export const Section = ({ children, fullWidth, ...stackProps }: Props) => {
  return (
    <Stack
      minHeight="100vh"
      px={2}
      maxWidth={fullWidth ? undefined : 1200}
      alignItems="center"
      justifyContent="center"
      {...stackProps}
    >
      {children}
    </Stack>
  );
};

export const BgContainer = styled(Stack)(() => ({
  alignItems: "center",
  color: "var(--color-3)", // TODO: Move to MUI theme
  background: "linear-gradient(#a1969a, var(--color-4))",
}));
