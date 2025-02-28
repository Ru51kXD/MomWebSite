import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Upload } from "lucide-react";
import { useStore } from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export default function CertificateForm() {
  const { certificates, setCertificates } = useStore();
  const { toast } = useToast();

  const [newCertificate, setNewCertificate] = useState<Omit<Certificate, "id">>(
    {
      title: "",
      issuer: "",
      year: "",
      image: "",
    },
  );

  const handleAddCertificate = () => {
    if (
      !newCertificate.title ||
      !newCertificate.issuer ||
      !newCertificate.year ||
      !newCertificate.image
    ) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const certificate: Certificate = {
      id: Date.now().toString(),
      ...newCertificate,
    };

    setCertificates([...certificates, certificate]);
    setNewCertificate({
      title: "",
      issuer: "",
      year: "",
      image: "",
    });
  };

  const handleDeleteCertificate = (id: string) => {
    setCertificates(
      certificates.filter((certificate) => certificate.id !== id),
    );
  };

  const handleSaveChanges = () => {
    toast({
      title: "Успешно!",
      description: "Сертификаты сохранены и отображаются на сайте",
    });
    console.log("Certificates saved:", certificates);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Добавить новый сертификат</h3>

        <div className="space-y-2">
          <Label htmlFor="image">Изображение сертификата</Label>
          <div className="flex">
            <Input
              id="image"
              value={newCertificate.image}
              onChange={(e) =>
                setNewCertificate({ ...newCertificate, image: e.target.value })
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
          <Label htmlFor="title">Название сертификата</Label>
          <Input
            id="title"
            value={newCertificate.title}
            onChange={(e) =>
              setNewCertificate({ ...newCertificate, title: e.target.value })
            }
            placeholder="Название сертификата"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="issuer">Выдан</Label>
            <Input
              id="issuer"
              value={newCertificate.issuer}
              onChange={(e) =>
                setNewCertificate({ ...newCertificate, issuer: e.target.value })
              }
              placeholder="Организация"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Год</Label>
            <Input
              id="year"
              value={newCertificate.year}
              onChange={(e) =>
                setNewCertificate({ ...newCertificate, year: e.target.value })
              }
              placeholder="2023"
            />
          </div>
        </div>

        <Button onClick={handleAddCertificate} className="w-full">
          <Plus className="w-4 h-4 mr-2" />
          Добавить сертификат
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Существующие сертификаты</h3>

        <div className="max-h-[200px] overflow-y-auto space-y-4 border rounded-md p-4">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="flex items-start justify-between border-b pb-4"
            >
              <div className="flex space-x-3">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-16 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium">{certificate.title}</h4>
                  <p className="text-sm text-gray-600">{certificate.issuer}</p>
                  <p className="text-sm text-gray-500">{certificate.year}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteCertificate(certificate.id)}
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
