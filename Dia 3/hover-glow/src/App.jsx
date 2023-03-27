import HoverGlowIconButton from "./components/HoverGlowIconButton";
import HoverGlowButton from "./components/HoverGlowButton";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <HoverGlowIconButton icon="fa-solid fa-house" url="#" />
        </li>
        <li>
          <HoverGlowIconButton icon="fa-solid fa-file" url="#" />
        </li>
        <li>
          <HoverGlowIconButton icon="fa-solid fa-save" url="#" />
        </li>
        <li>
          <HoverGlowIconButton icon="fa-solid fa-car" url="#" />
        </li>
        <li>
          <HoverGlowButton text="Servicios" url="#" />
        </li>
        <li>
          <HoverGlowButton text="Contacto" url="#" />
        </li>
        <li>
          <HoverGlowButton text="Producto" url="#" />
        </li>
        
      </ul>
    </div>
  );
}
