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
        <div className="relative aspect-[4/3]">
          <span className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 text-sm rounded z-10">
            До
          </span>
          <span className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 text-sm rounded z-10">
            После
          </span>
          <img
            src={beforeImage}
            alt="До процедуры"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="p-4 text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
