import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}
    >
      <ThreeDots
        visible={true}
        height={80}
        width={80}
        color="#1976d2"
        ariaLabel="film-loading"
      />
    </div>
  );
}