export default function CodeSandbox({
  id,
  hideNavigation = true,
}: {
  id: string;
  hideNavigation: boolean;
}) {
  return (
    <div className='my-3 print:hidden'>
      <h3>Code Sandbox</h3>
      <iframe
        className='h-[500px] w-full overflow-hidden rounded border-0'
        src={`https://codesandbox.io/embed/${id}?fontsize=14&theme=dark&hidenavigation=${
          hideNavigation ? 1 : 0
        }`}
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      ></iframe>
    </div>
  );
}
