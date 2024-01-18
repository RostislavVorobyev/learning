// Есть несколько способов типизировать нашу компонентную функцию.

// Если у вас есть некий тип, широко используемый в приложении,
interface PlaceholderProps {
  text: string;
}

export default function PropsPlaceholder({ text }: PlaceholderProps) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

// Можно также создать тип самому

// export default function PropsPlaceholder({ text }: { text: string }) {
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
//   );
// }

// также, в курсе от Максимилиана вы могли встретить и подход с типизацией самой функции. Абсолютно валидный подход, тут на вкус и цвет. Сильно не копал, есть ли разница по функционалу/перфомансу/безопасности.
// буду признателен, если кто-нибудь накинет деталей.

const PropsPlaceholde: React.FC<{ text: string }> = (props, children) => {
  return (
    <div>
      <p>{props.text}</p>
      {children}
    </div>
  );
};
