import { AccessFormMolecule, LogoAtom } from ".."

export function LeftAccessContainerOrganism({ 
    title,
    optionLabel,
    actionBtn,
    isLogInPage,
    alternativeOptionLabel
}: {
    title: string
    optionLabel: string
    actionBtn: string
    isLogInPage: boolean
    alternativeOptionLabel: string
}) {
    return (
        <div className="px-4 md:px-0 lg:w-6/12">
          <div className="md:mx-6 md:p-12">
            <LogoAtom title={title} />
            <AccessFormMolecule
                optionLabel={optionLabel}
                actionBtn={actionBtn}
                isLogInPage={isLogInPage}
                alternativeOptionLabel={alternativeOptionLabel}/>
          </div>
        </div>
    )
}