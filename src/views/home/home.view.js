import { CardHomeComponent } from "../../components";
import "./home.view.css"
export default function HomeView() {
  return (
    <div className="home-content p-3 ">
        <CardHomeComponent title="Components" desc="desc" refList="/components" refadd="/component"/>
        <CardHomeComponent title="Layers" desc="desc" refList="/layers" refadd="/layer"/>
        <CardHomeComponent title="Platforms" desc="desc" refList="/platforms" refadd="/platform"/>
    </div>
    
  );
}
