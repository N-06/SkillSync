import { REGIONS, type Region } from "@/lib/regions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

interface RegionSelectorProps {
  region: Region;
  onRegionChange: (region: Region) => void;
  compact?: boolean;
}

const RegionSelector = ({ region, onRegionChange, compact }: RegionSelectorProps) => {
  return (
    <Select
      value={region.id}
      onValueChange={(val) => {
        const r = REGIONS.find((r) => r.id === val);
        if (r) onRegionChange(r);
      }}
    >
      <SelectTrigger className={compact ? "h-8 w-[140px] text-xs" : "h-9 w-[160px] text-sm"}>
        <Globe className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {REGIONS.map((r) => (
          <SelectItem key={r.id} value={r.id}>
            {r.label} ({r.currency})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default RegionSelector;
