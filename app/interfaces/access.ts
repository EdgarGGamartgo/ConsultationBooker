export interface AccessProps {
    title: string
    actionBtn: string
    optionLabel: string
    alternativeOptionLabel: string
    isLogInPage: boolean
}

export interface LogInProps extends AccessProps {}

export interface SignUpProps extends AccessProps {}