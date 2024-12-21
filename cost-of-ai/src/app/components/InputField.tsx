import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Tooltip from './Tooltip';

interface InputFieldProps {
  label: string;
  tooltip: string;
  type?: 'text' | 'number' | 'textarea' | 'select';
  value: string | number;
  onChange: (value: any) => void;
  options?: { name: string; parameters?: number }[];
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
  placeholder?: string;
  className?: string;
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
  className = ''
}: InputFieldProps) {
  const baseInputClass = "w-full p-3 border border-gray-700 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all";

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
            onChange={(e) => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
          />
        );
    }
  };

  return (
    <div>
      <label className="text-sm font-medium text-gray-300 block mb-2">
        {label}
        <Tooltip text={tooltip}>
          <span className="text-gray-400 text-xs ml-2">
            <FontAwesomeIcon icon={faQuestionCircle} className="w-4 h-4" />
          </span>
        </Tooltip>
      </label>
      {renderInput()}
    </div>
  );
}