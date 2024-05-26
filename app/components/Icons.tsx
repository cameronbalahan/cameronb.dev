import { cx } from "../../utils/formatters";

const ICON_SIZE = {
  s: "h-5 w-5",
  m: "h-7 w-7",
  l: "h-8 w-8",
};

const resolveSize = (size?: keyof typeof ICON_SIZE) => ICON_SIZE[size ?? "m"];

type IconProps = {
  size?: keyof typeof ICON_SIZE;
};

export function LinkedinIcon({ size }: IconProps) {
  return (
    <div className={cx(["inline-flex", resolveSize(size)])}>
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export function LocationIcon({ size }: IconProps) {
  return (
    <div className={cx(["inline-flex", resolveSize(size)])}>
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M336 96a80 80 0 10-96 78.39v283.17a32.09 32.09 0 002.49 12.38l10.07 24a3.92 3.92 0 006.88 0l10.07-24a32.09 32.09 0 002.49-12.38V174.39A80.13 80.13 0 00336 96zm-56 0a24 24 0 1124-24 24 24 0 01-24 24z" />
      </svg>
    </div>
  );
}

export function TwitterIcon({ size }: IconProps) {
  return (
    <div className={cx(["inline-flex", resolveSize(size)])}>
      <svg
        enable-background="new 0 0 48 48"
        viewBox="0 0 48 48"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" fill="currentColor" r="24" />
        <g>
          <g>
            <path d="M36.8,15.4c-0.9,0.5-2,0.8-3,0.9c1.1-0.7,1.9-1.8,2.3-3.1c-1,0.6-2.1,1.1-3.4,1.4c-1-1.1-2.3-1.8-3.8-1.8    c-2.9,0-5.3,2.5-5.3,5.7c0,0.4,0,0.9,0.1,1.3c-4.4-0.2-8.3-2.5-10.9-5.9c-0.5,0.8-0.7,1.8-0.7,2.9c0,2,0.9,3.7,2.3,4.7    c-0.9,0-1.7-0.3-2.4-0.7c0,0,0,0.1,0,0.1c0,2.7,1.8,5,4.2,5.6c-0.4,0.1-0.9,0.2-1.4,0.2c-0.3,0-0.7,0-1-0.1    c0.7,2.3,2.6,3.9,4.9,3.9c-1.8,1.5-4.1,2.4-6.5,2.4c-0.4,0-0.8,0-1.3-0.1c2.3,1.6,5.1,2.6,8.1,2.6c9.7,0,15-8.6,15-16.1    c0-0.2,0-0.5,0-0.7C35.2,17.6,36.1,16.6,36.8,15.4z" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function YouTubeIcon({ size }: IconProps) {
  return (
    <div className={cx(["inline-flex", resolveSize(size)])}>
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path
          clipRule="evenodd"
          fill="currentColor"
          fillRule="evenodd"
          d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM36.265 18.0732C35.9706 16.9422 35.1031 16.0516 34.0016 15.7493C32.0054 15.2 24 15.2 24 15.2C24 15.2 15.9946 15.2 13.9983 15.7493C12.8967 16.0516 12.0292 16.9422 11.7348 18.0732C11.2 20.123 11.2 24.4 11.2 24.4C11.2 24.4 11.2 28.6768 11.7348 30.7268C12.0292 31.8578 12.8967 32.7484 13.9983 33.0508C15.9946 33.6 24 33.6 24 33.6C24 33.6 32.0054 33.6 34.0016 33.0508C35.1031 32.7484 35.9706 31.8578 36.265 30.7268C36.8 28.6768 36.8 24.4 36.8 24.4C36.8 24.4 36.8 20.123 36.265 18.0732Z"
        />
        <path
          clipRule="evenodd"
          fill="currentColor"
          fillRule="evenodd"
          d="M21.6 28.8V20.8L28 24.8001L21.6 28.8Z"
        />
      </svg>
    </div>
  );
}
