function Button({ label, ...props }) {
  return (
    <button
      className="bg-brand hover:bg-brand-hovered text-heading-sm-medium rounded-xl p-3 capitalize text-neutral-inverse transition"
      {...props}
    >
      {label}
    </button>
  );
}
export default Button;
