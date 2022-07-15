function SubmitButton({ name, loading }) {
  return (
    <>
      <div className="d-flex">
        <button type="submit" className="btn btn-primary flex-fill">
          {loading ? (
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            name
          )}
        </button>
      </div>
    </>
  );
}

export default SubmitButton;
