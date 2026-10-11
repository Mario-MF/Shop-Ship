import { icons, type IconName } from "@/lib/icons";

/** Renders one of the Iconify icons the Figma design uses (see scripts/build-icons.mjs). */
export function Icon({ name, className = "size-5", label }: { name: IconName; className?: string; label?: string }) {
  const { viewBox, body } = icons[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
