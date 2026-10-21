import React from 'react';

interface ManSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

/** A man-page section: an uppercase heading flush left, its body indented beneath it. */
const ManSection = ({ id, title, children }: ManSectionProps): React.ReactElement => (
  <section aria-labelledby={id}>
    <h2 id={id} className='text-[0.9375rem] font-medium uppercase tracking-[0.08em] text-ink'>
      {title}
    </h2>
    <div className='mt-4 compact:pl-[4ch] wide:pl-[8ch]'>{children}</div>
  </section>
);

export default ManSection;
