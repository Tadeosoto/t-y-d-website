const fieldClass =
  'w-full border-0 border-b border-secondary/25 bg-transparent py-3 text-base text-secondary placeholder:text-secondary/40 transition-colors focus:border-primary focus:outline-none'

const ContactUnderlineField = ({
  id,
  label,
  name,
  type = 'text',
  required = false,
  autoComplete,
  placeholder,
  as = 'input',
  rows = 5,
  options,
  value,
  onChange,
}) => {
  const controlId = id ?? name

  return (
    <div className="w-full">
      <label
        htmlFor={controlId}
        className="mb-1 block text-sm font-medium tracking-wide text-secondary/70"
      >
        {label}
      </label>

      {as === 'select' ? (
        <div className="relative flex items-end gap-2 border-b border-secondary/25 focus-within:border-primary">
          <select
            id={controlId}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            className={`${fieldClass} cursor-pointer appearance-none border-0 pr-12 focus:border-transparent`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={!option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none mb-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-secondary"
            aria-hidden="true"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 5.25L7 8.75L10.5 5.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      ) : as === 'textarea' ? (
        <textarea
          id={controlId}
          name={name}
          required={required}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${fieldClass} resize-y min-h-[120px]`}
        />
      ) : (
        <input
          id={controlId}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={fieldClass}
        />
      )}
    </div>
  )
}

export default ContactUnderlineField
