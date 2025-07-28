"use client";

// import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

function AspectRatio({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
