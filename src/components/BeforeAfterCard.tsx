import { Card, CardContent } from "@/components/ui/card";

interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  description: string;
}

export default function BeforeAfterCard({
  beforeImage,
  afterImage,
  description,
}: BeforeAfterCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="relative aspect-square">
            <span className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 text-sm rounded">
              До
            </span>
            <img
              src={beforeImage}
              alt="До процедуры"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <span className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 text-sm rounded">
              После
            </span>
            <img
              src={afterImage}
              alt="После процедуры"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="p-4 text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
