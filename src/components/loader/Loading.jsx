import { RotateLoader } from "react-spinners";

const Loading = () => {
  return (
    <RotateLoader
      className=""
      color="#3852fa"
      loading={true}
      size={20}
    />
  );
};

export default Loading;