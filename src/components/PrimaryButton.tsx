import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: React.ReactEventHandler;
}
export default function PrimaryButton({ children, onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      className="bg-gradient-to-tr from-blue-500 to-blue-700 text-white h-8 w-24 m-2 rounded-lg hover:opacity-90"
    >
      {children}
    </Button>
  );
}
