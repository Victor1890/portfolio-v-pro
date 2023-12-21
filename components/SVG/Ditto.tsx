import { useDarkMode } from '@context/darkModeContext';

export default function Ditto() {
  const { isDarkMode } = useDarkMode();

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='currentColor'
      className='utilities-svg'
    >
      <rect width='32' height='32' rx='8' fill='currentColor' />
      <g clipPath='url(#clip0_739_15)'>
        <path
          d='M18.691 17.0001C18.1726 17.0001 17.6542 17.0001 17.1357 17.0001C16.6173 17.0001 16.2007 17.0001 15.8859 17.0001C16.1081 16.0373 16.3303 15.0837 16.5525 14.1394C16.7747 13.2136 16.9968 12.2786 17.219 11.3343C17.4412 10.4085 17.6634 9.47347 17.8856 8.52917C18.2744 8.52917 18.6355 8.52917 18.9688 8.52917C19.3021 8.52917 19.6076 8.52917 19.8853 8.52917C20.163 8.52917 20.45 8.52917 20.7463 8.52917C21.024 8.52917 21.3388 8.52917 21.6906 8.52917C21.7646 8.52917 21.8295 8.53843 21.885 8.55694C21.922 8.59397 21.9405 8.631 21.9405 8.66804C21.9405 8.72358 21.9313 8.78839 21.9128 8.86245C21.598 9.69566 21.274 10.5566 20.9407 11.4454C20.6074 12.3342 20.2741 13.2322 19.9408 14.1394C19.5891 15.0652 19.265 15.954 18.9688 16.8057C18.9317 16.8983 18.8947 16.9538 18.8577 16.9723C18.8206 16.9909 18.7651 17.0001 18.691 17.0001ZM12.314 17.0001C11.7955 17.0001 11.2771 17.0001 10.7586 17.0001C10.2402 17.0001 9.8236 17.0001 9.50883 17.0001C9.73102 16.0373 9.95321 15.0837 10.1754 14.1394C10.3976 13.2136 10.6198 12.2786 10.842 11.3343C11.0642 10.4085 11.2863 9.47347 11.5085 8.52917C11.8974 8.52917 12.2584 8.52917 12.5917 8.52917C12.925 8.52917 13.2305 8.52917 13.5082 8.52917C13.786 8.52917 14.073 8.52917 14.3692 8.52917C14.6469 8.52917 14.9617 8.52917 15.3135 8.52917C15.3876 8.52917 15.4524 8.53843 15.5079 8.55694C15.545 8.59397 15.5635 8.631 15.5635 8.66804C15.5635 8.72358 15.5542 8.78839 15.5357 8.86245C15.2209 9.69566 14.8969 10.5566 14.5636 11.4454C14.2303 12.3342 13.8971 13.2322 13.5638 14.1394C13.212 15.0652 12.8879 15.954 12.5917 16.8057C12.5547 16.8983 12.5176 16.9538 12.4806 16.9723C12.4436 16.9909 12.388 17.0001 12.314 17.0001Z'
          fill={isDarkMode ? '#25282a' : '#f2f5fa'}
        />
      </g>
      <defs>
        <clipPath id='clip0_739_15'>
          <rect
            x='1.96216'
            y='3.16992'
            width='27.9245'
            height='24.4528'
            rx='0.754717'
            fill={isDarkMode ? '#25282a' : '#f2f5fa'}
          />
        </clipPath>
      </defs>
    </svg>
  );
}
