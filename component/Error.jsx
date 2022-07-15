function Error({ message }) {
  if (!message) return;

  return (
    <>
      <p>{message}</p>
    </>
  );
}

export default Error;
