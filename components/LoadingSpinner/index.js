import { Dna } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30vh",
      }}
      wrapperClass="dna-wrapper"
    />
  );
}
