import { useEffect, useState } from "react";

const roles = [
  "AI Developer",
  "Python Engineer",
  "Agent Builder",
  "Automation Expert",
];

const TypewriterText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex > 0) {
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-gradient">
      {roles[roleIndex].substring(0, charIndex)}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

export default TypewriterText;
