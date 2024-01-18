//также если вам нужны зарезервированные свойства компонента, вы должны объяснить тайпскрипту, что вы хотите их использовать.
export default function ReservedProps({
  children,
  key,
}: {
  children: React.ReactNode;
  key: React.Key;
}) {
  console.log(key);
  return <div>{children}</div>;
}

/// метод с уточнением типа работает лучше, потому что содержит в себе эти значения по умолчанию
const PropsPlaceholde: React.FC<{ text: string }> = (props, children) => {
  return (
    <div>
      <p>{props.text}</p>
      {children}
    </div>
  );
};
