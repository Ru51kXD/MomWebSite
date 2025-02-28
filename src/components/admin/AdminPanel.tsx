import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock } from "lucide-react";
import ServiceForm from "./ServiceForm";
import GalleryForm from "./GalleryForm";
import CertificateForm from "./CertificateForm";

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simple password check - in a real app, use proper authentication
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Неверный пароль");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed bottom-4 right-4 bg-white/80 backdrop-blur-sm z-40 shadow-md hover:shadow-lg"
        >
          <Lock className="w-4 h-4 mr-2" />
          Админ
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Панель администратора</DialogTitle>
        </DialogHeader>

        {!isAuthenticated ? (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Пароль
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Введите пароль администратора"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Войти
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="services">Услуги</TabsTrigger>
              <TabsTrigger value="gallery">Галерея</TabsTrigger>
              <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-4">
              <ServiceForm />
            </TabsContent>

            <TabsContent value="gallery" className="space-y-4">
              <GalleryForm />
            </TabsContent>

            <TabsContent value="certificates" className="space-y-4">
              <CertificateForm />
            </TabsContent>
          </Tabs>
        )}
      </DialogContent>
    </Dialog>
  );
}
