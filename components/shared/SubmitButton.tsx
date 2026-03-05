'use client';

import { useState } from 'react';
import { Check, Leaf } from 'lucide-react';

export default function SubmitButton() {
  const [sent, setSent] = useState(false);

  const handleClick = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <div className="relative inline-flex">
      {sent && (
        <>
          <span className="leaf-particle leaf-1"><Leaf size={15} /></span>
          <span className="leaf-particle leaf-2"><Leaf size={11} /></span>
          <span className="leaf-particle leaf-3"><Leaf size={13} /></span>
          <span className="leaf-particle leaf-4"><Leaf size={9} /></span>
        </>
      )}
      <button
        type="submit"
        onClick={handleClick}
        className={`inline-flex items-center gap-2.5 px-8 py-3.5 font-semibold rounded-full transition-all duration-300 shadow-lg cursor-pointer select-none ${
          sent
            ? 'bg-green-500 shadow-green-500/25 text-white scale-95'
            : 'bg-primary hover:bg-primary-hover text-white shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5'
        }`}
      >
        {sent ? (
          <>
            Wysłano!
            <Check size={16} aria-hidden="true" />
          </>
        ) : (
          <>
            Wyślij wiadomość
            <Leaf size={16} aria-hidden="true" />
          </>
        )}
      </button>
    </div>
  );
}
