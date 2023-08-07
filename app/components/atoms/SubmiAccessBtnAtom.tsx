export function SubmiAccessBtnAtom({ 
    actionBtn,
    isLogInPage,
    optionLabel
}: {
    optionLabel: string
    actionBtn: string
    isLogInPage: boolean
}) {
    return (
        <div className="mb-12 pb-1 pt-1 text-center">
            <button
                id='submit-access-btn'
                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                >
                { actionBtn }
            </button>

            {/* <!--Forgot password link--> */}
            {isLogInPage && <a href="#!">{ optionLabel }</a>}
        </div>
    )
}