import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#172CAF"
        barColor="#51E5FF"
      />
    </div>
  );
};
export default Loader;
