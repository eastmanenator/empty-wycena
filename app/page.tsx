"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="page-shell">
      <section className="content" aria-labelledby="page-title">
        <p className="eyebrow">Zakres prac</p>
        <h1 id="page-title">Tutaj znajduje się zakres prac do wykonania.</h1>
        <button className="download-button" onClick={() => setIsOpen(true)}>
          <span aria-hidden="true">↓</span>
          Pobierz plik
        </button>
      </section>

      <dialog
        className="surprise-dialog"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}
        aria-labelledby="surprise-title"
      >
        <div className="dialog-card">
          <button
            className="close-button"
            onClick={() => setIsOpen(false)}
            aria-label="Zamknij popup"
            autoFocus
          >
            ×
          </button>
          <span className="spark" aria-hidden="true">✦</span>
          <h2 id="surprise-title">Możliwość pobrania dokumentów</h2>
          <p>wygasła z dniem 3.09.2026.</p>
        </div>
      </dialog>
    </main>
  );
}
