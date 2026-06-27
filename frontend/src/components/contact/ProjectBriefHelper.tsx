import React from 'react';

export const ProjectBriefHelper: React.FC = () => (
  <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-sm">
    <p className="font-semibold text-white mb-2">A good project brief includes:</p>
    <ul className="space-y-1 text-neutral-400 list-disc pl-5">
      <li>What problem are you trying to solve?</li>
      <li>Who is this for (users, customers, internal team)?</li>
      <li>What does success look like in 90 days?</li>
      <li>Any tech, design, or compliance constraints we should know about?</li>
    </ul>
    <p className="text-xs text-neutral-400 mt-3">No idea yet? That's fine &mdash; just share the goal and we'll figure out the rest together.</p>
  </div>
);
