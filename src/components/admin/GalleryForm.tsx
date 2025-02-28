import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Upload } from "lucide-react";
import { useStore } from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";

interface GalleryItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export default function GalleryForm() {
  const { galleryItems, setGalleryItems } = useStore();
  const { toast } = useToast();

  const [newItem, setNewItem] = useState<Omit<GalleryItem, "id">>({
    beforeImage: "",
    afterImage: "",
    description: "",
  });

  const handleAddItem = () => {
    if (!newItem.beforeImage || !newItem.afterImage || !newItem.description) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const item: GalleryItem = {
      id: Date.now().toString(),
      ...newItem,
    };

    setGalleryItems([...galleryItems, item]);
    setNewItem({
      beforeImage: "",
      afterImage: "",
      description: "",
    });
  };

  const handleDeleteItem = (id: string) => {
    setGalleryItems(galleryItems.filter((item) => item.id !== id));
  };

  const handleSaveChanges = () => {
    toast({
      title: "Успешно!",
      description: "Галерея сохранена и отображается на сайте",
    });
    console.log("Gallery items saved:", galleryItems);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Добавить новый результат</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="beforeImage">Фото "До"</Label>
            <div className="flex">
              <Input
                id="beforeImage"
                value={newItem.beforeImage}
                onChange={(e) =>
                  setNewItem({ ...newItem, beforeImage: e.target.value })
                }
                placeholder="URL изображения"
                className="flex-1"
              />
              <Button variant="outline" size="icon" className="ml-2">
                <Upload className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="afterImage">Фото "После"</Label>
            <div className="flex">
              <Input
                id="afterImage"
                value={newItem.afterImage}
                onChange={(e) =>
                  setNewItem({ ...newItem, afterImage: e.target.value })
                }
                placeholder="URL изображения"
                className="flex-1"
              />
              <Button variant="outline" size="icon" className="ml-2">
                <Upload className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Описание</Label>
          <Textarea
            id="description"
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
            placeholder="Описание результата"
          />
        </div>

        <Button onClick={handleAddItem} className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Добавить результат
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Существующие результаты</h3>

        <div className="max-h-[200px] overflow-y-auto space-y-4 border rounded-md p-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between border-b pb-4"
            >
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="relative">
                    <img
                      src={item.beforeImage}
                      alt="До"
                      className="w-full h-20 object-cover rounded"
                    />
                    <span className="absolute top-1 left-1 bg-black/60 text-white px-1 text-xs rounded">
                      До
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={item.afterImage}
                      alt="После"
                      className="w-full h-20 object-cover rounded"
                    />
                    <span className="absolute top-1 left-1 bg-black/60 text-white px-1 text-xs rounded">
                      После
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteItem(item.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 ml-2"
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
