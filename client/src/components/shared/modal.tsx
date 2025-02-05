import { ReactNode } from "react";
import { X } from "lucide-react";

export function Modal({ close, isOpen, children, title }: Props) {
  if (isOpen)
    return (
      <div className="flex justify-center items-center">
        <div className="fixed inset-0 bg-[#000000ba]" onClick={close}></div>
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[80vw] md:w-[50vw]">
            <div className="flex justify-between items-top mb-4">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <X className="cursor-pointer" onClick={close} />
            </div>
            {children}
            <div className="flex justify-end"></div>
          </div>
        </div>
      </div>
    );
}

type Props = {
  title: string;
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
};
