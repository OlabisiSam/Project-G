// components/FilterSidebar.jsx
import { Checkbox } from "./ui/Checkbox";
import { Label } from "./ui/Label";
import { Slider } from "./ui/Slider";
import { Button } from "./ui/Button";

const conditions = ["Like New", "Excellent", "Good", "Fair"];

export default function FilterSidebar({ isMobile = false }) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 font-medium">Condition</h4>
        {conditions.map((condition) => (
          <div className="flex items-center space-x-2" key={condition}>
            <Checkbox id={`${isMobile ? "mobile-" : ""}${condition.toLowerCase()}`} />
            <Label htmlFor={`${isMobile ? "mobile-" : ""}${condition.toLowerCase()}`}>{condition}</Label>
          </div>
        ))}
      </div>
      <div>
        <h4 className="mb-2 font-medium">Price Range</h4>
        <Slider defaultValue={[0, 100]} max={200} step={1} />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>$0</span>
          <span>$200+</span>
        </div>
      </div>
      {!isMobile && <Button className="w-full">Apply Filters</Button>}
    </div>
  );
}
