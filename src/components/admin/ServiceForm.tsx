import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Leaf, Heart, Plus, Trash2 } from "lucide-react";
import { useStore } from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  price: string;
}

export default function ServiceForm() {
  const { services, setServices } = useStore();
  const { toast } = useToast();

  const [newService, setNewService] = useState<Omit<Service, "id">>({
    icon: "Sparkles",
    title: "",
    description: "",
    price: "",
  });

  const handleAddService = () => {
    if (!newService.title || !newService.price) {
      alert("Пожалуйста, заполните название и цену услуги");
      return;
    }

    const service: Service = {
      id: Date.now().toString(),
      ...newService,
    };

    setServices([...services, service]);
    setNewService({
      icon: "Sparkles",
      title: "",
      description: "",
      price: "",
    });
  };

  const handleDeleteService = (id: string) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleSaveChanges = () => {
    toast({
      title: "Успешно!",
      description: "Услуги сохранены и отображаются на сайте",
    });
    console.log("Services saved:", services);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Добавить новую услугу</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="icon">Иконка</Label>
            <select
              id="icon"
              value={newService.icon}
              onChange={(e) =>
                setNewService({ ...newService, icon: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            >
              <option value="Sparkles">Sparkles</option>
              <option value="Leaf">Leaf</option>
              <option value="Heart">Heart</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Цена</Label>
            <Input
              id="price"
              value={newService.price}
              onChange={(e) =>
                setNewService({ ...newService, price: e.target.value })
              }
              placeholder="от 5000 ₸"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Название услуги</Label>
          <Input
            id="title"
            value={newService.title}
            onChange={(e) =>
              setNewService({ ...newService, title: e.target.value })
            }
            placeholder="Название услуги"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Описание</Label>
          <Textarea
            id="description"
            value={newService.description}
            onChange={(e) =>
              setNewService({ ...newService, description: e.target.value })
            }
            placeholder="Описание услуги"
          />
        </div>

        <Button onClick={handleAddService} className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Добавить услугу
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Существующие услуги</h3>

        <div className="max-h-[200px] overflow-y-auto space-y-4 border rounded-md p-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-start justify-between border-b pb-4"
            >
              <div>
                <div className="flex items-center">
                  {service.icon === "Sparkles" && (
                    <Sparkles className="w-4 h-4 mr-2 text-[#9F8772]" />
                  )}
                  {service.icon === "Leaf" && (
                    <Leaf className="w-4 h-4 mr-2 text-[#9F8772]" />
                  )}
                  {service.icon === "Heart" && (
                    <Heart className="w-4 h-4 mr-2 text-[#9F8772]" />
                  )}
                  <h4 className="font-medium">{service.title}</h4>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {service.description}
                </p>
                <p className="text-sm font-medium mt-1">{service.price}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteService(service.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={handleSaveChanges} className="w-full">
        Сохранить изменения
      </Button>
    </div>
  );
}
