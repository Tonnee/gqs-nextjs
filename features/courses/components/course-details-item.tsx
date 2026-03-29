import Image from "next/image";

interface CourseDetailsItemProps {
    iconSrc: string;
    text: React.ReactNode;
}

export default function CourseDetailsItem({ iconSrc, text }: CourseDetailsItemProps) {
    return (
        <div className="bg-white rounded-[12px] flex items-center p-6 gap-[20px] shadow-sm hover:shadow-md transition-shadow duration-300">
            <Image
                src={iconSrc}
                alt="Gre Quant Coures Details"
                width={64}
                height={64}
                className="shrink-0 object-contain"
            />
            <p className="font-poppins font-semibold text-lg tracking-widest leading-7 text-foreground-heading whitespace-pre-line">
                {text}
            </p>
        </div>
    );
}
