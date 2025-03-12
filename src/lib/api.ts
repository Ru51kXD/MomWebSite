interface BookingData {
  name: string;
  phone: string;
  email?: string;
  date: Date;
  time?: string;
  service?: string;
  message?: string;
}

export async function submitBooking(
  data: BookingData,
): Promise<{ success: boolean; message: string }> {
  // In a real application, this would send data to your backend
  // For now, we'll simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message:
          "Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
      });
    }, 1000);
  });
}
