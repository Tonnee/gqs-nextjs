import { cn } from "@/lib/utils";

type DualTextProps = {
  lightText: string;
  boldText: string;
  boldColor?: string;
  lightColor?: string;
  fontClass?: string;
  distanceBottom?: string;
};

export default function DualText({
  lightText,
  boldText,
  boldColor,
  lightColor,
  fontClass = "text-lg",
  distanceBottom = "mb-3.5",
}: DualTextProps) {
  const finalLightColor = lightColor ?? "text-gray-500";
  const finalBoldColor = boldColor ?? "text-black";

  return (
    <p className={cn(fontClass, distanceBottom, "font-poppins tracking-widest")}>
      <span className={cn("font-normal", finalLightColor)}>
        {lightText}
      </span>{" "}
      <span className={cn("font-semibold", finalBoldColor)}>
        {boldText}
      </span>
    </p>
  );
}