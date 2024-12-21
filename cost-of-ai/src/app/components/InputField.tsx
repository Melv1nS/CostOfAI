import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Tooltip from './Tooltip';

interface InputFieldProps {
  label: string;
  tooltip: string;
  type?: 'text' | 'number' | 'textarea' | 'select';
  value: string | number | '';
  onChange: (value: any) => void;
  options?: { name: string; parameters?: number }[];
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
  placeholder?: string;
  className?: string;
  helperText?: string;
}

export default function InputField({
  label,
  tooltip,
  type = 'text',
  value,
  onChange,
  options,
  min,
  max,
  step,
  rows,
  placeholder,
  className = '',
  helperText
}: InputFieldProps) {
  const baseInputClass = "w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            className={`${baseInputClass} ${className}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={rows}
            placeholder={placeholder}
          />
        );
      case 'select':
        return (
          <select
            className={`${baseInputClass} ${className}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            {options?.map(opt => (
              <option key={opt.name} value={opt.name}>
                {opt.displayName || opt.name} {opt.description && `(${opt.description})`}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={type}
            className={`${baseInputClass} ${className}`}
            value={value}
            onChange={(e) => {
              const newValue = e.target.value;
              if (type === 'number') {
                // Allow empty string
                if (newValue === '') {
                  onChange('');
                  return;
                }
                // Convert to number and validate
                const numValue = Number(newValue);
                // Only update if within bounds (when min/max are provided)
                if (
                  (!min || numValue >= min) && 
                  (!max || numValue <= max) &&
                  !isNaN(numValue)
                ) {
                  onChange(numValue);
                }
              } else {
                onChange(newValue);
              }
            }}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
          />
        );
    }
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300 block mb-2">
          {label}
          <Tooltip text={tooltip}>
            <span className="text-gray-400 text-xs ml-2">
              <FontAwesomeIcon icon={faQuestionCircle} className="w-4 h-4" />
            </span>
          </Tooltip>
        </label>
        {helperText && (
          <p className="text-gray-400 text-sm mt-1">{helperText}</p>
        )}
      </div>
      {renderInput()}
    </div>
  );
}