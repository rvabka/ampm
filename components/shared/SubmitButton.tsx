'use client';

import { Check, Leaf, Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  label?: string;
  loading?: boolean;
  success?: boolean;
  disabled?: boolean;
}

export default function SubmitButton({
  label = 'Wyślij wiadomość',
  loading = false,
  success = false,
  disabled = false,
}: SubmitButtonProps) {
  const isDisabled = disabled || loading || success;

  return (
    <div className="relative inline-flex">
      {success && (
        <>
          <span className="leaf-particle leaf-1"><Leaf size={15} /></span>
          <span className="leaf-particle leaf-2"><Leaf size={11} /></span>
          <span className="leaf-particle leaf-3"><Leaf size={13} /></span>
          <span className="leaf-particle leaf-4"><Leaf size={9} /></span>
        </>
      )}
      <button
        type="submit"
        disabled={isDisabled}
        className={`inline-flex items-center gap-2.5 px-8 py-3.5 font-semibold rounded-full transition-all duration-300 shadow-lg select-none ${
          success
            ? 'bg-green-500 shadow-green-500/25 text-white scale-95'
            : isDisabled
            ? 'bg-gray-300 shadow-none text-gray-500 cursor-not-allowed'
            : 'bg-primary hover:bg-primary-hover text-white shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 cursor-pointer'
        }`}
      >
        {success ? (
          <>
            Wysłano!
            <Check size={16} aria-hidden="true" />
          </>
        ) : loading ? (
          <>
            Wysyłanie…
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            {label}
            <Leaf size={16} aria-hidden="true" />
          </>
        )}
      </button>
    </div>
  );
}
