import { useDarkMode } from '@context/darkModeContext';

export default function ShareX() {
  const { isDarkMode } = useDarkMode();

  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className='utilities-svg'
    >
      <g clipPath='url(#clip0_736_2)'>
        <path
          d='M25.0435 10.8953C24.9357 6.27203 21.657 2.33881 17.0616 0.753423C15.6008 0.251362 14.0664 -0.00326983 12.5217 3.16972e-05C5.60626 3.16972e-05 5.88007e-08 4.98299 5.88007e-08 11.1305C-0.000141637 12.438 0.255807 13.7328 0.753391 14.9419C2.34226 10.3465 6.272 7.06786 10.8953 6.95655C10.9732 6.95655 11.0518 6.95655 11.1304 6.95655C13.8101 6.95655 16.2692 8.02229 18.1899 9.7976C18.6346 10.2098 19.0472 10.6554 19.424 11.1305C20.9489 13.0456 21.9576 15.4922 22.2031 18.1934C23.9777 16.2692 25.0435 13.8101 25.0435 11.1305C25.0435 11.0519 25.0435 10.9739 25.0435 10.8953Z'
          fill='currentColor'
        />
        <path
          d='M22.2024 17.842C21.9569 15.1408 20.9503 12.6942 19.4233 10.7791C19.0465 10.3053 18.6342 9.86083 18.1899 9.44969C16.2692 7.67438 13.8101 6.60864 11.1304 6.60864C11.0518 6.60864 10.9739 6.60864 10.8953 6.60864C6.272 6.71647 2.33878 9.99508 0.753391 14.5906C0.279533 13.4404 0.0240464 12.212 5.88007e-08 10.9683C5.88007e-08 11.0226 5.88007e-08 11.0761 5.88007e-08 11.1304C-0.000141637 12.4379 0.255807 13.7327 0.753391 14.9419C2.34226 10.3464 6.272 7.06777 10.8953 6.95647C10.9732 6.95647 11.0518 6.95647 11.1304 6.95647C13.8101 6.95647 16.2692 8.02221 18.1899 9.79751C18.6346 10.2097 19.0472 10.6553 19.424 11.1304C20.9489 13.0455 21.9576 15.4921 22.2031 18.1933C23.9777 16.2692 25.0435 13.81 25.0435 11.1304C25.0435 11.0761 25.0435 11.0226 25.0435 10.9683C24.9934 13.5763 23.9367 15.9659 22.2024 17.842Z'
          fill={isDarkMode ? '#25282a' : '#f2f5fa'}
        />
        <path
          d='M6.95655 21.1047C6.95655 21.0268 6.95655 20.9482 6.95655 20.8696C6.95655 18.1899 8.02229 15.7308 9.7976 13.8101C11.8379 11.6021 14.8153 10.1044 18.1899 9.79759C16.2692 8.02228 13.8101 6.95654 11.1305 6.95654C11.0519 6.95654 10.9739 6.95654 10.8953 6.95654C6.27203 7.06437 2.33881 10.343 0.753423 14.9385C0.251362 16.3993 -0.00326983 17.9336 3.16972e-05 19.4783C3.16972e-05 26.3938 4.98299 32 11.1305 32C12.438 32.0002 13.7328 31.7442 14.9419 31.2466C10.3465 29.6578 7.06786 25.728 6.95655 21.1047Z'
          fill='currentColor'
        />
        <path
          d='M6.95647 21.1047C6.95647 21.0268 6.95647 20.9482 6.95647 20.8696C6.95647 18.1899 8.02221 15.7308 9.79751 13.8101C11.8379 11.6021 14.8153 10.1044 18.1899 9.79759C16.2692 8.02228 13.81 6.95654 11.1304 6.95654C11.0761 6.95654 11.0226 6.95654 10.9683 6.95654C13.5763 7.00454 15.9659 8.06124 17.842 9.7948C14.4674 10.1016 11.49 11.5993 9.44969 13.8073C7.67438 15.7308 6.60864 18.1899 6.60864 20.8696C6.60864 20.9482 6.60864 21.0261 6.60864 21.1047C6.71647 25.728 9.99508 29.6612 14.5906 31.2466C13.4404 31.7205 12.212 31.976 10.9683 32C11.0226 32 11.0761 32 11.1304 32C12.4379 32.0002 13.7327 31.7442 14.9419 31.2466C10.3464 29.6578 7.06777 25.728 6.95647 21.1047Z'
          fill={isDarkMode ? '#25282a' : '#f2f5fa'}
        />
        <path
          d='M31.2466 17.0581C29.6578 21.6535 25.728 24.9321 21.1047 25.0434C21.0268 25.0434 20.9482 25.0434 20.8696 25.0434C18.1899 25.0434 15.7308 23.9777 13.8101 22.2024C11.6021 20.1621 10.1044 17.1847 9.79759 13.8101C8.02228 15.7308 6.95654 18.1899 6.95654 20.8695C6.95654 20.9481 6.95654 21.0261 6.95654 21.1047C7.06437 25.728 10.343 29.6612 14.9385 31.2466C16.3993 31.7486 17.9336 32.0033 19.4783 32C26.3938 32 32 27.017 32 20.8695C32.0002 19.562 31.7442 18.2672 31.2466 17.0581Z'
          fill='currentColor'
        />
        <path
          d='M9.79759 14.1579C10.1044 17.5325 11.6021 20.5099 13.8101 22.5502C15.7308 24.3255 18.1899 25.3913 20.8696 25.3913C20.9482 25.3913 21.0261 25.3913 21.1047 25.3913C25.728 25.2834 29.6612 22.0048 31.2466 17.4094C31.7205 18.5595 31.976 19.7879 32 21.0316C32 20.9774 32 20.9238 32 20.8695C32.0002 19.562 31.7442 18.2672 31.2466 17.0581C29.6578 21.6535 25.728 24.9321 21.1047 25.0434C21.0268 25.0434 20.9482 25.0434 20.8696 25.0434C18.1899 25.0434 15.7308 23.9777 13.8101 22.2024C11.6021 20.1621 10.1044 17.1847 9.79759 13.8101C8.02228 15.7308 6.95654 18.1899 6.95654 20.8695C6.95654 20.9238 6.95654 20.9774 6.95654 21.0316C7.00663 18.4236 8.06333 16.0341 9.79759 14.1579Z'
          fill={isDarkMode ? '#25282a' : '#f2f5fa'}
        />
        <path
          d='M20.8695 5.88007e-08C19.562 -0.000141637 18.2672 0.255807 17.0581 0.753391C21.6535 2.34226 24.9321 6.272 25.0434 10.8953C25.0434 10.9732 25.0434 11.0518 25.0434 11.1304C25.0434 13.8101 23.9777 16.2692 22.2024 18.1899C20.1621 20.3979 17.1847 21.8957 13.8101 22.2024C15.7308 23.9777 18.1899 25.0435 20.8695 25.0435C20.9481 25.0435 21.0261 25.0435 21.1047 25.0435C25.728 24.9357 29.6612 21.657 31.2466 17.0616C31.7486 15.6008 32.0033 14.0664 32 12.5217C32 5.60626 27.017 5.88007e-08 20.8695 5.88007e-08Z'
          fill='currentColor'
        />
        <path
          d='M14.1579 22.2024C17.5325 21.8957 20.5099 20.3979 22.5502 18.1899C24.3255 16.2692 25.3913 13.8101 25.3913 11.1304C25.3913 11.0518 25.3913 10.9739 25.3913 10.8953C25.2834 6.272 22.0048 2.33878 17.4094 0.753391C18.5595 0.279533 19.7879 0.0240464 21.0316 5.88007e-08C20.9774 5.88007e-08 20.9238 5.88007e-08 20.8695 5.88007e-08C19.562 -0.000141637 18.2672 0.255807 17.0581 0.753391C21.6535 2.34226 24.9321 6.272 25.0434 10.8953C25.0434 10.9732 25.0434 11.0518 25.0434 11.1304C25.0434 13.8101 23.9777 16.2692 22.2024 18.1899C20.1621 20.3979 17.1847 21.8957 13.8101 22.2024C15.7308 23.9777 18.1899 25.0435 20.8695 25.0435C20.9238 25.0435 20.9774 25.0435 21.0316 25.0435C18.4236 24.9934 16.0341 23.9367 14.1579 22.2024Z'
          fill={isDarkMode ? '#25282a' : '#f2f5fa'}
        />
      </g>
      <defs>
        <clipPath id='clip0_736_2'>
          <rect width='32' height='32' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  );
}
