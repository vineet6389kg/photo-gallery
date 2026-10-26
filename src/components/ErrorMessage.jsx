function ErrorMessage({ message }) {
  return (
    <div
      role="alert"
      className="mx-auto max-w-md rounded-xl border border-error bg-surface p-6 text-center"
    >
      <h2 className="text-lg font-semibold text-error">Could not load photos</h2>
      <p className="mt-2 text-sm text-fg">{message}</p>
    </div>
  )
}

export default ErrorMessage