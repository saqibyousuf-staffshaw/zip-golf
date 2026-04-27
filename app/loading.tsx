export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        color: "white",
        fontSize: "20px",
        zIndex: 999999,
      }}
    >
      Loading...
    </div>
  );
}