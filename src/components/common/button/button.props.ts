import React from "react";

export interface ButtonProps {
    kind: "primary" | "ghost" | "secondary"
    children: React.ReactNode
}
