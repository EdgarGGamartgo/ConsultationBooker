import { InputAtom, RegisterButtonAtom, SubmiAccessBtnAtom } from ".."

export function AccessFormMolecule({ 
    optionLabel,
    actionBtn,
    alternativeOptionLabel,
    isLogInPage
}: {
    optionLabel: string
    actionBtn: string
    alternativeOptionLabel: string
    isLogInPage: boolean
}) {
    return (
        <form>
            <p className="mb-4"></p>
            <InputAtom type={"text"} id={'username-input'} placeholder={'Username'} label={'Correo electrónico'}/>
            <InputAtom type={"password"} id={'password-input'} placeholder={'Password'} label={'Contraseña'}/>
            <SubmiAccessBtnAtom optionLabel={optionLabel} actionBtn={actionBtn} isLogInPage={isLogInPage} />
            <RegisterButtonAtom alternativeOptionLabel={alternativeOptionLabel}/>
        </form>
    )
}