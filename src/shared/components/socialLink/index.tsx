import clsx from "clsx";

interface ISocialLink {
  props: {
    text: string;
    icon: React.ReactNode;
    ariaLabel: string;
    href: string;
    bgColor: string;
  };
}

export const SocialLink = ({ props }: ISocialLink) => {
  return (
    <div className="group">
      <a
        href={props.href}
        aria-label={props.ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "rounded-lg flex items-center gap-2 cursor-pointer shadow-default p-2 scale-animation-hover",
          props.bgColor
        )}
      >
        {props.icon}
      </a>
    </div>
  );
};
