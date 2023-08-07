// import Image from 'next/image';
// import consultationPic from '../../public/images/consultation.jpg';

export function LogoAtom({ 
    title,
}: {
    title: string
}) {
    return (
        <div className="text-center flex items-center flex-col justify-center">
            {/* <Image
            objectFit='contain'
            className="w-48"
            src={consultationPic}
            alt="logo"
            /> */}
            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                { title }
            </h4>
        </div>
    )
}