import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BsQrCodeScan } from "react-icons/bs";
import QRCode from "react-qr-code";
import { useFrontendUrl } from "@/hook/process-env";

const QrModal = ({ params }: { params: { userId: string } }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <BsQrCodeScan className="text-white absolute top-6 right-6" size={30} />
      </DialogTrigger>
      <DialogContent className="w-fit p-10 rounded-2xl">
        <QRCode className="" value={`${params.userId}`} />
      </DialogContent>
    </Dialog>
  );
};

export default QrModal;
