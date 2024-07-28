

interface CodeBlockProps {
  source: string;
  variant?: null | string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ source, variant = 'default', className = '' }) => {
  const combinedClassName = `code-block ${variant} ${className}`;

  return (
    <pre className={combinedClassName}>
      <code>{source}</code>
    </pre>
  );
};

export default CodeBlock;
