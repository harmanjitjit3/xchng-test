import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center ">
      
      <div className="text-5xl font-semibold">404</div>

      <div className="text-lg">Page not found.</div>

      <Link to={"/app/home"} className="cursor-pointer mt-4">
        <Button >Go Back</Button>
      </Link>
    </div>
  );
}

export default NotFound;
