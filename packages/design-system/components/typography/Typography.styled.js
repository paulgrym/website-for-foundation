import styled from "@emotion/styled"

export const Container = styled.h1`
  margin: 0;
  color: ${({ color, theme }) => color || theme.colors.gray[600]};
  ${({ variant, theme }) => theme.typography.desktop[variant]};

  ${({ theme }) => theme.breakpoints.tablet} {
    ${({ theme, variant }) => theme.typography.tablet[variant]}
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    ${({ theme, variant }) => theme.typography.mobile[variant]}
  }

  a {
    color: ${({ theme }) => theme.colors.primary[500]};
    padding-left: 3px;
  }

  strong {
    font-weight: 600;
  }
`
